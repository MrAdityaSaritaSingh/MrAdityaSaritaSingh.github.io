/**
 * Custom Analytics Tracking
 * Tracks specific events for Projects and Case Studies
 * Integrates with Google Analytics 4 and PostHog
 */

document.addEventListener('DOMContentLoaded', function() {
  // Wait a moment to ensure analytics libraries are loaded
  setTimeout(trackPageEvent, 1000);
  
  // Initialize click tracking for downloads
  initDownloadTracking();
});

function trackPageEvent() {
  const layoutMeta = document.querySelector('meta[name="page-layout"]');
  const titleMeta = document.querySelector('meta[name="page-title"]');
  const categoriesMeta = document.querySelector('meta[name="page-categories"]');
  
  if (!layoutMeta) return;

  const layout = layoutMeta.getAttribute('content');
  const title = titleMeta ? titleMeta.getAttribute('content') : document.title;
  const url = window.location.pathname;
  
  let categories = [];
  if (categoriesMeta) {
    try {
      categories = JSON.parse(categoriesMeta.getAttribute('content'));
    } catch (e) {
      categories = [categoriesMeta.getAttribute('content')];
    }
  }
  
  const categoryString = Array.isArray(categories) ? categories.join(',') : categories;

  // Track Project Views
  if (layout === 'project') {
    sendEvent('view_project', {
      project_title: title,
      project_category: categoryString,
      page_path: url
    });
  }
  
  // Track Case Study Views (Posts)
  else if (layout === 'single') {
    sendEvent('view_case_study', {
      case_study_title: title,
      case_study_category: categoryString,
      page_path: url
    });
  }
}

function initDownloadTracking() {
  // Track Download Button Clicks
  document.querySelectorAll('[data-track-download]').forEach(btn => {
    btn.addEventListener('click', function() {
      const fileUrl = this.getAttribute('data-file-url');
      const fileName = this.getAttribute('data-file-name');
      
      sendEvent('click_download', {
        file_url: fileUrl,
        file_name: fileName,
        page_path: window.location.pathname
      });
    });
  });

  // Track Open Button Clicks
  document.querySelectorAll('[data-track-open]').forEach(btn => {
    btn.addEventListener('click', function() {
      const fileUrl = this.getAttribute('data-file-url');
      const fileName = this.getAttribute('data-file-name');
      
      sendEvent('click_open_embed', {
        file_url: fileUrl,
        file_name: fileName,
        page_path: window.location.pathname
      });
    });
  });
}

/**
 * Helper to send events to all active providers
 */
function sendEvent(eventName, params) {
  // console.log(`[Analytics] Tracking ${eventName}:`, params);

  // Google Analytics 4
  if (typeof gtag === 'function') {
    gtag('event', eventName, params);
  }

  // PostHog
  if (typeof posthog !== 'undefined') {
    posthog.capture(eventName, params);
  }
}

// Expose trackEvent globally
window.trackEvent = sendEvent;
