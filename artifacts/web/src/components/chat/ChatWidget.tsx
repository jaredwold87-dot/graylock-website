import { useState, useRef, useEffect, useCallback } from "react";
import { MessageCircle, X, Send, Loader2 } from "lucide-react";

const BASE = import.meta.env.BASE_URL;

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

function apiUrl(path: string) {
  return `${BASE}api${path}`;
}

function LeadCaptureForm({ onSubmit, loading }: { onSubmit: (name: string, email: string) => void; loading: boolean }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() && email.trim()) {
      onSubmit(name.trim(), email.trim());
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="p-4 flex-1 flex flex-col justify-center">
        <div className="text-center mb-6">
          <div className="w-12 h-12 rounded-full bg-orange/20 flex items-center justify-center mx-auto mb-3">
            <MessageCircle className="text-orange" size={24} />
          </div>
          <h3 className="text-offwhite font-display text-lg mb-1">Chat with us</h3>
          <p className="text-stone text-sm">Quick answers about our services, pricing, and process.</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            maxLength={100}
            required
            className="w-full bg-charcoal border border-gunmetal rounded-lg px-3 py-2.5 text-offwhite text-sm placeholder:text-stone/50 focus:outline-none focus:border-orange/50 transition-colors"
          />
          <input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            maxLength={200}
            required
            className="w-full bg-charcoal border border-gunmetal rounded-lg px-3 py-2.5 text-offwhite text-sm placeholder:text-stone/50 focus:outline-none focus:border-orange/50 transition-colors"
          />
          <button
            type="submit"
            disabled={loading || !name.trim() || !email.trim()}
            className="w-full bg-orange hover:bg-orange/90 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-2.5 rounded-lg text-sm transition-colors flex items-center justify-center gap-2"
          >
            {loading ? <Loader2 size={16} className="animate-spin" /> : null}
            {loading ? "Starting..." : "Start chatting"}
          </button>
        </form>
      </div>
    </div>
  );
}

function MessageBubble({ message }: { message: ChatMessage }) {
  const isUser = message.role === "user";
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} mb-3`}>
      <div
        className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
          isUser
            ? "bg-orange text-white rounded-br-md"
            : "bg-gunmetal/60 text-offwhite rounded-bl-md"
        }`}
      >
        {message.content}
      </div>
    </div>
  );
}

function StreamingBubble({ content }: { content: string }) {
  if (!content) {
    return (
      <div className="flex justify-start mb-3">
        <div className="bg-gunmetal/60 rounded-2xl rounded-bl-md px-3.5 py-2.5">
          <div className="flex gap-1">
            <span className="w-2 h-2 bg-stone/50 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
            <span className="w-2 h-2 bg-stone/50 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
            <span className="w-2 h-2 bg-stone/50 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-start mb-3">
      <div className="max-w-[85%] bg-gunmetal/60 text-offwhite rounded-2xl rounded-bl-md px-3.5 py-2.5 text-sm leading-relaxed">
        {content}
      </div>
    </div>
  );
}

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [conversationId, setConversationId] = useState<number | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isStreaming, setIsStreaming] = useState(false);
  const [streamContent, setStreamContent] = useState("");
  const [error, setError] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, streamContent, scrollToBottom]);

  useEffect(() => {
    if (isOpen && conversationId && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen, conversationId]);

  const handleStartConversation = async (name: string, email: string) => {
    setIsLoading(true);
    setError("");
    try {
      const res = await fetch(apiUrl("/chat/conversations"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to start conversation");
      }

      const data = await res.json();
      setConversationId(data.conversationId);
      setMessages([{ role: "assistant", content: data.greeting }]);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSendMessage = async () => {
    if (!input.trim() || !conversationId || isStreaming) return;

    const userMessage = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setIsStreaming(true);
    setStreamContent("");
    setError("");

    try {
      const res = await fetch(apiUrl(`/chat/conversations/${conversationId}/messages`), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to send message");
      }

      const reader = res.body?.getReader();
      if (!reader) throw new Error("No response stream");

      const decoder = new TextDecoder();
      let accumulated = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const text = decoder.decode(value, { stream: true });
        const lines = text.split("\n");

        for (const line of lines) {
          if (line.startsWith("data: ")) {
            try {
              const data = JSON.parse(line.slice(6));
              if (data.done) {
                setMessages((prev) => [...prev, { role: "assistant", content: accumulated }]);
                setStreamContent("");
                setIsStreaming(false);
              } else if (data.content) {
                accumulated += data.content;
                setStreamContent(accumulated);
              } else if (data.error) {
                throw new Error(data.error);
              }
            } catch (parseErr) {
              // skip malformed SSE lines
            }
          }
        }
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to send message");
      setIsStreaming(false);
      setStreamContent("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {isOpen && (
        <div className="fixed bottom-20 right-4 sm:right-6 z-50 w-[340px] sm:w-[380px] max-h-[min(520px,calc(100vh-120px))] bg-navy border border-gunmetal rounded-2xl shadow-2xl shadow-black/40 flex flex-col overflow-hidden animate-in slide-in-from-bottom-4 fade-in duration-200">
          <div className="flex items-center justify-between px-4 py-3 border-b border-gunmetal bg-charcoal/50">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-orange/20 flex items-center justify-center">
                <MessageCircle className="text-orange" size={16} />
              </div>
              <div>
                <h3 className="text-offwhite font-display text-sm leading-tight">Graylock Digital</h3>
                <p className="text-stone text-xs">Typically replies instantly</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-stone hover:text-offwhite transition-colors p-1"
              aria-label="Close chat"
            >
              <X size={18} />
            </button>
          </div>

          {!conversationId ? (
            <LeadCaptureForm onSubmit={handleStartConversation} loading={isLoading} />
          ) : (
            <>
              <div className="flex-1 overflow-y-auto p-4 min-h-0">
                {messages.map((msg, i) => (
                  <MessageBubble key={i} message={msg} />
                ))}
                {isStreaming && <StreamingBubble content={streamContent} />}
                {error && (
                  <div className="text-center text-red-400 text-xs my-2 px-2">{error}</div>
                )}
                <div ref={messagesEndRef} />
              </div>

              <div className="p-3 border-t border-gunmetal bg-charcoal/30">
                <div className="flex items-center gap-2">
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Ask a question..."
                    maxLength={1000}
                    disabled={isStreaming}
                    className="flex-1 bg-charcoal border border-gunmetal rounded-lg px-3 py-2 text-offwhite text-sm placeholder:text-stone/50 focus:outline-none focus:border-orange/50 transition-colors disabled:opacity-50"
                  />
                  <button
                    onClick={handleSendMessage}
                    disabled={!input.trim() || isStreaming}
                    className="bg-orange hover:bg-orange/90 disabled:opacity-30 disabled:cursor-not-allowed text-white p-2 rounded-lg transition-colors flex-shrink-0"
                    aria-label="Send message"
                  >
                    {isStreaming ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-4 right-4 sm:right-6 z-50 w-14 h-14 rounded-full shadow-lg shadow-black/30 flex items-center justify-center transition-all duration-200 ${
          isOpen
            ? "bg-gunmetal hover:bg-gunmetal/80 scale-90"
            : "bg-orange hover:bg-orange/90 hover:scale-105"
        }`}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? <X className="text-offwhite" size={22} /> : <MessageCircle className="text-white" size={22} />}
      </button>
    </>
  );
}
