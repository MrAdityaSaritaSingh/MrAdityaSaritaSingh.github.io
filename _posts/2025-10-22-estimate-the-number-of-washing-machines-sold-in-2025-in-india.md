---
title: "Estimate the number of washing machines sold in 2025 in India"
categories:
  - Guesstimate
tags:
  - Sales
  - Top Down
date: 2025-10-22
---
## 1) Inputs & high-level assumptions

* **Population (India):** 140 cr
* **Rural vs Urban split:** 60% : 40%
* **Avg people/household:** Rural 5, Urban 4

We can total number of household: 31 cr (17 cr rural + 14 cr urban)

> We’ll first estimate an installed base, then move from installed base → annual sales.

## 2) Urban installed base

**Urban households:** 14 cr

**Urban income split**

* Upper: 20%
* Middle: 30%
* Lower-middle: 30%
* BPL: 20%

**Potential customers:** Upper + Middle + some of Lower-middle
= 20% + 30% + (30% × 10%)
= 20% + 30% + 3%
= **53%** of urban households

> 10% of the lower middle class is good number as total smartphone in india are 50%, so lower middle class can buy washing machine too.

**Urban households with a washing machine**
= 53% × 14 cr × 80% penetration
= **5.94 cr**

## 3) Rural installed base

* Consider larger families (≈10 members) as potential buyers
  → Approx half of rural households: 17 cr ÷ 2 = **8.5 cr**
* Assume only upper-class rural families can afford currently: 10% of 8.5 cr
  → **0.85 cr (85 lakh)**

## 4) Installed base (India)

**Total installed base** = Urban (5.94 cr) + Rural (0.85 cr)
= **6.79 cr**

## 5) Annual sales in 2025

Two drivers:

1. Replacement sales

* **Average life (L):** 8–10 years → replacement rate ≈ **1/L**
* Use midpoint **L = 9** → **≈11.1%** replacement
* **Replacement 2025:** `B / L = 6.79 / 9 ≈ **0.75 cr**`

2. First-time buyers (new households)

Estimate new households and apply adoption:

* **Urban HH growth:** ~2% of 14 cr → **0.28 cr** new HH

  * **Adoption among new urban HH (aᵤ):** ~60% → **0.28 × 0.60 = 0.168 cr**
* **Rural HH growth:** ~1% of 17 cr → **0.17 cr** new HH

  * **Adoption among new rural HH (aᵣ):** ~10% → **0.17 × 0.10 = 0.017 cr**

**First-time buyers 2025:** `0.168 + 0.017 = **0.185 cr**`

## 6) Result

Sales_2025 = Replacement + First-time = 0.75 + 0.185 = **0.94 cr units**

> Notes: This is a rough, top-down guesstimate based on stated assumptions (income splits, rural filter, life, and growth proxy). Adjusting any assumption (e.g., rural affordability, urban penetration, average life, or growth rate) will proportionally move the final estimate.
