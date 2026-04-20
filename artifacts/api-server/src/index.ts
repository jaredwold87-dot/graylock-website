import app from "./app";
import { logger } from "./lib/logger";
import { pool } from "@workspace/db";
import { startReminderScheduler } from "./lib/reminderJob";

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

      CREATE TABLE IF NOT EXISTS lead_magnet_emails (
        id SERIAL PRIMARY KEY,
        email TEXT NOT NULL,
        first_name TEXT NOT NULL,
        resend_email_id TEXT UNIQUE,
        lead_magnet TEXT NOT NULL,
        status TEXT NOT NULL DEFAULT 'queued',
        bounce_type TEXT,
        sent_at TIMESTAMP DEFAULT NOW() NOT NULL,
        delivered_at TIMESTAMP,
        opened_at TIMESTAMP,
        clicked_at TIMESTAMP,
        bounced_at TIMESTAMP,
        complained_at TIMESTAMP,
        delivery_delayed_at TIMESTAMP,
        reminder_sent_at TIMESTAMP,
        updated_at TIMESTAMP DEFAULT NOW() NOT NULL
      );
      ALTER TABLE lead_magnet_emails ADD COLUMN IF NOT EXISTS reminder_sent_at TIMESTAMP;
      ALTER TABLE lead_magnet_emails ADD COLUMN IF NOT EXISTS kind TEXT NOT NULL DEFAULT 'initial';
      ALTER TABLE lead_magnet_emails ADD COLUMN IF NOT EXISTS parent_email_id INTEGER REFERENCES lead_magnet_emails(id);
      ALTER TABLE lead_magnet_emails ADD COLUMN IF NOT EXISTS message_id TEXT;
      CREATE INDEX IF NOT EXISTS idx_lead_magnet_emails_email ON lead_magnet_emails(email);
      CREATE INDEX IF NOT EXISTS idx_lead_magnet_emails_kind ON lead_magnet_emails(kind);
      CREATE INDEX IF NOT EXISTS idx_lead_magnet_emails_parent ON lead_magnet_emails(parent_email_id);
      CREATE INDEX IF NOT EXISTS idx_lead_magnet_emails_message_id ON lead_magnet_emails(message_id);

      CREATE TABLE IF NOT EXISTS lead_magnet_email_events (
        id SERIAL PRIMARY KEY,
        lead_magnet_email_id INTEGER REFERENCES lead_magnet_emails(id),
        resend_email_id TEXT,
        email TEXT,
        event_type TEXT NOT NULL,
        svix_id TEXT UNIQUE,
        payload JSONB NOT NULL,
        occurred_at TIMESTAMP NOT NULL,
        created_at TIMESTAMP DEFAULT NOW() NOT NULL
      );
      CREATE INDEX IF NOT EXISTS idx_lead_magnet_email_events_lme_id ON lead_magnet_email_events(lead_magnet_email_id);

      CREATE TABLE IF NOT EXISTS suppressed_emails (
        email TEXT PRIMARY KEY,
        reason TEXT NOT NULL,
        bounce_type TEXT,
        created_at TIMESTAMP DEFAULT NOW() NOT NULL
      );
    `);
    logger.info("Database migrations completed");
  } catch (err) {
    logger.error({ err }, "Database migration failed");
    throw err;
  } finally {
    client.release();
  }
}

runMigrations()
  .then(() => {
    app.listen(port, () => {
      logger.info({ port }, "Server listening");
      startReminderScheduler();
    });
  })
  .catch((err) => {
    logger.error({ err }, "Failed to run migrations, starting server anyway");
    app.listen(port, () => {
      logger.info({ port }, "Server listening (migrations failed)");
      startReminderScheduler();
    });
  });
