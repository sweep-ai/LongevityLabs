import type { Metadata } from 'next'
import './globals.css'
import MaterialIconsLoader from '@/components/MaterialIconsLoader'
import { ModalProvider } from '@/contexts/ModalContext'
import ModalContainer from '@/components/ModalContainer'

export const metadata: Metadata = {
  title: 'The Third Path: Hormone Optimization for Men 35+',
  description: 'Therapeutic hormone optimization for men 35+. Not natural. Not heavy cycles. The middle ground. Better performance, faster recovery, improved sleep, higher libido.',
  keywords: 'hormone optimization, TRT, testosterone, men over 35, therapeutic hormone replacement, third path, hormone therapy',
  icons: {
    icon: '/assets/Logo.jpg',
    apple: '/assets/Logo.jpg',
  },
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
        <ModalProvider>
          {children}
          <ModalContainer />
        </ModalProvider>
      </body>
    </html>
  )
}

