'use client'

import Logo from './Logo'

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-start items-center">
        <a href="#home" className="flex items-center">
          <Logo iconOnly className="flex-shrink-0" />
        </a>
      </div>
    </nav>
  )
}
