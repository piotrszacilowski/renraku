export default function Quote() {
  return (
    <section className="px-6 py-32 bg-accent text-inverse border-b-2 border-fg relative overflow-hidden noise">
      {/* Decorative elements */}
      <div className="absolute top-8 left-8 text-[20vw] font-black leading-none text-white/5 select-none pointer-events-none">
        402
      </div>
      <div className="absolute bottom-4 right-8 w-24 h-24 border-2 border-white/10 rotate-12" />

      <div className="max-w-5xl mx-auto relative z-10 flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
        <div className="text-center lg:text-left lg:flex-1">
          <div className="text-sm font-black tracking-widest text-inverse/50 uppercase mb-8">
            The thesis
          </div>
          <blockquote className="text-3xl sm:text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.9] mb-10">
            "HTTP already has a status code for payments. We just made it work."
          </blockquote>
          <div className="inline-block border-2 border-inverse px-6 py-3 font-bold uppercase tracking-wider hover:bg-inverse hover:text-accent transition-colors cursor-default">
            — The x402 Protocol
          </div>
        </div>

        <div className="lg:flex-shrink-0 lg:w-72 border-2 border-inverse/20 p-8 text-left hover:border-inverse/50 transition-colors">
          <div className="text-7xl md:text-8xl font-black leading-none mb-4 tracking-tighter" style={{ fontFamily: "serif" }}>
            連絡
          </div>
          <div className="text-2xl font-black tracking-tighter mb-3">renraku</div>
          <div className="text-sm text-inverse/60 font-medium leading-relaxed">
            <span className="text-inverse/80 font-bold">連絡 (renraku)</span> — "contact" or "communication" in Japanese. The essence of a data exchange protocol.
          </div>
          <div className="mt-4 pt-4 border-t border-inverse/10 text-xs font-bold tracking-widest text-inverse/40 uppercase">
            Origin
          </div>
        </div>
      </div>
    </section>
  )
}
