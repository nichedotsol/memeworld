'use client'

import Logo from './Logo'

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" className="flex items-center">
          <Logo iconOnly className="flex-shrink-0" />
        </a>
        <a
          href="#home"
          className="font-serif text-sm uppercase tracking-wide transition-opacity hover:opacity-70 text-black"
        >
          CONTACT US
        </a>
      </div>
    </nav>
  )
}
