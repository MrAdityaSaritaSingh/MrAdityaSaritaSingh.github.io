/**
 * PostHog Analytics Hub
 *
 * This file manages custom event tracking for user behavior analysis.
 * It also contains a commented-out example of an A/B test for future reference.
 *
 * Table of Contents:
 * 1. Main Initialization
 * 2. Event Tracking Definitions
 *    - setupHomepageCtaTracking()
 *    - setupResumeTracking()
 *    - setupProjectLinkTracking()
 *    - setupTimelineTracking()
 * 3. Helper Functions
 *    - trackClick()
 * 5. A/B Test Example (for reference)
 *    - setupDummyButtonColorTest()
 */

document.addEventListener("DOMContentLoaded", function () {
    if (window.__internal_traffic) {
        return;
    }

    // First, check if the PostHog object is available on the window.
    if (typeof posthog === "undefined") {
        console.error(
            "PostHog is not defined. Make sure the PostHog snippet is included before this script."
        );
        return;
    }

    /**
     * ========================================================================
     * 1. Main Initialization
     * ========================================================================
     * Call the functions that set up your event trackers and user identification.
     */
    setupHomepageCtaTracking();
    setupResumeTracking();
    setupProjectLinkTracking();
    setupTimelineTracking();
    setupCaseStudyTracking();
    setupSocialTracking();
    setupContactTracking();


    /**
     * ========================================================================
     * 5. A/B Test Example (for reference)
     * ========================================================================
     * The section below is a disabled, commented-out example. To run a real
     * A/B test, you would uncomment this, create the feature flag in PostHog,
     * and adapt the code to your needs.
     */
    /*
  posthog.onFeatureFlags(function() {
    // This function ensures your A/B test code only runs after the flags
    // have been loaded from PostHog.
    setupDummyButtonColorTest();
  });
  */
});

/**
 * ========================================================================
 * 2. Event Tracking Definitions
 * ========================================================================
 * Functions dedicated to tracking specific user interactions.
 */

/**
 * EVENT TRACKER: Homepage CTA Clicks
 *
 * - **Goal:** Segment users based on which primary CTA they click.
 * - **Events Captured:**
 *   - `cta_click` on "View My Resume"
 *   - `cta_click` on "Explore My Portfolio"
 */
function setupHomepageCtaTracking() {
    const cta1 = document.getElementById("cta-button-1");
    const cta2 = document.getElementById("cta-button-2");

    // Exit gracefully if the buttons aren't on the current page.
    if (!cta1 || !cta2) {
        return;
    }

    // Attach a click listener to the first button.
    cta1.addEventListener("click", function () {
        const button_text = cta1.innerText.trim();
        trackClick("cta_click", button_text);
    });

    // Attach a click listener to the second button.
    cta2.addEventListener("click", function () {
        const button_text = cta2.innerText.trim();
        trackClick("cta_click", button_text);
    });
}

/**
 * EVENT TRACKER: Resume Download Button
 *
 * - **Goal:** Track every time a user downloads the resume PDF.
 * - **Event Captured:** `resume_downloaded`
 */
function setupResumeTracking() {
    const downloadButton = document.getElementById("resume-download-button");

    // Exit gracefully if the button isn't on the current page.
    if (!downloadButton) {
        return;
    }

    downloadButton.addEventListener("click", function () {
        posthog.capture("resume_downloaded");
    });
}

/**
 * EVENT TRACKER: Project Link Clicks
 *
 * - **Goal:** Track which projects users are viewing.
 * - **Event Captured:** `project_link_clicked`
 */
function setupProjectLinkTracking() {
    const projectLinks = document.querySelectorAll("[data-track-project]");

    projectLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            const projectName = link.getAttribute("data-track-project");
            posthog.capture("project_link_clicked", {
                project_name: projectName
            });
        });
    });
}

/**
 * EVENT TRACKER: Timeline Interaction
 *
 * - **Goal:** See which parts of the career story users engage with.
 * - **Event Captured:** `timeline_link_clicked`
 */
function setupTimelineTracking() {
    const timelineLinks = document.querySelectorAll("[data-track-timeline]");

    timelineLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            const timelineEvent = link.getAttribute("data-track-timeline");
            posthog.capture("timeline_link_clicked", {
                timeline_event: timelineEvent
            });
        });
    });
}

