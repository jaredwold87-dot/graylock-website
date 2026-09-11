# Build-Fee Waiver promotion API

This document is the backend contract for the Graylock Digital build-fee
waiver experiment. The API is same-origin. Admin endpoints are private and
must not be exposed through permissive CORS.

## Endpoint contract (quick reference)

Public:

* `GET /api/promotion/campaign` → `{campaign,serverNow,active}` (no-store;
  monthly campaigns are resolved to the current calendar-month occurrence).
* `POST /api/promotion/assign` → `{assignment,campaign,serverNow,active}`.
* `POST /api/promotion/events` → `{ok:true}`.
* `POST /api/leads` → existing form response plus `{internal_lead_id}`;
  promotion metadata is validated server-side. The existing form must send an
  opaque, stable `idempotency_key` (a UUID v4 matching the browser helper)
  so ordinary unassigned submissions are idempotent too.

Admin:

* `GET /api/promotion/admin/session` → `{authenticated,csrfToken?}`.
* `POST /api/promotion/admin/login` → `{authenticated:true,csrfToken}` and
  an expiring signed HttpOnly cookie.
* `POST /api/promotion/admin/logout` (CSRF).
* `GET/PATCH /api/promotion/admin/campaign` (PATCH CSRF).
* `POST /api/promotion/admin/pause` and
  `POST /api/promotion/admin/campaign/pause` (CSRF).
* `GET /api/promotion/admin/report` and
  `GET /api/promotion/admin/export?type=aggregate|leads`.
* `GET/PATCH /api/promotion/admin/leads/:id` (PATCH CSRF), plus
  `POST /api/promotion/admin/leads/:id/economics` and
  `POST /api/promotion/admin/leads/:id/resend-email` (CSRF).

All admin mutations require `X-CSRF-Token` and an allowed same-origin
`Origin` when one is sent. Full request and response examples follow below;
the browser event allowlist and field mapping are also listed below.

The notification resend route shape is exact:

```http
POST /api/promotion/admin/leads/:id/resend-email
Cookie: promotion_admin_session=<signed-session>
X-CSRF-Token: <csrfToken from /api/promotion/admin/session>
Origin: https://<same-site-host>
Content-Type: application/json
```

The request body is empty (`{}` is also accepted). A successful resend
returns `200 {"ok":true,"internal_lead_id":"..."}`; it never creates a lead,
status-history row, or funnel event. Missing email configuration returns
`503 {"error":"Lead notification email is not configured"}` and a provider
failure returns `502 {"error":"Failed to send lead notification"}`. An active
send lease returns `409`; an expired lease can be reclaimed only while the
same Resend idempotency key remains within its 24-hour window. After that
window the server marks the row `manual_review` and returns `409` rather than
automatically risking a duplicate. The dashboard should surface
`emailNotificationStatus: "sending"` with an expired lease and
`"manual_review"` as an operator action, not as an automatic retry.
The server stores the original normalized Resend payload snapshot and uses
that same snapshot plus the stable per-lead idempotency key for retries.

## Operational defaults

The first migration creates `september-build-fee-waiver` /
`build-fee-waiver-v1` in `promotion_campaigns` with:

* `enabled: false`, `manualKillSwitch: false`, and `popupEnabled: true`
* `stage: "stage1"`
* `timezone: "America/Los_Angeles"`
* `recurrenceMode: "monthly"`; its raw/manual `startDateTime`,
  `endDateTime`, and `deadlineDisplayText` remain untouched
* allocations `control: 50`, `savings_led: 50`, `direction_led: 0`
* `triggerMinimumSeconds: 25`, `triggerMinimumScrollDepth: 0.55`
* `dismissalFrequencyCapDays: 30` (legacy configuration; dismissal now hides the notice for the entire campaign without withdrawing eligibility)
* `standardBuildFeeDisplayValue: "from $799"`
* `monthlyPlanDisclosure: "Applicable monthly plan, scope, and terms apply."`
* `minEvaluationDays: 14`, `minEligibleVisitors: 200`

