'use client'

import { useState, useEffect } from 'react'
import Hero from './components/Hero'
import LoadingScreen from './components/LoadingScreen'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check if user has already seen the loading screen
    const hasSeenLoading = localStorage.getItem('memeworld-has-loaded')
    
    if (hasSeenLoading) {
      // Skip loading screen on return visits
      setIsLoading(false)
    } else {
      // First visit - show loading screen
      const timer = setTimeout(() => {
        localStorage.setItem('memeworld-has-loaded', 'true')
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleLoadingComplete = () => {
    setIsLoading(false)
    localStorage.setItem('memeworld-has-loaded', 'true')
  }

  return (
    <main>
      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
      {!isLoading && <Hero />}
    </main>
  )
}
