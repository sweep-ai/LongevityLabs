'use client'

import { useModal } from '@/contexts/ModalContext'

export default function Programs() {
  const { openModal } = useModal()
  const offerings = [
    {
      icon: 'science',
      title: 'Hormone Optimization',
      description: 'TRT/TRT+ protocols to bring levels to high optimal range.',
      features: [
        'Custom Bloodwork Analysis',
        'TRT/TRT+ Protocols',
        'Peptide & HGH Options',
      ],
    },
    {
      icon: 'fitness_center',
      title: 'Muscle Architecture',
      description: 'Build functional strength in 45 minutes, 3-4 times per week.',
      features: [
        'High intensity-low time sessions',
        '45-Minute Sessions',
        'hypertrophy & strength focused',
      ],
    },
    {
      icon: 'restaurant_menu',
      title: 'Metabolic Reset',
      description: 'Tailored nutrition that works with your biology.',
      features: [
        'Advanced Macro Calculator',
        'Nutrient Timing Protocols',
        'Sustainable Macro Education',
      ],
    },
    {
      icon: 'monitor_heart',
      title: 'Recovery & Sleep',
      description: 'Optimize sleep architecture and recovery protocols.',
      features: [
        'Sleep Optimization',
        'Recovery Tracking',
        'Stress Adaptation',
      ],
    },
    {
      icon: 'psychology',
      title: 'Mindset & Clarity',
      description: 'Mental performance training for peak focus.',
      features: [
        'Brain Fog Elimination',
        'Mental Performance',
        'Stress Management',
      ],
    },
    {
      icon: 'trending_up',
      title: 'Biomarker Tracking',
      description: 'Data-driven decisions guided by your metrics.',
      features: [
        'Bloodwork Analysis',
        'Performance Tracking',
        'Real-Time Adjustments',
      ],
    },
  ]

  return (
    <section id="programs" className="py-16 lg:py-24 bg-surface-dark border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold uppercase tracking-tight text-white mb-4">
            What <span className="text-primary">Coaching</span> Includes
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive approach to optimizing your performance, hormones, and longevity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {offerings.map((offering, index) => (
            <div
              key={index}
              className="group relative bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <span className="material-icons text-primary text-2xl">{offering.icon}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-display font-bold uppercase text-white mb-2">
                    {offering.title}
                  </h3>
                  <p className="text-sm text-gray-400 mb-3 leading-relaxed">
                    {offering.description}
                  </p>
                  <ul className="space-y-1.5">
                    {offering.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <span className="material-icons text-primary text-xs">check_circle</span>
                        <span className="text-xs text-gray-400">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button
            type="button"
            onClick={() => openModal('apply-coaching')}
            className="inline-flex items-center px-8 py-4 bg-primary hover:bg-primary-dark text-white font-display font-bold text-lg uppercase tracking-wider rounded-lg shadow-lg hover:shadow-primary/25 transition-all transform hover:-translate-y-0.5"
          >
            Apply for Coaching
            <span className="material-icons ml-2">arrow_forward</span>
          </button>
        </div>
      </div>
    </section>
  )
}

