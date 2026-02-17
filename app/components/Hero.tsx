'use client'

import { motion } from 'framer-motion'

export default function Hero() {
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

      {/* Content - Centered text only */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-20"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-serif uppercase leading-[1.1] text-black"
          style={{ letterSpacing: '0.01em', fontWeight: 400 }}
        >
          WE'RE BUILDING THE MEME
          <br />
          PLATFORM WE WISH WE HAD WHEN
          <br />
          WE WERE STARTING OUT.
        </motion.h1>
      </motion.div>

      {/* Footer Text - Fixed at bottom */}
      <div className="absolute bottom-6 md:bottom-8 left-0 right-0 z-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs md:text-sm font-serif uppercase tracking-wide text-black">
            A CREATOR-LED MEME PLATFORM
          </p>
          <div className="flex gap-4 md:gap-6 text-xs md:text-sm font-serif uppercase tracking-wide text-black">
            <a href="#portfolio" className="hover:opacity-70 transition-opacity">PORTFOLIO</a>
            <a href="#team" className="hover:opacity-70 transition-opacity">TEAM</a>
            <a href="#about" className="hover:opacity-70 transition-opacity">ABOUT</a>
          </div>
        </div>
      </div>
    </div>
  )
}
