'use client'

import { useState } from 'react'
import LeadCaptureModal from './LeadCaptureModal'

export default function ProblemSolution() {
  const [showModal, setShowModal] = useState(false)

  const problems = [
    {
      icon: 'battery_alert',
      title: 'Stalled Progress & Low Energy',
      description: 'Training hard but seeing zero changes? Feeling drained by 2 PM? You\'re likely overtraining or under-recovering.',
      solution: 'Metabolic Reset Protocol',
    },
    {
      icon: 'restaurant_menu',
      title: 'Confusing Diets & Workouts',
      description: 'Information overload is paralyzing. Stop jumping between fads that weren\'t built for your biology.',
      solution: 'Tailored Nutrition Blueprint',
    },
    {
      icon: 'biotech',
      title: 'Hormonal Imbalance & Aging',
      description: 'Testosterone drops naturally, but lifestyle accelerates it. Don\'t let your physiology work against you.',
      solution: 'Hormone Optimization Strategy',
    },
  ]

  return (
    <>
      <section className="py-16 lg:py-24 bg-surface-dark border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold uppercase tracking-tight text-white mb-4">
              Your Roadblocks, <span className="text-primary">Our Solutions</span>
            </h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full mb-4"></div>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              You've tried the generic plans. Now, let's address the real obstacles standing between you and your peak performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {problems.map((problem, index) => (
              <div
                key={index}
                className="group relative bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <span className="material-icons text-primary text-2xl">{problem.icon}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-display font-bold uppercase text-white mb-2">
                      {problem.title}
                    </h3>
                    <p className="text-sm text-gray-400 mb-3 leading-relaxed">
                      {problem.description}
                    </p>
                    <div className="flex items-center text-primary text-xs font-bold uppercase tracking-wider">
                      <span className="material-icons text-sm mr-1">check_circle</span>
                      <span>{problem.solution}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => setShowModal(true)}
              className="inline-flex items-center px-8 py-4 bg-primary hover:bg-primary-dark text-white font-display font-bold text-lg uppercase tracking-wider rounded-lg shadow-lg hover:shadow-primary/25 transition-all transform hover:-translate-y-0.5"
            >
              See How We Help
              <span className="material-icons ml-2">arrow_forward</span>
            </button>
          </div>
        </div>
      </section>

      {showModal && (
        <LeadCaptureModal 
          leadType="lead-magnet"
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  )
}

