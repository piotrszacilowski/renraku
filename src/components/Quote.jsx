export default function Quote() {
  return (
    <section className="px-6 py-32 bg-accent text-inverse border-b-2 border-fg">
      <div className="max-w-5xl mx-auto text-center">
        <blockquote className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-tight mb-8">
          "HTTP already has a status code for payments. We just made it work."
        </blockquote>
        <div className="inline-block border-2 border-inverse px-6 py-3 font-bold uppercase tracking-wider">
          — The x402 Protocol
        </div>
      </div>
    </section>
  )
}
