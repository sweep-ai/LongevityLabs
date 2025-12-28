'use client'

import { useModal } from '@/contexts/ModalContext'

export default function LeadMagnets() {
  const { openModal } = useModal()

  const leadMagnets = [
    {
      icon: 'assignment_turned_in',
      badge: 'Free Guide',
      title: 'TRT Optimization Checklist',
      description: 'Don\'t guess with your hormones. Get the complete safety & effectiveness protocol before you start your journey.',
      type: 'trt-checklist' as const,
    },
    {
      icon: 'calculate',
      badge: 'Exclusive Tool',
      title: 'Advanced Macro Calculator',
      description: 'Dial in your nutrition with precision. Get custom targets for muscle gain, fat loss, and longevity optimization.',
      type: 'macro-calculator' as const,
    },
  ]

  return (
    <>
      <section id="resources" className="py-16 lg:py-24 bg-background-dark border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold uppercase tracking-tight text-white mb-4">
              Ready for Your <span className="text-primary">Transformation?</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Exclusive tools for men 35+ looking to reclaim their prime.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
            {leadMagnets.map((magnet, index) => (
              <div
                key={index}
                className="group relative bg-surface-dark border border-gray-800 rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <span className="material-icons text-6xl text-white">
                    {magnet.icon === 'assignment_turned_in' ? 'medical_services' : 'fitness_center'}
                  </span>
                </div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary">
                      <span className="material-icons text-2xl">{magnet.icon}</span>
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-primary">
                      {magnet.badge}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white mb-2 uppercase">
                    {magnet.title}
                  </h3>
                  <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                    {magnet.description}
                  </p>
                  <button
                    onClick={() => openModal('lead-magnet')}
                    className="w-full bg-primary hover:bg-primary-dark text-white font-display font-bold text-lg uppercase py-3.5 px-6 rounded-lg shadow-lg hover:shadow-primary/25 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Download Now
                    <span className="material-icons text-xl">download</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-xs text-gray-500 font-medium">
              <span className="material-icons text-sm align-middle mr-1">lock</span>
              100% Secure. We respect your privacy.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