The campaign remains intentionally disabled after migration. A manual campaign
cannot be enabled without real start and end dates and an explicit
`confirmEnabled: true`. A monthly campaign derives its dates from its IANA
timezone, but still requires explicit enablement. A live manual deadline change
requires `confirmDeadline: true`.

The migration is transactional and takes a PostgreSQL transaction advisory
lock. Migration versions are recorded in `promotion_schema_migrations`; v2 is
an additive migration for lead fields and the unique assignment-to-lead
idempotency constraint, while v3 adds notification leases, payload snapshots,
and Resend idempotency keys. V4 additively adds `recurrence_mode` and sets only
the requested campaign to `monthly`; it does not alter campaign dates,
enabled/popup/kill-switch flags, assignments, events, leads, or historical
records. An already-v1, v2, or v3 database is upgraded safely.
Campaign edits are versioned in `promotion_campaign_versions`.

The durable relations are `promotion_campaigns`,
`promotion_campaign_versions`, `experiment_assignments`,
`promotion_events`, `promotion_lead_attribution`,
`promotion_lead_status_history`, and `promotion_economic_records`.
Assignments belong to a campaign, events belong to an assignment, leads retain
their assignment/variant, and status/economic history is append-only.

## Authentication and request protections

Set these server secrets before using admin routes:

* `PROMOTION_ADMIN_PASSWORD` — required password (never logged)
* `SESSION_SECRET` — required HMAC secret (never logged)
* `PROMOTION_ADMIN_USERNAME` — optional, defaults to `admin`
* `PROMOTION_ADMIN_ORIGIN` or `PUBLIC_ORIGIN` — optional explicit allowed
  browser origin; when absent, the request's own origin is used

Missing required secrets fail closed with HTTP 503 on login and all admin
routes. Login is rate limited and compares the username and password with
constant-time comparisons. Successful login sets an expiring, signed,
`HttpOnly; SameSite=Strict` cookie (also `Secure` in production). The session
response includes a CSRF token held server-side.

Mutating admin requests require both an allowed `Origin` (when an Origin
header is sent) and `X-CSRF-Token`. There is no admin token in local storage,
URL parameters, or browser local state. Admin CORS is not enabled.

## API contract

All JSON responses use camelCase only where explicitly shown. The assignment
and event payloads intentionally retain the snake_case names used by the
existing hidden form metadata and browser contract.

### Public campaign

`GET /api/promotion/campaign`

Response:

```json
{
  "campaign": {
    "campaignId": "september-build-fee-waiver",
    "enabled": false,
    "campaignName": "September Build-Fee Waiver",
    "timezone": "America/Los_Angeles",
    "recurrenceMode": "monthly",
    "baseExperimentId": "build-fee-waiver-v1",
    "experimentId": "build-fee-waiver-v1:2026-09",
    "occurrenceKey": "2026-09",
    "startDateTime": "2026-09-01T07:00:00.000Z",
    "endDateTime": "2026-10-01T07:00:00.000Z",
    "deadlineDisplayText": "September 30, 2026, 11:59 PM America/Los_Angeles",
    "eligiblePagePaths": ["/"],
    "trafficAllocationControl": 50,
    "trafficAllocationVariantA": 50,
    "trafficAllocationVariantB": 0,
    "triggerMinimumSeconds": 25,
    "triggerMinimumScrollDepth": 0.55,
    "dismissalFrequencyCapDays": 30,
    "popupEnabled": true,
    "dashboardEnabled": true,
    "manualKillSwitch": false,
    "standardBuildFeeDisplayValue": "from $799",
    "monthlyPlanDisclosure": "Applicable monthly plan, scope, and terms apply.",
    "legalTermsUrl": null,
    "privacyPolicyUrl": null,
    "stage": "stage1",
    "minEvaluationDays": 14,
    "minEligibleVisitors": 200
  },
  "serverNow": "2026-09-01T12:00:00.000Z",
  "active": false
}
```

