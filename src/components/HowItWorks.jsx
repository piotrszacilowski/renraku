const steps = [
  {
    num: "1",
    title: "REQUEST",
    description: "Agent makes a standard HTTP request to an API protected by x402.",
  },
  {
    num: "2",
    title: "402",
    description: "Server responds with 402 Payment Required — price, currency, network in headers.",
  },
  {
    num: "3",
    title: "PAY",
    description: "Renraku facilitator handles on-chain USDC payment and returns proof.",
  },
  {
    num: "4",
    title: "ACCESS",
    description: "Client resends request with payment proof. Server validates and returns data.",
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="border-b-2 border-fg bg-bg-alt px-6 py-24 md:py-32">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-16 text-center">
          HOW IT WORKS.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((s) => (
            <div
              key={s.num}
              className="bg-bg border-2 border-fg shadow-[12px_12px_0px_0px_var(--shadow-color)] flex flex-col hover:-translate-y-2 hover:translate-x-2 hover:shadow-[4px_4px_0px_0px_var(--shadow-color)] transition-all"
            >
              <div className="border-b-2 border-fg bg-fg text-inverse p-6 flex justify-between items-end">
                <span className="text-7xl font-black leading-none">{s.num}</span>
                <span className="text-xl font-bold tracking-widest text-fg-muted mb-1">STEP</span>
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-4 text-accent">
                  {s.title}
                </h3>
                <p className="text-lg font-medium text-fg">{s.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
