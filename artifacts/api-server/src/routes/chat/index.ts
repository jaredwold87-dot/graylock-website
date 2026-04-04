import { Router, type Request, type Response } from "express";
import { randomBytes } from "crypto";
import OpenAI from "openai";
import { db } from "@workspace/db";
import { conversationsTable, messagesTable } from "@workspace/db/schema";
import { eq, and } from "drizzle-orm";
import { logger } from "../../lib/logger";
import { SYSTEM_PROMPT } from "./systemPrompt";

const chatRouter = Router();

const MAX_MESSAGES_PER_CONVERSATION = 30;
const MAX_MESSAGE_LENGTH = 1000;
const GOS_WEBHOOK_URL = "https://graylock-os-ymwca.sevalla.app/api/webhook/chatbot-lead";
const MIN_USER_MESSAGES_FOR_GOS = 2;

const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_WINDOW = 60_000;
const RATE_LIMIT_MAX = 10;

setInterval(() => {
  const now = Date.now();
  for (const [key, entry] of rateLimitMap) {
    if (now > entry.resetAt) {
      rateLimitMap.delete(key);
    }
  }
}, 5 * 60_000);

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW });
    return true;
  }
  if (entry.count >= RATE_LIMIT_MAX) {
    return false;
  }
  entry.count++;
  return true;
}

function generateAccessToken(): string {
  return randomBytes(32).toString("hex");
}

function getOpenRouterClient(): OpenAI {
  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) {
    throw new Error("OPENROUTER_API_KEY is not set");
  }
  return new OpenAI({
    baseURL: "https://openrouter.ai/api/v1",
    apiKey,
  });
}

interface ConversationMessage {
  role: string;
  content: string;
}

async function summarizeAndSendToGos(
  visitorName: string,
  visitorEmail: string,
  allMessages: ConversationMessage[],
) {
  try {
    const client = getOpenRouterClient();

    const transcript = allMessages
      .filter((m) => m.role !== "system")
      .map((m) => `${m.role === "user" ? "Visitor" : "Assistant"}: ${m.content}`)
      .join("\n");

    const extractionPrompt = `Analyze this chatbot conversation between a website visitor and the Graylock Digital assistant. Extract the following as JSON:

{
  "chatSummary": "A 1-2 sentence summary of what the visitor discussed and asked about",
  "businessName": "The visitor's business name if mentioned, or null",
  "phone": "The visitor's phone number if mentioned, or null",
  "websiteUrl": "The visitor's website URL if mentioned, or null",
  "interests": ["array of topics they asked about, e.g. 'website design', 'SEO', 'pricing', 'funnel pages', 'Google Business Profile', etc."]
}

Return ONLY valid JSON, no markdown fences or other text.

CONVERSATION:
${transcript}`;

    const completion = await client.chat.completions.create({
      model: "openai/gpt-4o-mini",
      max_tokens: 300,
      messages: [{ role: "user", content: extractionPrompt }],
      temperature: 0,
    });

    const raw = completion.choices[0]?.message?.content?.trim();
    if (!raw) {
      logger.warn("Empty extraction response for GOS lead sync");
      return;
    }

    let extracted: {
      chatSummary?: string;
      businessName?: string | null;
      phone?: string | null;
      websiteUrl?: string | null;
      interests?: string[];
    };

    try {
      extracted = JSON.parse(raw);
    } catch {
      logger.warn({ raw }, "Failed to parse extraction JSON for GOS lead sync");
      return;
    }

    const payload: Record<string, unknown> = {
      name: visitorName,
      email: visitorEmail,
    };

    if (extracted.chatSummary) payload.chatSummary = extracted.chatSummary;
    if (extracted.businessName) payload.businessName = extracted.businessName;
    if (extracted.phone) payload.phone = extracted.phone;
    if (extracted.websiteUrl) payload.websiteUrl = extracted.websiteUrl;
    if (extracted.interests && extracted.interests.length > 0) payload.interests = extracted.interests;

    const gosRes = await fetch(GOS_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!gosRes.ok) {
      const body = await gosRes.text();
      logger.error({ status: gosRes.status, body }, "GOS chatbot-lead webhook failed");
    } else {
      const result = await gosRes.json();
      logger.info({ result, email: visitorEmail }, "Sent chatbot lead to GOS");
    }
  } catch (err) {
    logger.error({ err }, "Failed to summarize/send chatbot lead to GOS");
  }
}

