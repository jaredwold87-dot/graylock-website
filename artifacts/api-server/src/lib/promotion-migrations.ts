interface MigrationClient {
  query<T = unknown>(text: string, values?: unknown[]): Promise<T>;
}

/**
 * Promotion DDL is versioned separately from the rest of the application.
 * Every migration runs in one transaction while holding a PostgreSQL
 * transaction advisory lock, so two API processes cannot initialize or
 * partially upgrade the experiment tables at the same time.
 */
export async function runPromotionMigrations(client: MigrationClient): Promise<void> {
  await client.query("BEGIN");
  try {
    await client.query(
      "SELECT pg_advisory_xact_lock(hashtext('graylock.promotion.schema'))",
    );
    await client.query(`
      CREATE TABLE IF NOT EXISTS promotion_schema_migrations (
        version INTEGER PRIMARY KEY,
        applied_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
      )
    `);

    const versionResult = await client.query<{ rows: Array<{ version: number }> }>(
      "SELECT COALESCE(MAX(version), 0)::int AS version FROM promotion_schema_migrations",
    );
    const currentVersion = Number(versionResult.rows[0]?.version ?? 0);

    if (currentVersion < 1) {
      await client.query(`
        CREATE TABLE IF NOT EXISTS promotion_campaigns (
          id BIGSERIAL PRIMARY KEY,
          campaign_id VARCHAR(120) NOT NULL UNIQUE,
          experiment_id VARCHAR(120) NOT NULL,
          enabled BOOLEAN NOT NULL DEFAULT FALSE,
          campaign_name TEXT NOT NULL,
          timezone VARCHAR(80) NOT NULL,
          recurrence_mode VARCHAR(20) NOT NULL DEFAULT 'manual',
          start_date_time TIMESTAMPTZ,
          end_date_time TIMESTAMPTZ,
          deadline_display_text TEXT,
          eligible_page_paths JSONB NOT NULL DEFAULT '["/"]'::jsonb,
          traffic_allocation_control INTEGER NOT NULL DEFAULT 50,
          traffic_allocation_variant_a INTEGER NOT NULL DEFAULT 50,
          traffic_allocation_variant_b INTEGER NOT NULL DEFAULT 0,
          trigger_minimum_seconds INTEGER NOT NULL DEFAULT 25,
          trigger_minimum_scroll_depth NUMERIC(5,4) NOT NULL DEFAULT 0.5500,
          dismissal_frequency_cap_days INTEGER NOT NULL DEFAULT 30,
          popup_enabled BOOLEAN NOT NULL DEFAULT TRUE,
          dashboard_enabled BOOLEAN NOT NULL DEFAULT TRUE,
          manual_kill_switch BOOLEAN NOT NULL DEFAULT FALSE,
          standard_build_fee_display_value TEXT,
          monthly_plan_disclosure TEXT,
          legal_terms_url TEXT,
          privacy_policy_url TEXT,
          stage VARCHAR(40) NOT NULL DEFAULT 'stage1',
          min_evaluation_days INTEGER NOT NULL DEFAULT 14,
          min_eligible_visitors INTEGER NOT NULL DEFAULT 200,
          version INTEGER NOT NULL DEFAULT 1,
          created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
          updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
          CONSTRAINT promotion_campaigns_allocations_nonnegative CHECK (
            traffic_allocation_control >= 0
            AND traffic_allocation_variant_a >= 0
            AND traffic_allocation_variant_b >= 0
          ),
          CONSTRAINT promotion_campaigns_scroll_depth_range CHECK (
            trigger_minimum_scroll_depth >= 0 AND trigger_minimum_scroll_depth <= 1
          )
        );

        CREATE INDEX IF NOT EXISTS idx_promotion_campaigns_experiment_id
          ON promotion_campaigns (experiment_id);
        CREATE INDEX IF NOT EXISTS idx_promotion_campaigns_enabled
          ON promotion_campaigns (enabled);

        CREATE TABLE IF NOT EXISTS promotion_campaign_versions (
          id BIGSERIAL PRIMARY KEY,
          campaign_id BIGINT NOT NULL REFERENCES promotion_campaigns(id) ON DELETE CASCADE,
          version INTEGER NOT NULL,
          config JSONB NOT NULL,
          changed_by TEXT,
          created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
          UNIQUE(campaign_id, version)
        );

        CREATE TABLE IF NOT EXISTS experiment_assignments (
          id BIGSERIAL PRIMARY KEY,
          campaign_id BIGINT NOT NULL REFERENCES promotion_campaigns(id) ON DELETE CASCADE,
          experiment_id VARCHAR(120) NOT NULL,
          anonymous_visitor_id VARCHAR(160) NOT NULL,
          experiment_variant VARCHAR(30) NOT NULL,
          assignment_token VARCHAR(160) NOT NULL UNIQUE,
          landing_page TEXT,
          referrer TEXT,
          utm_source VARCHAR(100),
          utm_medium VARCHAR(100),
          utm_campaign VARCHAR(100),
          utm_term VARCHAR(100),
          utm_content VARCHAR(100),
          device_type VARCHAR(30),
          first_touch_source VARCHAR(100),
          last_touch_source VARCHAR(100),
          assigned_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
          dismissed_at TIMESTAMPTZ,
          cta_clicked_at TIMESTAMPTZ,
          converted_at TIMESTAMPTZ,
          UNIQUE(campaign_id, experiment_id, anonymous_visitor_id),
          CONSTRAINT experiment_assignments_variant_valid CHECK (
            experiment_variant IN ('control', 'savings_led', 'direction_led')
          )
        );
        CREATE INDEX IF NOT EXISTS idx_experiment_assignments_variant
          ON experiment_assignments (campaign_id, experiment_variant);

        CREATE TABLE IF NOT EXISTS promotion_events (
          id BIGSERIAL PRIMARY KEY,
          assignment_id BIGINT NOT NULL REFERENCES experiment_assignments(id) ON DELETE CASCADE,
          event_id VARCHAR(160) NOT NULL,
          event_name VARCHAR(80) NOT NULL,
          event_timestamp TIMESTAMPTZ NOT NULL DEFAULT NOW(),
          source VARCHAR(100),
          page_path TEXT,
          landing_page TEXT,
          referrer TEXT,
          utm_source VARCHAR(100),
          utm_medium VARCHAR(100),
          utm_campaign VARCHAR(100),
          utm_term VARCHAR(100),
          utm_content VARCHAR(100),
          device_type VARCHAR(30),
          trigger_type VARCHAR(50),
          seconds_on_page INTEGER,
          scroll_depth NUMERIC(5,4),
          cta_label VARCHAR(120),
          dismissal_type VARCHAR(40),
          status_reason VARCHAR(80),
          UNIQUE(assignment_id, event_id),
          UNIQUE(assignment_id, event_name),
          CONSTRAINT promotion_events_scroll_depth_range CHECK (
            scroll_depth IS NULL OR (scroll_depth >= 0 AND scroll_depth <= 1)
          )
        );
        CREATE INDEX IF NOT EXISTS idx_promotion_events_funnel
          ON promotion_events (assignment_id, event_name);

        CREATE TABLE IF NOT EXISTS promotion_lead_attribution (
          id BIGSERIAL PRIMARY KEY,
          internal_lead_id VARCHAR(100) NOT NULL UNIQUE,
          assignment_id BIGINT REFERENCES experiment_assignments(id) ON DELETE SET NULL,
          campaign_id VARCHAR(120) NOT NULL,
          experiment_id VARCHAR(120) NOT NULL,
          experiment_variant VARCHAR(30) NOT NULL,
          anonymous_visitor_id VARCHAR(160) NOT NULL,
          promotion_source VARCHAR(60) NOT NULL,
          popup_trigger_type VARCHAR(50),
          popup_impression_timestamp TIMESTAMPTZ,
          popup_cta_clicked_timestamp TIMESTAMPTZ,
          first_touch_source VARCHAR(100),
          last_touch_source VARCHAR(100),
          utm_source VARCHAR(100),
          utm_medium VARCHAR(100),
          utm_campaign VARCHAR(100),
          utm_term VARCHAR(100),
          utm_content VARCHAR(100),
          referrer TEXT,
          landing_page TEXT,
          device_type VARCHAR(30),
          business_name TEXT,
          first_name VARCHAR(120),
          email VARCHAR(320),
          phone VARCHAR(80),
          note TEXT,
          website_url TEXT,
          primary_goal TEXT,
          service_area TEXT,
          has_website BOOLEAN,
          ideal_customer TEXT,
          branding_notes TEXT,
          heard_about_us TEXT,
          submitted_at TIMESTAMPTZ,
          business_category VARCHAR(120),
          declared_website_goal TEXT,
          declared_timing VARCHAR(120),
          lead_status VARCHAR(60) NOT NULL DEFAULT 'new',
          qualification_status VARCHAR(60),
          no_fit_reason VARCHAR(80),
          notes TEXT,
          fit_call_date TIMESTAMPTZ,
          fit_call_status VARCHAR(60),
          direction_status VARCHAR(60),
          promotion_acceptance_status VARCHAR(60),
          waived_build_fee_amount NUMERIC(12,2),
          monthly_plan VARCHAR(120),
          first_payment_status VARCHAR(60),
          launch_status VARCHAR(60),
          refund_cancellation_status VARCHAR(80),
          assigned_team_member VARCHAR(120),
          email_notification_status VARCHAR(40) NOT NULL DEFAULT 'pending',
          email_notification_error TEXT,
          email_notification_sent_at TIMESTAMPTZ,
          created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
          updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
        );
        CREATE INDEX IF NOT EXISTS idx_promotion_lead_attribution_campaign
          ON promotion_lead_attribution (campaign_id, experiment_variant);
        CREATE INDEX IF NOT EXISTS idx_promotion_lead_attribution_status
          ON promotion_lead_attribution (lead_status);

        CREATE TABLE IF NOT EXISTS promotion_lead_status_history (
          id BIGSERIAL PRIMARY KEY,
          lead_id BIGINT NOT NULL REFERENCES promotion_lead_attribution(id) ON DELETE CASCADE,
          internal_lead_id VARCHAR(100) NOT NULL,
          field_name VARCHAR(80) NOT NULL,
          old_value TEXT,
          new_value TEXT,
          changed_by TEXT,
          changed_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
        );
        CREATE INDEX IF NOT EXISTS idx_promotion_lead_history_lead
          ON promotion_lead_status_history (lead_id, changed_at);

        CREATE TABLE IF NOT EXISTS promotion_economic_records (
          id BIGSERIAL PRIMARY KEY,
          lead_id BIGINT NOT NULL REFERENCES promotion_lead_attribution(id) ON DELETE CASCADE,
          internal_lead_id VARCHAR(100) NOT NULL,
          kind VARCHAR(30) NOT NULL,
          amount NUMERIC(12,2) NOT NULL CHECK (amount >= 0),
          costs_complete BOOLEAN NOT NULL DEFAULT FALSE,
          created_by TEXT,
          created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
          CONSTRAINT promotion_economic_records_kind_valid CHECK (
            kind IN ('waived_build_fee', 'monthly_payment', 'delivery_cost', 'support_cost', 'refund')
          )
        );
        CREATE INDEX IF NOT EXISTS idx_promotion_economics_lead
          ON promotion_economic_records (lead_id);
      `);

      await client.query(
        `
          INSERT INTO promotion_campaigns (
            campaign_id, experiment_id, enabled, campaign_name, timezone,
            recurrence_mode,
            eligible_page_paths, traffic_allocation_control,
            traffic_allocation_variant_a, traffic_allocation_variant_b,
            trigger_minimum_seconds, trigger_minimum_scroll_depth,
            dismissal_frequency_cap_days, popup_enabled, dashboard_enabled,
            manual_kill_switch, standard_build_fee_display_value,
            monthly_plan_disclosure, stage, min_evaluation_days,
            min_eligible_visitors
          ) VALUES (
            'september-build-fee-waiver', 'build-fee-waiver-v1', FALSE,
            'September Build-Fee Waiver', 'America/Los_Angeles', 'monthly',
            '["/"]'::jsonb, 0, 50, 50, 25, 0.5500, 30, TRUE, TRUE,
            FALSE, 'from $799', 'Applicable monthly plan, scope, and terms apply.',
            'stage1', 14, 200
          )
          ON CONFLICT (campaign_id) DO NOTHING
        `,
      );
      await client.query(
        `
          INSERT INTO promotion_campaign_versions (campaign_id, version, config, changed_by)
          SELECT id, version, jsonb_build_object(
            'campaignId', campaign_id, 'experimentId', experiment_id,
            'enabled', enabled, 'campaignName', campaign_name, 'timezone', timezone,
             'recurrenceMode', recurrence_mode,
            'startDateTime', start_date_time, 'endDateTime', end_date_time,
            'deadlineDisplayText', deadline_display_text,
            'eligiblePagePaths', eligible_page_paths,
            'trafficAllocationControl', traffic_allocation_control,
            'trafficAllocationVariantA', traffic_allocation_variant_a,
            'trafficAllocationVariantB', traffic_allocation_variant_b,
            'triggerMinimumSeconds', trigger_minimum_seconds,
            'triggerMinimumScrollDepth', trigger_minimum_scroll_depth,
            'dismissalFrequencyCapDays', dismissal_frequency_cap_days,
            'popupEnabled', popup_enabled, 'dashboardEnabled', dashboard_enabled,
            'manualKillSwitch', manual_kill_switch,
            'standardBuildFeeDisplayValue', standard_build_fee_display_value,
            'monthlyPlanDisclosure', monthly_plan_disclosure,
            'legalTermsUrl', legal_terms_url, 'privacyPolicyUrl', privacy_policy_url,
            'stage', stage, 'minEvaluationDays', min_evaluation_days,
            'minEligibleVisitors', min_eligible_visitors
          ), 'migration'
          FROM promotion_campaigns
          WHERE campaign_id = 'september-build-fee-waiver'
          ON CONFLICT (campaign_id, version) DO NOTHING
        `,
      );
      await client.query(
        "INSERT INTO promotion_schema_migrations (version) VALUES (1)",
      );
    }

    // Version 2 is intentionally additive.  Keeping these statements
    // separate from v1 means an already-migrated deployment receives the
    // durable lead-idempotency and notification fields as well.
    if (currentVersion < 2) {
      await client.query(`
        ALTER TABLE promotion_lead_attribution
          ADD COLUMN IF NOT EXISTS submission_id VARCHAR(160),
          ADD COLUMN IF NOT EXISTS submission_payload_hash VARCHAR(64),
          ADD COLUMN IF NOT EXISTS first_name VARCHAR(120),
          ADD COLUMN IF NOT EXISTS email VARCHAR(320),
          ADD COLUMN IF NOT EXISTS phone VARCHAR(80),
          ADD COLUMN IF NOT EXISTS note TEXT,
          ADD COLUMN IF NOT EXISTS website_url TEXT,
          ADD COLUMN IF NOT EXISTS primary_goal TEXT,
          ADD COLUMN IF NOT EXISTS service_area TEXT,
          ADD COLUMN IF NOT EXISTS has_website BOOLEAN,
          ADD COLUMN IF NOT EXISTS ideal_customer TEXT,
          ADD COLUMN IF NOT EXISTS branding_notes TEXT,
          ADD COLUMN IF NOT EXISTS heard_about_us TEXT,
          ADD COLUMN IF NOT EXISTS submitted_at TIMESTAMPTZ,
          ADD COLUMN IF NOT EXISTS email_notification_status VARCHAR(40) NOT NULL DEFAULT 'pending',
          ADD COLUMN IF NOT EXISTS email_notification_error TEXT,
          ADD COLUMN IF NOT EXISTS email_notification_sent_at TIMESTAMPTZ,
          ADD COLUMN IF NOT EXISTS email_notification_lease_until TIMESTAMPTZ,
          ADD COLUMN IF NOT EXISTS email_notification_attempted_at TIMESTAMPTZ,
          ADD COLUMN IF NOT EXISTS email_notification_idempotency_key VARCHAR(160),
          ADD COLUMN IF NOT EXISTS email_notification_payload JSONB
      `);
      await client.query(`
        UPDATE promotion_lead_attribution
        SET submission_id = internal_lead_id
        WHERE submission_id IS NULL
      `);
      await client.query(`
        ALTER TABLE promotion_lead_attribution
          ALTER COLUMN submission_id SET NOT NULL,
          ALTER COLUMN campaign_id DROP NOT NULL,
          ALTER COLUMN experiment_id DROP NOT NULL,
          ALTER COLUMN experiment_variant DROP NOT NULL,
          ALTER COLUMN anonymous_visitor_id DROP NOT NULL,
          ALTER COLUMN promotion_source SET DEFAULT 'standard_homepage_cta'
      `);
      await client.query(`
        CREATE UNIQUE INDEX IF NOT EXISTS idx_promotion_lead_submission_id
          ON promotion_lead_attribution (submission_id)
      `);
      // Preserve the earliest accepted submission if a pre-v2 deployment
      // happened to receive concurrent duplicate requests before the unique
      // constraint existed.
      await client.query(`
        WITH duplicates AS (
          SELECT id, ROW_NUMBER() OVER (
            PARTITION BY assignment_id ORDER BY created_at ASC, id ASC
          ) AS duplicate_number
          FROM promotion_lead_attribution
          WHERE assignment_id IS NOT NULL
        )
        DELETE FROM promotion_lead_attribution l
        USING duplicates d
        WHERE l.id = d.id AND d.duplicate_number > 1
      `);
      await client.query(`
        ALTER TABLE promotion_lead_attribution
          ADD CONSTRAINT promotion_lead_attribution_assignment_unique
          UNIQUE (assignment_id)
      `);
      await client.query(
        "INSERT INTO promotion_schema_migrations (version) VALUES (2)",
      );
    }
    if (currentVersion < 3) {
      await client.query(`
        ALTER TABLE promotion_lead_attribution
          ADD COLUMN IF NOT EXISTS submission_payload_hash VARCHAR(64),
          ADD COLUMN IF NOT EXISTS email_notification_lease_until TIMESTAMPTZ,
          ADD COLUMN IF NOT EXISTS email_notification_attempted_at TIMESTAMPTZ,
          ADD COLUMN IF NOT EXISTS email_notification_idempotency_key VARCHAR(160),
          ADD COLUMN IF NOT EXISTS email_notification_payload JSONB
      `);
      await client.query(
        "INSERT INTO promotion_schema_migrations (version) VALUES (3)",
      );
    }
    // Version 4 makes recurrence an additive campaign setting. Existing
    // campaign dates, enabled state, popup state, and kill switch are left
    // exactly as they were; only the requested campaign's recurrence mode is
    // changed. Assignment, event, and lead rows are deliberately untouched.
    if (currentVersion < 4) {
      await client.query(`
        ALTER TABLE promotion_campaigns
          ADD COLUMN IF NOT EXISTS recurrence_mode VARCHAR(20) NOT NULL DEFAULT 'manual'
      `);
      await client.query(`
        ALTER TABLE promotion_campaigns
          DROP CONSTRAINT IF EXISTS promotion_campaigns_recurrence_mode_valid
      `);
      await client.query(`
        ALTER TABLE promotion_campaigns
          ADD CONSTRAINT promotion_campaigns_recurrence_mode_valid
          CHECK (recurrence_mode IN ('manual', 'monthly'))
      `);
      await client.query(`
        UPDATE promotion_campaigns
        SET recurrence_mode = 'monthly'
        WHERE campaign_id = 'september-build-fee-waiver'
      `);
      await client.query(
        "INSERT INTO promotion_schema_migrations (version) VALUES (4)",
      );
    }

    // Compare the two popup wordings, not popup vs. no popup. Keep enablement,
    // dates, triggers, existing A/B assignments, and all historical lead data.
    if (currentVersion < 5) {
      await client.query(`
        UPDATE promotion_campaigns
        SET traffic_allocation_control = 0,
            traffic_allocation_variant_a = 50,
            traffic_allocation_variant_b = 50,
            version = version + 1,
            updated_at = NOW()
        WHERE campaign_id = 'september-build-fee-waiver'
      `);
      // Retain control rows and their events for historical reports, but free
      // their active assignment slot so returning visitors receive A or B.
      // Keep the month suffix intact for occurrence-filtered reporting.
      await client.query(`
        UPDATE experiment_assignments a
        SET experiment_id = 'retired-control:' || a.id || ':' || a.experiment_id
        FROM promotion_campaigns c
        WHERE a.campaign_id = c.id
          AND c.campaign_id = 'september-build-fee-waiver'
          AND a.experiment_variant = 'control'
          AND a.experiment_id = CASE WHEN c.recurrence_mode = 'monthly'
            THEN c.experiment_id || ':' || to_char(NOW() AT TIME ZONE c.timezone, 'YYYY-MM')
            ELSE c.experiment_id END
          AND a.dismissed_at IS NULL AND a.cta_clicked_at IS NULL
          AND a.converted_at IS NULL
      `);
      await client.query(
        "INSERT INTO promotion_schema_migrations (version) VALUES (5)",
      );
    }

    await client.query("COMMIT");
  } catch (error) {
    await client.query("ROLLBACK");
    throw error;
  }
}