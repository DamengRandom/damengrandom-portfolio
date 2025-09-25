// Analytics utility for tracking user interactions and page views
// This can be extended to integrate with Google Analytics, Plausible, or other services

interface AnalyticsEvent {
  action: string
  category: string
  label?: string
  value?: number
}

interface PageViewData {
  page: string
  title: string
  referrer?: string
  timestamp: string
}

class Analytics {
  private isEnabled: boolean = false
  private events: AnalyticsEvent[] = []
  private pageViews: PageViewData[] = []

  constructor() {
    // Enable analytics in production or when explicitly enabled
    this.isEnabled = process.env.NODE_ENV === 'production' || 
                     process.env.NEXT_PUBLIC_ANALYTICS_ENABLED === 'true'
  }

  // Track page views
  trackPageView(page: string, title: string) {
    if (!this.isEnabled) return

    const pageViewData: PageViewData = {
      page,
      title,
      referrer: typeof window !== 'undefined' ? document.referrer : undefined,
      timestamp: new Date().toISOString()
    }

    this.pageViews.push(pageViewData)
    
    // Store in localStorage for persistence
    try {
      const storedViews = localStorage.getItem('portfolio-analytics-pageviews')
      const existingViews = storedViews ? JSON.parse(storedViews) : []
      existingViews.push(pageViewData)
      
      // Keep only last 100 page views to prevent storage bloat
      const recentViews = existingViews.slice(-100)
      localStorage.setItem('portfolio-analytics-pageviews', JSON.stringify(recentViews))
    } catch (error) {
      console.warn('Failed to store page view data:', error)
    }

    // Here you can add integration with external analytics services
    // Example: gtag('config', 'GA_MEASUREMENT_ID', { page_title: title, page_location: page })
    this.logEvent('page_view', 'navigation', page)
  }

  // Track custom events
  trackEvent(action: string, category: string, label?: string, value?: number) {
    if (!this.isEnabled) return

    const event: AnalyticsEvent = { action, category, label, value }
    this.events.push(event)

    // Store in localStorage
    try {
      const storedEvents = localStorage.getItem('portfolio-analytics-events')
      const existingEvents = storedEvents ? JSON.parse(storedEvents) : []
      existingEvents.push({ ...event, timestamp: new Date().toISOString() })
      
      // Keep only last 50 events
      const recentEvents = existingEvents.slice(-50)
      localStorage.setItem('portfolio-analytics-events', JSON.stringify(recentEvents))
    } catch (error) {
      console.warn('Failed to store event data:', error)
    }

    // Here you can add integration with external analytics services
    // Example: gtag('event', action, { event_category: category, event_label: label, value })
    this.logEvent(action, category, label)
  }

  // Track user interactions
  trackInteraction(element: string, action: string = 'click') {
    this.trackEvent(action, 'interaction', element)
  }

  // Track scroll depth
  trackScrollDepth(percentage: number) {
    this.trackEvent('scroll', 'engagement', `${percentage}%`, percentage)
  }

  // Track time on page
  trackTimeOnPage(seconds: number) {
    this.trackEvent('time_on_page', 'engagement', undefined, seconds)
  }

  // Get analytics summary
  getAnalyticsSummary() {
    try {
      const pageViews = localStorage.getItem('portfolio-analytics-pageviews')
      const events = localStorage.getItem('portfolio-analytics-events')
      
      return {
        pageViews: pageViews ? JSON.parse(pageViews) : [],
        events: events ? JSON.parse(events) : [],
        totalPageViews: pageViews ? JSON.parse(pageViews).length : 0,
        totalEvents: events ? JSON.parse(events).length : 0
      }
    } catch (error) {
      console.warn('Failed to get analytics summary:', error)
      return { pageViews: [], events: [], totalPageViews: 0, totalEvents: 0 }
    }
  }

  // Clear analytics data
  clearAnalyticsData() {
    try {
      localStorage.removeItem('portfolio-analytics-pageviews')
      localStorage.removeItem('portfolio-analytics-events')
      this.events = []
      this.pageViews = []
    } catch (error) {
      console.warn('Failed to clear analytics data:', error)
    }
  }

  // Private method for logging (can be extended for external services)
  private logEvent(action: string, category: string, label?: string) {
    if (process.env.NODE_ENV === 'development') {
      console.log(`[Analytics] ${action} | ${category}${label ? ` | ${label}` : ''}`)
    }
  }

  // Initialize Google Analytics (example)
  initializeGoogleAnalytics(measurementId: string) {
    if (typeof window === 'undefined' || !this.isEnabled) return

    // Load Google Analytics script
    const script = document.createElement('script')
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`
    script.async = true
    document.head.appendChild(script)

    // Initialize gtag
    const gtagFn: GtagFunction = function(...args: unknown[]) {
      (gtagFn.q = gtagFn.q || []).push(args)
    }
    window.gtag = window.gtag || gtagFn
    window.gtag('js', new Date())
    window.gtag('config', measurementId)
  }
}

// Create singleton instance
export const analytics = new Analytics()

// Convenience functions
export const trackPageView = (page: string, title: string) => analytics.trackPageView(page, title)
export const trackEvent = (action: string, category: string, label?: string, value?: number) => 
  analytics.trackEvent(action, category, label, value)
export const trackInteraction = (element: string, action?: string) => 
  analytics.trackInteraction(element, action)

// Type declarations for gtag (if using Google Analytics)
interface GtagFunction {
  (...args: unknown[]): void
  q?: unknown[]
}

declare global {
  interface Window {
    gtag: GtagFunction
  }
}