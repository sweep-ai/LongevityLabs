import Navigation from '@/components/Navigation'
import ApplyCTAButton from '@/components/ApplyCTAButton'

export default function MacroCalculatorPage() {
  return (
    <main className="min-h-screen bg-background-dark">
      <Navigation />
      <section className="py-16 lg:py-24 pt-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold uppercase tracking-tight text-white mb-4">
              Advanced Macro <span className="text-primary">Calculator</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Dial in your nutrition with precision. Get custom targets for muscle gain, fat loss, and longevity optimization.
            </p>
          </div>

          <div className="bg-surface-dark border border-gray-800 rounded-xl p-8 lg:p-12 mb-12">
            <div className="prose prose-invert max-w-none text-center">
              <p className="text-gray-400 mb-6 text-lg">
                Use our interactive macro calculator to dial in your nutrition with precision. Get custom targets for muscle gain, fat loss, and longevity optimization.
              </p>
              <a
                href="https://longevitylabcalculator.glide.page/dl/a9f288"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full max-w-2xl mx-auto"
              >
                <img
                  src="/assets/macrocalc.png"
                  alt="Longevity Lab Macro Calculator - Click to open"
                  className="w-full rounded-lg border border-gray-700 hover:border-primary transition-colors shadow-lg cursor-pointer"
                />
              </a>
              <div className="mt-6">
                <a
                  href="https://longevitylabcalculator.glide.page/dl/a9f288"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-primary hover:bg-primary-dark text-white font-display font-bold text-lg uppercase tracking-wider rounded-lg shadow-lg hover:shadow-primary/25 transition-all transform hover:-translate-y-0.5"
                >
                  Open Macro Calculator
                  <span className="material-icons ml-2">open_in_new</span>
                </a>
              </div>
            </div>
          </div>

          {/* Value Proposition CTA */}
          <div className="bg-gradient-to-r from-primary/20 to-primary/10 border-2 border-primary rounded-xl p-8 mb-12 text-center">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white uppercase mb-4">
              Got Your Macros? Let's Optimize Your Hormones
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Nutrition is just one piece of the puzzle. To truly maximize your results, you need optimized hormones. Book a free 15-minute strategy call to see how The Third Path can help you achieve your goals faster.
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

