export default function Hero() {
  return (
    <section className="relative px-6 pt-32 pb-32 md:pb-24 min-h-[85vh] flex flex-col justify-end bg-fg text-inverse border-b-2 border-fg overflow-x-clip">
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <h1
          className="text-[25vw] sm:text-[22vw] font-black leading-[0.75] tracking-tighter ml-[-0.5vw]"
          style={{ textShadow: "8px 8px 0 rgba(45,74,138,0.3)" }}
        >
          renraku
        </h1>

        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-12 mt-20 md:mt-24">
          <div className="flex flex-col items-start gap-4 md:gap-6 max-w-full">
            <div className="bg-inverse text-fg px-5 py-3 md:px-8 md:py-4 border-2 border-fg shadow-[6px_6px_0px_0px_var(--shadow-color)] md:shadow-[8px_8px_0px_0px_var(--shadow-color)] -rotate-2 origin-bottom-left max-w-full">
              <p className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight uppercase leading-tight md:leading-none">
                Payments for the agentic web.
              </p>
            </div>
            <div className="bg-accent text-inverse px-5 py-3 md:px-8 md:py-4 border-2 border-fg shadow-[6px_6px_0px_0px_var(--shadow-color)] md:shadow-[8px_8px_0px_0px_var(--shadow-color)] rotate-1 origin-top-left ml-2 md:ml-8 max-w-full">
              <p className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight uppercase leading-tight md:leading-none">
                HTTP-native. No API keys. Just 402.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 lg:justify-end pb-2 mt-4 lg:mt-0">
            <div className="bg-inverse text-fg px-6 py-4 md:px-8 md:py-5 border-2 border-fg shadow-[6px_6px_0px_0px_var(--shadow-color)] md:shadow-[8px_8px_0px_0px_var(--shadow-color)] self-start sm:self-auto">
              <span className="text-3xl md:text-4xl font-black block leading-none">x402</span>
              <span className="block text-xs md:text-sm font-bold uppercase tracking-wider text-fg-muted mt-1 md:mt-2">
                Protocol
              </span>
            </div>
            <a
              href="#cta"
              className="bg-fg text-inverse px-6 py-4 md:px-8 md:py-5 border-2 border-fg font-black text-lg md:text-xl hover:bg-accent transition-colors flex items-center justify-center shadow-[6px_6px_0px_0px_var(--shadow-color)] md:shadow-[8px_8px_0px_0px_var(--shadow-color)] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[4px_4px_0px_0px_var(--shadow-color)] md:hover:shadow-[6px_6px_0px_0px_var(--shadow-color)] self-start sm:self-auto"
            >
              GET STARTED →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
