import { useInView } from "../hooks/useInView"

const steps = [
  {
    num: "1",
    title: "REQUEST",
    description: "Agent makes a standard HTTP request to an API protected by x402.",
    code: "GET /api/data HTTP/1.1\nHost: provider.com",
  },
  {
    num: "2",
    title: "402",
    description: "Server responds with 402 Payment Required — price and network in headers.",
    code: "HTTP/1.1 402\nX-Price: 0.001 USDC\nX-Network: ink",
  },
  {
    num: "3",
    title: "PAY",
    description: "Renraku facilitator verifies the signed payment and settles it on-chain via transferWithAuthorization.",
    code: "POST ink-facilitator-\n  production.up.railway.app\n→ txHash: 0xab3...f9",
  },
  {
    num: "4",
    title: "ACCESS",
    description: "Client resends with payment proof. Server validates and returns data.",
    code: "GET /api/data\nX-Proof: 0xab3...f9\n→ 200 OK",
  },
]

export default function HowItWorks() {
  const [ref, inView] = useInView()

  return (
    <section id="how-it-works" className="border-b-2 border-fg bg-bg-alt px-6 py-24 md:py-32 crosshatch">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-4 text-center">
          HOW IT WORKS.
        </h2>
        <p className="text-center text-fg-muted font-medium text-lg mb-16">
          Four steps. No accounts. No API keys. Just HTTP.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <div
              key={s.num}
              className={`bg-bg border-2 border-fg shadow-[12px_12px_0px_0px_var(--shadow-color)] flex flex-col hover:-translate-y-2 hover:translate-x-2 hover:shadow-[4px_4px_0px_0px_var(--shadow-color)] transition-all duration-300 ${
                inView ? `animate-fade-up delay-${i + 1}` : "opacity-0"
              }`}
            >
              <div className="border-b-2 border-fg bg-fg text-inverse p-6 flex justify-between items-end relative overflow-hidden scanlines">
                <span className="text-7xl font-black leading-none relative z-10">{s.num}</span>
                <span className="text-xl font-bold tracking-widest text-fg-muted mb-1 relative z-10">STEP</span>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-3 text-accent">
                  {s.title}
                </h3>
                <p className="text-base font-medium text-fg mb-4">{s.description}</p>
                <pre className="mt-auto bg-fg text-inverse/80 text-xs p-3 border border-fg leading-relaxed overflow-x-auto">
                  {s.code}
                </pre>
              </div>
            </div>
          ))}
        </div>

        {/* Flow arrows for desktop */}
        <div className="hidden lg:flex justify-center items-center mt-8 gap-2">
          {["REQUEST", "→", "402", "→", "PAY", "→", "ACCESS"].map((item, i) => (
            <span
              key={i}
              className={`text-sm font-black tracking-wider ${
                item === "→" ? "text-accent text-xl" : "text-fg-muted"
              }`}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
