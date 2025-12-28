'use client'

import { useState } from 'react'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <img 
              alt="Longevity Lab Logo" 
              className="h-10 w-auto" 
              src="/assets/LongevityLab.png"
              onError={(e) => {
                // Fallback if image doesn't exist
                e.currentTarget.style.display = 'none'
              }}
            />
            <span className="ml-3 font-display font-bold text-2xl tracking-wide uppercase text-white">
              Longevity Lab
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a href="#about" className="text-gray-300 hover:text-primary transition-colors">
              About
            </a>
            <a href="#packages" className="text-gray-300 hover:text-primary transition-colors">
              Programs
            </a>
            <a href="#faq" className="text-gray-300 hover:text-primary transition-colors">
              FAQ
            </a>
            <a 
              href="#coaching" 
              className="px-4 py-2 bg-primary hover:bg-primary-dark text-white font-bold rounded transition-colors"
            >
              Apply Now
            </a>
          </div>
          <button 
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-primary focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="material-icons">
              {isMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 border-t border-gray-800">
          <div className="px-4 py-4 space-y-4">
            <a href="#about" className="block text-gray-300 hover:text-primary">About</a>
            <a href="#packages" className="block text-gray-300 hover:text-primary">Programs</a>
            <a href="#faq" className="block text-gray-300 hover:text-primary">FAQ</a>
            <a 
              href="#coaching" 
              className="block w-full text-center px-4 py-2 bg-primary hover:bg-primary-dark text-white font-bold rounded"
            >
              Apply Now
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

