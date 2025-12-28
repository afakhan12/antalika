# Antalika - Engineering & Trading Consulting

A Next.js application for Antalika's engineering and trading consulting services.

## Features

- Built with Next.js 15 and React 19
- TypeScript support
- Tailwind CSS for styling
- Static export support for deployment
- Responsive design

## Getting Started

### Prerequisites

- Node.js 18+ installed

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. (Optional) Set environment variables in `.env.local`:
   ```
   GEMINI_API_KEY=your_api_key_here
   ```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

Build the application:

```bash
npm run build
```

This will create a static export in the `out` directory that can be deployed to any static hosting service.

### Static Export

The project is configured for static export. After running `npm run build`, the static files will be in the `out` directory. You can deploy this folder to:

- GitHub Pages
- Netlify
- Vercel
- AWS S3
- Any static hosting service

### Project Structure

```
├── app/                    # Next.js app directory
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── [routes]/           # Route pages
├── components/             # React components
│   ├── Header.tsx
│   └── Footer.tsx
├── pages/                  # Page components
└── constants.ts            # Constants and data
```

## Technologies

- **Next.js 15** - React framework
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Next.js Font Optimization** - Optimized font loading
