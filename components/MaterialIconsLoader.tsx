'use client'

import { useEffect } from 'react'

export default function MaterialIconsLoader() {
  useEffect(() => {
    // Check if Material Icons link already exists
    const existingLink = document.querySelector('link[href*="Material+Icons"]')
    
    if (!existingLink) {
      // Create and add Material Icons link
      const link = document.createElement('link')
      link.rel = 'stylesheet'
      link.href = 'https://fonts.googleapis.com/icon?family=Material+Icons'
      document.head.appendChild(link)
    }

    // Also add preconnect for better performance
    const existingPreconnect = document.querySelector('link[href="https://fonts.googleapis.com"]')
    if (!existingPreconnect) {
      const preconnect1 = document.createElement('link')
      preconnect1.rel = 'preconnect'
      preconnect1.href = 'https://fonts.googleapis.com'
      document.head.appendChild(preconnect1)

      const preconnect2 = document.createElement('link')
      preconnect2.rel = 'preconnect'
      preconnect2.href = 'https://fonts.gstatic.com'
      preconnect2.crossOrigin = 'anonymous'
      document.head.appendChild(preconnect2)
    }
  }, [])

  return null
}

