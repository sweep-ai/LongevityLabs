export default function About() {
  return (
    <section id="about" className="py-16 lg:py-24 bg-surface-dark border-t border-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-primary shadow-xl ring-4 ring-black/20 mb-6 bg-gray-800 flex items-center justify-center">
            <span className="material-icons text-6xl text-gray-700">person</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-2 uppercase leading-tight">
            Dwayne Dunning
          </h2>
          <p className="text-primary font-bold text-lg tracking-wider uppercase mb-6">
            Your Guide to a Third Path
          </p>
          <div className="prose prose-lg dark:prose-invert mx-auto text-gray-400 leading-relaxed max-w-2xl">
            <p>
              I help men 35+ reclaim their vitality. In a world pushing mediocrity, the Longevity Lab is your sanctuary for hormone optimization, elite fitness, and mental clarity. We don't just age; we evolve.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="flex items-start gap-4 p-6 rounded-xl bg-gray-900 border border-gray-800">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="material-icons text-primary text-2xl">fitness_center</span>
            </div>
            <div>
              <h3 className="font-display font-bold text-lg text-white mb-1 uppercase">
                Men 35+ Specialist
              </h3>
              <p className="text-sm text-gray-400">
                Tailored protocols that respect your physiology and demanding lifestyle.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-6 rounded-xl bg-gray-900 border border-gray-800">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="material-icons text-primary text-2xl">science</span>
            </div>
            <div>
              <h3 className="font-display font-bold text-lg text-white mb-1 uppercase">
                Hormone Optimization
              </h3>
              <p className="text-sm text-gray-400">
                Data-driven approaches to maximize testosterone and energy levels naturally.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-6 rounded-xl bg-gray-900 border border-gray-800">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="material-icons text-primary text-2xl">trending_up</span>
            </div>
            <div>
              <h3 className="font-display font-bold text-lg text-white mb-1 uppercase">
                Proven Results
              </h3>
              <p className="text-sm text-gray-400">
                Not just theory. Actionable strategies that deliver measurable physical transformation.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 p-8 bg-gray-900 rounded-xl border-l-4 border-primary">
          <h3 className="font-display text-2xl font-bold text-white uppercase mb-6">
            The Third Path Philosophy
          </h3>
          <div className="space-y-4 text-gray-400 text-sm leading-relaxed">
            <p>
              Most men accept the decline. They see their energy fade, their waistlines expand, and their drive diminish, calling it "part of getting older." That is the First Path: Resignation.
            </p>
            <p>
              Others fight blindly, burning out on fad diets and unsustainable workouts that leave them injured and exhausted. That is the Second Path: Struggle.
            </p>
            <p className="text-white font-medium italic border-l-2 border-gray-700 pl-4 py-2">
              "I created the Longevity Lab to offer a Third Path: Optimization. It's about working smarter with your biology, not against it."
            </p>
            <p>
              With over 15 years in the trenches of high-performance coaching, I've decoded the specific needs of the aging male body. My mission is simple: to help you build a body and mind that commands respect.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

