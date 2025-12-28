'use client'

import { useState } from 'react'
import { useModal } from '@/contexts/ModalContext'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const { openModal } = useModal()

  const faqs = [
    {
      question: 'Is this program just for bodybuilders?',
      answer: 'Absolutely not. While we use advanced hypertrophy principles, the Longevity Lab is specifically designed for busy professionals over 35. Our goal is functional strength, hormone optimization, and sustainable longevity, not just looking big on stage. We build bodies that perform in the boardroom and the bedroom.',
    },
    {
      question: 'I have low T. Can this really help without TRT?',
      answer: 'Yes. Before considering medical intervention, we focus on the "Third Path": natural optimization through specific nutrient timing, stress adaptation protocols, and sleep architecture. 85% of our clients see a 200+ point increase in total testosterone within the first 90 days purely through our lifestyle engineering protocols.',
    },
    {
      question: 'I work 60+ hours a week. Do I have time for this?',
      answer: 'That is exactly who this is for. We don\'t ask for 2 hours a day in the gym. Our Micro-Dosing Fitness™ method requires 45 minutes, 3-4 times a week. The nutritional protocols are designed to be "grab-and-go" compatible. If you have time to scroll on your phone for 30 minutes, you have time to change your life.',
    },
    {
      question: 'What makes this different from other coaching?',
      answer: 'Most coaches give you a cookie-cutter meal plan and a workout PDF. Longevity Lab provides a holistic ecosystem. We track your biomarkers, sleep quality, and recovery scores. You get direct access to Dwayne and the team for real-time adjustments. It\'s not just coaching; it\'s bio-hacking management for high-performers.',
    },
    {
      question: 'Is there a guarantee?',
      answer: 'We are results-obsessed. If you follow the protocols, track your metrics, and don\'t see a measurable improvement in body composition and energy levels in 90 days, we work with you for free until you do. We only want success stories in our tribe.',
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <>
      <section id="faq" className="py-16 lg:py-24 bg-background-dark border-t border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold uppercase tracking-tight text-white mb-4">
              Common <span className="text-primary">Questions</span>
            </h2>
            <div className="h-1 w-16 bg-primary mx-auto rounded-full mb-4"></div>
            <p className="text-gray-400 text-sm max-w-2xl mx-auto">
              Everything you need to know about reclaiming your vitality, optimizing your hormones, and joining the top 1% of men over 35.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-surface-dark border border-gray-800 rounded-xl overflow-hidden hover:border-primary/50 transition-colors duration-300"
              >
                <button
                  className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="font-display font-medium text-lg uppercase tracking-wide text-white pr-4">
                    {faq.question}
                  </span>
                  <span
                    className={`material-icons text-primary transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  >
                    expand_more
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-5 pb-5 text-gray-400 leading-relaxed text-sm">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-surface-dark rounded-2xl border border-gray-800 p-6 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-primary"></div>
            <h3 className="font-display text-xl font-bold uppercase text-white mb-3">
              Still have questions?
            </h3>
            <p className="text-gray-400 text-sm mb-6">
              Book a free 15-minute clarity call with our intake specialist to see if you qualify.
            </p>
            <button
              onClick={() => openModal('coaching')}
              className="w-full bg-primary hover:bg-primary-dark text-white font-display font-bold uppercase tracking-wider py-4 rounded-lg shadow-lg hover:shadow-primary/30 transition-all transform active:scale-95 flex items-center justify-center gap-2"
            >
              <span>Book Your Strategy Call</span>
              <span className="material-icons text-sm">arrow_forward</span>
            </button>
            <p className="mt-3 text-xs text-gray-500">
              Limited spots available for this month.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