The response is `no-store`. For `recurrenceMode: "monthly"`, the public
campaign is resolved at request time: `startDateTime` is local month-day 1 at
00:00 inclusive, `endDateTime` is the following local month-day 1 at 00:00
exclusive, and `deadlineDisplayText` truthfully names the final local date at
11:59 PM. IANA timezone data handles DST, leap February, and December-to-January
rollover. The public `experimentId` is the effective
`baseExperimentId:occurrenceKey`; `campaignId` remains stable. Manual campaigns
return their raw experiment ID and dates with `occurrenceKey: null`.

`active` is computed on the server from enabled, kill switch, and the resolved
or manual period. It is false when manual dates are null, before start, at or
after the exclusive end, or paused.

### Sticky assignment

`POST /api/promotion/assign`

Request:

```json
{
  "anonymous_visitor_id": "first-party-random-id",
  "page_path": "/",
  "landing_page": "/",
  "referrer": "https://example.com",
  "utm_source": "newsletter",
  "utm_medium": "email",
  "utm_campaign": "september",
  "utm_term": "websites",
  "utm_content": "hero",
  "device_type": "desktop",
  "first_touch_source": "newsletter",
  "last_touch_source": "newsletter"
}
```

Paths have query strings and fragments removed. Referrers are reduced to their
HTTP(S) origin. UTM/source values are bounded allowlisted values; emails,
URLs, query strings, fragments, whitespace, and control characters are
rejected. No form PII is accepted as an anonymous visitor ID.

When live:

```json
{
  "assignment": {
    "campaign_id": "september-build-fee-waiver",
    "experiment_id": "build-fee-waiver-v1:2026-09",
    "experiment_variant": "control",
    "anonymous_visitor_id": "first-party-random-id",
    "assigned_at": "2026-09-01T12:00:00.000Z",
    "assignment_token": "opaque-server-generated-credential",
    "stage": "stage1",
    "suppressed": false
  },
  "campaign": {},
  "serverNow": "2026-09-01T12:00:00.000Z",
  "active": true
}
```

The token is stored server-side and is required for event validation. The
assignment is unique per campaign, effective experiment, and anonymous visitor
and is created under an advisory lock. Each monthly occurrence therefore gets a
new assignment for the same visitor without rekeying or changing historical
rows. Existing assignments never get re-randomized.
Invalid allocation totals fail safely to `control` and produce a
non-sensitive server warning. With the default disabled campaign, assignment
returns `assignment: null` and `active: false`, avoiding production
contamination.

### Browser events

`POST /api/promotion/events`

Request:

```json
{
  "assignment_token": "opaque-server-generated-credential",
  "event_name": "promo_popup_impression",
  "event_id": "browser-generated-id",
  "page_path": "/",
  "source": "build_fee_waiver_popup",
  "trigger_type": "time_and_scroll",
  "seconds_on_page": 31,
  "scroll_depth": 0.62,
  "cta_label": "Get My Free Homepage Direction",
  "dismissal_type": "no_thanks"
}
```

Only these browser event names are accepted:

`promo_popup_eligible`, `promo_popup_assigned`,
`promo_popup_impression`, `promo_popup_cta_clicked`,
`promo_popup_dismissed`, `promo_flow_opened`, `promo_form_started`,
`promo_form_submitted`, `standard_cta_clicked`, `standard_form_started`,
`standard_form_submitted`.

Events are durable, idempotent by assignment and `event_id`, and contain no
arbitrary JSON. The server rechecks live dates, page eligibility, popup
enabled state, control assignment, configured trigger thresholds, and
assignment suppression before accepting an impression. An impression cannot
be manufactured by sending an eligibility event. Dismissals, CTA clicks, and
form submissions update durable suppression fields; later assignment responses
include `suppressed: true`. A control assignment never receives an accepted
impression.

