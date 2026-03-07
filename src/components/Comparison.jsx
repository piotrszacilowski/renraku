export default function Comparison() {
  return (
    <section id="compare" className="px-6 py-24 md:py-32 border-b-2 border-fg bg-bg">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-6">
              THE
              <br />
              RIVAL.
            </h2>
            <p className="text-xl text-fg-muted font-medium max-w-sm">
              Traditional payment rails weren't built for machines. x402 was.
            </p>
          </div>

          <div className="lg:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 border-2 border-fg shadow-[12px_12px_0px_0px_var(--shadow-color)]">
              {/* Stripe */}
              <div className="p-8 md:p-12 border-b-2 md:border-b-0 md:border-r-2 border-fg bg-surface">
                <div className="text-sm font-bold tracking-widest text-fg-muted mb-2">
                  THE OLD WAY
                </div>
                <div className="text-5xl font-black tracking-tighter mb-8">Stripe</div>
                <div className="mb-8">
                  <div className="text-3xl font-black">2.9% + 30¢</div>
                  <div className="text-fg-muted font-bold uppercase text-sm tracking-wider">
                    Per transaction
                  </div>
                </div>
                <ul className="space-y-4 text-lg font-medium text-fg">
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-black">×</span>
                    Requires API keys & accounts
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-black">×</span>
                    Can't do micropayments
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-black">×</span>
                    Not agent-compatible
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-black">×</span>
                    Closed source
                  </li>
                </ul>
              </div>

              {/* Renraku */}
              <div className="p-8 md:p-12 bg-fg text-inverse">
                <div className="text-sm font-bold tracking-widest text-accent-light mb-2">
                  THE x402 WAY
                </div>
                <div className="text-5xl font-black tracking-tighter mb-8 text-accent-light">
                  renraku
                </div>
                <div className="mb-8">
                  <div className="text-3xl font-black text-accent-light">$0.001</div>
                  <div className="text-fg-muted font-bold uppercase text-sm tracking-wider">
                    Minimum payment
                  </div>
                </div>
                <ul className="space-y-4 text-lg font-medium">
                  <li className="flex items-start gap-3">
                    <span className="text-accent-light font-black">✓</span>
                    No API keys needed
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent-light font-black">✓</span>
                    Sub-cent micropayments
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent-light font-black">✓</span>
                    Built for AI agents
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent-light font-black">✓</span>
                    Fully open source
                  </li>
                </ul>
                <div className="mt-12 pt-6 border-t border-[#333]">
                  <span className="block text-sm font-bold text-fg-muted uppercase tracking-wider mb-1">
                    Settlement
                  </span>
                  <span className="text-4xl font-black text-accent-light">Instant</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
