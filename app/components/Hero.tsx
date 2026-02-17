'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useState, useRef } from 'react'

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false)
  const buttonRef = useRef<HTMLAnchorElement>(null)
  
  // Magnetic effect values
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  
  const springConfig = { damping: 15, stiffness: 150 }
  const xSpring = useSpring(x, springConfig)
  const ySpring = useSpring(y, springConfig)
  
  const rotateX = useTransform(ySpring, [-0.5, 0.5], ['7.5deg', '-7.5deg'])
  const rotateY = useTransform(xSpring, [-0.5, 0.5], ['-7.5deg', '7.5deg'])

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!buttonRef.current) return
    
    const rect = buttonRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    
    const distanceX = (e.clientX - centerX) / rect.width
    const distanceY = (e.clientY - centerY) / rect.height
    
    x.set(distanceX * 0.3)
    y.set(distanceY * 0.3)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
    setIsHovered(false)
  }

  return (
    <div id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Background - Ferrari Red */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(255, 200, 200, 0.4) 0%, rgba(255, 40, 0, 0.6) 30%, rgba(220, 20, 60, 0.8) 60%, rgba(139, 0, 0, 0.95) 100%)',
        }}
      />
      
      {/* Sunburst Pattern Overlay */}
      <div className="absolute inset-0 opacity-30">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, rgba(0,0,0,0.15) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Content - Centered text only with staggered animations */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-20"
      >
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-serif uppercase leading-[1.1] text-black mb-12"
          style={{ letterSpacing: '0.01em', fontWeight: 400 }}
        >
          {['Interested in this premium domain?'].map((line, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.5 + index * 0.2,
                ease: [0.25, 0.46, 0.45, 0.94] // Custom easing for smooth reveal
              }}
              className="block"
            >
              {line.split(' ').map((word, wordIndex) => (
                <motion.span
                  key={wordIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.5 + index * 0.2 + wordIndex * 0.05,
                    ease: "easeOut"
                  }}
                  className="inline-block mr-2"
                >
                  {word}
                </motion.span>
              ))}
            </motion.span>
          ))}
        </motion.h1>

        {/* Modern Animated Contact Button */}
        <motion.a
          ref={buttonRef}
          href="mailto:admin@memeworld.com"
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 1.2,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onMouseEnter={() => setIsHovered(true)}
          style={{
            x: xSpring,
            y: ySpring,
            rotateX,
            rotateY,
            transformStyle: 'preserve-3d',
          }}
          className="relative inline-block group"
        >
          {/* Button Background with Gradient */}
          <motion.div
            className="relative px-12 py-5 bg-black text-white font-serif uppercase tracking-wider text-lg md:text-xl overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          >
            {/* Shimmer Effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              initial={{ x: '-100%' }}
              animate={isHovered ? { x: '200%' } : { x: '-100%' }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
            />
            
            {/* Button Text */}
            <span className="relative z-10">CONTACT US</span>
            
            {/* Glow Effect */}
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 blur-xl"
              style={{
                background: 'radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)',
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
          
          {/* Animated Border */}
          <motion.div
            className="absolute inset-0 border-2 border-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.5 }}
            whileHover={{
              borderColor: 'rgba(255, 255, 255, 0.5)',
              boxShadow: '0 0 20px rgba(255, 255, 255, 0.3)',
            }}
          />
        </motion.a>
      </motion.div>

    </div>
  )
}