## Admin API

First call `GET /api/promotion/admin/session`:

```json
{ "authenticated": false }
```

After login, it returns `{ "authenticated": true, "csrfToken": "..." }`.

* `POST /api/promotion/admin/login` — body `{username,password}`; returns
  `{authenticated:true,csrfToken}` and sets the signed cookie.
* `POST /api/promotion/admin/logout` — requires `X-CSRF-Token`.
* `GET /api/promotion/admin/campaign` — returns `{campaign}`.
* `PATCH /api/promotion/admin/campaign` — accepts `{campaign:{...},
  confirmEnabled?,confirmDeadline?,confirmRecurrenceChange?}` and returns
  `{campaign}`. `recurrenceMode` is `manual` or `monthly`. Admin GET/PATCH
  always use the raw `experimentId` and stored manual date fields; no effective
  experiment ID is persisted to the campaign. Changing `recurrenceMode` or
  `timezone` requires `confirmRecurrenceChange: true`. Editable fields are all
  documented campaign fields except IDs, timestamps, and version.
* `POST /api/promotion/admin/campaign/pause` — kill switch; immediately sets
  `manualKillSwitch` and disables the campaign. Returns `{campaign,paused:true}`.

`PATCH` validates recurrence mode, timezone, dates, paths, allocations (must
total 100), thresholds, and text bounds. Enabling a manual campaign without
real dates is rejected.

### Report

`GET /api/promotion/admin/report`

Supported query filters are `startDate`, `endDate`, `campaignId`, `stage`,
`variant`, `trafficSource`, `utmCampaign`, `deviceType`,
`businessCategory`, `leadStatus`, `assignedTeamMember`, `monthlyPlan`, and
`occurrenceKey` (`YYYY-MM`).

Response:

```json
{
  "campaign": {},
  "periods": [
    {
      "experimentId": "build-fee-waiver-v1:2026-09",
      "occurrenceKey": "2026-09"
    }
  ],
  "status": "Draft",
  "metrics": [
    {
      "variant": "control",
      "counts": {
        "promo_popup_assigned": 10,
        "standard_form_submitted": 2
      },
      "eligibleVisitors": 10,
      "assignedVisitors": 10,
      "standardQualifiedLeads": 1,
      "promotionQualifiedLeads": 0,
      "rates": {
        "popupViewRate": 0,
        "popupCtr": 0,
        "formCompletionRate": 0,
        "qualifiedRequestRate": 0.1,
        "fitCallAttendanceRate": 0,
        "firstPaymentConversion": 0
      }
    }
  ],
  "leads": [],
  "economics": [],
  "evaluation": {
    "ready": false,
    "minEvaluationDays": 14,
    "minEligibleVisitors": 200,
    "elapsedDays": 0,
      "eligibleVisitors": 10,
      "occurrenceKey": "2026-09",
      "periodStartDateTime": "2026-09-01T07:00:00.000Z",
      "scope": "current_month"
  },
  "guidance": "Evaluate variants using qualified requests, held fit calls, first monthly payments, delivery capacity, refunds, cancellations, and customer fit—not click-through rate alone."
}
```

`occurrenceKey` filters assignments by the exact effective assignment
`experiment_id` (`campaign.experiment_id || ':' || occurrenceKey`); events,
leads, outcomes, and economics are all derived from that selected assignment
cohort. `periods` lists existing effective experiments for the selected
campaign and includes the current monthly occurrence even before it has an
assignment. Historical unsuffixed experiments remain visible with
`occurrenceKey: null`. Counts are distinct assignments per event, and qualified/downstream counts
are distinct local leads. Metrics and leads use the same filters. Economics
counts only the earliest `monthly_payment` record for each lead in
`firstPaymentsCollected`; `totalMonthlyPayments` includes every recorded
monthly payment. `grossProfitEstimate` is `null` and `costsComplete` is false
unless every attributed lead in the filtered cohort has explicit, complete
delivery and support cost records. The API never fabricates profitability.

