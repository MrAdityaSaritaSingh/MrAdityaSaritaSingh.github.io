# Codebase Review: Aditya S Rathore's Personal Portfolio Site

This is a comprehensive review of the Jekyll-based static site for Aditya S Rathore (mrAdityaSaritaSingh.github.io), a product manager and engineer. The site serves as a professional portfolio, blog, and resource hub. Below, I'll break down the architecture, key components, content structure, and technical details for clarity and reusability by other AIs or developers.

## Overall Architecture and Tech Stack
- **Framework**: Jekyll (static site generator) with the Minimal Mistakes theme (a popular, customizable Jekyll theme for blogs/portfolios).
- **Hosting**: GitHub Pages (inferred from the repository name and CNAME file pointing to mrAdityaSaritaSingh.github.io).
- **Build Tool**: Bundler for Ruby gem management (Gemfile includes Jekyll and related plugins).
- **Styling**: Sass/SCSS (compiled via Jekyll), with a custom skin "asr-dark" (likely defined in _sass or theme overrides).
- **Front-End Enhancements**: Custom JavaScript (e.g., in _includes/scripts.html), Font Awesome icons, and interactive elements (e.g., core competencies dashboard).
- **Analytics & Tracking**: Integrated Google Analytics (G-XK4TZYPM5X) and PostHog for user behavior tracking, including session recording and autocapture.
- **Search**: Enabled via Jekyll's built-in search (likely using Lunr.js or similar).
- **Responsive Design**: Mobile-friendly, with includes like responsive_embed.html for media.
- **Dependencies** (from Gemfile & _config.yml):
  - jekyll (~> 4.3)
  - minimal-mistakes-jekyll (theme)
  - jekyll-feed, jekyll-sitemap, jekyll-paginate (standard plugins)
  - jekyll-github-metadata (for GitHub integration)
  - jemoji, jekyll-gist, jekyll-include-cache, jekyll-seo-tag
- **Build Process**: Run `bundle exec jekyll serve` to build and serve locally (default port 4000). Site is compressed and optimized via _layouts/compress.html.

## Site Configuration (_config.yml)
- **Site Metadata**:
  - Title: "Aditya S Rathore"
  - Email: Mr.AdityaSRathore@gmail.com
  - Description: Focuses on his background in product building, software engineering, and transition to product management. Emphasizes bridging technical execution with strategy.
  - Hero Image: assets/images/profile.webp
  - Social: Twitter (@adityasrathor3), GitHub (MrAdityaSaritaSingh)
- **Theme Customization**:
  - Skin: "asr-dark" (custom dark theme, overriding default Minimal Mistakes styles).
  - Features: Search enabled, copy-code buttons, Google site verification.
- **Homepage Structure**:
  - Hero section with CTAs (View Resume, Explore Work).
  - Timeline: Interactive career milestones (e.g., education, startup founding, engineering roles) with icons, descriptions, and links to blog posts.
  - Core Competencies: Interactive dashboard (detailed below).
- **Build Settings**:
  - Markdown: Kramdown
  - Permalink: /:categories/:title/ (e.g., /story/computer-science-basics/)
  - Timezone: IST
  - Includes: _pages (custom pages beyond posts)
- **Analytics**:
  - Google Analytics: Tracking ID G-XK4TZYPM5X, IP anonymization disabled.
  - PostHog: API key phc_L1rOfgCO0hmFNPL6RUP5RtytarKaC4oxS8NLvjCdlmE, hosted on EU server. Captures pageviews, clicks, and sessions (not disabled).

## Content Structure
- **Posts (_posts/)**: Blog articles in Markdown, dated filenames (e.g., 2023-10-12-computer-science-basics.md). Categories include "Story" (personal journey), "Discovery" (product analysis), and others. Examples:
  - Personal narratives (e.g., education, entrepreneurial leap).
  - Product discovery exercises (e.g., analyzing X.com features).
  - Case studies (e.g., designing Netflix for kids).
  - Front matter: title, categories, tags, hidden flag (for drafts).
- **Products (_products/)**: Custom collection for product portfolio items. Output enabled with permalink `/products/:path/`.
- **Pages (_pages/)**: Static pages like about.html, resume.html, contact.html, resources.html. Use layouts like single.html or splash.html.
- **Data Files (_data/)**:
  - navigation.yml: Defines site menu (e.g., Home, About, Blog, Resources).
  - skills.yml: Categorized skills (User Experience: Product Management, UX Research; Technical: Python, SQL). Each skill has tags linking to projects/posts.
  - resources.yml: Downloadable assets JS (assets/js/), CSS (assets/css/), and downloads (assets/downloads/).
