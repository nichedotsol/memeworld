'use client'

export default function Logo({ 
  className = '', 
  iconOnly = false 
}: { 
  className?: string
  iconOnly?: boolean 
}) {
  // Logo file path
  const logoSrc = '/Memeworld2.png'
  
  if (iconOnly) {
    // Logo for header - using regular img for better transparency, close to full size
    return (
      <img
        src={logoSrc}
        alt="Meme World Logo"
        className={`${className} object-contain`}
        style={{ 
          backgroundColor: 'transparent',
          display: 'block',
          height: '120px',
          width: 'auto',
          maxWidth: '300px'
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
