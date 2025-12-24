# Portfolio Website 2026

A modern, animated portfolio website built with React, TypeScript, and Framer Motion.

## Features

- 🎨 Modern, responsive design with smooth animations
- ⚡ Built with React 18 and Vite for fast development
- 🎭 Framer Motion for beautiful animations
- 💅 Tailwind CSS for styling
- 📱 Fully responsive mobile-first design
- 🎯 Smooth scrolling navigation
- 🌈 Gradient effects and glassmorphism

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Framer Motion** - Animation library
- **Tailwind CSS** - Utility-first CSS framework
- **React Icons** - Icon library
- **React Intersection Observer** - Scroll animations

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd Website-2026
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Customization

### Update Personal Information

1. **Hero Section** (`src/components/Hero.tsx`):
   - Update social media links
   - Modify the introduction text

2. **About Section** (`src/components/About.tsx`):
   - Update the about text
   - Modify feature cards

3. **Projects Section** (`src/components/Projects.tsx`):
   - Replace with your actual projects
   - Update GitHub and demo links

4. **Skills Section** (`src/components/Skills.tsx`):
   - Add/remove skills
   - Adjust skill levels

5. **Contact Section** (`src/components/Contact.tsx`):
   - Update contact information
   - Connect form to your backend/email service

### Styling

The project uses Tailwind CSS. You can customize colors, spacing, and other design tokens in `tailwind.config.js`.

## Project Structure

```
Website-2026/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   └── Contact.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── public/
├── index.html
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── vite.config.ts
```

## License

MIT License - feel free to use this project for your own portfolio!

## Contact

Feel free to reach out if you have any questions or suggestions!

