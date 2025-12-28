import Hero from '@/components/Hero'
import ProblemSolution from '@/components/ProblemSolution'
import SocialProof from '@/components/SocialProof'
import About from '@/components/About'
import LeadMagnets from '@/components/LeadMagnets'
import CoachingPackages from '@/components/CoachingPackages'
import FAQ from '@/components/FAQ'
import FinalCTA from '@/components/FinalCTA'
import Navigation from '@/components/Navigation'
import { ModalProvider } from '@/contexts/ModalContext'
import ModalContainer from '@/components/ModalContainer'

export default function Home() {
  return (
    <ModalProvider>
      <main className="min-h-screen">
        <Navigation />
        <Hero />
        <ProblemSolution />
        <SocialProof />
        <About />
        <LeadMagnets />
        <CoachingPackages />
        <FAQ />
        <FinalCTA />
        <ModalContainer />
      </main>
    </ModalProvider>
  )
}