- **Scripts (scripts/)**: Utility scripts for site maintenance (e.g., `new_post.sh`
- **Assets**: Images (assets/images/), scripts (assets/scripts/), and downloads (assets/downloads/).
- **Layouts (_layouts/)**:
  - default.html: Base layout.
  - home.html: Extends archive, shows recent posts with pagination.
  - single.html: For individual posts/pages.
  - splash.html: For homepage (index.html).
  - Others: Archive, category, tag pages.
- **Includes (_includes/)**: Reusable components:
  - head.html: Meta tags, scripts, analytics.
  - masthead.html: Header/navigation.
  - footer.html: Footer with links.
  - core_competencies.html: Interactive skills dashboard (JavaScript-driven, pulls from skills.yml).
  - scripts.html: Custom JS for interactivity (e.g., timeline animations, competency previews).
  - Others: Breadcrumbs, pagination, social share, TOC.

## Key Features and Functionality
- **Homepage (index.html)**:
  - Hero: Profile image, intro text ("I build products that matter."), CTAs.
  - Timeline: Commented-out section with career icons/links (can be re-enabled).
  - Core Competencies: Left panel (skill categories/buttons), right panel (dynamic proof preview). Uses JS to load related posts/projects based on skill tags.
  - Connect Section: Call-to-action for contact.
- **Blog/Posts**: Paginated list on home, archive pages by category/tag/year. Searchable.
- **Interactive Elements**:
  - Competency Dashboard: Buttons filter and display "proof" (e.g., posts tagged with matching skills).
  - Copy Code Buttons: For code snippets in posts.
  - Responsive Embeds: For videos/images.
- **SEO & Performance**:
  - Schema markup (_includes/schema.html).
  - SEO includes (_includes/seo.html).
  - Compression layout for minified HTML.
- **Custom Scripts**: Likely in assets/scripts/ or _includes/custom_scripts.html (e.g., for fade-in animations, tracking).
- **Error Handling**: 404.md page.

## Customization and Extensibility
- **Theme Overrides**: Custom skin (asr-dark) in _sass/, overriding Minimal Mistakes styles.
- **Data-Driven**: Easy to add skills, resources, or navigation via YAML without code changes.
- **Plugins**: Standard Jekyll plugins; no heavy custom Ruby code.
- **Deployment**: GitHub Pages auto-builds on push. CNAME for custom domain.
- **Potential Improvements**: Add more interactive JS (e.g., for portfolio previews), integrate forms (e.g., via Netlify), or add e-commerce if expanding to products.

## Code Quality and Best Practices
- **Organization**: Clean separation (layouts, includes, data). No major code smells.
- **Accessibility**: ARIA labels in includes (e.g., skill buttons).
- **Security**: No server-side code; static site is secure. Analytics keys are exposed (standard for client-side).
- **Performance**: Lazy loading images, compressed output.
- **Version Control**: Git-based (inferred); .gitignore excludes build artifacts and sensitive files.
- **Testing**: No automated tests; manual build/serve for validation.

---

# Strategic Direction & Growth Strategy

## The Core Problem (Feb 2026)

**The website is not broken technically. It is broken strategically.**

Current issues:
- **Too many identities**: Portfolio + blog + journal + playground + skills dashboard + resume
- **No sharp positioning**: Generic messaging ("I build products that matter") creates no authority
- **Zero distribution**: 90% direct traffic, minimal organic search, content sits invisible
- **Exploration-based, not decision-based**: Homepage doesn't guide clear actions

**Analytics Reality (Jan 19 - Feb 15, 2026):**
- 224 users (97% new, 3% returning)
- 14 organic search users (6%) vs 201 direct (90%)
- 16.67 seconds avg engagement time
- Blog posts getting 1-3 users each despite high quality
- 82% average bounce rate on blog content

## Strategic Positioning

### Sharp Positioning (REQUIRED)
**Who Aditya is FOR:**
- Technical Product Manager specializing in AI-driven and 0→1 products
- 3.5 years engineering + product experience
- Turns ambiguity into shipped outcomes

**NOT:** Generic PM portfolio  
**IS:** Reference point for aspiring PMs learning structured product thinking

### Target Audience
1. **Recruiters/Hiring Managers** → Need to see work quality fast
2. **PM Interview Candidates** → Need frameworks, examples, practice problems
3. **Current PMs** → Need AI/technical product insights

## Content Strategy

### Three Core Pillars (SEO Hubs)

**1. Product Management Case Studies**
- Deep-dive analyses of product decisions
- RCA frameworks
- Real product problems with solutions
- Target: "PM case study", "product management examples"

**2. Product Teardowns & Strategy Analysis**
- Growth strategy breakdowns
- Retention analysis
- Monetization models
- Target: "[Company] product strategy", "[Product] growth analysis"

**3. Guesstimate Practice with Solutions**
- Step-by-step market sizing
- Framework explanations
- Interview-style problems
- Target: "guesstimate questions", "market sizing practice"

### Content Clusters

**Cluster 1: PM Interview Prep** (High search demand)
- Product sense frameworks
- Execution question guides
- RCA templates
- Behavioral interview prep

**Cluster 2: AI Product Strategy** (Differentiation)
- AI-first product development
- When NOT to use AI
- Technical PM insights
- Neuro-symbolic AI for PMs

**Cluster 3: Deep Product Teardowns** (Reference-grade)
- WhatsApp strategy analysis
- Slack growth breakdown
- YouTube retention strategy
- Include: Screenshots, diagrams, frameworks

## SEO Requirements

### Title Format
**BEFORE:** "Designing Netflix for Kids"  
**AFTER:** "Netflix Product Case Study: Improving Kids Experience (PM Interview Style)"

**Rules:**
- Target search intent, not vanity
- Include brand name + keyword + qualifier
- Match what people actually type in search

### Post Structure
- 1500+ words for pillar pages
- H2/H3 structure for scannability
- Internal links to 2 related posts + 1 pillar page
- Featured images for social sharing
- Meta descriptions (150-160 chars, keyword-rich)

### Internal Linking Strategy
Every post must link to:
1. Two related posts
2. One pillar page
3. One CTA page (email signup, case studies hub)

**No isolated posts.** Google hates content islands.

## Distribution Strategy

### Primary: LinkedIn (3x/week)
Every blog post becomes:
- 1 carousel post (framework summary)
- 1 insight thread (key takeaways)
- 1 single-image insight

Target: PM audience, recruiters, hiring managers

### Secondary: Medium
- Republish optimized versions
- Link back to main site
- Leverage Medium's built-in distribution

### Selective: Reddit
- r/ProductManagement
- r/PMCareer
- r/startups
- Answer questions, link when genuinely helpful

### Email List (Critical)
Lead magnets:
- PM Interview Framework PDF
- 0→1 Product Thinking Checklist
- Guesstimate Master Guide

**Even 10 subscribers = leverage**

## Homepage Requirements

### Hero Section (Decision-Based)
**Current:** "I build products that matter."  
**Required:** "Technical Product Manager building AI-driven and 0→1 products. 3.5 years engineering + product. I turn ambiguity into shipped outcomes."

**CTAs:**
- Primary: "View Case Studies" (recruiter-focused)
- Secondary: "Download Resume"

### Three Clear Pathways
1. 🧠 **I'm a recruiter** → See work quality fast
2. 🎯 **I'm preparing for PM interviews** → Learn frameworks
3. 🤝 **I want to collaborate** → Contact

### Navigation Structure
**BEFORE:**
- Home, About, Portfolio, Case Studies, More (Blog, Resources, Contact)

**REQUIRED:**
- Home
- Case Studies (pillar page)
- PM Interview Prep (pillar page)
- AI & Strategy (pillar page)
- About
- Resume

Categorize by intent, not content type.

## Growth Targets (90 Days)

**Month 1:** 500 monthly visitors  
**Month 2:** 1,500 monthly visitors  
**Month 3:** 3,000+ monthly visitors

**Required Actions:**
- 1 high-quality post per week
- Aggressive distribution (LinkedIn 3x/week)
- SEO-optimized titles and structure
- Email capture enabled

## What NOT to Do

❌ Don't add more project types (stay focused)  
❌ Don't write "interesting" content (write searchable content)  
❌ Don't publish without distributing  
❌ Don't use generic positioning  
❌ Don't create isolated posts (always internal link)  
❌ Don't skip email capture  
❌ Don't optimize for exploration (optimize for decision)

## Success Metrics

**Weekly Tracking:**
- Organic search traffic %
- Avg. engagement time (target: 90+ seconds)
- Bounce rate (target: <60%)
- Email signups
- LinkedIn engagement

**Monthly Tracking:**
- Total visitors
- Returning visitor %
- Top performing posts
- Keyword rankings
- Backlinks gained

## Implementation Priority

1. **Week 1:** Homepage hero + navigation + email capture
2. **Week 2:** Create 3 pillar pages (hubs)
3. **Week 3:** Rewrite top 10 post titles for SEO
4. **Week 4:** Internal linking + first LinkedIn distribution push

**Rule:** Fix positioning and structure BEFORE writing new content.

This strategic framework must guide ALL future decisions about content, design, and distribution.