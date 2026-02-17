'use client'

import { useState, useEffect } from 'react'
import Logo from './Logo'

const navItems = ['Portfolio', 'Team', 'About']

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['portfolio', 'team', 'about']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial check
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
        <a href="#home" className="flex items-center gap-3">
          <Logo iconOnly className="h-8 w-8 flex-shrink-0 text-black" />
          <span className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-wider text-black">
            MEME WORLD
          </span>
        </a>
        <div className="flex gap-8">
          {navItems.map((item) => {
            const href = `#${item.toLowerCase()}`
            const isActive = activeSection === item.toLowerCase()
            return (
              <a
                key={item}
                href={href}
                className={`font-serif text-sm uppercase tracking-wide transition-opacity hover:opacity-70 text-black ${
                  isActive ? 'opacity-100 font-bold' : 'opacity-80'
                }`}
              >
                {item}
              </a>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
