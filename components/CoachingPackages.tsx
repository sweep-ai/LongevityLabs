'use client'

import { useState } from 'react'
import LeadCaptureModal from './LeadCaptureModal'

export default function CoachingPackages() {
  const [showModal, setShowModal] = useState(false)
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null)

  const packages = [
    {
      name: 'Foundation Protocol',
      type: 'Self-Paced',
      price: '$497',
      period: '/ lifetime',
      features: [
        'Complete Nutrition Blueprint',
        'Training Library Access',
        'Community Support Group',
      ],
      cta: 'Start Now',
      popular: false,
    },
    {
      name: 'Accelerated Performance',
      type: 'Hybrid Coaching',
      price: '$1,497',
      period: '/ 12 weeks',
      features: [
        'Custom Bloodwork Analysis',
        'Weekly Group Strategy Calls',
        'Personalized Supplement Stack',
        'Advanced Sleep Optimization',
      ],
      cta: 'Apply Now',
      popular: true,
    },
    {
      name: 'Executive 1-on-1',
      type: 'Full Immersion',
      price: '$4,997',
      period: '/ 12 weeks',
      features: [
        'Direct 24/7 Access to Dwayne',
        'Bi-Weekly 1-on-1 Deep Dives',
        'Executive Lifestyle Audit',
        'Concierge Health Management',
      ],
      cta: 'Inquire Only',
      popular: false,
    },
  ]

  const handlePackageClick = (pkgName: string) => {
    setSelectedPackage(pkgName)
    setShowModal(true)
  }

  return (
    <>
      <section id="packages" className="py-16 lg:py-24 bg-surface-dark border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold uppercase tracking-tight text-white mb-4">
              Your Path to <span className="text-primary">Peak Performance</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Stop guessing. Start executing. Join the elite 1% of men taking control of their biology and legacy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`relative bg-gray-900 border rounded-xl p-6 shadow-lg transition-all duration-300 ${
                  pkg.popular
                    ? 'border-2 border-primary scale-105 z-10'
                    : 'border-gray-800 hover:border-gray-700'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 right-0 bg-primary text-white text-[10px] font-bold uppercase px-3 py-1 rounded-bl-lg">
                    Most Popular
                  </div>
                )}
                <h3 className={`text-2xl font-display uppercase mb-2 ${pkg.popular ? 'text-primary' : 'text-white'}`}>
                  {pkg.name}
                </h3>
                <div className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-4">
                  {pkg.type}
                </div>
                <div className="text-3xl font-bold mb-6 flex items-baseline gap-1 text-white">
                  {pkg.price}
                  <span className="text-sm font-normal text-gray-500">{pkg.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <span className="material-icons text-primary text-sm mt-1">check_circle</span>
                      <span className="text-sm text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => handlePackageClick(pkg.name)}
                  className={`w-full py-3 px-6 rounded-lg font-bold uppercase tracking-wider text-sm transition-colors ${
                    pkg.popular
                      ? 'bg-primary hover:bg-primary-dark text-white shadow-lg'
                      : pkg.name === 'Executive 1-on-1'
                      ? 'border border-gray-600 text-gray-300 hover:bg-gray-800'
                      : 'border-2 border-primary text-primary hover:bg-primary hover:text-white'
                  }`}
                >
                  {pkg.cta}
                  {pkg.popular && (
                    <span className="material-icons text-sm ml-2 align-middle">arrow_forward</span>
                  )}
                </button>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center border-t border-gray-800 pt-8">
            <p className="text-xs uppercase tracking-widest text-gray-500 mb-4">
              Trusted by Executives From
            </p>
            <div className="flex justify-center gap-6 opacity-50">
              <span className="material-icons text-2xl text-gray-600">fitness_center</span>
              <span className="material-icons text-2xl text-gray-600">monitor_heart</span>
              <span className="material-icons text-2xl text-gray-600">show_chart</span>
              <span className="material-icons text-2xl text-gray-600">bolt</span>
            </div>
          </div>
        </div>
      </section>

      {showModal && (
        <LeadCaptureModal 
          leadType="coaching"
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  )
}

