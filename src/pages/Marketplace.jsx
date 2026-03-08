import { useState } from "react"
import { Link } from "react-router"

const categories = [
  "ALL",
  "DATA",
  "AI / ML",
  "MCP TOOLS",
  "COMPUTE",
  "CONTENT",
  "BLOCKCHAIN",
]

const services = [
  {
    id: 1,
    name: "MarketPulse",
    type: "Data API",
    description: "Real-time crypto market data. Prices, volumes, and order books across 50+ exchanges. One call, unified JSON.",
    category: "DATA",
    price: "0.002",
    calls: "142.3k",
    rating: 4.9,
    status: "online",
    provider: "0x7a3...f91",
    endpoint: "/api/v1/markets",
  },
  {
    id: 2,
    name: "CodeAuditor",
    type: "AI Inference",
    description: "Automated smart contract auditing. Scans Solidity for vulnerabilities, gas issues, and best practice violations.",
    category: "AI / ML",
    price: "0.05",
    calls: "38.1k",
    rating: 4.8,
    status: "online",
    provider: "0xb2e...c44",
    endpoint: "/api/audit",
  },
  {
    id: 3,
    name: "SentimentOracle",
    type: "Analytics API",
    description: "NLP-powered sentiment analysis across Twitter, Discord, and Telegram for any token or project.",
    category: "DATA",
    price: "0.001",
    calls: "289.7k",
    rating: 4.7,
    status: "online",
    provider: "0x1d4...a88",
    endpoint: "/api/sentiment",
  },
  {
    id: 4,
    name: "WebScrape",
    type: "MCP Tool",
    description: "Headless browser scraping as a service. Give it a URL, get structured data back. AI agents use this as an MCP tool.",
    category: "MCP TOOLS",
    price: "0.003",
    calls: "91.4k",
    rating: 4.6,
    status: "offline",
    provider: "0x9f1...b23",
    endpoint: "/api/scrape",
  },
  {
    id: 5,
    name: "DocParser",
    type: "Compute",
    description: "Extract text, tables, and metadata from PDFs, DOCX, and scanned images. Returns structured JSON.",
    category: "COMPUTE",
    price: "0.01",
    calls: "22.8k",
    rating: 4.5,
    status: "online",
    provider: "0x3c7...d56",
    endpoint: "/api/parse",
  },
  {
    id: 6,
    name: "ResearchFeed",
    type: "Content API",
    description: "Premium research feed. Academic papers, patent filings, and preprints — summarized and searchable.",
    category: "CONTENT",
    price: "0.008",
    calls: "15.2k",
    rating: 4.9,
    status: "online",
    provider: "0xe5a...f12",
    endpoint: "/api/research",
  },
  {
    id: 7,
    name: "TxDecoder",
    type: "Blockchain API",
    description: "Decode any blockchain transaction into human-readable format with full context and token flow analysis.",
    category: "BLOCKCHAIN",
    price: "0.001",
    calls: "203.6k",
    rating: 4.4,
    status: "online",
    provider: "0x6b8...e90",
    endpoint: "/api/decode",
  },
  {
    id: 8,
    name: "YieldScanner",
    type: "Data API",
    description: "Scans DeFi protocols for yield opportunities. Compares APYs, risks, TVL, and lock-up periods across chains.",
    category: "BLOCKCHAIN",
    price: "0.005",
    calls: "67.9k",
    rating: 4.7,
    status: "offline",
    provider: "0x2a3...c71",
    endpoint: "/api/yields",
  },
  {
    id: 9,
    name: "TranslateAPI",
    type: "AI Inference",
    description: "Real-time translation across 40+ languages. Context-aware with grammar correction and formality control.",
    category: "AI / ML",
    price: "0.0005",
    calls: "512.1k",
    rating: 4.8,
    status: "online",
    provider: "0xd4f...a33",
    endpoint: "/api/translate",
  },
  {
    id: 10,
    name: "ImageGen",
    type: "AI Inference",
    description: "Text-to-image generation endpoint. Multiple models available. Pay per generation, no subscription.",
    category: "AI / ML",
    price: "0.02",
    calls: "84.5k",
    rating: 4.6,
    status: "online",
    provider: "0xf17...e02",
    endpoint: "/api/generate",
  },
  {
    id: 11,
    name: "FileConvert",
    type: "MCP Tool",
    description: "Universal file conversion. PDF, images, audio, video transcoding. MCP-compatible for agent workflows.",
    category: "MCP TOOLS",
    price: "0.005",
    calls: "33.7k",
    rating: 4.3,
    status: "online",
    provider: "0xa29...b44",
    endpoint: "/api/convert",
  },
  {
    id: 12,
    name: "NewsFeed",
    type: "Content API",
    description: "Curated news feed with full articles from 500+ sources. Filter by topic, region, or sentiment. Pay per query.",
    category: "CONTENT",
    price: "0.001",
    calls: "178.2k",
    rating: 4.7,
    status: "online",
    provider: "0x5c8...d91",
    endpoint: "/api/news",
  },
]

