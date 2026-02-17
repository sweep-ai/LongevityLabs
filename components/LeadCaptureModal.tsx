'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

const baseSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  instagram: z.string().optional(),
})

const bookCallSchema = baseSchema.extend({
  goals: z.string().min(10, 'Please tell us about your goals'),
  preferredTime: z.string().optional(),
})

// Free resources: same contact data as Apply for Coaching (no initial questions)
const leadMagnetSchema = baseSchema

type BaseFormData = z.infer<typeof baseSchema>
type BookCallFormData = z.infer<typeof bookCallSchema>
type LeadMagnetFormData = z.infer<typeof leadMagnetSchema>

interface LeadCaptureModalProps {
  leadType: 'book-call' | 'lead-magnet' | 'email'
  redirectUrl?: string
  resourceTitle?: string
  onClose: () => void
}

export default function LeadCaptureModal({ leadType, redirectUrl, resourceTitle, onClose }: LeadCaptureModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const schema = leadType === 'book-call' 
    ? bookCallSchema 
    : leadType === 'lead-magnet' 
    ? leadMagnetSchema 
    : baseSchema

  const { register, handleSubmit, formState: { errors }, reset } = useForm<BaseFormData | BookCallFormData | LeadMagnetFormData>({
    resolver: zodResolver(schema),
  })

  const onSubmit = async (data: BaseFormData | BookCallFormData | LeadMagnetFormData) => {
    setIsSubmitting(true)
    try {
      const payload: Record<string, unknown> = { ...data, leadType }
      if (leadType === 'lead-magnet') {
        if (redirectUrl) payload.resourceUrl = redirectUrl
        if (resourceTitle) payload.resourceName = resourceTitle
      }
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (response.ok) {
        setIsSuccess(true)
        reset()
        setTimeout(() => {
          onClose()
          setIsSuccess(false)
          // Redirect after closing modal if redirectUrl is provided
          if (redirectUrl) {
            if (redirectUrl.startsWith('http')) {
              window.open(redirectUrl, '_blank', 'noopener,noreferrer')
            } else {
              window.location.href = redirectUrl
            }
          }
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
      case 'book-call':
        return 'Book Your Strategy Call'
      case 'lead-magnet':
        return 'Get Your Free Resource'
      default:
        return 'Join the Longevity Lab'
    }
  }

  const getDescription = () => {
    switch (leadType) {
      case 'book-call':
        return 'Schedule a free 15-minute clarity call to see if you qualify for our program. Limited spots available.'
      case 'lead-magnet':
        return 'Enter your details to access this free resource.'
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
            {leadType === 'book-call' 
              ? 'We\'ll be in touch within 24 hours to schedule your call.'
              : leadType === 'lead-magnet'
              ? 'Redirecting you to your resource...'
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
              {...register('phone')}
              type="tel"
              placeholder="Phone Number"
              className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary"
            />
            {errors.phone && (
              <p className="text-primary text-xs mt-1">{errors.phone.message}</p>
            )}
          </div>

          {(leadType === 'lead-magnet' || leadType === 'email') && (
            <div>
              <input
                {...register('instagram')}
                type="text"
                placeholder="Instagram @"
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary"
              />
            </div>
          )}

          {leadType === 'book-call' && (
            <>
              <div>
                <textarea
                  {...register('goals' as any)}
                  placeholder="What are your primary fitness goals?"
                  rows={3}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary resize-none"
                />
                {(errors as any).goals && (
                  <p className="text-primary text-xs mt-1">{(errors as any).goals.message}</p>
                )}
              </div>
              <div>
                <label className="block text-gray-400 text-sm mb-2">Preferred Call Time (Optional):</label>
                <select
                  {...register('preferredTime' as any)}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-primary"
                >
                  <option value="">Select a time</option>
                  <option value="morning">Morning (9am-12pm)</option>
                  <option value="afternoon">Afternoon (12pm-5pm)</option>
                  <option value="evening">Evening (5pm-8pm)</option>
                </select>
              </div>
            </>
          )}


          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 px-6 bg-primary hover:bg-primary-dark text-white font-display font-bold uppercase tracking-wide rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Submitting...' : leadType === 'book-call' ? 'Book My Call' : leadType === 'lead-magnet' ? 'Get Access' : 'Subscribe'}
          </button>

          <p className="text-xs text-gray-500 text-center">
            By submitting, you agree to receive communications from Longevity Lab.
          </p>
        </form>
      </div>
    </div>
  )
}

