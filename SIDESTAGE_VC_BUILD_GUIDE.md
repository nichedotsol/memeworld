# Building a Website Like SideStage.vc for Vercel

Based on the [SideStage.vc website](https://www.sidestage.vc/), here's a comprehensive guide to building a similar modern VC fund website.

## Key Design Features of SideStage.vc

1. **Gradient Purple Background** - Radial gradient with purple hues
2. **Smooth Animations** - Scroll-triggered animations
3. **Section-Based Layout** - Portfolio, Team, Ethos sections
4. **Modern Typography** - Mix of serif and sans-serif fonts
5. **Interactive Elements** - Hover effects, transitions
6. **Responsive Design** - Mobile-first approach
7. **Clean Navigation** - Simple header with section links

## Recommended Tech Stack

### Core Framework
- **Next.js 15** (App Router) - Best for Vercel deployment
- **TypeScript** - Type safety
- **React 19** - Latest React features

### Styling
- **Tailwind CSS** - Utility-first CSS
- **CSS Variables** - For theme management
- **Framer Motion** - Smooth animations

### UI Components
- **shadcn/ui** - Copy-paste components
- **Radix UI** - Accessible primitives

### Deployment
- **Vercel** - Zero-config deployment

## Project Setup

### 1. Initialize Next.js Project

```bash
npx create-next-app@latest sidestage-clone --typescript --tailwind --app --no-src-dir
cd sidestage-clone
```

### 2. Install Dependencies

```bash
npm install framer-motion
npm install @radix-ui/react-navigation-menu
npm install lucide-react
npm install clsx tailwind-merge
```

### 3. Setup shadcn/ui (Optional)

```bash
npx shadcn-ui@latest init
```

## Key Components to Build

### 1. Hero Section with Gradient Background

```tsx
// app/components/Hero.tsx
'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-radial from-purple-200 via-purple-300 to-purple-500" />
      
      {/* Sunburst Pattern Overlay */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[length:50px_50px]" />
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center px-4"
      >
        <h1 className="text-6xl md:text-8xl font-bold mb-6">
          We're building the seed fund
          <br />
          we wish we had when we were starting out.
        </h1>
        <p className="text-xl md:text-2xl font-serif">
          a founder-led seed fund
        </p>
      </motion.div>
    </div>
  )
}
```

### 2. Navigation Component

```tsx
// app/components/Navigation.tsx
'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const navItems = ['Portfolio', 'Team', 'Ethos']

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      // Section detection logic
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">SIDE STAGE VENTURES</div>
        <div className="flex gap-8">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="font-serif hover:opacity-70 transition-opacity"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
```

### 3. Portfolio Section

```tsx
// app/components/Portfolio.tsx
'use client'

import { motion } from 'framer-motion'

const portfolioItems = [
  { name: 'Braid', category: 'Fintech' },
  { name: 'Superdesign', category: 'Design' },
  { name: 'Leonardo AI', category: 'AI', exited: true },
  // ... more items
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold mb-16 text-center"
        >
          Portfolio
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow"
            >
              <h3 className="text-2xl font-bold mb-2">{item.name}</h3>
              <p className="text-gray-600">{item.category}</p>
              {item.exited && (
                <span className="inline-block mt-2 px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                  EXITED
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

### 4. Team Section

```tsx
// app/components/Team.tsx
'use client'

import { motion } from 'framer-motion'

const teamMembers = [
  {
    name: 'Markus Kahlbetzer',
    role: 'General Partner',
    bio: 'Markus is a General Partner & Co-Founder...',
  },
  // ... more members
]

export default function Team() {
  return (
    <section id="team" className="py-32 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold mb-16 text-center"
        >
          Team
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-32 h-32 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">{member.name}</h3>
              <p className="text-gray-600 mb-4">{member.role}</p>
              <p className="text-sm text-gray-500">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

### 5. Ethos Section

```tsx
// app/components/Ethos.tsx
'use client'

import { motion } from 'framer-motion'

const ethosValues = [
  {
    title: 'Founders First',
    description: 'We always remember that we back founders...',
  },
  {
    title: 'Bias to Action',
    description: 'Done is better than perfect. Speed matters. We like to GSD.',
  },
  // ... more values
]

export default function Ethos() {
  return (
    <section id="ethos" className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold mb-16 text-center"
        >
          Ethos
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ethosValues.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 border border-gray-200 rounded-lg"
            >
              <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

## Tailwind Configuration

```js
// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      fontFamily: {
        serif: ['Georgia', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        purple: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7e22ce',
          800: '#6b21a8',
          900: '#581c87',
        },
      },
    },
  },
  plugins: [],
}
export default config
```

## Main Layout

```tsx
// app/layout.tsx
import type { Metadata } from 'next'
import { Inter, Georgia } from 'next/font/google'
import './globals.css'
import Navigation from './components/Navigation'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const georgia = Georgia({ 
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-georgia'
})

export const metadata: Metadata = {
  title: 'Side Stage Ventures',
  description: 'A founder-led seed fund',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${georgia.variable} font-sans`}>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
```

## Main Page

```tsx
// app/page.tsx
import Hero from './components/Hero'
import Portfolio from './components/Portfolio'
import Team from './components/Team'
import Ethos from './components/Ethos'

export default function Home() {
  return (
    <main>
      <Hero />
      <Portfolio />
      <Team />
      <Ethos />
    </main>
  )
}
```

## Deployment to Vercel

### 1. Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <your-repo-url>
git push -u origin main
```

### 2. Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Vercel will auto-detect Next.js
4. Click "Deploy"

### 3. Environment Variables (if needed)

Add any environment variables in Vercel dashboard:
- Settings → Environment Variables

## Key Design Patterns

### 1. Smooth Scrolling
```tsx
// Add to globals.css
html {
  scroll-behavior: smooth;
}
```

### 2. Gradient Backgrounds
Use CSS gradients or Tailwind's gradient utilities for the purple radial gradient effect.

### 3. Scroll Animations
Use Framer Motion's `whileInView` for scroll-triggered animations.

### 4. Typography Hierarchy
- Large, bold sans-serif for headings
- Serif fonts for taglines and quotes
- Clean spacing and line heights

### 5. Section Transitions
Smooth transitions between sections with different background colors.

## Performance Optimizations

1. **Image Optimization** - Use Next.js Image component
2. **Code Splitting** - Automatic with Next.js
3. **Font Optimization** - Use `next/font` for custom fonts
4. **Lazy Loading** - Use `loading="lazy"` for images
5. **Minimal JavaScript** - Use CSS animations where possible

## Additional Features to Consider

1. **Testimonials Section** - Like the portfolio company quotes
2. **News/Blog Section** - For thought leadership content
3. **Contact Form** - For founder inquiries
4. **Newsletter Signup** - Email collection
5. **Analytics** - Vercel Analytics or Google Analytics

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vercel Deployment Guide](https://vercel.com/docs)
- [shadcn/ui Components](https://ui.shadcn.com)

## Conclusion

This stack provides:
- ✅ Modern, performant website
- ✅ Smooth animations and interactions
- ✅ Easy deployment to Vercel
- ✅ Type-safe development
- ✅ Responsive design
- ✅ SEO optimized

The key is combining Next.js 15's App Router with Framer Motion for animations and Tailwind CSS for styling to create a beautiful, modern VC fund website similar to SideStage.vc.
