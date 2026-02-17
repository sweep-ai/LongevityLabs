'use client'

export default function About() {
  return (
    <section id="about" className="py-16 lg:py-24 bg-surface-dark border-t border-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-primary shadow-xl ring-4 ring-black/20 mb-6 bg-gray-800">
            <img
              src="/assets/headshot.jpg"
              alt="Dwayne Dunning"
              className="w-full h-full object-cover object-top scale-125"
              style={{ transform: 'scale(1.25) translateY(-15%)' }}
              onError={(e) => {
                // Fallback if image doesn't exist
                e.currentTarget.style.display = 'none'
                e.currentTarget.parentElement?.classList.add('flex', 'items-center', 'justify-center')
                const fallback = document.createElement('span')
                fallback.className = 'material-icons text-6xl text-gray-700'
                fallback.textContent = 'person'
                e.currentTarget.parentElement?.appendChild(fallback)
              }}
            />
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-2 uppercase leading-tight">
            Dwayne Dunning
          </h2>
          <p className="text-primary font-bold text-lg tracking-wider uppercase mb-6">
            Head Coach
          </p>
          <div className="prose prose-lg dark:prose-invert mx-auto text-gray-400 leading-relaxed max-w-2xl">
            <p>
              I help men 35+ optimize their hormones through The Third Path. Most men over 35 have medium to low testosterone as levels naturally decline with age. My approach is simple: get your blood work done, find out where your testosterone is at, and elevate it to higher optimal ranges.
            </p>
            <p className="mt-4">
              This isn't about reckless drug use. This is about optimizing your performance and lifestyle while making sure your health is never compromised.
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
                Therapeutic hormone optimization to elevate testosterone to higher optimal ranges safely.
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
              The Third Path isn't about staying completely natural, and it's not about blasting heavy steroid cycles. It's the middle ground - therapeutic hormone optimization for men 35+.
            </p>
            <p>
              Here's the reality: most men over 35 have medium to low testosterone as levels naturally decline with age. Some have high levels, but they're the minority.
            </p>
            <p className="text-white font-medium">
              The benefits of optimizing to higher optimal ranges:
            </p>
            <ul className="list-none space-y-2 text-gray-300">
              <li className="flex items-start">
                <span className="text-primary mr-2">∙</span>
                <span>Better performance</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">∙</span>
                <span>Faster recovery</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">∙</span>
                <span>Improved sleep</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">∙</span>
                <span>Higher libido</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">∙</span>
                <span>Greater sense of well-being</span>
              </li>
            </ul>
            <p className="mt-4">
              This isn't about reckless drug use. This is about optimizing your performance and lifestyle while making sure your health is never compromised. This is The Third Path.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

