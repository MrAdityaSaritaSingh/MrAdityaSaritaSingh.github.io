---
title: Neuro-Symbolic Visual Reasoning 🧠
date: 2025-05-02
categories: [AI, Education, Cognitive Development, UX]
image: /assets/images/post-bg-symbloic.png
description: Bridging perception and logic to boost children’s spatial reasoning with neuro-symbolic AI.
layout: project
link: https://docs.google.com/presentation/d/1j_pcdxZWaAc_FJwoCgA03f09yZnWUO2GE8C1puhShew/edit?usp=sharing
---

## Project Overview

TLDR: [Demo Link](https://youtu.be/TwZfHC4935Q)

Many children struggle with spatial and visual reasoning—an essential skill in STEM learning. Traditional teaching tools often fail to build deep understanding. This project introduces *Spatial Quest*, a neuro-symbolic AI system that combines neural perception with symbolic logic to help children learn spatial reasoning through interactive visual scenes and logical queries.

## My Role

* Designed and implemented a hybrid neuro-symbolic reasoning pipeline
* Curated and fine-tuned datasets (CLEVR) for training and benchmarking
* Developed visual UI for interactive scene creation and query testing
* Encoded logical rules for compositional and nested spatial queries
* Conducted evaluations and performance benchmarking

## Key Outcomes

* **Understanding the Problem:** Case studies like Ishan’s highlight common struggles with mental rotation, scaling, and perspective-taking in school-age children.

* **Hybrid AI Solution:** Combines object detection with logic-based reasoning to answer spatial queries such as:

  * “How many red spheres are to the left of the tall cube?”
  * “Find objects that are (red AND metallic) OR (small BUT NOT spherical)”

* **System Workflow:**

  ![System Diagram](/assets/images/in-post/post-neural-cv/systemdiagram.png)

  * **Input:** Scene + user query
  * **Detect:** Neural network identifies objects & attributes
  * **Reason:** Symbolic logic processes spatial rules
  * **Answer:** Outputs query result with explainable logic

* **Performance Highlights:**

  * Achieved **95.2% accuracy** on complex CLEVR queries
  * **3x faster** reasoning than end-to-end neural models
  * Robust to noise and partial scene information

* **Interactive UI & Explainability:**

  * Web-based drag-and-drop interface
  * Real-time visual explanations of logical reasoning
  * Engaging learning experience for children

* Demo
  <iframe width="560" height="315" src="https://www.youtube.com/embed/TwZfHC4935Q?si=wByhPtiIVi8lzbSw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Impact & Future Scope

This neuro-symbolic tool supports cognitive growth by making abstract spatial concepts tangible and interactive. The project demonstrates the power of explainable AI in education and opens avenues for future integration with real-world images and educational platforms.
