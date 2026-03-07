'use client'

import { useModal } from '@/contexts/ModalContext'

export default function SocialProof() {
  const { openModal } = useModal()

  const testimonials = [
    {
      name: 'Mickey',
      age: null,
      role: 'Athlete',
      quote: 'I came to Dwayne with one goal: get absolutely jacked for my first photoshoot. Over 16 weeks, we completely recomped my body. The transformation was everything I hoped for. When I\'m ready to get back in shape, I know exactly where I\'m going.',
      results: {
        weight: '16 Week Recomp',
        bodyFat: 'Photoshoot Ready',
      },
      badge: 'Photoshoot Ready',  
      icon: 'camera_alt',
      afterImage: '/assets/transfo4.jpg',
    },
    {
      name: 'Phillip',
      age: 51,
      role: 'Professional',
      quote: 'At 51, I thought it was too late. But tracking my food clicked after two weeks, and the results speak for themselves. Down 14kg in 12 weeks - no TRT, no drugs. Just proper nutrition and training 3 days a week. I feel stronger and younger than I have in years.',
      results: {
        weight: 'Lost 14kg',
        bodyFat: '12 weeks',
      },
      badge: 'Age is Just a Number',
      icon: 'fitness_center',
      afterImage: '/assets/transfo3.jpg'
    },
    {
      name: 'Lorna',
      age: null,
      role: 'Former Bodybuilder',
      quote: 'After years of restrictive diets and destroyed metabolism, I finally found freedom. In 5 months, I dropped 17kg and completely recomposed my body. No more 15,000 steps or hours of cardio - just smart training and proper nutrition. My metabolism is fixed and my confidence is back.',
      results: {
        weight: 'Lost 17kg',
        bodyFat: '88kg → 71kg',
      },
      badge: 'Metabolism Fixed',
      icon: 'trending_up',
      afterImage: '/assets/tranfo2.jpg'
    },
  ]

  return (
    <>
      <section id="testimonials" className="py-16 lg:py-24 bg-background-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold uppercase tracking-tight text-white mb-4">
              Proven Results: <br className="sm:hidden"/>
              <span className="text-primary">Real Transformations</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg mt-4">
              Real stories from clients who transformed their bodies and reclaimed their vitality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-surface-dark border border-gray-800 rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-1"
              >
                {/* Before/After Images */}
                <div className="h-64 md:h-80 relative">
                  <div className="relative h-full w-full bg-gray-800 overflow-hidden">
                    {(testimonial as any).afterImage ? (
                      <img 
                        src={(testimonial as any).afterImage} 
                        alt="After" 
                        className="w-full h-full object-cover filter contrast-110"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="material-icons text-4xl text-primary">person</span>
                      </div>
                    )}
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
                          {testimonial.age ? `Age ${testimonial.age} • ` : ''}{testimonial.role}
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
              type="button"
              onClick={() => openModal('apply-coaching')}
              className="inline-flex items-center px-8 py-4 bg-primary hover:bg-primary-dark text-white font-display font-bold text-lg uppercase tracking-wider rounded-lg shadow-lg transition-all"
            >
              Apply for Coaching
              <span className="material-icons ml-2">arrow_forward</span>
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