For a monthly report with `occurrenceKey`, evaluation uses that occurrence's
local month-start and reports `scope: "selected_occurrence"`. Without an
occurrence filter, metrics remain the requested all-history aggregate, while
evaluation intentionally uses only the current month's matching assignment
cohort and local month-start (`scope: "current_month"`). This explicit split
prevents all-history counts from being compared to the current month's elapsed
days. Manual campaigns retain `scope: "campaign"`.

`GET /api/promotion/admin/export?type=aggregate|leads` accepts the same
filters and emits CSV from the same report query. Formula-like cell prefixes
are escaped. The leads export is private and contains the configured
dashboard lead fields, including the authorized private contact fields and
submitted note for the matching records.

### Lead management

`PATCH /api/promotion/admin/leads/:id` accepts:

`status`, `qualificationStatus`, `noFitReason`, `notes`, `fitCallDate`,
`fitCallStatus`, `directionStatus`, `promotionAcceptanceStatus`,
`waivedBuildFeeAmount`, `monthlyPlan`, `firstPaymentStatus`, `launchStatus`,
`refundCancellationStatus`, `assignedTeamMember`, `businessCategory`,
`declaredWebsiteGoal`, and `declaredTiming`.

Lead statuses are the standard values `new`, `contacted`, `qualified`,
`not_qualified`, `fit_call_booked`, `fit_call_held`,
`homepage_direction_in_progress`, `homepage_direction_delivered`,
`promotion_accepted`, `first_payment_collected`, `launched`,
`refund_or_guarantee_claim`, `cancelled`, `payment_failed`, `closed_lost`.
No-fit reasons are `not_a_serviceable_business`, `out_of_scope`,
`no_decision_maker`, `not_ready`, `cannot_sustain_monthly_plan`,
`no_response`, `capacity_limit`, `timeline_mismatch`, and `other`.
`noFitReason: "other"` requires a non-empty note. Every changed field appends
an immutable status-history row. Outcome events are inserted at most once per
lead/outcome.

`POST /api/promotion/admin/leads/:id/economics` accepts append-only records:

```json
{
  "kind": "delivery_cost",
  "amount": 500,
  "costsComplete": true
}
```

Kinds are `waived_build_fee`, `monthly_payment`, `delivery_cost`,
`support_cost`, and `refund`. Amounts are non-negative. Records are never
overwritten.

`GET /api/promotion/admin/leads/:id` returns the private lead plus
camelCase `history` and `economics` arrays for the dashboard's lead detail
view. It is authenticated but does not mutate state.

## Existing lead-form integration

`POST /api/leads` keeps its existing form fields, Resend notification behavior,
and validation path. It now also accepts the existing hidden promotion metadata
plus `assignment_token`. The token is authoritative: campaign, experiment,
variant, and anonymous visitor values are compared with the durable
assignment, rather than trusted from the browser.

On an accepted attributed submission, the server generates an
`internal_lead_id`, stores the private attribution row without putting lead
PII in the event table, records the appropriate form-submission event, and
forwards snake_case attribution metadata and `internal_lead_id` through the
existing Resend email path. The JSON response includes
`{success:true,internal_lead_id}`. The token itself is not forwarded to email
or any notification payload.

Assignment tokens for prior monthly occurrences remain resolvable so their
historical records and reports remain intact. They cannot create a new
attributed lead or new browser activity in a later month; a lead submission
with an expired monthly token is rejected.

The dashboard report includes every stored submission: attributed rows are
joined to their assignment/campaign when present, while ordinary submissions
remain visible through the left join with `campaignId`, `experimentId`, and
`experimentVariant` set to `null`. The default report does not silently drop
these general leads.

