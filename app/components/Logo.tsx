'use client'

import Image from 'next/image'

export default function Logo({ 
  className = '', 
  iconOnly = false 
}: { 
  className?: string
  iconOnly?: boolean 
}) {
  // Logo file path - update this if your logo has a different name/format
  // Supported: logo.png, logo.svg, logo.jpg, logo.webp
  const logoSrc = '/logo.png'
  
  if (iconOnly) {
    // Just the icon for header
    return (
      <div className={className}>
        <Image
          src={logoSrc}
          alt="Meme World Logo"
          width={32}
          height={32}
          className="object-contain w-full h-full"
          unoptimized
        />
      </div>
    )
  }

  // Full logo
  return (
    <div className={`relative inline-block ${className}`}>
      <Image
        src={logoSrc}
        alt="Meme World"
        width={200}
        height={200}
        className="object-contain w-full h-full"
        priority
        unoptimized
      />
    </div>
  )
}
