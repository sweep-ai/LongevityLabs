'use client'

import { useState } from 'react'
import LeadCaptureModal from './LeadCaptureModal'

export default function Hero() {
  const [showModal, setShowModal] = useState(false)
  const [leadType, setLeadType] = useState<'coaching' | 'lead-magnet' | 'email'>('email')

  const handleCTAClick = (type: 'coaching' | 'lead-magnet' | 'email') => {
    setLeadType(type)
    setShowModal(true)
  }

  return (
    <>
      <section className="relative pt-16 pb-12 lg:pt-24 lg:pb-20 overflow-hidden bg-background-dark min-h-screen flex flex-col justify-center">
        {/* Background gradients */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0 opacity-20">
          <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] rounded-full bg-primary blur-[120px]"></div>
          <div className="absolute top-[40%] -left-[10%] w-[400px] h-[400px] rounded-full bg-gray-500 blur-[100px]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          {/* Logo */}
          <div className="mb-8 transform hover:scale-105 transition-transform duration-300">
            <img 
              alt="Longevity Lab Logo Large" 
              className="h-32 w-auto mx-auto drop-shadow-2xl" 
              src="/assets/LongevityLab.png"
            />
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight text-white mb-6 uppercase leading-none">
            Unlock Your <span className="text-primary">Prime</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl font-display font-semibold text-gray-300 mb-2 uppercase tracking-wide">
            High-Performance Coaching for Men 35+
          </p>

          {/* Value Proposition */}
          <p className="mt-4 max-w-2xl text-lg sm:text-xl text-gray-400 mb-10 leading-relaxed">
            Build Muscle, Drop Fat, Optimize Hormones<br className="hidden sm:block"/>
            <span className="text-primary font-bold">A Third Path</span> to Lasting Transformation.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center mb-12">
            <button
              onClick={() => handleCTAClick('coaching')}
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-lg text-white bg-primary hover:bg-primary-dark transition-colors duration-300 shadow-lg shadow-primary/25 uppercase tracking-wide w-full sm:w-auto"
            >
              Apply for Coaching
              <span className="material-icons ml-2 text-xl">arrow_forward</span>
            </button>
            <button
              onClick={() => handleCTAClick('lead-magnet')}
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary text-lg font-bold rounded-lg text-primary bg-transparent hover:bg-primary/10 transition-colors duration-300 uppercase tracking-wide w-full sm:w-auto"
            >
              Get Free Resources
            </button>
          </div>

          {/* Hero Image */}
          <div className="relative w-full max-w-md mx-auto mt-8 lg:mt-0 lg:max-w-lg aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border border-gray-800 group">
            <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
              <span className="material-icons text-6xl text-gray-700">fitness_center</span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent opacity-90"></div>
            <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl">
              <div className="flex items-center gap-3">
                <div className="bg-primary p-2 rounded-full">
                  <span className="material-icons text-white text-xl">fitness_center</span>
                </div>
                <div>
                  <p className="text-white font-bold text-sm uppercase">Dwayne Dunning</p>
                  <p className="text-gray-300 text-xs">Founder, Longevity Lab</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 border-t border-gray-800 pt-8 w-full max-w-4xl mx-auto px-4">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-6 text-center">
            Trusted By High Performers
          </p>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 items-center opacity-70">
            <div className="flex justify-center items-center">
              <span className="material-icons text-4xl mr-2 text-primary">verified</span>
              <span className="font-display font-bold text-xl text-white">ELITE</span>
            </div>
            <div className="flex justify-center items-center">
              <span className="material-icons text-4xl mr-2 text-primary">bolt</span>
              <span className="font-display font-bold text-xl text-white">POWER</span>
            </div>
            <div className="flex justify-center items-center">
              <span className="material-icons text-4xl mr-2 text-primary">favorite</span>
              <span className="font-display font-bold text-xl text-white">HEALTH</span>
            </div>
            <div className="flex justify-center items-center">
              <span className="material-icons text-4xl mr-2 text-primary">psychology</span>
              <span className="font-display font-bold text-xl text-white">MINDSET</span>
            </div>
          </div>
        </div>
      </section>

      {showModal && (
        <LeadCaptureModal 
          leadType={leadType}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  )
}

