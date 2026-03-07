const ticker = [
  "x402", "RENRAKU", "USDC", "INK", "AGENTS", "MICROPAYMENTS", "HTTP", "402",
  "x402", "RENRAKU", "USDC", "INK", "AGENTS", "MICROPAYMENTS", "HTTP", "402",
]

export default function Footer() {
  return (
    <footer className="border-t-2 border-fg bg-fg text-inverse relative">
      {/* Footer ticker */}
      <div className="border-b border-[#333] py-2 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap flex" style={{ animationDuration: "20s" }}>
          {ticker.map((item, i) => (
            <span key={i} className="text-[10px] font-bold tracking-[0.3em] text-fg-muted/50 mx-6">
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          <div>
            <h3 className="text-sm font-black uppercase tracking-widest text-fg-muted mb-4">
              Product
            </h3>
            <ul className="space-y-3 text-sm font-bold">
              <li><a href="#products" className="hover:text-accent-light transition-colors inline-flex items-center gap-2 group"><span className="w-0 group-hover:w-3 h-px bg-accent-light transition-all duration-200" />Facilitator</a></li>
              <li><a href="#products" className="hover:text-accent-light transition-colors inline-flex items-center gap-2 group"><span className="w-0 group-hover:w-3 h-px bg-accent-light transition-all duration-200" />Marketplace</a></li>
              <li><a href="#" className="hover:text-accent-light transition-colors inline-flex items-center gap-2 group"><span className="w-0 group-hover:w-3 h-px bg-accent-light transition-all duration-200" />Documentation</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-black uppercase tracking-widest text-fg-muted mb-4">
              Protocol
            </h3>
            <ul className="space-y-3 text-sm font-bold">
              <li><a href="#" className="hover:text-accent-light transition-colors inline-flex items-center gap-2 group"><span className="w-0 group-hover:w-3 h-px bg-accent-light transition-all duration-200" />x402 Spec</a></li>
              <li><a href="#" className="hover:text-accent-light transition-colors inline-flex items-center gap-2 group"><span className="w-0 group-hover:w-3 h-px bg-accent-light transition-all duration-200" />SDK Reference</a></li>
              <li><a href="#" className="hover:text-accent-light transition-colors inline-flex items-center gap-2 group"><span className="w-0 group-hover:w-3 h-px bg-accent-light transition-all duration-200" />Examples</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-black uppercase tracking-widest text-fg-muted mb-4">
              Community
            </h3>
            <ul className="space-y-3 text-sm font-bold">
              <li><a href="#" className="hover:text-accent-light transition-colors inline-flex items-center gap-2 group"><span className="w-0 group-hover:w-3 h-px bg-accent-light transition-all duration-200" />GitHub</a></li>
              <li><a href="#" className="hover:text-accent-light transition-colors inline-flex items-center gap-2 group"><span className="w-0 group-hover:w-3 h-px bg-accent-light transition-all duration-200" />Discord</a></li>
              <li><a href="#" className="hover:text-accent-light transition-colors inline-flex items-center gap-2 group"><span className="w-0 group-hover:w-3 h-px bg-accent-light transition-all duration-200" />Twitter / X</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-black uppercase tracking-widest text-fg-muted mb-4">
              Company
            </h3>
            <ul className="space-y-3 text-sm font-bold">
              <li><a href="#" className="hover:text-accent-light transition-colors inline-flex items-center gap-2 group"><span className="w-0 group-hover:w-3 h-px bg-accent-light transition-all duration-200" />About</a></li>
              <li><a href="#" className="hover:text-accent-light transition-colors inline-flex items-center gap-2 group"><span className="w-0 group-hover:w-3 h-px bg-accent-light transition-all duration-200" />Privacy</a></li>
              <li><a href="#" className="hover:text-accent-light transition-colors inline-flex items-center gap-2 group"><span className="w-0 group-hover:w-3 h-px bg-accent-light transition-all duration-200" />Terms</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#333] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <span className="font-black text-3xl tracking-tighter">renraku.</span>
            <span className="text-lg text-fg-muted" style={{ fontFamily: "serif" }}>連絡</span>
          </div>
          <span className="text-sm text-fg-muted">Payments for the agentic web.</span>
        </div>
      </div>
    </footer>
  )
}
