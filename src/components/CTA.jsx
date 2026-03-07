export default function CTA() {
  return (
    <section id="cta" className="px-6 py-32 bg-bg">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        <h2 className="text-7xl md:text-9xl font-black uppercase tracking-tighter leading-[0.8] mb-8">
          START
          <br />
          NOW.
        </h2>
        <p className="text-2xl text-fg-muted font-medium mb-12">
          Deploy a facilitator. List on the marketplace. Build the agentic economy.
        </p>
        <a
          href="#"
          className="bg-fg text-inverse px-12 py-6 border-2 border-fg text-2xl font-black uppercase tracking-wider hover:bg-accent hover:border-accent transition-colors shadow-[12px_12px_0px_0px_var(--shadow-accent)] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[8px_8px_0px_0px_var(--shadow-accent)]"
        >
          GET STARTED →
        </a>
      </div>
    </section>
  )
}
