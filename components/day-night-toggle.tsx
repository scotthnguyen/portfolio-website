"use client"

import { useEffect, useState } from "react"

export function DayNightToggle() {
  const [showBiomes, setShowBiomes] = useState(false)

  useEffect(() => {
    // Check initial state
    const body = document.body
    setShowBiomes(body.classList.contains('show-biomes'))
  }, [])

  const toggleBiomes = () => {
    const body = document.body
    body.classList.toggle('show-biomes')
    setShowBiomes(!showBiomes)
  }

  return (
    <button
      onClick={toggleBiomes}
      className="fixed top-20 right-6 z-50 p-3 bg-card border-4 border-border hover:border-primary transition-all terraria-shadow hover:translate-y-[-2px]"
      aria-label="Toggle biome backgrounds"
    >
      <div className="relative w-8 h-8">
        {showBiomes ? (
          // Underground icon (dark mode)
          <svg viewBox="0 0 32 32" className="w-full h-full" fill="#8B4513">
            <rect x="0" y="0" width="32" height="32" fill="#2a1f1a" />
            <rect x="4" y="4" width="4" height="4" fill="#ff9f40" />
            <rect x="20" y="8" width="4" height="4" fill="#60b030" />
            <rect x="8" y="20" width="4" height="4" fill="#9060d0" />
            <rect x="24" y="24" width="4" height="4" fill="#ff9f40" />
          </svg>
        ) : (
          // Biomes icon (colorful)
          <svg viewBox="0 0 32 32" className="w-full h-full">
            <rect x="0" y="0" width="16" height="16" fill="#87ceeb" />
            <rect x="16" y="0" width="16" height="16" fill="#4a6a4a" />
            <rect x="0" y="16" width="16" height="16" fill="#c0d0e0" />
            <rect x="16" y="16" width="16" height="16" fill="#3a1848" />
          </svg>
        )}
      </div>
    </button>
  )
}
