'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

const baseSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  age: z.string().min(1, 'Please enter your age'),
})

const coachingSchema = baseSchema.extend({
  phone: z.string().min(10, 'Please enter a valid phone number'),
  goals: z.string().min(10, 'Please tell us about your goals'),
  currentChallenges: z.string().min(10, 'Please describe your current challenges'),
})

const leadMagnetSchema = baseSchema.extend({
  resourceType: z.enum(['trt-checklist', 'macro-calculator', 'both']),
})

type BaseFormData = z.infer<typeof baseSchema>
type CoachingFormData = z.infer<typeof coachingSchema>
type LeadMagnetFormData = z.infer<typeof leadMagnetSchema>

interface LeadCaptureModalProps {
  leadType: 'coaching' | 'lead-magnet' | 'email'
  onClose: () => void
}

export default function LeadCaptureModal({ leadType, onClose }: LeadCaptureModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const schema = leadType === 'coaching' 
    ? coachingSchema 
    : leadType === 'lead-magnet' 
    ? leadMagnetSchema 
    : baseSchema

  const { register, handleSubmit, formState: { errors }, reset } = useForm<BaseFormData | CoachingFormData | LeadMagnetFormData>({
    resolver: zodResolver(schema),
  })

  const onSubmit = async (data: BaseFormData | CoachingFormData | LeadMagnetFormData) => {
    setIsSubmitting(true)
    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, leadType }),
      })

      if (response.ok) {
        setIsSuccess(true)
        reset()
        setTimeout(() => {
          onClose()
          setIsSuccess(false)
        }, 2000)
      } else {
        throw new Error('Submission failed')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const getTitle = () => {
    switch (leadType) {
      case 'coaching':
        return 'Apply for Coaching'
      case 'lead-magnet':
        return 'Get Your Free Resources'
      default:
        return 'Join the Longevity Lab'
    }
  }

  const getDescription = () => {
    switch (leadType) {
      case 'coaching':
        return 'Take the first step toward reclaiming your prime. Limited spots available.'
      case 'lead-magnet':
        return 'Download your free TRT Optimization Checklist and Advanced Macro Calculator.'
      default:
        return 'Get exclusive insights and strategies delivered to your inbox.'
    }
  }

  if (isSuccess) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
        <div className="bg-surface-dark border border-gray-800 rounded-2xl p-8 max-w-md w-full text-center">
          <div className="mb-4">
            <span className="material-icons text-6xl text-primary">check_circle</span>
          </div>
          <h3 className="text-2xl font-display font-bold text-white mb-2 uppercase">
            Success!
          </h3>
          <p className="text-gray-400">
            {leadType === 'coaching' 
              ? 'We\'ll be in touch within 24 hours.'
              : leadType === 'lead-magnet'
              ? 'Check your email for download links.'
              : 'Welcome to the Longevity Lab community!'}
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="bg-surface-dark border border-gray-800 rounded-2xl p-6 md:p-8 max-w-md w-full my-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-display font-bold text-white uppercase">
            {getTitle()}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <span className="material-icons">close</span>
          </button>
        </div>

        <p className="text-gray-400 mb-6 text-sm">
          {getDescription()}
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <input
                {...register('firstName')}
                type="text"
                placeholder="First Name"
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary"
              />
              {errors.firstName && (
                <p className="text-primary text-xs mt-1">{errors.firstName.message}</p>
              )}
            </div>
            <div>
              <input
                {...register('lastName')}
                type="text"
                placeholder="Last Name"
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary"
              />
              {errors.lastName && (
                <p className="text-primary text-xs mt-1">{errors.lastName.message}</p>
              )}
            </div>
          </div>

          <div>
            <input
              {...register('email')}
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary"
            />
            {errors.email && (
              <p className="text-primary text-xs mt-1">{errors.email.message}</p>
            )}
          </div>

          <div>
            <input
              {...register('age')}
              type="number"
              placeholder="Age"
              min="35"
              className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary"
            />
            {errors.age && (
              <p className="text-primary text-xs mt-1">{errors.age.message}</p>
            )}
          </div>

          {leadType === 'coaching' && (
            <>
              <div>
                <input
                  {...register('phone')}
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary"
                />
                {errors.phone && (
                  <p className="text-primary text-xs mt-1">{errors.phone.message}</p>
                )}
              </div>
              <div>
                <textarea
                  {...register('goals')}
                  placeholder="What are your primary fitness goals?"
                  rows={3}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary resize-none"
                />
                {errors.goals && (
                  <p className="text-primary text-xs mt-1">{errors.goals.message}</p>
                )}
              </div>
              <div>
                <textarea
                  {...register('currentChallenges')}
                  placeholder="What challenges are you currently facing?"
                  rows={3}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary resize-none"
                />
                {errors.currentChallenges && (
                  <p className="text-primary text-xs mt-1">{errors.currentChallenges.message}</p>
                )}
              </div>
            </>
          )}

          {leadType === 'lead-magnet' && (
            <div>
              <label className="block text-gray-400 text-sm mb-2">Select Resource(s):</label>
              <select
                {...register('resourceType')}
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-primary"
              >
                <option value="trt-checklist">TRT Optimization Checklist</option>
                <option value="macro-calculator">Advanced Macro Calculator</option>
                <option value="both">Both Resources</option>
              </select>
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 px-6 bg-primary hover:bg-primary-dark text-white font-display font-bold uppercase tracking-wide rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Submitting...' : leadType === 'coaching' ? 'Submit Application' : 'Get Access'}
          </button>

          <p className="text-xs text-gray-500 text-center">
            By submitting, you agree to receive communications from Longevity Lab.
          </p>
        </form>
      </div>
    </div>
  )
}

