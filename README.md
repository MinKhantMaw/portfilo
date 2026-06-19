# Portfolio Website

A modern portfolio website built with React, TypeScript, Vite, and Tailwind CSS. This project is structured as a fast, responsive single-page application ideal for showcasing projects, skills, experience, and contact information.

## Features

- React 19 + TypeScript frontend
- Vite-powered development and production build
- Tailwind CSS 4 for utility-first styling
- Responsive layout and accessible components
- Simple, maintainable component structure

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- Lucide icons
- Express (dependency included for optional backend or local API use)

## Getting Started

### Prerequisites

- Node.js 20+ (or compatible version)
- npm

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Open the address shown in the terminal, typically `http://localhost:3000`.

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

## Scripts

- `npm run dev` — start the development server
- `npm run build` — build the app for production
- `npm run preview` — preview the production build locally
- `npm run clean` — remove generated build files
- `npm run lint` — type-check the project with TypeScript

## Project Structure

- `src/` — application source code
  - `App.tsx` — root application component
  - `main.tsx` — client entry point
  - `index.css` — global styles
  - `components/` — UI and page sections
  - `data/` — structured data for content
  - `hooks/` — reusable custom hooks

## Notes

- Tailwind is configured through `tailwind.config.ts`
- Vite configuration lives in `vite.config.ts`
- Update content and styling in `src/components` and `src/data`

## License

This repository is provided as-is. Feel free to adapt it for your portfolio or personal projects.
