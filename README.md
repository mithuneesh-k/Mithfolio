# Mithuneesh Kanagaraj | Portfolio

A modern, highly interactive personal portfolio website built to showcase my work, skills, and experience as a computer science student exploring AI, Machine Learning, and digital product development.

## 🚀 Features

- **Infinity Mode**: A custom, seamless scroll experience that allows users to continuously scroll through all sections of the portfolio without manual navigation.
- **Dynamic Animations**: Smooth page transitions and micro-interactions powered by Framer Motion.
- **Responsive Design**: Fully optimized for both desktop and mobile viewing.
- **Modern UI**: Clean aesthetics utilizing Tailwind CSS (v4) with custom styling and gradients.
- **Comprehensive Sections**: 
  - **Hero**: Introduction and quick contact actions.
  - **About**: Background and journey.
  - **Skills**: Technical proficiencies.
  - **Experience**: Professional timeline and roles.
  - **Certificates**: Achievements and certifications.
  - **Projects**: Portfolio of work.
  - **Performance**: Additional metrics and GitHub contributions.

## 🛠️ Tech Stack

- **Framework**: [React](https://react.dev/) 19 + [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Routing**: [React Router v7](https://reactrouter.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Other Utilities**: `react-github-calendar`

## 📂 Project Structure

```
src/
├── assets/         # Static assets like images and fonts
├── components/     # Reusable UI components and page sections
│   ├── Hero.jsx, About.jsx, Projects.jsx, etc.
│   ├── Navbar.jsx, Footer.jsx, PageNav.jsx
│   └── InfinityScroll.jsx
├── context/        # React Context providers
│   ├── InfinityModeContext.jsx
│   └── InfinityScrollContext.jsx
├── App.jsx         # Main application component and routing logic
├── index.css       # Global styles and Tailwind configuration
└── main.jsx        # Application entry point
```

## 🏁 Getting Started

To get a local copy up and running, follow these simple steps:

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone the repository
   ```sh
   git clone <repository-url>
   ```
2. Navigate into the project directory
   ```sh
   cd Mithfolio
   ```
3. Install dependencies
   ```sh
   npm install
   ```
4. Start the development server
   ```sh
   npm run dev
   ```

## 📜 Available Scripts

In the project directory, you can run:

- `npm run dev`: Starts the Vite development server.
- `npm run build`: Builds the app for production to the `dist` folder.
- `npm run lint`: Runs ESLint to check for code quality issues.
- `npm run preview`: Locally previews the production build.
