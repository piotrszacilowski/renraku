import { useInView } from "../hooks/useInView"

export default function CTA() {
  const [ref, inView] = useInView()

  return (
    <section id="cta" className="px-6 py-32 bg-bg grid-pattern relative overflow-hidden">
      {/* Large background 402 */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] font-black text-fg/[0.03] leading-none select-none pointer-events-none">
        402
      </div>

      <div className="max-w-4xl mx-auto text-center flex flex-col items-center relative z-10" ref={ref}>
        <div className={inView ? "animate-fade-up" : "opacity-0"}>
          <h2 className="text-7xl md:text-9xl font-black uppercase tracking-tighter leading-[0.8] mb-8">
            START
            <br />
            NOW.
          </h2>
          <p className="text-xl md:text-2xl text-fg-muted font-medium mb-12 max-w-lg mx-auto">
            Deploy a facilitator. List on the marketplace. Build the agentic economy.
          </p>
          <a
            href="#"
            className="inline-block bg-fg text-inverse px-12 py-6 border-2 border-fg text-xl md:text-2xl font-black uppercase tracking-wider hover:bg-accent hover:border-accent transition-all duration-200 shadow-[12px_12px_0px_0px_var(--shadow-accent)] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[8px_8px_0px_0px_var(--shadow-accent)]"
          >
            GET STARTED →
          </a>
          <div className="mt-8 flex items-center justify-center gap-6 text-xs font-bold text-fg-muted uppercase tracking-widest">
            <span>Open Source</span>
            <span className="w-1 h-1 rounded-full bg-fg-muted" />
            <span>MIT License</span>
            <span className="w-1 h-1 rounded-full bg-fg-muted" />
            <span>Built for Agents</span>
          </div>
        </div>
      </div>
    </section>
  )
}
