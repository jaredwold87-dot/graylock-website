import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { useLocation } from "wouter";
import { useBookCallOptional } from "@/components/booking/BookCallContext";
import {
  createClientEventId,
  getAnonymousVisitorId,
  getDefaultPreviewCampaign,
  getPromotionApiUrl,
  getPromotionAttribution,
  getPromotionPreviewVariant,
  getPromotionOccurrenceKey,
  getPromotionRequestContext,
  getPromotionSuppressionState,
  getStoredPromotionAssignment,
  isPromotionStorageAvailable,
  isPromotionPathEligible,
  mergePromotionAttribution,
  mergePromotionCampaign,
  nowIso,
  promotionConfigHash,
  registerPromotionEventSender,
  savePromotionAssignment,
  savePromotionSuppressionState,
  setPromotionAttribution,
  trackPromotionEvent,
  type PromotionAssignment,
  type PromotionCampaign,
  type PromotionEventFields,
  type PromotionEventName,
  type PromotionLeadAttribution,
  type PromotionVariant,
} from "@/lib/promotion";
import { PromotionPopup } from "./PromotionPopup";

interface PromotionCampaignResponse {
  campaign?: Partial<PromotionCampaign> | null;
  serverNow?: string;
  active?: boolean;
}

interface PromotionAssignmentResponse {
  assignment?: (PromotionAssignment & { suppressed?: boolean }) | null;
  campaign?: Partial<PromotionCampaign> | null;
  serverNow?: string;
  active?: boolean;
  suppressed?: boolean;
}

const PROMOTION_ACTIVE_EVENT = "graylock:promotion-active-change";
const INTRO_COMPLETE_EVENT = "graylock:intro-complete";

function isValidAllocation(campaign: PromotionCampaign): boolean {
  const values = [
    campaign.trafficAllocationControl,
    campaign.trafficAllocationVariantA,
    campaign.trafficAllocationVariantB,
  ];
  const total = values.reduce((sum, value) => sum + value, 0);
  const usesPercentages = total > 1.001;
  return (
    values.every((value) => Number.isFinite(value) && value >= 0) &&
    (usesPercentages ? total > 99.9 && total < 100.1 : total > 0.999 && total < 1.001)
  );
}

function assignmentWithSafeVariant(
  assignment: PromotionAssignment,
  campaign: PromotionCampaign,
  forceControl = false,
): PromotionAssignment {
  if (forceControl) return { ...assignment, experiment_variant: "control" };
  if (isValidAllocation(campaign)) return assignment;
  // Invalid allocations must never produce a treatment.  The API remains the
  // source of the token/visitor relationship, but the client fails closed.
  console.error("Promotion campaign has invalid traffic allocation; using Control.");
  return { ...assignment, experiment_variant: "control" };
}

function campaignPeriodKey(campaign: PromotionCampaign | null | undefined): string {
  if (!campaign) return "";
  return [
    campaign.campaignId,
    campaign.recurrenceMode,
    campaign.recurrenceMode === "monthly" ? getPromotionOccurrenceKey(campaign) : "",
    campaign.experimentId,
  ].join(":");
}

function suppressionScope(campaign: PromotionCampaign) {
  return {
    recurrenceMode: campaign.recurrenceMode,
    occurrenceKey: campaign.recurrenceMode === "monthly"
      ? getPromotionOccurrenceKey(campaign)
      : undefined,
    experimentId: campaign.experimentId,
  };
}

