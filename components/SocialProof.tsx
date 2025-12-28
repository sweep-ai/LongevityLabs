'use client'

import { useModal } from '@/contexts/ModalContext'

export default function SocialProof() {
  const { openModal } = useModal()

  const testimonials = [
    {
      name: 'Mark D.',
      age: 42,
      role: 'CEO',
      quote: 'I thought my prime was behind me. 12 weeks later, I have more energy for my business and my kids than I did in my 20s.',
      results: {
        weight: 'Lost 22 lbs',
        bodyFat: '24% → 14%',
      },
      badge: 'Regained Energy',
      icon: 'bolt',
    },
    {
      name: 'James R.',
      age: 38,
      role: 'Consultant',
      quote: 'The "Third Path" approach is no joke. I didn\'t just lose gut fat, I built real, functional strength without spending hours in the gym.',
      results: {
        weight: 'Deadlift +100lbs',
        bodyFat: 'Waist: 36" → 31"',
      },
      badge: 'Optimized Physique',
      icon: 'fitness_center',
    },
    {
      name: 'Robert T.',
      age: 51,
      role: 'Entrepreneur',
      quote: 'Brain fog is gone. My sleep is dialed in. I feel like a weapon again. This program is the blueprint for aging well.',
      results: {
        weight: 'Testosterone: 850ng',
        bodyFat: 'Up from 320ng',
      },
      badge: 'T-Levels 2x',
      icon: 'favorite',
    },
  ]

  return (
    <>
      <section id="testimonials" className="py-16 lg:py-24 bg-background-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold uppercase tracking-tight text-white mb-4">
              Proven Results: <br className="sm:hidden"/>
              <span className="text-primary">Men 35+ Transformed</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg mt-4">
              Real stories from high-performing men who reclaimed their vitality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-surface-dark border border-gray-800 rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-1"
              >
                {/* Before/After Image Placeholder */}
                <div className="grid grid-cols-2 gap-0.5 h-48 relative">
                  <div className="relative h-full w-full bg-gray-800 overflow-hidden flex items-center justify-center">
                    <span className="material-icons text-4xl text-gray-700">person</span>
                    <span className="absolute top-2 left-2 bg-black/70 text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase">
                      Before
                    </span>
                  </div>
                  <div className="relative h-full w-full bg-gray-800 overflow-hidden flex items-center justify-center">
                    <span className="material-icons text-4xl text-primary">person</span>
                    <span className="absolute top-2 right-2 bg-primary text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase">
                      After
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/80 to-transparent">
                    <span className="inline-block bg-white/10 backdrop-blur-md text-primary text-xs font-bold px-3 py-1 rounded-full uppercase">
                      <span className="material-icons text-xs align-middle mr-1">{testimonial.icon}</span>
                      {testimonial.badge}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <span className="material-icons text-4xl text-gray-700 mb-2 block">format_quote</span>
                  <p className="text-gray-300 text-lg italic leading-relaxed mb-4">
                    "{testimonial.quote}"
                  </p>
                  <div className="border-t border-gray-800 pt-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-display text-xl font-bold text-white uppercase">
                          {testimonial.name}
                        </h4>
                        <p className="text-xs text-gray-500 font-medium">
                          Age {testimonial.age} • {testimonial.role}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-bold text-primary">{testimonial.results.weight}</p>
                        <p className="text-xs text-gray-500">{testimonial.results.bodyFat}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => openModal('coaching')}
              className="inline-flex items-center px-8 py-4 bg-primary hover:bg-primary-dark text-white font-display font-bold text-lg uppercase tracking-wider rounded-lg shadow-lg transition-all"
            >
              Join These Success Stories
              <span className="material-icons ml-2">arrow_forward</span>
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

