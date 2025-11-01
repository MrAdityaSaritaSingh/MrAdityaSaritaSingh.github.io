---
title: "Diagnose a 30% dip in Avg. Watch Time of Netflix"
categories:
  - RCA
tags:
  - Metrics
  -  Root Cause
date: 2025-11-01
hidden: false
---
## 📖 Background

In this mock interview scenario, I took on the role of a **Product Manager at Netflix**. The analytics team alerted us that **Average Watch Time per user dropped by 30% over the past month.**
My task was to diagnose the issue and recommend an action plan.

This case simulates the kind of **product-sense and analytical reasoning** interview question that PMs at Netflix, Google, or Meta might face.

[ChatGPT History](https://chatgpt.com/share/6905c5c0-8848-800b-995d-53477e2eda5d)

---

## 🧠 Step 1: Understanding the Product and Metric

Before diving into solutions, I restated my understanding:

> **Netflix** is an on-demand video streaming platform offering TV shows, movies, and original content. Users can browse, search, or receive recommendations, and can watch on multiple devices (TV, mobile, desktop).

**Average Watch Time** = Total duration users spend actively watching content on the platform within a defined period.

This is a **core engagement metric**, reflecting:

* User retention and satisfaction
* Content and recommendation quality
* Platform health

---

## 🕵️ Step 2: Clarifying the Problem

I started by asking clarifying questions:

1. **When did the drop occur?**

   * It was **sudden**, starting ~3 weeks ago, then remained flat at –30%.
2. **Which user segments were affected?**

   * Mostly **mobile** users: Android (–50%) and iOS (–35%).
   * **TV and Web** only saw a 10–15% decline.
3. **Was the data accurate?**

   * BI and telemetry pipelines were validated; **no data glitches.**
   * So, this was a **real behavioral change.**

✅ **Early hypothesis:** Issue likely linked to **mobile experience**, not content or algorithm.

---

## 🔍 Step 3: Segmenting the Funnel Metrics

To understand where the drop occurred, I asked the analytics team for correlated metrics.

| Metric            | Observation | Interpretation                     |
| ----------------- | ----------- | ---------------------------------- |
| App Opens         | Stable      | Users still launching the app      |
| Session Starts    | Stable      | No change in usage frequency       |
| Titles Started    | –10%        | Slight reduction in content starts |
| Playback Duration | –40%        | Major driver of overall drop       |
| Completion Rate   | –35%        | Users abandoning earlier           |
| Buffering Rate    | +25%        | Playback issue suspected           |

✅ **Insight:** Users are still active but watching less per session — possibly due to **buffering or playback errors.**

---

## ⚙️ Step 4: Internal Factors Investigation

I split causes into **Internal** vs **External**:

### Internal Factors

* Product changes (new app version)
* Engineering / SDK updates
* Process / release cadence

### External Factors

* Competition
* Device OS updates
* Network or policy changes

---

## 💬 Step 5: Engineering Findings

Upon checking with the **Engineering team**, I discovered:

* A **new mobile app version (v10.8)** was released 3.5 weeks ago.
* It included a **new video player SDK** (updated ExoPlayer).
* Telemetry showed:

  * **Buffering +25%**
  * **Crash rate +8%**
  * **Playback errors doubled**, mostly on Android ≤ 13

**Customer Support** confirmed a 4× spike in playback-related complaints.

✅ Strong correlation between the new SDK rollout and engagement decline.

---

## 📈 Step 6: External Factors Check

Still, I ruled out external factors:

* No major **marketing campaigns** or **policy changes**
* **Disney+** had a big content launch, but Netflix DAU was stable
* **Android OS 15** minor update might have **amplified** SDK issues
  ➡️ **Root cause remained internal:** mobile SDK regression.

---

## 🧪 Step 7: Hypothesis Validation with A/B Test

To confirm causality, I proposed an A/B test comparing old vs new SDK:

| Metric          | v10.7 (Control) | v10.8 (Treatment) | Δ Change |
| --------------- | --------------- | ----------------- | -------- |
| Avg. Watch Time | 52 min          | 36 min            | –31%     |
| Buffering Rate  | 2.8%            | 4.3%              | +54%     |
| Completion Rate | 64%             | 42%               | –34%     |
| Crash Rate      | 1.2%            | 1.8%              | +50%     |

✅ **Result:** Statistically significant degradation across all playback metrics — confirming the SDK caused the drop.

---

## 🚨 Step 8: Action Plan

### **Immediate (0–2 days)**

* **Rollback to stable SDK (v10.7)** for Android devices
* Pause further rollout of v10.8
* Notify Customer Support to proactively handle user complaints

### **Mid-term (2–3 weeks)**

* Collaborate with Engineering to patch the SDK (codec compatibility issue)
* Strengthen QA testing on older Android versions
* Create real-time alerts for buffering and playback errors

### **Long-term (1–2 months)**

* Implement **staged rollouts** for critical SDK updates
* Require **A/B tests for core experience changes** before full release
* Build cross-platform health dashboards for watch time and streaming quality

---

## 💡 Step 9: Key Learnings

* Always validate **data integrity first.**
* Use a **structured, hypothesis-driven approach.**
* Segment by **platform, user type, and geography** early.
* Confirm causality with **A/B testing** — don’t rely on correlation.
* Balance **speed and safety** in release management.

---

## 🧩 Interview Feedback Summary (from Product Manager Interview GPT)

| Skill Area                     | Rating | Notes                                                |
| ------------------------------ | ------ | ---------------------------------------------------- |
| Structured Thinking            | ⭐⭐⭐⭐☆  | Excellent logical breakdown and prioritization       |
| Analytical Rigor               | ⭐⭐⭐⭐⭐  | Data-driven diagnosis, strong causal reasoning       |
| Cross-functional Collaboration | ⭐⭐⭐⭐☆  | Engaged analytics, eng, support, and marketing teams |
| Decision Making                | ⭐⭐⭐⭐⭐  | User-centric, decisive rollback                      |
| Communication                  | ⭐⭐⭐⭐☆  | Clear narrative — could tighten summaries slightly   |

**Overall:** Excellent — would likely pass a real Netflix PM interview.

---

## 🚀 Final Thoughts

Diagnosing metric drops is a **core PM skill**. The goal isn’t just to find the cause, but to:

* Ask the right questions,
* Work cross-functionally,
* Validate with data, and
* Communicate clearly and confidently.
