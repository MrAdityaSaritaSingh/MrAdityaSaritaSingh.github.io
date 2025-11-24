---
title: "Building My Digital Presence: A Product Approach"
date: 2025-01-01
categories: [Product Management, Digital Strategy, UX, Analytics]
tags: [Jekyll, Product Thinking, UX, Analytics]
image: /assets/images/website_homepage_full.png
description: "Applying product management principles to build and optimize my personal website as a central hub for my professional identity."
layout: project
feedback: true
drive_link: https://drive.google.com/file/d/1WfL9i4dBt5VKLNHTw4MRiPmI2TcAaB8w/view?usp=sharing
---

## Project Overview

In today's digital world, a personal website is more than a resume—it's a product. This project documents the ongoing development of my personal digital presence, `adityasrathore.com`. The goal was to create a central hub that not only showcases my work but also reflects my skills in product thinking, UX, and technical implementation. I treated this website as a product, with myself as the primary stakeholder and potential recruiters, collaborators, and readers as the target users.

## My Role: The Product Manager

As the sole developer and product manager for this site, I was responsible for the entire lifecycle:

-   **Strategy & Discovery:** Defining the "why" behind the website. I identified the core user need: a clear, concise, and engaging way for visitors to understand my professional story and capabilities.
-   **UX & Design:** Structuring the information architecture to be intuitive. I focused on a clean, scannable layout that guides the user through my journey, from my bio to my detailed project case studies.
-   **Technical Implementation:** Choosing and customizing the technology. I selected the **Jekyll** static site generator and the **Minimal Mistakes** theme for its balance of powerful features and customization flexibility.
-   **Analytics & Iteration:** Integrating analytics to understand user behavior. I implemented **Google Analytics** and **PostHog** to track user engagement, identify popular content, and gather insights for future improvements.

## Technical Architecture

### Technology Stack
-   **Static Site Generator:** Jekyll 4.x with Liquid templating
-   **Theme Framework:** Minimal Mistakes (customized)
-   **Frontend:** HTML5, CSS3 (SCSS), Vanilla JavaScript
-   **Hosting:** GitHub Pages
-   **Analytics:** Google Analytics (GA4) + PostHog
-   **Version Control:** Git + GitHub

### Site Architecture
The website follows a modular, data-driven architecture:
-   **Collections:** Projects and case studies stored as individual markdown files in `_projects/`
-   **Data Files:** YAML-based configuration for skills (`_data/skills.yml`)
-   **Dynamic Generation:** Jekyll processes Liquid templates at build time to generate static HTML
-   **Client-Side Interactivity:** Custom JavaScript for enhanced UX features

<img src="/assets/images/website_homepage_full.png" alt="Website Homepage" style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);" />

*Clean, responsive homepage with hero section and timeline*

## Technical Highlights

### 1. Interactive Skill-to-Project Filtering
Built a dynamic filtering system that connects skills to relevant projects:
-   **User Flow:** Click any skill in "Core Competencies" → Modal displays matching projects
-   **Implementation:**
    -   Skills defined in `_data/skills.yml` with tag mappings
    -   Project data dynamically generated from `_projects/*.md` files
    -   Client-side filtering using vanilla JavaScript
    -   Modal UI with smooth animations and keyboard navigation
-   **Technical Details:**
    -   Skill → Tag mapping stored in YAML for easy maintenance
    -   `project-data.js` processed by Jekyll to embed project metadata
    -   Fuzzy matching algorithm for flexible tag relationships

<img src="/assets/images/website_core_competencies.png" alt="Interactive Skill Filtering" style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);" />

*Click any skill to see related projects in an interactive modal*

### 2. Analytics Integration
Dual analytics setup for comprehensive insights:
-   **Google Analytics (GA4):**
    -   High-level traffic metrics and user demographics
    -   Acquisition channel tracking
    -   Custom event tracking for project views and skill clicks
-   **PostHog:**
    -   Session recordings to watch actual user interactions
    -   Heatmaps showing click patterns
    -   Funnel analysis for user journey optimization
    -   Privacy-focused, self-hosted option available

