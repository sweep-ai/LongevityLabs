import Navigation from '@/components/Navigation'
import ApplyCTAButton from '@/components/ApplyCTAButton'

export default function TRTChecklistPage() {
  return (
    <main className="min-h-screen bg-background-dark">
      <Navigation />
      <section className="py-16 lg:py-24 pt-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold uppercase tracking-tight text-white mb-4">
              TRT Optimization <span className="text-primary">Checklist</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Your complete guide to safely and effectively optimizing testosterone replacement therapy.
            </p>
          </div>

          <div className="bg-surface-dark border border-gray-800 rounded-xl p-4 lg:p-8 mb-8 overflow-hidden">
            <div className="w-full">
              <iframe 
                src="https://drive.google.com/file/d/1_DCHXjgyPubPK4-ohyzIV0sY0zaeKTnD/preview" 
                width="100%" 
                height="800"
                className="border-0 rounded-lg"
                allow="autoplay"
              />
            </div>
          </div>

          {/* Value Proposition CTA */}
          <div className="bg-gradient-to-r from-primary/20 to-primary/10 border-2 border-primary rounded-xl p-8 mb-12 text-center">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white uppercase mb-4">
              Ready to Take Action?
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              You've got the checklist. Now let's create a personalized plan based on your blood work and goals. Book a free 15-minute strategy call to see if you qualify for our program.
            </p>
            <ApplyCTAButton className="inline-flex items-center px-8 py-4 bg-primary hover:bg-primary-dark text-white font-display font-bold text-lg uppercase tracking-wider rounded-lg shadow-lg hover:shadow-primary/25 transition-all transform hover:-translate-y-0.5">
              Apply for Coaching
              <span className="material-icons ml-2">arrow_forward</span>
            </ApplyCTAButton>
          </div>
        </div>
      </section>
    </main>
  )
}

