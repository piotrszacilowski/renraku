import { useInView } from "../hooks/useInView"

const features = [
  {
    num: "01",
    title: "HTTP-NATIVE",
    description: "Built on the 402 status code. Payments happen at the protocol level, not in your app.",
    detail: "GET → 402 → PAY → 200",
  },
  {
    num: "02",
    title: "AGENT-READY",
    description: "AI agents, MCP tool servers, and compute services pay and get paid autonomously. No human in the loop.",
    detail: "ZERO HUMAN INTERACTION",
  },
  {
    num: "03",
    title: "NON-CUSTODIAL",
    description: "USDC flows directly from buyer to seller on Ink. The facilitator never holds funds — it only pays gas.",
    detail: "BUYER → SELLER · INK L2",
  },
  {
    num: "04",
    title: "OPEN SOURCE",
    description: "Fully open source. Read the code, fork it, extend it. No vendor lock-in.",
    detail: "MIT LICENSE",
  },
]

export default function Features() {
  const [ref, inView] = useInView()

  return (
    <section id="features" className="border-b-2 border-fg bg-bg grid-pattern" ref={ref}>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 divide-y-2 md:divide-y-0 md:divide-x-2 divide-fg">
        {features.map((f, i) => (
          <div
            key={f.num}
            className={`p-8 lg:p-12 group hover:bg-fg hover:text-inverse transition-all duration-300 flex flex-col relative overflow-hidden ${
              inView ? `animate-fade-up delay-${i + 1}` : "opacity-0"
            }`}
          >
            {/* Geometric accent on hover */}
            <div className="absolute -bottom-8 -right-8 w-24 h-24 border-2 border-fg/10 group-hover:border-accent-light/20 rotate-12 transition-all duration-500 group-hover:rotate-45" />

            <div className="text-sm font-black text-fg-muted group-hover:text-accent-light mb-8 transition-colors relative z-10">
              /{f.num}
            </div>
            <h3 className="text-3xl lg:text-4xl font-black mb-4 uppercase tracking-tighter leading-none relative z-10">
              {f.title}
            </h3>
            <p className="text-lg font-medium opacity-80 mb-6 relative z-10">
              {f.description}
            </p>
            <div className="mt-auto pt-4 border-t border-fg/10 group-hover:border-inverse/10 transition-colors relative z-10">
              <span className="text-xs font-black tracking-widest text-fg-muted group-hover:text-accent-light transition-colors">
                {f.detail}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
