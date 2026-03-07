import { useState, useEffect } from "react"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <nav
      className={`fixed w-full top-0 z-50 px-6 py-4 flex justify-between items-center transition-all duration-300 ${
        scrolled
          ? "bg-bg/95 backdrop-blur-sm border-b-2 border-fg text-fg"
          : "bg-transparent text-inverse"
      }`}
    >
      <div className="flex items-center gap-3">
        <div
          className={`w-3 h-3 rounded-full transition-all duration-300 ${
            scrolled ? "bg-accent" : "bg-accent-light"
          }`}
        >
          <div className={`w-3 h-3 rounded-full pulse-ring ${
            scrolled ? "bg-accent" : "bg-accent-light"
          }`} />
        </div>
        <span
          className={`text-xl font-black tracking-tighter transition-all duration-300 ${
            scrolled ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
          }`}
        >
          renraku.
        </span>
      </div>

      <div className="hidden sm:flex gap-6 items-center text-sm font-bold uppercase tracking-wide">
        <a href="#features" className="hover:underline underline-offset-4 transition-all hover:tracking-widest">
          Features
        </a>
        <a href="#products" className="hover:underline underline-offset-4 transition-all hover:tracking-widest">
          Products
        </a>
        <a href="#compare" className="hover:underline underline-offset-4 transition-all hover:tracking-widest">
          Compare
        </a>
        <a
          href="#cta"
          className={`px-4 py-2 border-2 transition-all duration-200 font-black ${
            scrolled
              ? "border-fg hover:bg-fg hover:text-inverse hover:shadow-[4px_4px_0px_0px_var(--shadow-accent)]"
              : "border-inverse hover:bg-inverse hover:text-fg"
          }`}
        >
          Start →
        </a>
      </div>

      <button className="sm:hidden" onClick={() => setOpen(!open)}>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
          {open ? (
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {open && (
        <div className="absolute top-full left-0 w-full bg-bg border-b-2 border-fg p-6 flex flex-col gap-4 sm:hidden text-fg">
          <a href="#features" className="font-bold uppercase tracking-wide text-sm" onClick={() => setOpen(false)}>Features</a>
          <a href="#products" className="font-bold uppercase tracking-wide text-sm" onClick={() => setOpen(false)}>Products</a>
          <a href="#compare" className="font-bold uppercase tracking-wide text-sm" onClick={() => setOpen(false)}>Compare</a>
          <a href="#cta" className="bg-fg text-inverse px-4 py-3 font-black uppercase text-center border-2 border-fg shadow-[4px_4px_0px_0px_var(--shadow-accent)]" onClick={() => setOpen(false)}>Start →</a>
        </div>
      )}
    </nav>
  )
}
