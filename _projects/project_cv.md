---
title: Neuro-Symbolic Visual Reasoning 🧠
date: 2025-05-02
categories: [AI, Education, Cognitive Development, UX]
tags: [AI, UX, EdTech]
image: /assets/images/post-bg-symbloic.png
description: Bridging perception and logic to boost children’s spatial reasoning with neuro-symbolic AI.
layout: project
drive_link: https://docs.google.com/presentation/d/1j_pcdxZWaAc_FJwoCgA03f09yZnWUO2GE8C1puhShew/edit?usp=sharing
embed_description: "You can view the presentation below or download it."
feedback: true
---

## Project Overview

Many children struggle with spatial and visual reasoning—an essential skill in STEM learning. Traditional teaching tools often fail to build deep understanding. This project introduces *Spatial Quest*, a neuro-symbolic AI system that combines neural perception with symbolic logic to help children learn spatial reasoning through interactive visual scenes and logical queries.

## My Role

*   Designed and implemented a hybrid neuro-symbolic reasoning pipeline
*   Curated and fine-tuned datasets (CLEVR) for training and benchmarking
*   Developed visual UI for interactive scene creation and query testing
*   Encoded logical rules for compositional and nested spatial queries
*   Conducted evaluations and performance benchmarking

## Key Outcomes

*   **Understanding the Problem:** Case studies like Ishan’s highlight common struggles with mental rotation, scaling, and perspective-taking in school-age children.

*   **Hybrid AI Solution:** Combines object detection with logic-based reasoning to answer spatial queries suchs as:

    *   “How many red spheres are to the left of the tall cube?”
    *   “Find objects that are (red AND metallic) OR (small BUT NOT spherical)”

*   **System Workflow:**

    ![System Diagram](/assets/images/in-post/post-neural-cv/systemdiagram.png)
    *A diagram illustrating the neuro-symbolic workflow, from scene input to logical query answering.*

## The Outcome

The Text2Query project culminated in a high-fidelity prototype that successfully demonstrated the feasibility of a natural language interface for database querying. The prototype was able to accurately translate a wide range of user queries into SQL, and the user feedback was overwhelmingly positive.

<div class="results-box">
  <h3 class="results-box__title">Performance Highlights</h3>
  <span class="results-box__metric">95.2%</span>
  <p class="results-box__description">accuracy on complex CLEVR queries</p>
  <span class="results-box__metric">3x Faster</span>
  <p class="results-box__description">reasoning than end-to-end neural models</p>
  <span class="results-box__metric">Robust</span>
  <p class="results-box__description">to noise and partial scene information</p>
</div>

*   **Interactive UI & Explainability:**

    *   Web-based drag-and-drop interface
    *   Real-time visual explanations of logical reasoning
    *   Engaging learning experience for children

### Demo
{% include video_embed.html url="https://www.youtube.com/embed/TwZfHC4935Q?si=wByhPtiIVi8lzbSw" %}

## Impact & Future Scope

This neuro-symbolic tool supports cognitive growth by making abstract spatial concepts tangible and interactive. The project demonstrates the power of explainable AI in education and opens avenues for future integration with real-world images and educational platforms.