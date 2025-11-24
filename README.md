# ISTQB® CTFL v4.0 Exam Simulator
### Vue 3 + Vite + Tailwind CSS Web Application

*Master the Foundation Level Exam with a Realistic, Open Source Simulator*

![Vue.js](https://img.shields.io/badge/Vue.js-3.5-4FC08D?logo=vue.js&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.2-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-06B6D4?logo=tailwindcss&logoColor=white)
![Cypress](https://img.shields.io/badge/Cypress-13.6-17202C?logo=cypress&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green)

---

## Overview

This repository contains the source code for the **ISTQB® Certified Tester Foundation Level (CTFL) v4.0 Exam Simulator**.

The goal of this project is to provide a realistic, accessible, and free environment for candidates to prepare for their certification.
Built with **Vue 3**, **Vite**, and **Tailwind CSS**, it features a responsive design, real-time timer, and detailed performance analytics.

**Key Features:**
*   **Realistic Exam Mode:** 40 questions selected randomly based on the official ISTQB® v4.0 distribution matrix.
*   **Performance Analytics:** Detailed breakdown of scores per chapter (e.g., Chapter 1: Fundamentals of Testing).
*   **Instant Feedback:** Explanations for every question to aid learning.
*   **Responsive Design:** Optimized for desktop, tablet, and mobile devices.

---

## Table of Contents

- [Overview](#overview)
- [Technology Stack](#technology-stack)
- [Environment Setup](#1-environment-setup)
  - [Prerequisites](#11-prerequisites)
  - [Installation](#12-installation)
- [Running the Application](#2-running-the-application)
- [Running Tests](#3-running-tests)
  - [Interactive Mode](#31-interactive-mode)
  - [Headless Mode](#32-headless-mode)
- [Deployment](#4-deployment)
  - [GitHub Pages Configuration](#41-github-pages-configuration)
- [Project Structure](#5-project-structure)
- [Legal Disclaimer](#legal-disclaimer)
- [Final Notes](#final-notes)

---

## Technology Stack

-   **Framework:** Vue.js 3.5 (Composition API)
-   **Build Tool:** Vite 7.2
-   **Styling:** Tailwind CSS 3.4
-   **State Management:** Pinia 3.0
-   **Icons:** Lucide Vue
-   **Testing:** Cypress (End-to-End)

---

## 1. Environment Setup

Before running the project, ensure your environment is ready.

### 1.1. Prerequisites

-   **Node.js** (Version 18 or higher recommended)
-   **npm** (Included with Node.js)

### 1.2. Installation

Clone the repository and install dependencies:

```bash
# Clone the repository
git clone https://github.com/joaofilipevale/ISTQB_project.git
cd ISTQB_project

# Install dependencies
npm install
```

---

## 2. Running the Application

To start the local development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

---

## 3. Running Tests

This project uses **Cypress** for End-to-End (E2E) testing to ensure the exam flow works correctly.

### 3.1. Interactive Mode
Opens the Cypress Test Runner GUI. Useful for writing and debugging tests.

```bash
npm run test:e2e
```

### 3.2. Headless Mode
Runs all tests in the terminal without opening a browser window. Ideal for CI/CD pipelines.

```bash
npm run test:e2e:run
```

---

## 4. Deployment

This project is configured for easy deployment to **GitHub Pages**.

### 4.1. GitHub Pages Configuration

1.  **Update `vite.config.js`:**
    Ensure the `base` property matches your repository name:
    ```javascript
    export default defineConfig({
      base: '/ISTQB_project/', // Replace with your repository name
      // ...
    })
    ```

2.  **Build and Deploy:**
    You can deploy manually or use the included GitHub Actions workflow (`.github/workflows/deploy.yml`) which automatically deploys on push to the `main` branch.

    **Manual Build:**
    ```bash
    npm run build
    # The output will be in the 'dist' folder
    ```

---

## 5. Project Structure

```
ISTQB_project/
│
├── public/              # Static assets (favicon, etc.)
├── src/
│   ├── components/      # Vue UI components (ExamInterface, ResultsScreen, etc.)
│   ├── data/            # Question bank (questions.js)
│   ├── stores/          # Pinia state stores (exam.js)
│   ├── App.vue          # Root component
│   └── main.js          # Application entry point
│
├── cypress/             # E2E Tests
│   └── e2e/             # Test specifications (exam_flow.cy.js)
│
├── .github/             # GitHub Actions workflows
├── vite.config.js       # Vite configuration
└── tailwind.config.js   # Tailwind CSS configuration
```

---

## Legal Disclaimer

> **This project is NOT officially affiliated with ISTQB®.**

This simulator was developed independently for educational purposes.

*   **Based on:** ISTQB® CTFL v4.0 Sample Exam.
*   **Content:** © International Software Testing Qualifications Board (ISTQB®). All rights reserved.
*   **ISTQB®** is a registered trademark of the International Software Testing Qualifications Board.

For official certification information, please visit [www.istqb.org](https://www.istqb.org).

---

## Final Notes

This project is open source and licensed under the **MIT License**.

**Author:** [João Vale](https://github.com/joaofilipevale)

If this simulator helps you prepare, please consider giving the repository a ⭐ star!

**Good luck with your exam! 🚀**
