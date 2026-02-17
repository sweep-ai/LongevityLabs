'use client'

import { useState } from 'react'

export interface CoachingApplicationData {
  fitnessExperience: string
  fitnessGoals: string
  firstName: string
  lastName: string
  email: string
  phone: string
  instagram: string
}

interface ApplyForCoachingModalProps {
  onClose: () => void
}

const STEP_1 = 1
const STEP_2 = 2
const STEP_THANK_YOU = 3

export default function ApplyForCoachingModal({ onClose }: ApplyForCoachingModalProps) {
  const [step, setStep] = useState(STEP_1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState<CoachingApplicationData>({
    fitnessExperience: '',
    fitnessGoals: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    instagram: '',
  })
  const [errors, setErrors] = useState<Partial<Record<keyof CoachingApplicationData, string>>>({})

  const update = (field: keyof CoachingApplicationData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }))
  }

  const validateStep1 = (): boolean => {
    const next: Partial<Record<keyof CoachingApplicationData, string>> = {}
    if (!formData.fitnessExperience.trim()) next.fitnessExperience = 'Please describe your current fitness experience.'
    if (!formData.fitnessGoals.trim()) next.fitnessGoals = 'Please tell us your fitness goals.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const validateStep2 = (): boolean => {
    const next: Partial<Record<keyof CoachingApplicationData, string>> = {}
    if (!formData.firstName.trim()) next.firstName = 'First name is required.'
    if (!formData.lastName.trim()) next.lastName = 'Last name is required.'
    if (!formData.email.trim()) next.email = 'Email is required.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) next.email = 'Please enter a valid email.'
    if (!formData.phone.trim()) next.phone = 'Phone number is required.'
    else if (formData.phone.replace(/\D/g, '').length < 10) next.phone = 'Please enter a valid phone number.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleNext = () => {
    if (step === STEP_1 && validateStep1()) setStep(STEP_2)
    else if (step === STEP_2 && validateStep2()) submit()
  }

  const submit = async () => {
    setIsSubmitting(true)
    setErrors({})
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          leadType: 'apply-coaching',
          ...formData,
        }),
      })
      if (!res.ok) throw new Error('Submission failed')
      setStep(STEP_THANK_YOU)
      // Auto-close after 3 seconds
      setTimeout(() => onClose(), 3000)
    } catch {
      setErrors({ email: 'Something went wrong. Please try again.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (step === STEP_THANK_YOU) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
        <div className="bg-surface-dark border border-gray-800 rounded-2xl p-8 max-w-md w-full text-center">
          <div className="mb-4">
            <span className="material-icons text-6xl text-primary">check_circle</span>
          </div>
          <h3 className="text-2xl font-display font-bold text-white mb-2 uppercase">Application received</h3>
          <p className="text-gray-400">We will be in contact soon.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="bg-surface-dark border border-gray-800 rounded-2xl p-6 md:p-8 max-w-md w-full my-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-display font-bold text-white uppercase">
            Apply for coaching {step === STEP_2 && '(2/2)'}
          </h2>
          <button type="button" onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
            <span className="material-icons">close</span>
          </button>
        </div>

        {step === STEP_1 && (
          <>
            <p className="text-gray-400 text-sm mb-4">Help us understand where you’re at.</p>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-400 text-sm mb-1">Current fitness experience</label>
                <textarea
                  value={formData.fitnessExperience}
                  onChange={(e) => update('fitnessExperience', e.target.value)}
                  placeholder="e.g. years training, past programs, injuries, etc."
                  rows={3}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary resize-none"
                />
                {errors.fitnessExperience && (
                  <p className="text-primary text-xs mt-1">{errors.fitnessExperience}</p>
                )}
              </div>
              <div>
                <label className="block text-gray-400 text-sm mb-1">Fitness goals</label>
                <textarea
                  value={formData.fitnessGoals}
                  onChange={(e) => update('fitnessGoals', e.target.value)}
                  placeholder="What do you want to achieve?"
                  rows={3}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary resize-none"
                />
                {errors.fitnessGoals && (
                  <p className="text-primary text-xs mt-1">{errors.fitnessGoals}</p>
                )}
              </div>
            </div>
            <button
              type="button"
              onClick={handleNext}
              className="mt-6 w-full py-4 px-6 bg-primary hover:bg-primary-dark text-white font-display font-bold uppercase tracking-wide rounded-lg transition-colors"
            >
              Next
            </button>
          </>
        )}

        {step === STEP_2 && (
          <>
            <p className="text-gray-400 text-sm mb-4">Your contact details.</p>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <input
                    value={formData.firstName}
                    onChange={(e) => update('firstName', e.target.value)}
                    placeholder="First name"
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary"
                  />
                  {errors.firstName && <p className="text-primary text-xs mt-1">{errors.firstName}</p>}
                </div>
                <div>
                  <input
                    value={formData.lastName}
                    onChange={(e) => update('lastName', e.target.value)}
                    placeholder="Last name"
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary"
                  />
                  {errors.lastName && <p className="text-primary text-xs mt-1">{errors.lastName}</p>}
                </div>
              </div>
              <div>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => update('email', e.target.value)}
                  placeholder="Email"
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary"
                />
                {errors.email && <p className="text-primary text-xs mt-1">{errors.email}</p>}
              </div>
              <div>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => update('phone', e.target.value)}
                  placeholder="Phone number"
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary"
                />
                {errors.phone && <p className="text-primary text-xs mt-1">{errors.phone}</p>}
              </div>
              <div>
                <input
                  value={formData.instagram}
                  onChange={(e) => update('instagram', e.target.value)}
                  placeholder="Instagram @"
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary"
                />
              </div>
            </div>
            <div className="mt-6 flex gap-3">
              <button
                type="button"
                onClick={() => setStep(STEP_1)}
                className="flex-1 py-4 px-6 border border-gray-600 text-gray-300 font-display font-bold uppercase tracking-wide rounded-lg hover:bg-gray-800 transition-colors"
              >
                Back
              </button>
              <button
                type="button"
                onClick={handleNext}
                disabled={isSubmitting}
                className="flex-1 py-4 px-6 bg-primary hover:bg-primary-dark text-white font-display font-bold uppercase tracking-wide rounded-lg transition-colors disabled:opacity-50"
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            </div>
          </>
        )}

        <p className="mt-4 text-xs text-gray-500 text-center">
          By submitting, you agree to receive communications from The Third Path.
        </p>
      </div>
    </div>
  )
}