function StatusDot({ status }) {
  return (
    <div className="flex items-center gap-2">
      <div className={`w-2 h-2 rounded-full relative ${status === "online" ? "bg-[#28c840]" : "bg-fg-muted"}`}>
        {status === "online" && (
          <div className="absolute inset-0 rounded-full bg-[#28c840] pulse-ring" />
        )}
      </div>
      <span className={`text-xs font-bold uppercase tracking-wider ${
        status === "online" ? "text-[#28c840]" : "text-fg-muted"
      }`}>
        {status}
      </span>
    </div>
  )
}

function RatingBar({ rating }) {
  const pct = (rating / 5) * 100
  return (
    <div className="flex items-center gap-2">
      <div className="w-16 h-1.5 bg-fg/10 relative">
        <div className="absolute inset-y-0 left-0 bg-accent" style={{ width: `${pct}%` }} />
      </div>
      <span className="text-xs font-black">{rating}</span>
    </div>
  )
}

function ServiceCard({ service }) {
  return (
    <div className="bg-bg border-2 border-fg shadow-[6px_6px_0px_0px_var(--shadow-color)] flex flex-col hover:-translate-y-1 hover:translate-x-1 hover:shadow-[3px_3px_0px_0px_var(--shadow-color)] transition-all duration-200 group">
      {/* Header */}
      <div className="border-b-2 border-fg bg-fg text-inverse p-4 flex justify-between items-start relative overflow-hidden scanlines">
        <div className="relative z-10">
          <div className="text-xs font-bold tracking-widest text-accent-light mb-1">{service.type}</div>
          <h3 className="text-xl font-black tracking-tighter">{service.name}</h3>
        </div>
        <div className="relative z-10">
          <StatusDot status={service.status} />
        </div>
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col flex-grow">
        <p className="text-sm font-medium text-fg/80 mb-4 leading-relaxed">{service.description}</p>

        {/* Endpoint */}
        <div className="bg-fg text-inverse/70 text-xs font-bold px-3 py-1.5 mb-5 inline-flex items-center gap-2 self-start">
          <span className="text-accent-light">GET</span>
          <span>{service.endpoint}</span>
        </div>

        {/* Stats */}
        <div className="mt-auto space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-xs font-bold tracking-widest text-fg-muted uppercase">Price / call</span>
            <span className="font-black text-accent">${service.price} <span className="text-xs text-fg-muted font-bold">USDC</span></span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xs font-bold tracking-widest text-fg-muted uppercase">Total calls</span>
            <span className="font-black">{service.calls}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xs font-bold tracking-widest text-fg-muted uppercase">Rating</span>
            <RatingBar rating={service.rating} />
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xs font-bold tracking-widest text-fg-muted uppercase">Provider</span>
            <span className="text-xs font-bold text-fg-muted">{service.provider}</span>
          </div>
        </div>

        {/* CTA */}
        <button
          disabled={service.status === "offline"}
          className={`mt-5 w-full py-3 border-2 font-black uppercase text-sm tracking-wider transition-colors ${
            service.status === "offline"
              ? "border-fg/20 text-fg-muted cursor-not-allowed"
              : "border-fg bg-fg text-inverse hover:bg-accent hover:border-accent"
          }`}
        >
          {service.status === "offline" ? "Offline" : "Call Endpoint →"}
        </button>
      </div>
    </div>
  )
}