function buildAttribution(
  assignment: PromotionAssignment | null,
  path: string,
  source: string = "standard_homepage_cta",
  options: {
    persist?: boolean;
    popupTriggerType?: string;
    impressionTimestamp?: string;
    ctaClickedTimestamp?: string;
    preview?: boolean;
  } = {},
): PromotionLeadAttribution | null {
  if (!assignment) return null;
  const context = getPromotionRequestContext(path, { persist: options.persist !== false });
  return {
    campaign_id: assignment.campaign_id,
    experiment_id: assignment.experiment_id,
    experiment_variant: assignment.experiment_variant,
    anonymous_visitor_id: assignment.anonymous_visitor_id,
    assignment_token: assignment.assignment_token,
    assigned_at: assignment.assigned_at,
    promotion_source: source,
    popup_trigger_type: options.popupTriggerType,
    popup_impression_timestamp: options.impressionTimestamp,
    popup_cta_clicked_timestamp: options.ctaClickedTimestamp,
    first_touch_source: context.first_touch_source,
    last_touch_source: context.last_touch_source,
    utm_source: context.utm_source,
    utm_medium: context.utm_medium,
    utm_campaign: context.utm_campaign,
    utm_term: context.utm_term,
    utm_content: context.utm_content,
    referrer: context.referrer,
    landing_page: context.landingPage,
    device_type: context.device_type,
    preview: options.preview,
  };
}

async function fetchCampaign(): Promise<{
  campaign: PromotionCampaign;
  active: boolean;
  serverNow: string;
} | null> {
  try {
    const response = await fetch(getPromotionApiUrl("/campaign"), {
      method: "GET",
      cache: "no-store",
      headers: { Accept: "application/json", "Cache-Control": "no-cache" },
    });
    if (!response.ok) return null;
    const data = (await response.json()) as PromotionCampaignResponse;
    return {
      campaign: mergePromotionCampaign(data.campaign),
      active: Boolean(data.active),
      serverNow: data.serverNow || nowIso(),
    };
  } catch {
    return null;
  }
}

