import { useState, useEffect } from "react"

const terminalLines = [
  { type: "comment", text: "# Agent requests premium data" },
  { type: "request", text: "GET /api/market-analysis HTTP/1.1" },
  { type: "blank", text: "" },
  { type: "status", text: "HTTP/1.1 402 Payment Required" },
  { type: "header", text: "X-Payment: x402" },
  { type: "header", text: "X-Price: 0.001 USDC" },
  { type: "header", text: "X-Network: ink" },
  { type: "blank", text: "" },
  { type: "comment", text: "# Facilitator handles payment..." },
  { type: "success", text: "✓ Payment verified. Access granted." },
]

function Terminal() {
  const [visibleLines, setVisibleLines] = useState(0)

  useEffect(() => {
    if (visibleLines >= terminalLines.length) {
      const reset = setTimeout(() => setVisibleLines(0), 3000)
      return () => clearTimeout(reset)
    }
    const timer = setTimeout(() => setVisibleLines((v) => v + 1), 400)
    return () => clearTimeout(timer)
  }, [visibleLines])

  return (
    <div className="bg-fg text-inverse border-2 border-fg shadow-[8px_8px_0px_0px_var(--shadow-accent)] relative overflow-hidden scanlines">
      <div className="border-b-2 border-[#333] px-4 py-2 flex items-center justify-between relative z-10">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
          <div className="w-3 h-3 rounded-full bg-[#28c840]" />
        </div>
        <span className="text-xs text-fg-muted font-bold tracking-widest">x402-facilitator</span>
      </div>
      <div className="p-5 text-sm leading-relaxed relative z-10 min-h-[260px]">
        {terminalLines.slice(0, visibleLines).map((line, i) => (
          <div key={i} className={`${
            line.type === "comment" ? "text-fg-muted" :
            line.type === "request" ? "text-accent-light" :
            line.type === "status" ? "text-[#febc2e] font-bold" :
            line.type === "header" ? "text-inverse/70" :
            line.type === "success" ? "text-[#28c840] font-bold" :
            ""
          }`}>
            {line.text}
          </div>
        ))}
        {visibleLines < terminalLines.length && (
          <span className="inline-block w-2.5 h-5 bg-accent-light cursor-blink" />
        )}
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="relative px-6 pt-32 pb-32 md:pb-24 min-h-[85vh] flex flex-col justify-end bg-fg text-inverse border-b-2 border-fg overflow-x-clip noise">
      {/* Geometric accent */}
      <div className="absolute top-12 right-12 w-32 h-32 border-2 border-accent/20 rotate-12 hidden lg:block" />
      <div className="absolute top-20 right-20 w-32 h-32 border-2 border-accent/10 rotate-45 hidden lg:block" />
      <div className="absolute bottom-40 left-8 w-16 h-16 bg-accent/10 hidden lg:block" />

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div className="relative">
          <div
            className="absolute -top-[2vw] right-0 text-[12vw] sm:text-[10vw] font-black leading-none text-inverse/[0.06] select-none pointer-events-none"
            style={{ fontFamily: "serif" }}
          >
            連絡
          </div>
          <h1
            className="text-[22vw] sm:text-[18vw] font-black leading-[0.75] tracking-tighter ml-[-0.5vw] relative z-10"
            style={{
              textShadow: "8px 8px 0 rgba(45,74,138,0.4)",
              WebkitTextStroke: "1px rgba(124,154,216,0.2)",
            }}
          >
            renraku
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-12 mt-20 md:mt-24">
          <div className="flex flex-col items-start gap-4 md:gap-6 max-w-full">
            <div className="bg-inverse text-fg px-5 py-3 md:px-8 md:py-4 border-2 border-fg shadow-[6px_6px_0px_0px_var(--shadow-color)] md:shadow-[8px_8px_0px_0px_var(--shadow-color)] -rotate-2 origin-bottom-left max-w-full hover:rotate-0 transition-transform duration-300">
              <p className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight uppercase leading-tight md:leading-none">
                Payments for the agentic web.
              </p>
            </div>
            <div className="bg-accent text-inverse px-5 py-3 md:px-8 md:py-4 border-2 border-fg shadow-[6px_6px_0px_0px_var(--shadow-color)] md:shadow-[8px_8px_0px_0px_var(--shadow-color)] rotate-1 origin-top-left ml-2 md:ml-8 max-w-full hover:rotate-0 transition-transform duration-300">
              <p className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight uppercase leading-tight md:leading-none">
                HTTP-native. No API keys. Just 402.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-6 lg:justify-end pb-2 mt-4 lg:mt-0 lg:max-w-md w-full">
            <Terminal />
            <a
              href="#cta"
              className="bg-inverse text-fg px-6 py-4 md:px-8 md:py-5 border-2 border-fg font-black text-lg md:text-xl hover:bg-accent hover:text-inverse transition-all duration-200 flex items-center justify-center shadow-[6px_6px_0px_0px_var(--shadow-color)] md:shadow-[8px_8px_0px_0px_var(--shadow-color)] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[4px_4px_0px_0px_var(--shadow-color)] md:hover:shadow-[6px_6px_0px_0px_var(--shadow-color)]"
            >
              GET STARTED →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