export default function Marketplace() {
  const [active, setActive] = useState("ALL")
  const [search, setSearch] = useState("")

  const filtered = services.filter((s) => {
    const matchCat = active === "ALL" || s.category === active
    const matchSearch =
      !search ||
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.description.toLowerCase().includes(search.toLowerCase()) ||
      s.type.toLowerCase().includes(search.toLowerCase())
    return matchCat && matchSearch
  })

  const onlineCount = services.filter((s) => s.status === "online").length

  return (
    <>
      {/* Nav */}
      <nav className="fixed w-full top-0 z-50 px-6 py-4 flex justify-between items-center bg-bg/95 backdrop-blur-sm border-b-2 border-fg">
        <div className="flex items-center gap-3">
          <Link to="/" className="flex items-center gap-3 hover:opacity-70 transition-opacity">
            <div className="w-3 h-3 rounded-full bg-accent relative">
              <div className="w-3 h-3 rounded-full bg-accent pulse-ring absolute inset-0" />
            </div>
            <span className="text-xl font-black tracking-tighter">renraku.</span>
          </Link>
          <span className="text-fg-muted font-bold text-sm hidden sm:inline">/</span>
          <span className="text-sm font-black uppercase tracking-widest hidden sm:inline">Marketplace</span>
        </div>

        <div className="flex items-center gap-4">
          <Link to="/" className="text-sm font-bold uppercase tracking-wide hover:underline underline-offset-4">
            Home
          </Link>
          <a href="#" className="px-4 py-2 border-2 border-fg font-black text-sm uppercase hover:bg-fg hover:text-inverse transition-colors">
            List Service
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-24 border-b-2 border-fg bg-fg text-inverse relative overflow-hidden noise">
        <div className="absolute top-4 right-8 text-[15vw] font-black leading-none text-white/[0.03] select-none pointer-events-none tracking-tighter">
          402
        </div>
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div>
              <div className="text-sm font-black tracking-widest text-accent-light uppercase mb-4">
                Service Marketplace
              </div>
              <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
                DISCOVER.
                <br />
                <span className="text-accent-light">CALL.</span>
                <br />
                PAY.
              </h1>
              <p className="mt-6 text-lg font-medium text-inverse/60 max-w-md">
                x402-enabled endpoints you can call right now. Data APIs, AI inference, MCP tools, compute — all pay-per-call in USDC on Ink.
              </p>
            </div>

            {/* Stats */}
            <div className="flex gap-6 pb-2">
              <div className="bg-inverse/5 border border-inverse/10 px-5 py-4">
                <div className="text-3xl font-black text-accent-light">{services.length}</div>
                <div className="text-xs font-bold tracking-widest text-fg-muted uppercase mt-1">Services</div>
              </div>
              <div className="bg-inverse/5 border border-inverse/10 px-5 py-4">
                <div className="text-3xl font-black text-accent-light">{onlineCount}</div>
                <div className="text-xs font-bold tracking-widest text-fg-muted uppercase mt-1">Online</div>
              </div>
              <div className="bg-inverse/5 border border-inverse/10 px-5 py-4">
                <div className="text-3xl font-black text-accent-light">INK</div>
                <div className="text-xs font-bold tracking-widest text-fg-muted uppercase mt-1">Network</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ticker */}
      <div className="bg-accent text-inverse border-b-2 border-fg py-2.5 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap flex">
          {[...services, ...services].map((s, i) => (
            <span key={i} className="text-xs font-black uppercase tracking-widest mx-6 inline-flex items-center gap-2">
              <span className={`w-1.5 h-1.5 rounded-full inline-block flex-shrink-0 ${
                s.status === "online" ? "bg-[#28c840]" : "bg-inverse/40"
              }`} />
              {s.name}
              <span className="text-inverse/50">${s.price}</span>
            </span>
          ))}
        </div>
      </div>

      {/* Filters */}
      <section className="border-b-2 border-fg bg-bg-alt px-6 py-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-3 py-1.5 text-xs font-black uppercase tracking-wider border-2 transition-all duration-200 ${
                  active === cat
                    ? "bg-fg text-inverse border-fg"
                    : "border-fg/20 text-fg-muted hover:border-fg hover:text-fg"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search services..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-bg border-2 border-fg px-4 py-2 text-sm font-bold w-full md:w-64 placeholder:text-fg-muted focus:outline-none focus:shadow-[4px_4px_0px_0px_var(--shadow-accent)] transition-shadow"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-fg-muted text-xs font-black">
              /
            </span>
          </div>
        </div>
      </section>

      {/* Service Grid */}
      <section className="px-6 py-12 bg-bg grid-pattern min-h-[50vh]">
        <div className="max-w-7xl mx-auto">
          {filtered.length === 0 ? (
            <div className="text-center py-24">
              <div className="text-6xl font-black tracking-tighter text-fg/10 mb-4">404</div>
              <p className="text-lg font-bold text-fg-muted">No services found. Try a different filter.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* List Your Service CTA */}
      <section className="border-t-2 border-fg bg-bg-alt px-6 py-20 crosshatch">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-4">
            LIST YOUR SERVICE.
          </h2>
          <p className="text-lg text-fg-muted font-medium mb-4">
            Put a 402 in front of your API and list it here. Any endpoint that speaks x402 can join.
          </p>
          <p className="text-sm text-fg-muted mb-8">
            Data feeds, AI models, MCP tools, compute, paywalled content — if it returns a 402, it belongs here.
          </p>
          <a
            href="#"
            className="inline-block bg-fg text-inverse px-10 py-5 border-2 border-fg text-lg font-black uppercase tracking-wider hover:bg-accent hover:border-accent transition-all duration-200 shadow-[8px_8px_0px_0px_var(--shadow-accent)] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[4px_4px_0px_0px_var(--shadow-accent)]"
          >
            REGISTER SERVICE →
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-2 border-fg bg-fg text-inverse px-6 py-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <span className="font-black text-xl tracking-tighter">renraku.</span>
            <span className="text-sm text-fg-muted" style={{ fontFamily: "serif" }}>連絡</span>
          </div>
          <div className="flex gap-6 text-sm font-bold">
            <Link to="/" className="hover:text-accent-light transition-colors">Home</Link>
            <a href="#" className="hover:text-accent-light transition-colors">Docs</a>
            <a href="#" className="hover:text-accent-light transition-colors">GitHub</a>
          </div>
          <span className="text-xs text-fg-muted">x402 on Ink · Payments for the agentic web</span>
        </div>
      </footer>
    </>
  )
}
