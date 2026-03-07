import { Link } from "react-router"
import { useInView } from "../hooks/useInView"

export default function Products() {
  const [ref, inView] = useInView()

  return (
    <section id="products" className="px-6 py-24 md:py-32 border-b-2 border-fg bg-bg-alt crosshatch">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-4 text-center">
          PRODUCTS.
        </h2>
        <p className="text-center text-fg-muted font-medium text-lg mb-16">
          Everything you need to build on the agentic economy.
        </p>

        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          {/* Facilitator */}
          <div
            className={`bg-bg border-2 border-fg shadow-[8px_8px_0px_0px_var(--shadow-color)] p-8 w-full max-w-md flex flex-col hover:-translate-y-2 hover:translate-x-2 hover:shadow-[4px_4px_0px_0px_var(--shadow-color)] transition-all duration-300 relative overflow-hidden ${
              inView ? "animate-fade-up delay-1" : "opacity-0"
            }`}
          >
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-accent/10 rotate-12" />
            <div className="flex items-center gap-3 mb-2">
              <div className="w-2.5 h-2.5 rounded-full bg-[#28c840] relative">
                <div className="absolute inset-0 rounded-full bg-[#28c840] pulse-ring" />
              </div>
              <div className="text-xl font-bold uppercase tracking-widest text-fg-muted">
                Facilitator
              </div>
            </div>
            <div className="text-5xl md:text-6xl font-black tracking-tighter mb-4">x402</div>
            <p className="text-lg font-medium text-fg mb-8">
              Payment facilitator for the x402 protocol. Handles verification, settlement, and proof generation.
            </p>
            <ul className="space-y-4 text-lg font-bold flex-grow mb-8">
              <li className="flex items-center gap-3">
                <span className="text-accent text-2xl">✓</span> On-chain USDC settlement
              </li>
              <li className="flex items-center gap-3">
                <span className="text-accent text-2xl">✓</span> Sub-second verification
              </li>
              <li className="flex items-center gap-3">
                <span className="text-accent text-2xl">✓</span> Self-hostable
              </li>
              <li className="flex items-center gap-3">
                <span className="text-accent text-2xl">✓</span> REST API & SDK
              </li>
            </ul>
            <a
              href="#cta"
              className="bg-fg text-inverse text-center py-4 border-2 border-fg font-black uppercase hover:bg-accent transition-colors relative z-10"
            >
              Deploy Facilitator →
            </a>
          </div>

          {/* Marketplace */}
          <div
            className={`bg-fg text-inverse border-2 border-fg shadow-[8px_8px_0px_0px_var(--shadow-color)] p-8 w-full max-w-md flex flex-col transform md:-translate-y-4 hover:-translate-y-6 hover:translate-x-2 hover:shadow-[4px_4px_0px_0px_var(--shadow-color)] transition-all duration-300 relative overflow-hidden scanlines ${
              inView ? "animate-fade-up delay-2" : "opacity-0"
            }`}
          >
            <div className="flex justify-between items-start mb-2 relative z-10">
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e] relative">
                  <div className="absolute inset-0 rounded-full bg-[#febc2e] pulse-ring" />
                </div>
                <div className="text-xl font-bold uppercase tracking-widest text-accent-light">
                  Marketplace
                </div>
              </div>
              <div className="bg-accent text-xs font-black px-2 py-1 uppercase tracking-wider -rotate-3 border border-accent-light/30">
                Coming soon
              </div>
            </div>
            <div className="text-5xl md:text-6xl font-black tracking-tighter mb-4 relative z-10">Agents</div>
            <p className="text-lg font-medium mb-8 relative z-10">
              A marketplace where AI agents discover, buy, and sell services autonomously via x402.
            </p>
            <ul className="space-y-4 text-lg font-bold flex-grow mb-8 relative z-10">
              <li className="flex items-center gap-3">
                <span className="text-accent-light text-2xl">✓</span> Agent-to-agent discovery
              </li>
              <li className="flex items-center gap-3">
                <span className="text-accent-light text-2xl">✓</span> Reputation scoring
              </li>
              <li className="flex items-center gap-3">
                <span className="text-accent-light text-2xl">✓</span> Micropayment enabled
              </li>
              <li className="flex items-center gap-3">
                <span className="text-accent-light text-2xl">✓</span> Pay-per-call pricing
              </li>
            </ul>
            <Link
              to="/marketplace"
              className="bg-inverse text-fg text-center py-4 border-2 border-inverse font-black uppercase hover:bg-bg-alt transition-colors relative z-10 block"
            >
              Explore Marketplace →
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