/**
 * EVENT TRACKER: Case Study Clicks
 *
 * - **Goal:** Track interest in specific case studies.
 * - **Event Captured:** `case_study_clicked`
 */
function setupCaseStudyTracking() {
    const caseStudyLinks = document.querySelectorAll("[data-track-case-study]");

    caseStudyLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            const caseStudyTitle = link.getAttribute("data-track-case-study");
            posthog.capture("case_study_clicked", {
                case_study_title: caseStudyTitle
            });
        });
    });
}

/**
 * EVENT TRACKER: Social Media Clicks
 *
 * - **Goal:** Track which social platforms users visit.
 * - **Event Captured:** `social_link_clicked`
 */
function setupSocialTracking() {
    // Select links in footer and author profile that point to social media
    const socialLinks = document.querySelectorAll(".author__urls-wrapper a, .page__footer-follow a");

    socialLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            // Try to find the label text or icon class to identify the platform
            let platform = link.innerText.trim();
            if (!platform) {
                const icon = link.querySelector("i");
                if (icon) {
                    // Extract platform from class name (e.g., "fa-twitter" -> "twitter")
                    const classList = icon.className;
                    if (classList.includes("twitter")) platform = "Twitter";
                    else if (classList.includes("linkedin")) platform = "LinkedIn";
                    else if (classList.includes("github")) platform = "GitHub";
                    else if (classList.includes("instagram")) platform = "Instagram";
                    else platform = "Unknown";
                }
            }

            posthog.capture("social_link_clicked", {
                platform: platform,
                url: link.href
            });
        });
    });
}

/**
 * EVENT TRACKER: Contact Interactions
 *
 * - **Goal:** Track intent to contact.
 * - **Event Captured:** `contact_link_clicked`
 */
function setupContactTracking() {
    // "Let's Connect" button on homepage
    const connectBtn = document.querySelector(".connect-section .cta-button");
    if (connectBtn) {
        connectBtn.addEventListener("click", function () {
            posthog.capture("contact_link_clicked", {
                type: "homepage_cta"
            });
        });
    }

    // Email links
    const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
    emailLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            posthog.capture("contact_link_clicked", {
                type: "email_link",
                email: link.href.replace("mailto:", "")
            });
        });
    });
}

/**
 * ========================================================================
 * 3. User Identification
 * ========================================================================
 */

/**
 * ========================================================================
 * 4. Helper Functions
 * ========================================================================
 * Reusable functions to simplify tracking.
 */

/**
 * A generic function to capture click events.
 * @param {string} eventName - The name of the event to capture (e.g., 'cta_click').
 * @param {string} button_identifier - A string identifying the button (e.g., its text).
 */
function trackClick(eventName, button_identifier) {
    // The second argument to `capture` is an object of custom properties.
    // These properties allow you to filter and segment data in PostHog.
    posthog.capture(eventName, {
        button_id: button_identifier,
    });
}

/**
 * ========================================================================
 * DUMMY A/B TEST EXAMPLE (FOR REFERENCE)
 * ========================================================================
 */

/**
 * EXPERIMENT: Dummy Button Color Test
 *
 * - **Feature Flag Key:** `dummy-button-color-test`
 * - **Hypothesis:** A green button will get more clicks than a blue button.
 * - **Success Metric:** `dummy_click` event.
 */
/*
function setupDummyButtonColorTest() {
  // 1. Define the element you want to test.
  const dummyButton = document.getElementById('some-other-button');
  if (!dummyButton) {
    return; // Exit if the element doesn't exist on this page. 
  }

  // 2. Get the feature flag value from PostHog.
  const flagValue = posthog.getFeatureFlag('dummy-button-color-test');

  // 3. Apply changes based on the variant.
  if (flagValue === 'test') {
    // This is the "test" variant. Change the button color to green.
    dummyButton.style.backgroundColor = 'green';
  } else {
    // This is the "control" variant. Keep the button blue.
    dummyButton.style.backgroundColor = 'blue';
  }

  // 4. Track the goal metric (e.g., a click).
  dummyButton.addEventListener('click', function() {
    posthog.capture('dummy_click', {
      button_id: 'dummy-button',
      variant: flagValue || 'control' // Record which variant the user was in.
    });
  });
}
*/
