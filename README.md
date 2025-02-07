# Company Portfolio

A modern, responsive company portfolio website built with React and Vite. Features dark mode, visitor counter, and multiple navigation pages.

![Demo Screenshot](https://via.placeholder.com/800x400.png?text=Company+Portfolio+Demo)

## Features

- 🌓 Dark/Light mode toggle with localStorage persistence
- 👥 Visitor counter using localStorage
- 🧭 Responsive navigation with React Router
- 📱 Mobile-friendly design
- 🖥 Multiple pages:
  - Home
  - Team Profiles
  - Projects Gallery
  - Contact Page

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/company-portfolio.git
   cd company-portfolio
   Install dependencies

bash
Copy
npm install
Run the development server

bash
Copy
npm run dev
 ### Technologies Used
⚛️ React 18

🚀 Vite 4

🛣 React Router 6

💅 CSS Modules

📦 localStorage for state persistence

### Project Structure
Copy
src/
├── components/
│   ├── Navbar/
│   │   ├── Navbar.jsx
│   │   └── Navbar.css
├── pages/
│   ├── Home.jsx
│   ├── Profiles.jsx
│   ├── Projects.jsx
│   └── Contact.jsx
├── App.jsx
├── main.jsx
└── index.css
 ### Usage
Navigation

Use the navigation bar to switch between pages

Click the company logo to return home

Dark Mode

Toggle using the button in the top-right corner

Preference saved between sessions

Visitor Counter

Automatically increments on page load

Persisted in localStorage


