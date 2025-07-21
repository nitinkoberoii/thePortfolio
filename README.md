# Nitin's Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Vite. This project showcases my work, skills, and background as a software and mobile app developer. The design is inspired by a dark, elegant theme with a focus on usability and aesthetics.

---

## Contents

- [About](#about)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Deployment](#deployment)
- [Project Structure](#project-structure)
- [Screenshots](#screenshots)

---

## About

Hello, I’m **Nitin**! I’m a software developer based in India. I love turning ideas into functional, responsive applications that deliver smooth and meaningful user experiences across platforms.

Transforming creativity into code has been my passion for over a year. I’ve contributed to real-world projects through internships, helping teams build reliable products and improve performance. I’m always curious to explore better ways to solve problems and stay up to date with evolving technologies.

I’m a B.Tech student at IIIT Vadodara - ICD, with a passion for creating seamless and impactful digital experiences.

---

## Features

- Modern, dark-themed, single-page scrollable layout
- Highly responsive design for desktop and mobile
- Showcases featured projects with images and tech stacks
- Skills and technology stack section
- About me and contact information
- Downloadable resume
- Modular, maintainable code structure

---

## Technologies Used

- **Frontend:** React, TypeScript, Vite, Tailwind CSS
- **Routing:** React Router DOM
- **Linting/Formatting:** ESLint
- **Design:** Figma (for design inspiration)

#### Skills & Tools Highlighted

- Languages: C, C++, Python, Dart, R, JavaScript, MATLAB
- Frameworks: Flutter, React, Node.js, Express.js, Flask, Socket.io, Vite
- Databases: SQLite, SQL, MongoDB, Firebase
- Tools: VSCode, Android Studio, Git/GitHub, Linux, Figma, Postman, Archimate
- Other: HTML, CSS, REST API

---

## Prerequisites

- Node.js (v16 or above recommended)
- npm or yarn

---

## Installation

1. **Clone the repository:**
   ```bash
   git clone <repo-url>
   cd thePortfolio
   ```
2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

---

## Usage

- **Development server:**

  ```bash
  npm run dev
  # or
  yarn dev
  ```

  The app will be available at `http://localhost:5173` by default.

- **Build for production:**

  ```bash
  npm run build
  # or
  yarn build
  ```

- **Preview production build:**

  ```bash
  npm run preview
  # or
  yarn preview
  ```

- **Resume:** Downloadable at [public/Resume.pdf](public/Resume.pdf)

---

## Deployment

The site can be deployed to any static hosting service (Vercel, Netlify, GitHub Pages, etc.).

**Live Link:** _Coming soon_

---

## Project Structure

```
thePortfolio/
├── public/
│   ├── screenshots/           # Website screenshots for README
│   ├── projects/              # Project images
│   └── Resume.pdf             # Downloadable resume
├── src/
│   ├── assets/
│   │   └── images/            # UI images/icons
│   ├── components/
│   │   ├── Header.tsx         # Top navigation bar
│   │   ├── Sidebar.tsx        # Sidebar navigation
│   │   ├── Footer.tsx         # Footer section
│   │   ├── constants.ts       # App-wide constants
│   │   └── screens/
│   │       ├── home/          # Home screen
│   │       ├── about-me/      # About me section
│   │       ├── projects/      # Projects showcase
│   │       └── contacts/      # Contact section
│   ├── App.tsx                # Main app component (routes/screens)
│   ├── main.tsx               # React entry point
│   └── index.css, App.css     # Global styles
├── package.json
├── tailwind.config.js
└── ...
```

---

## Screenshots

### Home

![Home](public/screenshots/home.png)

### About

![About](public/screenshots/about.png)

### Projects Home

![Projects Home](public/screenshots/projects-home.png)

### Projects

![Projects](public/screenshots/projects.png)

---
