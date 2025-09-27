# SavyFlix 🎬

Welcome to **SavyFlix** – a modern web application that lets you **search for movies** and **save favorites** for later viewing.  
This project was built as part of my journey in frontend engineering, combining third-party APIs, authentication, and state management into a clean, user-friendly experience.

---

## 📌 Project Overview

**SavyFlix** is a movie discovery and bookmarking platform.  
Users can search for films powered by **The Movie Database (TMDB) API**, authenticate securely with **Supabase Auth**, and manage their personal list of favorite movies.  

The project demonstrates how to integrate external APIs, handle authentication, and manage global state in a real-world **Next.js** application.

---

## 🛠️ Major Learnings

### 🔑 Key Technologies
- **Next.js (App Router)** – server-side rendering, routing, and performance
- **Supabase** – authentication and user session management
- **TMDB API** – fetching movie data (titles, posters, descriptions, etc.)
- **React Context API** – global state management for favorites
- **TailwindCSS** – responsive and modern UI styling
- **TypeScript** – type safety and maintainability

---

### 💡 Important Frontend Concepts
- **Authentication** with Supabase (magic links for login)
- **API integration** with TMDB for real-time movie data
- **State management** using Context + Hooks for favorites
- **Responsive design** with TailwindCSS
- **Server-Side Rendering (SSR)** and **hydration handling** in Next.js
- **Separation of concerns** – modular components and clean architecture

---

### ⚡ Challenges & Solutions
- **Challenge:** Handling hydration errors when server-rendered HTML didn’t match client.  
  **Solution:** Used `suppressHydrationWarning` and ensured consistent attributes between server and client components.

- **Challenge:** Configuring Supabase Auth and debugging login errors.  
  **Solution:** Enabled email sign-in in Supabase, tested with development mode for OTPs, and checked logs to resolve database trigger issues.

- **Challenge:** Persisting user favorites across sessions.  
  **Solution:** Implemented context-based state management and synced with `localStorage` to keep favorites even after reload.

---

### ✅ Best Practices & Takeaways
- **Use environment variables** securely for API keys and Supabase credentials
- **Write modular, reusable components** for scalability
- **Leverage Context API** for global state when Redux is overkill
- **Debug with logs and developer tools** (Supabase logs, browser console, Postman)
- **Focus on accessibility (a11y)** and performance with Tailwind utilities
- **Balance SSR and CSR in Next.js** for optimal performance and hydration consistency

---

## 🚀 Getting Started

1. Clone the repository  
   ```bash
   git clone https://github.com/your-username/alx-project-nexus.git
   cd alx-project-nexus
