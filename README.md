# Meme World

A modern, creator-led meme platform website built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- 🎨 Beautiful gradient hero section with purple radial gradient
- 🎯 Smooth scroll animations
- 📱 Fully responsive design
- ⚡ Built with Next.js 15 (App Router)
- 🎭 Custom logo with wireframe globe
- 🚀 Optimized for Vercel deployment

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
memeworld/
├── app/
│   ├── components/
│   │   ├── Logo.tsx          # Meme World logo with wireframe globe
│   │   ├── Navigation.tsx    # Fixed navigation bar
│   │   ├── Hero.tsx           # Hero section with gradient
│   │   ├── Portfolio.tsx     # Portfolio section
│   │   ├── Team.tsx           # Team section
│   │   └── About.tsx          # About/Values section
│   ├── layout.tsx             # Root layout
│   ├── page.tsx               # Home page
│   └── globals.css            # Global styles
├── public/                    # Static assets
├── tailwind.config.ts         # Tailwind configuration
└── package.json
```

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

Or use the Vercel CLI:

```bash
npm i -g vercel
vercel
```

## Customization

### Update Logo

Edit `app/components/Logo.tsx` to customize the logo design.

### Change Colors

Update the purple gradient colors in `tailwind.config.ts`:

```ts
colors: {
  purple: {
    // Your custom colors
  }
}
```

### Add Content

- **Portfolio**: Edit `app/components/Portfolio.tsx`
- **Team**: Edit `app/components/Team.tsx`
- **About**: Edit `app/components/About.tsx`

## Tech Stack

- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **Framer Motion** - Animation library

## License

MIT