chatRouter.post("/chat/conversations", async (req: Request, res: Response) => {
  try {
    const { name, email } = req.body;

    if (!name || !email || typeof name !== "string" || typeof email !== "string") {
      res.status(400).json({ error: "Name and email are required" });
      return;
    }

    if (name.length > 100 || email.length > 200) {
      res.status(400).json({ error: "Invalid input" });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      res.status(400).json({ error: "Invalid email format" });
      return;
    }

    const accessToken = generateAccessToken();

    const [conversation] = await db
      .insert(conversationsTable)
      .values({
        accessToken,
        visitorName: name.trim().slice(0, 100),
        visitorEmail: email.trim().toLowerCase().slice(0, 200),
      })
      .returning();

    const greeting = `Hey ${name.trim().split(" ")[0]}! 👋 Welcome to Graylock Digital. I'm here to answer any questions you have about our website services, pricing, or how we help small businesses grow online. What can I help you with?`;

    await db.insert(messagesTable).values({
      conversationId: conversation.id,
      role: "assistant",
      content: greeting,
    });

    res.json({
      conversationId: conversation.id,
      accessToken,
      greeting,
    });
  } catch (err) {
    logger.error({ err }, "Failed to create chat conversation");
    res.status(500).json({ error: "Failed to start conversation" });
  }
});

chatRouter.post("/chat/conversations/:id/messages", async (req: Request, res: Response) => {
  try {
    const conversationId = parseInt(req.params.id, 10);
    if (isNaN(conversationId)) {
      res.status(400).json({ error: "Invalid conversation ID" });
      return;
    }

    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      res.status(401).json({ error: "Unauthorized" });
      return;
    }
    const token = authHeader.slice(7);

    const conversation = await db.query.conversationsTable.findFirst({
      where: and(
        eq(conversationsTable.id, conversationId),
        eq(conversationsTable.accessToken, token),
      ),
    });

    if (!conversation) {
      res.status(403).json({ error: "Invalid conversation access" });
      return;
    }

    const ip = req.ip || req.socket.remoteAddress || "unknown";
    if (!checkRateLimit(ip)) {
      res.status(429).json({ error: "Too many messages. Please wait a moment before sending another." });
      return;
    }

    let { message } = req.body;
    if (!message || typeof message !== "string") {
      res.status(400).json({ error: "Message is required" });
      return;
    }

    message = message.trim().slice(0, MAX_MESSAGE_LENGTH);
    if (message.length === 0) {
      res.status(400).json({ error: "Message cannot be empty" });
      return;
    }

    const existingMessages = await db.query.messagesTable.findMany({
      where: eq(messagesTable.conversationId, conversationId),
      orderBy: (m, { asc }) => [asc(m.createdAt)],
    });

    if (existingMessages.length >= MAX_MESSAGES_PER_CONVERSATION * 2) {
      res.status(400).json({
        error: "This conversation has reached its limit. For more help, head over to our Get Started page or email us directly!"
      });
      return;
    }

    await db.insert(messagesTable).values({
      conversationId,
      role: "user",
      content: message,
    });

    const chatMessages: OpenAI.ChatCompletionMessageParam[] = [
      { role: "system", content: SYSTEM_PROMPT },
      ...existingMessages.map((m) => ({
        role: m.role as "user" | "assistant",
        content: m.content,
      })),
      { role: "user" as const, content: message },
    ];

    res.setHeader("Content-Type", "text/event-stream");
    res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Connection", "keep-alive");
    res.setHeader("X-Accel-Buffering", "no");

    const client = getOpenRouterClient();
    let fullResponse = "";

    try {
      const stream = await client.chat.completions.create({
        model: "openai/gpt-4o-mini",
        max_tokens: 500,
        messages: chatMessages,
        stream: true,
      });

      for await (const chunk of stream) {
        const content = chunk.choices[0]?.delta?.content;
        if (content) {
          fullResponse += content;
          res.write(`data: ${JSON.stringify({ content })}\n\n`);
        }
      }
    } catch (aiErr) {
      logger.error({ err: aiErr }, "OpenRouter API error");
      fullResponse = "I'm having a little trouble right now. Please try again in a moment, or head over to our Get Started page to connect with us directly!";
      res.write(`data: ${JSON.stringify({ content: fullResponse })}\n\n`);
    }

    if (fullResponse) {
      await db.insert(messagesTable).values({
        conversationId,
        role: "assistant",
        content: fullResponse,
      });
    }

    res.write(`data: ${JSON.stringify({ done: true })}\n\n`);
    res.end();

    const userMessageCount = existingMessages.filter((m) => m.role === "user").length + 1;
    if (userMessageCount >= MIN_USER_MESSAGES_FOR_GOS && fullResponse) {
      const allMessages = [
        ...existingMessages.map((m) => ({ role: m.role, content: m.content })),
        { role: "user", content: message },
        { role: "assistant", content: fullResponse },
      ];
      summarizeAndSendToGos(conversation.visitorName, conversation.visitorEmail, allMessages).catch(
        (err) => logger.error({ err }, "Background GOS sync failed"),
      );
    }
  } catch (err) {
    logger.error({ err }, "Failed to process chat message");
    if (!res.headersSent) {
      res.status(500).json({ error: "Failed to process message" });
    } else {
      res.write(`data: ${JSON.stringify({ error: "Something went wrong" })}\n\n`);
      res.end();
    }
  }
});

export default chatRouter;
