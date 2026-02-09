// Google Analytics event tracking utilities

// Extend Window interface for gtag
declare global {
  // eslint-disable-next-line no-unused-vars
  interface Window {
    gtag?: (
      _command: string,
      _eventName: string,
      _eventParams?: Record<string, any>
    ) => void
  }
}

/**
 * Track a custom event in Google Analytics
 * @param eventName - Name of the event (e.g., 'click', 'view', 'download')
 * @param eventParams - Additional parameters for the event
 */
export const trackEvent = (
  eventName: string,
  eventParams?: Record<string, any>
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, eventParams)
  }
}

// Predefined event tracking functions for common actions

export const trackProjectClick = (projectTitle: string, projectSlug: string) => {
  trackEvent('project_click', {
    project_title: projectTitle,
    project_slug: projectSlug,
    event_category: 'engagement',
    event_label: projectTitle
  })
}

export const trackBlogClick = (blogTitle: string, blogUrl: string) => {
  trackEvent('blog_click', {
    blog_title: blogTitle,
    blog_url: blogUrl,
    event_category: 'engagement',
    event_label: blogTitle,
    outbound: true
  })
}

export const trackResumeClick = (source: string) => {
  trackEvent('resume_click', {
    click_source: source, // 'navbar', 'mobile_menu', etc.
    event_category: 'conversion',
    event_label: 'Resume Download/View'
  })
}

export const trackSocialClick = (platform: string, url: string) => {
  trackEvent('social_click', {
    platform: platform,
    url: url,
    event_category: 'engagement',
    event_label: platform,
    outbound: true
  })
}

export const trackEmailClick = () => {
  trackEvent('email_click', {
    event_category: 'conversion',
    event_label: 'Contact Email'
  })
}

export const trackGithubClick = (source: string) => {
  trackEvent('github_click', {
    click_source: source,
    event_category: 'engagement',
    event_label: 'GitHub Profile',
    outbound: true
  })
}

export const trackHireMeClick = () => {
  trackEvent('hire_me_click', {
    event_category: 'conversion',
    event_label: 'Hire Me Page'
  })
}
