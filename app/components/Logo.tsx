'use client'

export default function Logo({ 
  className = '', 
  iconOnly = false 
}: { 
  className?: string
  iconOnly?: boolean 
}) {
  // Logo file path
  const logoSrc = '/Memeworld.png'
  
  if (iconOnly) {
    // Just the icon for header - using regular img for better transparency
    return (
      <img
        src={logoSrc}
        alt="Meme World Logo"
        className={`${className} object-contain`}
        style={{ 
          backgroundColor: 'transparent',
          display: 'block',
          maxHeight: '40px',
          width: 'auto',
          height: 'auto'
        }}
      />
    )
  }

  // Full logo - using regular img for better transparency
  return (
    <img
      src={logoSrc}
      alt="Meme World"
      className={`${className} object-contain`}
      style={{ 
        backgroundColor: 'transparent',
        display: 'block',
        maxWidth: '100%',
        height: 'auto'
      }}
    />
  )
}
