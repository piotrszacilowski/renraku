import { useInView } from "../hooks/useInView"

export default function Comparison() {
  const [ref, inView] = useInView()

  return (
    <section id="compare" className="px-6 py-24 md:py-32 border-b-2 border-fg bg-bg">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <div className="flex flex-col lg:flex-row gap-16">
          <div className={`lg:w-1/3 ${inView ? "animate-fade-up" : "opacity-0"}`}>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-6">
              THE
              <br />
              RIVAL.
            </h2>
            <p className="text-xl text-fg-muted font-medium max-w-sm mb-8">
              Traditional payment rails weren't built for machines. x402 was.
            </p>
            <div className="hidden lg:block">
              <div className="text-xs font-black tracking-widest text-fg-muted uppercase mb-3">
                The math
              </div>
              <div className="bg-bg-alt border-2 border-fg p-4">
                <div className="text-sm font-bold text-fg-muted mb-1">1,000 API calls at $0.01 each</div>
                <div className="flex justify-between items-end mt-3">
                  <div>
                    <div className="text-xs text-fg-muted uppercase tracking-wider">Stripe</div>
                    <div className="text-2xl font-black">$300<span className="text-sm text-fg-muted">.00</span></div>
                    <div className="text-xs text-fg-muted">fees alone</div>
                  </div>
                  <div className="text-3xl font-black text-fg-muted">vs</div>
                  <div className="text-right">
                    <div className="text-xs text-accent uppercase tracking-wider">Renraku</div>
                    <div className="text-2xl font-black text-accent">$1<span className="text-sm">.00</span></div>
                    <div className="text-xs text-fg-muted">gas fees</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`lg:w-2/3 ${inView ? "animate-fade-up delay-2" : "opacity-0"}`}>
            <div className="grid grid-cols-1 md:grid-cols-2 border-2 border-fg shadow-[12px_12px_0px_0px_var(--shadow-color)]">
              {/* Stripe */}
              <div className="p-8 md:p-12 border-b-2 md:border-b-0 md:border-r-2 border-fg bg-surface relative overflow-hidden">
                <div className="absolute top-4 right-4 w-16 h-16 border border-red-200 rotate-45 opacity-30" />
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
                    <span className="text-red-600 font-black text-xl">×</span>
                    Requires API keys & accounts
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-black text-xl">×</span>
                    Can't do micropayments
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-black text-xl">×</span>
                    Not agent-compatible
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-black text-xl">×</span>
                    Closed source
                  </li>
                </ul>
              </div>

              {/* Renraku */}
              <div className="p-8 md:p-12 bg-fg text-inverse relative overflow-hidden scanlines">
                <div className="absolute top-4 right-4 w-4 h-4 rounded-full bg-[#28c840] relative z-10">
                  <div className="absolute inset-0 rounded-full bg-[#28c840] pulse-ring" />
                </div>
                <div className="text-sm font-bold tracking-widest text-accent-light mb-2 relative z-10">
                  THE x402 WAY
                </div>
                <div className="text-5xl font-black tracking-tighter mb-8 text-accent-light relative z-10">
                  renraku
                </div>
                <div className="mb-8 relative z-10">
                  <div className="text-3xl font-black text-accent-light">$0.001</div>
                  <div className="text-fg-muted font-bold uppercase text-sm tracking-wider">
                    Minimum payment
                  </div>
                </div>
                <ul className="space-y-4 text-lg font-medium relative z-10">
                  <li className="flex items-start gap-3">
                    <span className="text-accent-light font-black text-xl">✓</span>
                    No API keys needed
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent-light font-black text-xl">✓</span>
                    Sub-cent micropayments
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent-light font-black text-xl">✓</span>
                    Non-custodial — buyer → seller
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent-light font-black text-xl">✓</span>
                    Built for AI agents
                  </li>
                </ul>
                <div className="mt-12 pt-6 border-t border-[#333] relative z-10">
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
