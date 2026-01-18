# Item Management System

## 📌 Short Project Description

The **Item Management System** is a simple frontend-focused web application built to demonstrate routing, state handling, and basic authentication concepts using Next.js. The system allows users to log in using cookie-based authentication and browse a list of items along with detailed views for each item. This project is ideal for learning and showcasing core frontend concepts without relying on a backend or database.

## LIVE LINK: https://ph-scic-nextjs.vercel.app/

## ⚙️ Setup & Installation Instructions

Follow these steps to run the project locally:

1. **Clone the repository**

```bash
git clone https://github.com/alvy00/ph-scic-nextjs
cd <project-folder>
```

2. **Install dependencies**

```bash
npm install
```

3. **Run the development server**

```bash
npm run dev
```

4. Open your browser and visit:

```
http://localhost:3000
```

---

## 🧭 Route Summary

| Route        | Description                                  |
| ------------ | -------------------------------------------- |
| `/login`     | Login page with cookie-based authentication  |
| `/items`     | Displays a list of available items           |
| `/items/:id` | Shows detailed information for a single item |

---

## ✨ Implemented Features

-   Cookie-based login system
-   Item listing page
-   Individual item detail pages
-   Client-side routing with Next.js
-   Responsive UI using Tailwind CSS and DaisyUI
-   Toast notifications for user feedback
-   Deployed on Vercel

---

## 🔍 Feature Explanations

### 🔐 Cookie-Based Login

Users can log in using predefined credentials. On successful login, a cookie is stored in the browser to simulate authentication.

### 📦 View Items

The `/items` route displays a list of items in a clean, responsive layout styled with DaisyUI components.

### 📄 View Item Details

Clicking on an item navigates the user to `/items/:id`, where detailed information about the selected item is shown.

### 🎨 UI & Styling

The application uses **Tailwind CSS** for utility-first styling and **DaisyUI** for ready-made UI components, ensuring a modern and consistent design.

### 🚀 Deployment

The project is deployed on **Vercel**, enabling fast builds, easy routing support, and seamless Next.js integration.

---

## 🛠 Tech Stack

-   **Framework:** Next.js
-   **Styling:** Tailwind CSS, DaisyUI
-   **Authentication:** Cookie-based (client-side)
-   **Hosting:** Vercel

---

## 📚 Notes

This project is intended for **learning, practice, and portfolio demonstration** purposes. It focuses on frontend architecture and routing rather than full-stack implementation.
