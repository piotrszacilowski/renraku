const features = [
  {
    num: "01",
    title: "HTTP-NATIVE",
    description: "Built on the 402 status code. Payments happen at the protocol level, not in your app.",
  },
  {
    num: "02",
    title: "AGENT-READY",
    description: "Designed for AI agents to pay and get paid. No human in the loop. Pure machine commerce.",
  },
  {
    num: "03",
    title: "STABLECOIN",
    description: "Pay in USDC on Base. Fast, cheap, predictable. No volatile tokens.",
  },
  {
    num: "04",
    title: "OPEN SOURCE",
    description: "Fully open source. Read the code, fork it, extend it. No vendor lock-in.",
  },
]

export default function Features() {
  return (
    <section className="border-b-2 border-fg bg-bg">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 divide-y-2 md:divide-y-0 md:divide-x-2 divide-fg">
        {features.map((f) => (
          <div
            key={f.num}
            className="p-8 lg:p-12 group hover:bg-fg hover:text-inverse transition-colors flex flex-col"
          >
            <div className="text-sm font-black text-fg-muted group-hover:text-accent-light mb-8">
              /{f.num}
            </div>
            <h3 className="text-3xl lg:text-4xl font-black mb-4 uppercase tracking-tighter leading-none">
              {f.title}
            </h3>
            <p className="text-lg font-medium opacity-80 mt-auto">
              {f.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