export function PromotionProvider({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  const bookCall = useBookCallOptional();
  const [campaign, setCampaign] = useState<PromotionCampaign | null>(null);
  const [campaignActive, setCampaignActive] = useState(false);
  const [serverTimeOffsetMs, setServerTimeOffsetMs] = useState(0);
  const [assignment, setAssignment] = useState<PromotionAssignment | null>(null);
  const [assignmentConfirmed, setAssignmentConfirmed] = useState(false);
  const [assignmentSuppressed, setAssignmentSuppressed] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);
  const [introComplete, setIntroComplete] = useState(true);
  const [chatOpen, setChatOpen] = useState(false);
  const [formStarted, setFormStarted] = useState(false);
  const [previewVariant] = useState(getPromotionPreviewVariant);
  const [previewControlLabel, setPreviewControlLabel] = useState(false);

  const campaignRef = useRef<PromotionCampaign | null>(null);
  const campaignActiveRef = useRef(false);
  const assignmentRef = useRef<PromotionAssignment | null>(null);
  const locationRef = useRef(location);
  const previewRef = useRef(previewVariant);
  const routeStartedAtRef = useRef(Date.now());
  const impressionTrackedRef = useRef("");
  const popupTriggerRef = useRef<string>("time_scroll_threshold");
  const eventQueueRef = useRef<Array<{ eventName: PromotionEventName; fields: PromotionEventFields }>>([]);
  const mountedRef = useRef(true);
  const periodRequestVersionRef = useRef(0);
  const refreshRequestVersionRef = useRef(0);
  const campaignFetchVersionRef = useRef(0);

  useEffect(() => {
    locationRef.current = location;
    routeStartedAtRef.current = Date.now();
    impressionTrackedRef.current = "";
    setPopupOpen(false);
    setFormStarted(false);
    setIntroComplete(
      location !== "/" ||
        typeof document === "undefined" ||
        !document.querySelector(".intro-screen"),
    );
  }, [location]);

  const applyCampaign = useCallback((nextCampaign: PromotionCampaign, active: boolean) => {
    const previous = campaignRef.current;
    if (previous && campaignPeriodKey(previous) !== campaignPeriodKey(nextCampaign)) {
      // A monthly occurrence is a new experiment period. Do not allow an
      // assignment, popup impression, route timer, or booking attribution
      // from the previous period to cross that boundary.
      periodRequestVersionRef.current += 1;
      assignmentRef.current = null;
      setAssignment(null);
      setAssignmentConfirmed(false);
      setAssignmentSuppressed(false);
      setPromotionAttribution(null);
      eventQueueRef.current = [];
      impressionTrackedRef.current = "";
      popupTriggerRef.current = "time_scroll_threshold";
      routeStartedAtRef.current = Date.now();
      setPopupOpen(false);
      setFormStarted(false);
      if (bookCall?.isOpen) bookCall.closeBookCall();
    }
    campaignRef.current = nextCampaign;
    campaignActiveRef.current = active;
    setCampaign(nextCampaign);
    setCampaignActive(active);
    if (!active || !nextCampaign.popupEnabled) {
      setPopupOpen(false);
      if (typeof window !== "undefined") {
        window.dispatchEvent(new Event(PROMOTION_ACTIVE_EVENT));
      }
    }
  }, [bookCall]);

  const sendEvent = useCallback((eventName: PromotionEventName, fields: PromotionEventFields) => {
    if (previewRef.current) return;
    const currentAssignment = assignmentRef.current;
    const currentCampaign = campaignRef.current;
    if (
      currentAssignment &&
      currentCampaign &&
      (currentAssignment.campaign_id !== currentCampaign.campaignId ||
        currentAssignment.experiment_id !== currentCampaign.experimentId)
    ) {
      // An event emitted by an abandoned period must never be attributed to
      // the newly active assignment.
      return;
    }
    if (!currentAssignment?.assignment_token || !currentCampaign?.campaignId) {
      if (eventQueueRef.current.length < 50) {
        eventQueueRef.current.push({ eventName, fields });
      }
      return;
    }

    const path = fields.page_path || locationRef.current || "/";
    const body = {
      assignment_token: currentAssignment.assignment_token,
      event_name: eventName,
      event_id: createClientEventId(),
      page_path: path,
      source: typeof fields.source === "string" ? fields.source.slice(0, 160) : undefined,
      trigger_type:
        typeof fields.trigger_type === "string" ? fields.trigger_type.slice(0, 120) : undefined,
      seconds_on_page:
        typeof fields.seconds_on_page === "number"
          ? Math.max(0, Math.min(Math.round(fields.seconds_on_page), 86400))
          : undefined,
      scroll_depth:
        typeof fields.scroll_depth === "number"
          ? Math.max(0, Math.min(fields.scroll_depth, 1))
          : undefined,
      cta_label:
        typeof fields.cta_label === "string" ? fields.cta_label.slice(0, 160) : undefined,
      dismissal_type:
        typeof fields.dismissal_type === "string"
          ? fields.dismissal_type.slice(0, 60)
          : undefined,
    };
    fetch(getPromotionApiUrl("/events"), {
      method: "POST",
      keepalive: true,
      headers: { "Content-Type": "application/json", "Cache-Control": "no-cache" },
      body: JSON.stringify(body),
    }).catch(() => {
      // Event delivery is intentionally best effort; the lead path is separate.
    });

    const activeCampaign = campaignRef.current;
    if (!activeCampaign) return;
    const configHash = promotionConfigHash(activeCampaign);
    const state = getPromotionSuppressionState(
      activeCampaign.campaignId,
      configHash,
      suppressionScope(activeCampaign),
    );
    const next = { ...state, configHash };
    const timestamp = nowIso();
    if (eventName === "promo_form_started" || eventName === "standard_form_started") {
      next.formStartedAt = next.formStartedAt || timestamp;
      setFormStarted(true);
    }
    if (eventName === "promo_form_submitted" || eventName === "standard_form_submitted") {
      next.submittedAt = next.submittedAt || timestamp;
      setFormStarted(true);
      setPopupOpen(false);
    }
    if (next.formStartedAt || next.submittedAt) savePromotionSuppressionState(next);
  }, []);

  useEffect(() => {
    registerPromotionEventSender(sendEvent);
    return () => {
      mountedRef.current = false;
      registerPromotionEventSender(null);
    };
  }, [sendEvent]);

  const assignCampaign = useCallback(
    async (nextCampaign: PromotionCampaign, active: boolean) => {
      if (!active || !nextCampaign.campaignId || !nextCampaign.experimentId) return;
      const requestVersion = ++periodRequestVersionRef.current;
      const expectedPeriod = campaignPeriodKey(nextCampaign);
      setAssignmentConfirmed(false);
      const persist = !previewRef.current && isPromotionStorageAvailable();
      if (!persist) {
        // A treatment assignment is only useful when it can remain sticky.
        // Never create a server assignment that this browser cannot persist;
        // an unassigned visitor gets the unchanged/control experience.
        assignmentRef.current = null;
        setAssignment(null);
        setAssignmentSuppressed(true);
        setPromotionAttribution(null);
        return;
      }
      const visitorId = getAnonymousVisitorId({ persist });
      const context = getPromotionRequestContext(locationRef.current, { persist });
      const stored = persist
        ? getStoredPromotionAssignment(nextCampaign.campaignId, nextCampaign.experimentId)
        : null;
      if (stored) {
        if (
          requestVersion !== periodRequestVersionRef.current ||
          campaignPeriodKey(campaignRef.current) !== expectedPeriod
        ) {
          return;
        }
        const safeStored = assignmentWithSafeVariant(stored, nextCampaign);
        assignmentRef.current = safeStored;
        setAssignment(safeStored);
        setPromotionAttribution(buildAttribution(safeStored, locationRef.current));
      }

      try {
        const response = await fetch(getPromotionApiUrl("/assign"), {
          method: "POST",
          cache: "no-store",
          headers: { "Content-Type": "application/json", "Cache-Control": "no-cache" },
          body: JSON.stringify({
            anonymous_visitor_id: visitorId,
            page_path: context.pagePath,
            landing_page: context.landingPage,
            referrer: context.referrer,
            utm_source: context.utm_source,
            utm_medium: context.utm_medium,
            utm_campaign: context.utm_campaign,
            utm_term: context.utm_term,
            utm_content: context.utm_content,
            device_type: context.device_type,
            first_touch_source: context.first_touch_source,
            last_touch_source: context.last_touch_source,
          }),
        });
        if (!response.ok) return;
        const data = (await response.json()) as PromotionAssignmentResponse;
        if (
          !mountedRef.current ||
          requestVersion !== periodRequestVersionRef.current ||
          campaignPeriodKey(campaignRef.current) !== expectedPeriod
        ) {
          return;
        }
        const serverCampaign = mergePromotionCampaign(data.campaign ?? nextCampaign);
        if (campaignPeriodKey(serverCampaign) !== expectedPeriod) {
          // The server crossed a month boundary while this assignment request
          // was in flight. Install the new period and request its assignment;
          // the old response is intentionally discarded.
          applyCampaign(serverCampaign, Boolean(data.active));
          if (data.active) void assignCampaign(serverCampaign, true);
          return;
        }
        if (data.active === false) {
          applyCampaign(serverCampaign, false);
          return;
        }
        if (!data.assignment) return;
        const safeAssignment = assignmentWithSafeVariant(data.assignment, serverCampaign);
        campaignRef.current = serverCampaign;
        setCampaign(serverCampaign);
        assignmentRef.current = safeAssignment;
        setAssignment(safeAssignment);
        setAssignmentConfirmed(true);
        setAssignmentSuppressed(Boolean(data.assignment.suppressed || data.suppressed));
        setPromotionAttribution(buildAttribution(safeAssignment, locationRef.current));
        if (persist) savePromotionAssignment(safeAssignment);
        const pending = eventQueueRef.current.splice(0, eventQueueRef.current.length);
        pending.forEach(({ eventName, fields }) => sendEvent(eventName, fields));
      } catch {
        // No assignment means no popup.  Existing pages remain unchanged.
      }
    },
    [applyCampaign, sendEvent],
  );

  const refreshCampaign = useCallback(async () => {
    const refreshVersion = ++refreshRequestVersionRef.current;
    const fetchVersion = ++campaignFetchVersionRef.current;
    const result = await fetchCampaign();
    if (
      !result ||
      !mountedRef.current ||
      previewRef.current ||
      refreshVersion !== refreshRequestVersionRef.current ||
      fetchVersion !== campaignFetchVersionRef.current
    ) return result;
    const previous = campaignRef.current;
    applyCampaign(result.campaign, result.active);
    const serverTimestamp = Date.parse(result.serverNow);
    if (Number.isFinite(serverTimestamp)) setServerTimeOffsetMs(serverTimestamp - Date.now());
    if (
      result.active &&
      (!assignmentRef.current ||
        campaignPeriodKey(previous) !== campaignPeriodKey(result.campaign))
    ) {
      await assignCampaign(result.campaign, result.active);
    }
    return result;
  }, [applyCampaign, assignCampaign]);

  useEffect(() => {
    if (previewVariant) {
      const previewCampaign = getDefaultPreviewCampaign(null);
      const previewAssignment: PromotionAssignment = {
        campaign_id: previewCampaign.campaignId,
        experiment_id: previewCampaign.experimentId,
        experiment_variant: previewVariant,
        anonymous_visitor_id: getAnonymousVisitorId({ persist: false }),
        assigned_at: nowIso(),
        assignment_token: "preview-only",
        stage: "preview",
      };
      campaignRef.current = previewCampaign;
      campaignActiveRef.current = true;
      assignmentRef.current = previewAssignment;
      setCampaign(previewCampaign);
      setCampaignActive(true);
      setAssignment(previewAssignment);
      setAssignmentConfirmed(true);
      setAssignmentSuppressed(false);
      setPromotionAttribution(
        buildAttribution(previewAssignment, locationRef.current, "standard_homepage_cta", {
          persist: false,
          preview: true,
        }),
      );
      setPreviewControlLabel(previewVariant === "control");
      if (previewVariant !== "control") {
        // Preview bypasses the production wait/scroll gate so desktop and
        // mobile copy can be reviewed without contaminating live metrics.
        const timer = window.setTimeout(() => setPopupOpen(true), 0);
        return () => window.clearTimeout(timer);
      }
      return;
    }
    void refreshCampaign();
    return undefined;
  }, [previewVariant, refreshCampaign]);

  useEffect(() => {
    if (previewVariant) return;
    const timer = window.setInterval(() => void refreshCampaign(), 8000);
    return () => window.clearInterval(timer);
  }, [previewVariant, refreshCampaign]);

  useEffect(() => {
    if (previewVariant) return;
    const onIntroComplete = () => setIntroComplete(true);
    window.addEventListener(INTRO_COMPLETE_EVENT, onIntroComplete);
    return () => window.removeEventListener(INTRO_COMPLETE_EVENT, onIntroComplete);
  }, [previewVariant]);

  useEffect(() => {
    const state = (event: Event) => {
      const custom = event as CustomEvent<{ open?: boolean }>;
      setChatOpen(Boolean(custom.detail?.open));
    };
    window.addEventListener("graylock:chat-state", state);
    setChatOpen(document.body.dataset.chatOpen === "true");
    return () => window.removeEventListener("graylock:chat-state", state);
  }, []);

  useEffect(() => {
    if (previewVariant) return;
    if (chatOpen || bookCall?.isOpen) setPopupOpen(false);
  }, [bookCall?.isOpen, chatOpen, previewVariant]);

  useEffect(() => {
    const activeCampaign = campaignRef.current;
    const currentAssignment = assignmentRef.current;
    if (
      previewVariant ||
      !campaignActive ||
      !activeCampaign ||
      !activeCampaign.popupEnabled ||
      !currentAssignment ||
      currentAssignment.campaign_id !== activeCampaign.campaignId ||
      currentAssignment.experiment_id !== activeCampaign.experimentId ||
      !assignmentConfirmed ||
      !isPromotionPathEligible(activeCampaign, location) ||
      currentAssignment.experiment_variant === "control"
      || assignmentSuppressed
    ) {
      return;
    }

    const configHash = promotionConfigHash(activeCampaign);
    const state = getPromotionSuppressionState(
      activeCampaign.campaignId,
      configHash,
      suppressionScope(activeCampaign),
    );
    const normalizedState =
      state.configHash !== configHash
        ? {
            ...state,
            configHash,
          }
        : state;
    if (normalizedState.configHash !== state.configHash) savePromotionSuppressionState(normalizedState);
    // Dismissal hides this campaign's notice permanently, not the offer.
    const dismissedRecently = Boolean(normalizedState.dismissedAt);
    const permanentlySuppressed = Boolean(
      normalizedState.ctaClickedAt || normalizedState.formStartedAt || normalizedState.submittedAt,
    );
    if (dismissedRecently || permanentlySuppressed) return;

    const checkTrigger = () => {
      if (
        popupOpen ||
        bookCall?.isOpen ||
        chatOpen ||
        formStarted ||
        !introComplete ||
        document.visibilityState === "hidden"
      ) {
        return;
      }
      const elapsedSeconds = (Date.now() - routeStartedAtRef.current) / 1000;
      const documentHeight = Math.max(
        document.documentElement.scrollHeight,
        document.body.scrollHeight,
      );
      const viewportBottom = window.scrollY + window.innerHeight;
      const depth = documentHeight <= window.innerHeight
        ? 1
        : Math.max(0, Math.min(viewportBottom / documentHeight, 1));
      if (
        elapsedSeconds < activeCampaign.triggerMinimumSeconds ||
        depth < activeCampaign.triggerMinimumScrollDepth
      ) {
        return;
      }
      popupTriggerRef.current = "time_scroll_threshold";
      void (async () => {
        const triggerPeriod = campaignPeriodKey(activeCampaign);
        const fetchVersion = ++campaignFetchVersionRef.current;
        // Recheck the kill switch and deadline immediately before making the
        // dialog visible.
        const latest = await fetchCampaign();
        if (
          fetchVersion !== campaignFetchVersionRef.current ||
          !mountedRef.current ||
          campaignPeriodKey(campaignRef.current) !== triggerPeriod
        ) {
          return;
        }
        if (!latest?.active) {
          applyCampaign(latest?.campaign ?? activeCampaign, false);
          return;
        }
        if (
          campaignPeriodKey(latest.campaign) !== triggerPeriod ||
          !latest.campaign.popupEnabled
        ) {
          applyCampaign(latest.campaign, latest.active);
          if (campaignPeriodKey(latest.campaign) !== triggerPeriod) {
            await assignCampaign(latest.campaign, latest.active);
          }
          return;
        }
        if (popupOpen || bookCall?.isOpen || chatOpen || formStarted) return;
        applyCampaign(latest.campaign, latest.active);
        const serverTimestamp = Date.parse(latest.serverNow);
        if (Number.isFinite(serverTimestamp)) setServerTimeOffsetMs(serverTimestamp - Date.now());
        setPopupOpen(true);
      })();
    };
    checkTrigger();
    const interval = window.setInterval(checkTrigger, 1000);
    window.addEventListener("scroll", checkTrigger, { passive: true });
    return () => {
      window.clearInterval(interval);
      window.removeEventListener("scroll", checkTrigger);
    };
  }, [
    applyCampaign,
    bookCall?.isOpen,
    campaignActive,
    assignmentConfirmed,
    assignmentSuppressed,
    assignCampaign,
    chatOpen,
    formStarted,
    introComplete,
    location,
    popupOpen,
    previewVariant,
  ]);

  useEffect(() => {
    if (!popupOpen || !campaign || !assignment || previewVariant) return;
    if (!campaign.popupEnabled) {
      setPopupOpen(false);
      return;
    }
    const key = `${assignment.campaign_id}:${assignment.experiment_id}:${location}`;
    if (impressionTrackedRef.current === key) return;
    impressionTrackedRef.current = key;
    const seconds = (Date.now() - routeStartedAtRef.current) / 1000;
    const depth = Math.max(
      0,
      Math.min(
        1,
        (window.scrollY + window.innerHeight) /
          Math.max(document.documentElement.scrollHeight, document.body.scrollHeight),
      ),
    );
    const impressionTimestamp = nowIso();
    setPromotionAttribution(
      mergePromotionAttribution(
        getPromotionAttribution(),
        buildAttribution(assignment, location, "build_fee_waiver_popup", {
          popupTriggerType: popupTriggerRef.current,
          impressionTimestamp,
        }),
      ),
    );
    trackPromotionEvent("promo_popup_impression", {
      page_path: location,
      source: "build_fee_waiver_popup",
      trigger_type: popupTriggerRef.current,
      seconds_on_page: seconds,
      scroll_depth: depth,
    });
  }, [assignment, campaign, location, popupOpen, previewVariant]);

  const dismiss = useCallback(
    (dismissalType: "close_button" | "no_thanks" | "escape_key" | "backdrop_click") => {
      const currentCampaign = campaignRef.current;
      if (!currentCampaign || previewRef.current) {
        setPopupOpen(false);
        return;
      }
      const configHash = promotionConfigHash(currentCampaign);
    const state = getPromotionSuppressionState(
      currentCampaign.campaignId,
      configHash,
      suppressionScope(currentCampaign),
    );
      const next = { ...state, configHash, dismissedAt: nowIso() };
      savePromotionSuppressionState(next);
      setPopupOpen(false);
      setPromotionAttribution(
        mergePromotionAttribution(getPromotionAttribution(), {
          promotion_source: "standard_homepage_cta",
          popup_trigger_type: undefined,
          popup_impression_timestamp: undefined,
          popup_cta_clicked_timestamp: undefined,
        }),
      );
      trackPromotionEvent("promo_popup_dismissed", {
        page_path: locationRef.current,
        source: "build_fee_waiver_popup",
        trigger_type: popupTriggerRef.current,
        dismissal_type: dismissalType,
      });
    },
    [],
  );

  const openFromPopup = useCallback(
    (label: string) => {
      const currentCampaign = campaignRef.current;
      const currentAssignment = assignmentRef.current;
      const timestamp = nowIso();
      if (!currentCampaign || !currentAssignment) return;
      if (!previewRef.current) {
        const configHash = promotionConfigHash(currentCampaign);
        const state = getPromotionSuppressionState(
          currentCampaign.campaignId,
          configHash,
          suppressionScope(currentCampaign),
        );
        savePromotionSuppressionState({ ...state, configHash, ctaClickedAt: timestamp });
      }
      setPromotionAttribution(
        mergePromotionAttribution(
          getPromotionAttribution(),
          buildAttribution(currentAssignment, locationRef.current, "build_fee_waiver_popup", {
            popupTriggerType: popupTriggerRef.current,
            ctaClickedTimestamp: timestamp,
            preview: Boolean(previewRef.current),
          }),
        ),
      );
      trackPromotionEvent("promo_popup_cta_clicked", {
        page_path: locationRef.current,
        source: "build_fee_waiver_popup",
        trigger_type: popupTriggerRef.current,
        cta_label: label,
      });
      setPopupOpen(false);
      bookCall?.openBookCall({
        promotion: {
          ...(getPromotionAttribution() ?? {}),
          promotion_source: "build_fee_waiver_popup",
          popup_trigger_type: popupTriggerRef.current,
          popup_cta_clicked_timestamp: timestamp,
          preview: Boolean(previewRef.current),
        },
      });
    },
    [bookCall],
  );

  const variant = assignment?.experiment_variant;
  const showPopup = Boolean(
    popupOpen &&
      campaign &&
      campaign.popupEnabled &&
      (previewVariant || campaignActive) &&
      variant &&
      variant !== "control" &&
      variant !== undefined,
  );
  return (
    <>
      {children}
      {showPopup && campaign && variant && variant !== "control" && (
        <PromotionPopup
          open
          campaign={campaign}
          variant={variant}
          preview={Boolean(previewVariant)}
          serverTimeOffsetMs={serverTimeOffsetMs}
          onDismiss={dismiss}
          onCta={openFromPopup}
        />
      )}
      {Boolean(previewVariant) && (
        <div
          role="status"
          className="fixed top-0 left-0 right-0 z-[200] bg-[#1A1A1A] border-b-2 border-[#E85D26] py-2.5 px-4 text-center font-sans text-[11px] font-bold uppercase tracking-widest text-white shadow-sm"
        >
          Preview mode — submissions are disabled
          {!campaign?.endDateTime && previewVariant !== "control" && " · Sample deadline"}
          {previewVariant === "control" && " · Control variant (no popup)"}
        </div>
      )}
    </>
  );
}

export { PromotionPopup };