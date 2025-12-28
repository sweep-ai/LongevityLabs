import type { Metadata } from 'next'
import './globals.css'
import MaterialIconsLoader from '@/components/MaterialIconsLoader'

export const metadata: Metadata = {
  title: 'Longevity Lab - High-Performance Coaching for Men 35+',
  description: 'Build muscle, drop fat, optimize hormones. A Third Path to lasting transformation for high-performing men 35+.',
  keywords: 'fitness coaching, hormone optimization, men over 35, muscle building, fat loss, TRT, testosterone',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-background-dark text-gray-100 font-sans antialiased">
        <MaterialIconsLoader />
        {children}
      </body>
    </html>
  )
}

