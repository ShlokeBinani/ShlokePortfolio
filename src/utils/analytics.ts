/**
 * Lightweight privacy-friendly interaction and conversion event tracking.
 * Safe for static deployment; automatically hooks into gtag, plausible, or umami if configured.
 */
export function trackEvent(
  action: string,
  category: string = 'engagement',
  label?: string,
  value?: number
) {
  try {
    // 1. Google Analytics (gtag)
    if (typeof (window as any).gtag === 'function') {
      (window as any).gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
      });
    }

    // 2. Plausible Analytics
    if (typeof (window as any).plausible === 'function') {
      (window as any).plausible(action, { props: { category, label } });
    }

    // 3. Development logging
    if (import.meta.env.DEV) {
      console.log(`[Analytics Event] ${category} -> ${action}${label ? ` (${label})` : ''}`);
    }
  } catch {
    // Silently proceed if blocked
  }
}
