import Hero from '@/components/Hero'
import ProblemSolution from '@/components/ProblemSolution'
import SocialProof from '@/components/SocialProof'
import About from '@/components/About'
import Programs from '@/components/Programs'
import LeadMagnets from '@/components/LeadMagnets'
import FAQ from '@/components/FAQ'
import FinalCTA from '@/components/FinalCTA'
import Navigation from '@/components/Navigation'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <ProblemSolution />
      <SocialProof />
      <LeadMagnets />
      <About />
      <Programs />
      <FAQ />
      <FinalCTA />
    </main>
  )
}

