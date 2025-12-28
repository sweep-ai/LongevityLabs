'use client'

import { useModal } from '@/contexts/ModalContext'

export default function Hero() {
  const { openModal } = useModal()

  const handleCTAClick = (type: 'coaching' | 'lead-magnet' | 'email') => {
    openModal(type)
  }

  return (
    <>
      <section className="relative pt-16 pb-12 lg:pt-24 lg:pb-20 overflow-hidden bg-background-dark">
        {/* Background gradients */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0 opacity-20">
          <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] rounded-full bg-primary blur-[120px]"></div>
          <div className="absolute top-[40%] -left-[10%] w-[400px] h-[400px] rounded-full bg-gray-500 blur-[100px]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Left Column - Text Content */}
            <div className="flex-1 text-center lg:text-left">
              {/* Logo */}
              <div className="mb-8 transform hover:scale-105 transition-transform duration-300">
                <img 
                  alt="Longevity Lab Logo Large" 
                  className="h-24 sm:h-32 w-auto mx-auto lg:mx-0 drop-shadow-2xl" 
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
              <p className="mt-4 max-w-2xl text-lg sm:text-xl text-gray-400 mb-8 leading-relaxed mx-auto lg:mx-0">
                Build Muscle, Drop Fat, Optimize Hormones<br className="hidden sm:block"/>
                <span className="text-primary font-bold">A Third Path</span> to Lasting Transformation.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center lg:justify-start mb-8">
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
            </div>

            {/* Right Column - YouTube Video Embed */}
            <div className="flex-shrink-0 w-full max-w-xs lg:max-w-sm">
              <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl border border-gray-800">
                <div className="relative w-full" style={{ aspectRatio: '9/16' }}>
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/tsbrvw7DVo8?si=YbCtMQMET4eGMuXo&controls=1&autoplay=1&mute=1&loop=1&playlist=tsbrvw7DVo8"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
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
    </>
  )
}