Lead report rows include `occurrenceKey` (or `null` for unsuffixed historical
assignments), and the private leads CSV includes both `experimentId` and
`occurrenceKey` so exported monthly cohorts remain distinguishable.

Successful submissions are sent through Resend using only server-side
`RESEND_API_KEY`, `RESEND_FROM_EMAIL`, `LEADS_RECIPIENT_EMAIL`, and optional
`OPTIONAL_SECONDARY_LEADS_RECIPIENT_EMAIL`. A failed notification marks the
private row as `emailNotificationStatus: "failed"` without claiming that the
email was delivered; an authorized administrator can call
`POST /api/promotion/admin/leads/:id/resend-email` with the CSRF token. A
retry for the same assignment is idempotent and does not create a second
private lead or funnel event.

Hidden metadata names:

`campaign_id`, `experiment_id`, `experiment_variant`,
`anonymous_visitor_id`, `promotion_source`, `popup_trigger_type`,
`popup_impression_timestamp`, `popup_cta_clicked_timestamp`,
`first_touch_source`, `last_touch_source`, `utm_source`, `utm_medium`,
`utm_campaign`, `utm_term`, `utm_content`, `referrer`, `landing_page`, and
`device_type`.

`promotion_source` is `build_fee_waiver_popup` for popup-originated requests
and `standard_homepage_cta` for ordinary CTA submissions. Existing form
validation and consent behavior remains the responsibility of the existing
form path; this integration does not add user-visible fields.

`idempotency_key` is the stable client-generated submission key expected by
`POST /api/leads` (the database stores it in the private
`promotion_lead_attribution.submission_id` column). The popup integration must
use the same key on retries; the ordinary form uses it even without an
assignment token. The server stores the private submission once, claims one
notification sender, and returns the same `internal_lead_id` on retries
without sending a duplicate email.

Client-source alignment: `BookCallForm` is the only current browser caller of
`/api/leads`; it creates the key with `createClientEventId()` and sends it as
`idempotency_key`. The backend intentionally matches that existing field and
does not add a new form field or require a business name on the existing
real-estate flow.

## Event and setup checklist

The durable event vocabulary is:

`promo_popup_eligible`, `promo_popup_assigned`, `promo_popup_impression`,
`promo_popup_cta_clicked`, `promo_popup_dismissed`, `promo_flow_opened`,
`promo_form_started`, `promo_form_submitted`, `standard_cta_clicked`,
`standard_form_started`, `standard_form_submitted`, `lead_qualified`,
`lead_not_qualified`, `fit_call_booked`, `fit_call_held`,
`homepage_direction_delivered`, `promotion_accepted`,
`monthly_plan_first_payment_collected`, `launch_completed`,
`refund_or_guarantee_claim`, `cancellation_or_payment_failure`.

The first eleven are accepted from the browser. The outcome events are
generated by the authenticated lead/status workflow, so a browser cannot
spoof a qualified lead, payment, launch, refund, or cancellation.

To activate:

1. Configure `PROMOTION_ADMIN_PASSWORD` and `SESSION_SECRET` (and set an
   explicit origin in production).
2. Log in and fetch the default campaign.
3. For a manual campaign, PATCH real `startDateTime`, `endDateTime`, and the
   factual `deadlineDisplayText`, with `confirmDeadline: true` if changing an
   existing deadline. For the configured monthly campaign, confirm any
   recurrence/timezone change with `confirmRecurrenceChange: true`; public
   period fields are derived automatically.
4. Enable with `confirmEnabled: true`.
5. Verify assignment and impression events in the private report.

To pause, call the admin pause endpoint with the current CSRF token. Variant B
(`direction_led`) is implemented in the allocation and assignment system but
is disabled by default at 0%.

The offer may be described truthfully as a recurring monthly offer. Its
server-derived month-end display is a factual calendar cutoff, not a countdown
or invented scarcity. No fake scarcity, stock visual, illustration, prize
treatment, or AI-generated visual is part of this backend.