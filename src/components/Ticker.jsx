const items = [
  "402 PAYMENT REQUIRED",
  "USDC ON INK",
  "PAY-PER-CALL",
  "OPEN SOURCE",
  "SUB-CENT MICROPAYMENTS",
  "NO API KEYS",
  "INSTANT SETTLEMENT",
  "NON-CUSTODIAL",
  "HTTP-NATIVE",
  "MCP TOOLS",
]

export default function Ticker() {
  const doubled = [...items, ...items]

  return (
    <div className="bg-accent text-inverse border-b-2 border-fg py-3 overflow-hidden">
      <div className="animate-marquee whitespace-nowrap flex">
        {doubled.map((item, i) => (
          <span key={i} className="text-sm font-black uppercase tracking-widest mx-8 inline-flex items-center gap-3">
            <span className="w-1.5 h-1.5 bg-inverse rounded-full inline-block flex-shrink-0" />
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
