export default function Footer() {
  return (
    <footer className="border-t-2 border-fg px-6 py-16 bg-fg text-inverse">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          <div>
            <h3 className="text-sm font-black uppercase tracking-widest text-fg-muted mb-4">
              Product
            </h3>
            <ul className="space-y-3 text-sm font-bold">
              <li><a href="#products" className="hover:text-accent-light transition-colors">Facilitator</a></li>
              <li><a href="#products" className="hover:text-accent-light transition-colors">Marketplace</a></li>
              <li><a href="#" className="hover:text-accent-light transition-colors">Documentation</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-black uppercase tracking-widest text-fg-muted mb-4">
              Protocol
            </h3>
            <ul className="space-y-3 text-sm font-bold">
              <li><a href="#" className="hover:text-accent-light transition-colors">x402 Spec</a></li>
              <li><a href="#" className="hover:text-accent-light transition-colors">SDK Reference</a></li>
              <li><a href="#" className="hover:text-accent-light transition-colors">Examples</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-black uppercase tracking-widest text-fg-muted mb-4">
              Community
            </h3>
            <ul className="space-y-3 text-sm font-bold">
              <li><a href="#" className="hover:text-accent-light transition-colors">GitHub</a></li>
              <li><a href="#" className="hover:text-accent-light transition-colors">Discord</a></li>
              <li><a href="#" className="hover:text-accent-light transition-colors">Twitter / X</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-black uppercase tracking-widest text-fg-muted mb-4">
              Company
            </h3>
            <ul className="space-y-3 text-sm font-bold">
              <li><a href="#" className="hover:text-accent-light transition-colors">About</a></li>
              <li><a href="#" className="hover:text-accent-light transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-accent-light transition-colors">Terms</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#333] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="font-black text-3xl tracking-tighter">renraku.</span>
          <span className="text-sm text-fg-muted">Payments for the agentic web.</span>
        </div>
      </div>
    </footer>
  )
}
