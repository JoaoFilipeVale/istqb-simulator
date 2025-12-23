# ISTQB® CTFL v4.0 Exam Simulator
### Vue 3 + Vite + Tailwind CSS Web Application

*Master the Foundation Level Exam with a Realistic, Open Source Simulator*

![Vue.js](https://img.shields.io/badge/Vue.js-3.5-4FC08D?logo=vue.js&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.2-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-06B6D4?logo=tailwindcss&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green)

---

## Overview

This repository contains the source code for the **ISTQB® Certified Tester Foundation Level (CTFL) v4.0 Exam Simulator**.

The goal of this project is to provide a realistic, accessible, and free environment for candidates to prepare for their certification.
Built with **Vue 3**, **Vite**, and **Tailwind CSS**, it features a responsive design, real-time timer, and detailed performance analytics.

**Key Features:**
*   **Bilingual Support:** Full support for **Portuguese (PT)** and **English (EN)**, with instant language switching.
*   **Realistic Exam Mode:** 40 questions selected randomly based on the official ISTQB® v4.0 distribution matrix.
*   **Performance Analytics:** Detailed breakdown of scores per chapter (e.g., Chapter 1: Fundamentals of Testing).
*   **Instant Feedback:** Explanations for every question to aid learning.
*   **Mark for Review:** Flag questions during the exam to revisit them before submitting.
*   **Dark/Light Mode:** Toggle between themes for a comfortable reading experience.
*   **Responsive Design:** Optimized for desktop (with collapsible sidebar), tablet, and mobile devices.

---

## Table of Contents

- [Overview](#overview)
- [Environment Setup](#1-environment-setup)
  - [Prerequisites](#11-prerequisites)
  - [Installation](#12-installation)
- [Running the Application](#2-running-the-application)
- [Deployment](#4-deployment)
  - [Automated Deployment](#41-automated-deployment-github-actions)
  - [Manual Deployment](#42-manual-deployment)
- [Project Structure](#5-project-structure)
- [Contributing](#6-contributing)
  - [Commit Standards](#61-commit-standards)
- [Legal Disclaimer](#legal-disclaimer)
- [Final Notes](#final-notes)

---

## Technology Stack

-   **Framework:** Vue.js 3.5 (Composition API)
-   **Build Tool:** Vite 7.2
-   **Styling:** Tailwind CSS 3.4
-   **State Management:** Pinia 3.0
-   **Icons:** Lucide Vue

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

## 4. Deployment

### 4.1. Automated Deployment (GitHub Actions)

This project uses **GitHub Actions** to automatically build and deploy the application to **GitHub Pages**.

-   **Trigger:** Pushes to the `main` branch.
-   **Workflow File:** `.github/workflows/deploy.yml`

The workflow performs the following steps:
1.  **Checkout:** Retrieves the code.
2.  **Setup:** Sets up Node.js environment.
3.  **Install:** Installs dependencies (`npm ci`).
4.  **Build:** Builds the project (`npm run build`).
5.  **Deploy:** Uploads the artifact and deploys it to GitHub Pages.

### 4.2. Manual Deployment

If you prefer to build and deploy manually:

1.  **Build the Project:**
    Generate the production-ready static files:
    ```bash
    npm run build
    ```
    The output will be located in the `dist/` directory.

2.  **Preview locally:**
    To test the production build locally before deploying:
    ```bash
    npm run preview
    ```

> **Note:** The `vite.config.js` is configured to handle the `base` path automatically based on the mode (`serve` vs `build`). Ensure your repository name matches the path if modifying manually.


---

## 5. Project Structure

```
ISTQB_project/
│
├── public/              # Static assets (favicon, etc.)
├── src/
│   ├── components/      # Vue UI components (ExamInterface, ResultsScreen, etc.)
│   ├── data/            # Question bank (questions_pt.js, questions_en.js)
│   ├── stores/          # Pinia state stores (exam.js)
│   ├── App.vue          # Root component
│   └── main.js          # Application entry point
│
├── .github/             # GitHub Actions workflows
├── vite.config.js       # Vite configuration
└── tailwind.config.js   # Tailwind CSS configuration
```

---

## 6. Contributing

Contributions are welcome! To ensure a consistent history, we follow specific standards.

### 6.1. Commit Standards

We use **Conventional Commits** to keep our git history readable and semantic.

**Format:**
```text
<type>: <description>
```

**Common Types:**
-   `feat`: A new feature (e.g., `feat: add dark mode switch`).
-   `fix`: A bug fix (e.g., `fix: incorrect calculation in results`).
-   `docs`: Documentation only changes (e.g., `docs: update deployment steps`).
-   `style`: Formatting, missing semi-colons, etc; no code change.
-   `refactor`: A code change that neither fixes a bug nor adds a feature.
-   `test`: Adding missing tests or correcting existing tests.
-   `chore`: Maintenance tasks, dependencies (e.g., `chore: update dependencies`).

**Example:**
```bash
git commit -m "feat: add timer to questions"
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
