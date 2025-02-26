type AnalyticsEvent = {
  name: string
  properties?: Record<string, unknown>
}

export const trackEvent = ({ name, properties = {} }: AnalyticsEvent) => {
  // Replace with your analytics provider
  if (typeof window !== "undefined" && window.plausible) {
    window.plausible(name, { props: properties })
  }
}

export const trackPageView = (url: string) => {
  trackEvent({
    name: "pageview",
    properties: { url },
  })
}

