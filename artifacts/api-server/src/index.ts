import app from "./app";
import { logger } from "./lib/logger";
import { pool } from "@workspace/db";

const port = Number(process.env["PORT"] || 3000);

if (Number.isNaN(port) || port <= 0) {
  throw new Error(`Invalid PORT value: "${process.env["PORT"]}"`);
}

async function runMigrations() {
  const client = await pool.connect();
  try {
    await client.query(`
      CREATE TABLE IF NOT EXISTS chat_conversations (
        id SERIAL PRIMARY KEY,
        access_token VARCHAR(64) NOT NULL UNIQUE,
        visitor_name TEXT NOT NULL,
        visitor_email TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT NOW() NOT NULL
      );
      CREATE TABLE IF NOT EXISTS chat_messages (
        id SERIAL PRIMARY KEY,
        conversation_id INTEGER NOT NULL REFERENCES chat_conversations(id),
        role TEXT NOT NULL,
        content TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT NOW() NOT NULL
      );
      CREATE INDEX IF NOT EXISTS idx_messages_conversation_id ON chat_messages(conversation_id);
    `);
    logger.info("Database migrations completed");
  } catch (err) {
    logger.error({ err }, "Database migration failed");
    throw err;
  } finally {
    client.release();
  }
}

runMigrations().then(() => {
  app.listen(port, () => {
    logger.info({ port }, "Server listening");
  });
});
