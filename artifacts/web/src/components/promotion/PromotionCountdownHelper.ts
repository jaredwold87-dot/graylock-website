export function getCountdownState(
  deadlineMs: number,
  nowMs: number
) {
  const remainingMs = deadlineMs - nowMs;
  const expired = !Number.isFinite(remainingMs) || remainingMs <= 0;
  // Show countdown only in the final 72 hours
  const showCountdown = remainingMs > 0 && remainingMs <= 72 * 60 * 60 * 1000;

  const totalSeconds = Math.max(0, Math.floor(remainingMs / 1000));
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);

  return {
    expired,
    showCountdown,
    days: String(days).padStart(2, "0"),
    hours: String(hours).padStart(2, "0"),
    minutes: String(minutes).padStart(2, "0"),
  };
}
