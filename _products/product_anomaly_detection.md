---
title: Anomaly Detection System for Ledger Scrutiny
date: 2026-03-27
categories: [Product Design, UX Research, System Architecture]
tags: [AI, Finance, B2B, Fraud Detection]
image: /assets/images/post_audit.avif
description: This project explores an AI-powered ledger scrutiny system designed to surface financial anomalies and support auditor decision-making.
layout: product
feedback: true
---

## Overview

Designing an Anomaly Detection tool for financial documents.

This project explores an AI-powered ledger scrutiny system designed to surface financial anomalies and support auditor decision-making.

This project is being carried out in collaboration with my batchmate Aditya Singh as part of our Final Year Project in the Product Design and Management Program, under the guidance of Professor Prakash Yalla.

## The Problem

Manual, sample-based audits create critical blind spots in financial scrutiny, increasing the risk of fraud, regulatory penalties, and reputational damage for mid to large companies in India.

### Challenges in Financial Audits

* **Manual Effort:** 1000+ hours are spent by CAs to review financial documents.
* **Time Consuming:** Audits run 6–10 weeks, leaving little time for deeper investigation.
* **Hidden Risks:** Missed anomalies can lead to fraud losses and penalties up to ₹10 crore.

### Why Financial Audits Matter

* **Build Trust:** Books of accounts must present a true and fair view of the business.
* **Catch Misstatements:** Detect fraud, errors, and irregularities, including recurring discrepancies.
* **Ensure Compliance:** Meet statutory / tax requirements while uncovering control gaps.

## The Design Process

> "If we knew what it was we were doing, it would not be called research, would it?"  
> — *Albert Einstein*

### 01. Framing the Audit Reality

![Framing the Audit Reality](/assets/images/anomaly_detection/image_4.png)

### 02. Identifying Risk Blind Spots

Synthesized research to uncover where anomalies go unnoticed, especially during ledger scrutiny, and defined clear problem statements rooted in audit risk and accountability.


### 03. Designing for Trust at Scale

#### Interviews

#### What They Say: Real stories from the field

> "Most audits are done by interns (doing their CA Articleship) who don’t even understand the domain properly."
> — *Domain Expert - Finance*

> "Clients get irritated with us… auditors and clients never get along. Audits are basically a necessary evil."
> — *Chartered Accountant*

> "Companies conduct audit because they “have to” (Legally Mandated) and not because they want to."
> — *Statutory Auditor*

> "Ledger scrutiny is critical for identifying anomalies, but time constraints often push it aside during audits. Round numbers in transactions like 9999 or 0000 immediately need review."
> — *Senior Manager - Finance*

> "I have very little visibility into the audit status and often have to keep following up with the CAs. The report needs to be ready before the deadline so we can file our IT returns by September."
> — *Company Secretary*

![Persona 1](/assets/images/anomaly_detection/image_15.png)
![Persona 2](/assets/images/anomaly_detection/image_13.png)


## From Research to Direction

Through personas and user journeys, we uncovered where design could make a meaningful difference in the audit experience.

![User Journeys](/assets/images/anomaly_detection/image_10.png)

### Where Design Could Matter Most

The audit value–effort analysis helped us balance impact with feasibility to make informed design trade-offs.

![Value-Effort Matrix](/assets/images/anomaly_detection/image_12.png)

### Area of Intervention

Ledger scrutiny forms the backbone of audits, making it critical for detecting anomalies - ensuring accurate reporting, and meeting regulatory requirements.

## Features: Anomaly Detection System for Ledger Scrutiny

![Solution Screens](/assets/images/anomaly_detection/image_16.png)

* **Ledger Data Ingestion:** Imports Excel / CSV / Tally / ERP systems and auto-detects columns to normalize ledger structure.
* **Anomaly Detection Engine:** Identifies unusual or suspicious transactions and flags potential anomalies.
* **Human-in-the-Loop:** Auditor reviews flagged items, approves / rejects system alerts and adds comments and reasoning.

[full report](https://docs.google.com/presentation/d/1OGpJHAtvDvYPw2-fJyiBwg-ijyrHgZZtHxe_WFvrmGY/edit?usp=sharing)