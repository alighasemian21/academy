declare global {
  interface Window {
    gtag?: (
      command: string,
      targetId: string,
      config?: Record<string, any>
    ) => void;
  }
}

export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

export const trackFormSubmission = (formName: string) => {
  trackEvent('form_submit', 'Form', formName);
};

export const trackCourseClick = (courseTitle: string) => {
  trackEvent('course_click', 'Course', courseTitle);
};

export const trackEnrollment = (courseId: string) => {
  trackEvent('enrollment', 'Course', courseId, 1);
};

export const trackPageView = (pagePath: string, pageTitle: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', process.env.NEXT_PUBLIC_GA_ID || '', {
      page_path: pagePath,
      page_title: pageTitle,
    });
  }
};

