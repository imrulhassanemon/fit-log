# 🏋️ FitLog — Workout Library & Personal Plan Tracker

A modern, responsive workout library and personal workout planner built with **Next.js 16**, **TypeScript**, and **Tailwind CSS**.

FitLog helps users discover exercises, create a daily workout routine, save favorite workouts, and track completed exercises — all with a clean dark-themed fitness interface that works seamlessly across **desktop, tablet, and mobile** devices.

> **Train with intent. Log every set.**

---

## 🌐 Live Demo

**Live Website:** https://fit-log-iota-three.vercel.app/

## 💻 GitHub Repository

**Source Code:** https://github.com/imrulhassanemon/fit-log

<!-- Example -->

<!-- ![FitLog Homepage](./public/preview/home.png) -->

---

## 🚀 Features

### 🏋️ Workout Library

Explore a collection of workouts with complete information including:

* Exercise name
* Target muscle groups
* Required equipment
* Workout duration
* Estimated calories burned
* User rating

Users can open any workout to view detailed information.

### 📋 Today's Workout Plan

Create and manage your daily workout routine.

* Add up to **5 exercises** per day.
* Live workout counter.
* Calculate total workout duration.
* Calculate total calories burned.
* Remove workouts anytime.
* Mark workouts as completed.

### ❤️ Save Workouts for Later

Save favorite workouts and access them anytime.

* Save exercises from the workout library.
* View saved workouts inside **My Plan**.
* Navbar displays the current number of saved workouts.

### 🔍 Sorting & Responsive Design

Sort workouts instantly by:

* Duration
* Calories Burned
* Rating

Fully responsive design optimized for:

* 💻 Desktop
* 📱 Mobile
* 📲 Tablet

### 🔔 Interactive Workout Tracking

Receive instant feedback using toast notifications when users:

* Add a workout.
* Save a workout.
* Remove a workout.
* Mark a workout as completed.

All workout plan and saved workout data are persisted using **LocalStorage**.

---

## 🛠️ Tech Stack

| Technology         | Purpose               |
| ------------------ | --------------------- |
| **Next.js 16**     | App Router & Routing  |
| **TypeScript**     | Type-safe development |
| **Tailwind CSS**   | Responsive styling    |
| **DaisyUI**        | UI Components         |
| **Lucide React**   | Icons                 |
| **React Toastify** | Toast Notifications   |
| **REST API**       | Workout Data          |
| **LocalStorage**   | Persist User Data     |

---

## 📁 Project Structure

```bash
fit-log/
├── app/
│   ├── workout/
│   ├── my-plan/
│   ├── saved/
│   └── page.tsx
├── components/
├── data/
├── types/
├── utils/
├── public/
└── README.md
```

---

## ⚙️ Installation & Setup

Clone the repository:

```bash
git clone https://github.com/imrulhassanemon/fit-log.git
```

Navigate into the project:

```bash
cd fit-log
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open **http://localhost:3000** in your browser.

---

## 🎯 Project Goal

FitLog is designed to provide a simple and focused experience for people who want to:

* Discover workouts.
* Build a personalized daily workout plan.
* Save favorite exercises.
* Track completed workouts.

The goal is to create an intuitive fitness tracking experience using modern frontend technologies.

---

## 🔮 Future Improvements

Planned features for future versions:

* 🔐 User Authentication (Firebase/Auth.js)
* ☁️ Cloud Database Integration
* 📊 Workout Progress Analytics
* 📅 Weekly & Monthly Workout History
* 🎯 Custom Workout Categories
* 🌙 Light/Dark Theme Toggle

---

## 👨‍💻 Author

### Imrul Hassan Emon

**Frontend Developer**

* GitHub: https://github.com/imrulhassanemon
* LinkedIn: *(Add your LinkedIn profile here.)*

Built with ❤️ using **Next.js**, **TypeScript**, and **Tailwind CSS**.
