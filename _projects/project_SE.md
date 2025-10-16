---
title: Talk to Database App – Text2Query
date: 2024-11-28
categories: [Product Management, AI, NLP, SQL Automation]
tags: [Product Management, AI, NLP, System Architecture]
image: /assets/images/post_bg_text2querry.png
description: A web application that converts English statements into MySQL queries for data retrieval.
layout: project
drive_link: https://drive.google.com/file/d/17B6EDQNZRqd3HhpDVIH2jQ5GnNgGIENA/view?usp=drive_link
---

## Project Overview

**Talk to Database App (Text2Query)** is a **web-based tool** designed to **convert natural language statements into MySQL queries**. This project aims to assist **non-technical users**, such as analysts and business professionals, in **retrieving database information without SQL expertise**.

## My Role

- **Product Management**: Defined scope, roadmap, and user requirements.
- **Market Research & Stakeholder Analysis**: Identified target users and business use cases.
- **Technology Evaluation**: Analyzed and selected **Flask, React.js, and MySQL** for development.
- **Development & Testing**: Assisted in rule-based model creation and UI development.
- **User Feedback & Iteration**: Gathered insights from stakeholders to refine functionality.

## Key Outcomes

### **1. Problem Statement & Market Need**

- **Current Challenge**: Business users depend on data analysts for SQL queries, causing inefficiencies.
- **Solution**: Automate query generation by **converting English text into MySQL queries**.
- **Target Users**: Data analysts, financial analysts, customer support teams, and business executives.

### **2. Features**

- **Natural Language Input** → Users can type requests in **plain English**.
- **Rule-Based Query Generation** → The system maps input text to **MySQL queries**.
- **Remote Query Execution** → Fetches data directly from a **live database**.
- **Data Preview & Export** → Allows **downloading query results** in various formats.

### **3. Technology Stack**

| **Component**  | **Technology**  |
|---------------|---------------|
| **Frontend**  | React.js, JSX |
| **Backend**   | Flask, Python |
| **Database**  | MySQL, SQLAlchemy |
| **Libraries** | ReGex, CSV, IO |

### **4. Evolution Over Time**

#### **Phase 1: Deep Learning Approach (Abandoned)**

- **Challenge:** Training an NLP model required extensive **data, resources, and expertise**.
- **Decision:** Shifted to a **pre-trained NLP model** for better efficiency.

#### **Phase 2: Using Pre-Trained Models**

- **Advantage:** Improved **query conversion accuracy**.
- **Challenge:** Handling **complex queries** and **schema mismatches**.
- **Decision:** Pivoted to **Rule-Based Parsing** for better **control & consistency**.

#### **Phase 3: Rule-Based System (Final Approach)**

- **Outcome:** A **deterministic** system with predefined **SQL query structures**.
- **Challenges Solved:**
  - Ambiguous user inputs.
  - Handling **structured MySQL data**.
  - Ensuring **query accuracy & error handling**.

### **5. Stakeholders & User Personas**

| **User**          | **Role**  | **Needs** |
|------------------|----------|----------|
| **Soumya**      | Data Analyst | Wants to reduce time spent writing queries manually. |
| **Virupakshi**  | Loan Analyst | Needs quick database insights using English text. |
| **Sarika, Radha & Swaroop** | Field Operators | Require data for premium recovery follow-ups. |

### **6. User Journey**

- **Step 1:** User **inputs a question** in natural language.
- **Step 2:** System **processes text** and maps it to an **SQL query**.
- **Step 3:** The **query executes** on the **MySQL database**.
- **Step 4:** Users can **preview or download** the retrieved data.

### **7. Challenges & Learnings**

#### **Challenges Faced**

- **Handling ambiguous queries**.
- **Building scalable SQL parsing rules**.
- **Ensuring non-technical users could understand results**.

#### **Learnings**

- **Rule-based systems** offer better control over structured queries.
- **Stakeholder feedback** is critical for refining usability.
- **Edge case handling** is essential for real-world applications.

### **8. Contribution Breakdown**

| **Team Member**      | **Role** | **Contribution** |
|--------------------|--------|----------------|
| **Aditya Singh**  | Product Manager | System design, Documentation, UI design & implementation. |
| **Aditya Sangana** | Frontend Engineer | React.js development, UI implementation. |
| **M. L. Raghurama Datta** | Backend Engineer | Rule-based model, API development. |
| **Sandeep Nagalli** | Backend Engineer | MySQL setup, query processing. |

### **9. Demo & Source Code**

- **Live Demo**: [link](https://youtu.be/-lqYLYPMoLs)
- **GitHub Repository**: [Text2Query GitHub](https://github.com/IccyAditya/text2sql)

---

This project demonstrates how **natural language processing** can bridge the gap between **non-technical users and SQL databases**, improving data accessibility and efficiency.