### 3. Data-Driven Configuration
Centralized data management for maintainability:
-   **Skills Management:** YAML file defines categories, skills, descriptions, and tag mappings
-   **Project Metadata:** Frontmatter in markdown files contains tags, categories, and metadata
-   **No Hardcoded Data:** All content loaded dynamically via Jekyll + Liquid
-   **Easy Updates:** Add new skills or projects by editing YAML/markdown—no code changes needed

### 4. Performance Optimization
-   **Static Generation:** Fast load times with pre-rendered HTML
-   **Lazy Loading:** Images loaded on-demand to reduce initial page weight
-   **Minification:** CSS and JS assets minified for production
-   **Caching Strategy:** GitHub Pages CDN for global content delivery

## Key Features & Outcomes

<img src="/assets/images/website_projects_section.png" alt="Portfolio Projects" style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);" />

*Comprehensive portfolio showcasing all projects with filtering*

-   **Centralized Professional Hub:** The website successfully consolidates my resume, portfolio, and case studies into a single, cohesive narrative.
-   **Responsive & Accessible Design:** The site is fully responsive, providing an optimal viewing experience on all devices, from desktops to mobile phones. Keyboard navigation and semantic HTML ensure accessibility.
-   **Interactive Skill Discovery:** Visitors can click on any skill to instantly see relevant projects, creating an engaging, exploration-based experience.
-   **Data-Driven Insights:**
    -   **Google Analytics:** Provides high-level traffic metrics, user demographics, and acquisition channels
    -   **PostHog:** Enables deeper analysis with session recordings and heatmaps
    -   **Event Tracking:** Custom events for "Project Viewed" and "Skill Click" provide granular engagement data
-   **Continuous Improvement Loop:** The analytics data provides a constant feedback loop, allowing me to treat the website as a living product that can be iteratively improved based on real user behavior.

## Challenges & Solutions

### Challenge 1: Complex Data Relationships
**Problem:** Needed to map skills to projects flexibly without hardcoding relationships.  
**Solution:** Implemented a two-tier system: skills in YAML reference project tags, creating a many-to-many relationship that's easy to maintain.

### Challenge 2: Client-Side vs Server-Side Rendering
**Problem:** Liquid templating happens at build time, but interactive features need runtime data.  
**Solution:** Used Jekyll to generate JavaScript files with frontmatter, allowing server-side data to be consumed client-side as needed.

### Challenge 3: Analytics Privacy
**Problem:** Wanted detailed analytics without compromising visitor privacy.  
**Solution:** Dual approach—GA4 for aggregate metrics, PostHog for detailed but anonymized session data with clear privacy policy.

## Impact & Learnings

This project demonstrates:
-   **Product Thinking:** Treating personal branding as a product development challenge
-   **Technical Versatility:** Full-stack implementation from architecture to deployment
-   **User-Centric Design:** Features driven by actual user needs and behavior
-   **Iterative Development:** Continuous improvement based on data and feedback

The website serves as both a portfolio piece and a case study in applied product management—using data, user feedback, and technical implementation to create a compelling digital presence.

## Future Scope

My goal is to continue iterating on this "product." Future plans include:
-   **A/B Testing:** Experimenting with different headlines and calls-to-action to optimize engagement
-   **Content Strategy:** Using analytics to identify which topics resonate most with my audience and creating more of that content
-   **Performance Monitoring:** Implementing Core Web Vitals tracking and optimization
-   **AI-Powered Recommendations:** Suggesting related projects based on viewing behavior
-   **Dark Mode:** User preference detection and theme switching
-   **Multi-language Support:** Internationalizing content for global audience

---

**Want to dive deeper?** [Download the full case study (PDF)](/assets/documents/digital-presence-case-study.pdf) for a comprehensive breakdown of the technical implementation and product decisions.

This project is a testament to my belief that **product thinking can be applied to anything**—even your own digital identity.
