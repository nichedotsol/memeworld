'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import Logo from './Logo'

interface LoadingScreenProps {
  onComplete: () => void
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => {
            onComplete()
          }, 500)
          return 100
        }
        return prev + 2
      })
    }, 30)

    return () => clearInterval(interval)
  }, [onComplete])

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-radial"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(255, 200, 200, 0.4) 0%, rgba(255, 40, 0, 0.6) 30%, rgba(220, 20, 60, 0.8) 60%, rgba(139, 0, 0, 0.95) 100%)',
        }}
      >
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

        {/* Logo with Animation */}
        <div className="relative z-10 flex flex-col items-center justify-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0, rotate: -10 }}
            animate={{ 
              scale: [0.8, 1.1, 1],
              opacity: 1,
              rotate: 0
            }}
            transition={{ 
              duration: 1.2,
              ease: "easeOut",
              scale: {
                times: [0, 0.5, 1],
                duration: 1.2
              }
            }}
            className="mb-8"
          >
            <div className="h-48 w-64 md:h-64 md:w-80 flex items-center justify-center">
              <Logo className="h-full w-full" />
            </div>
          </motion.div>

          {/* Progress Bar */}
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: '100%', opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.3 }}
            className="w-64 h-1 bg-black/20 rounded-full overflow-hidden"
          >
            <motion.div
              className="h-full bg-black/80 rounded-full"
              initial={{ width: '0%' }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            />
          </motion.div>

          {/* Loading Text */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="mt-4 text-sm font-serif uppercase tracking-wide text-black/70"
          >
            Loading...
          </motion.p>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
