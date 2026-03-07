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
      className={`fixed w-full top-0 z-50 px-6 py-4 flex justify-between items-center transition-all duration-200 ${
        scrolled
          ? "bg-bg border-b-2 border-fg text-fg"
          : "bg-transparent text-inverse"
      }`}
    >
      <div className="flex items-center gap-4">
        <span
          className={`text-xl font-black tracking-tighter transition-opacity duration-200 ${
            scrolled ? "opacity-100" : "opacity-0"
          }`}
        >
          renraku.
        </span>
      </div>

      <div className="hidden sm:flex gap-6 items-center text-sm font-bold uppercase tracking-wide">
        <a href="#products" className="hover:underline underline-offset-4">Products</a>
        <a href="#compare" className="hover:underline underline-offset-4">Compare</a>
        <a href="#pricing" className="hover:underline underline-offset-4">Pricing</a>
        <a
          href="#cta"
          className={`px-4 py-2 border-2 transition-colors ${
            scrolled
              ? "border-fg hover:bg-fg hover:text-inverse"
              : "border-inverse hover:bg-inverse hover:text-fg"
          }`}
        >
          Start
        </a>
      </div>

      <button className="sm:hidden" onClick={() => setOpen(!open)}>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {open ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {open && (
        <div className="absolute top-full left-0 w-full bg-bg border-b-2 border-fg p-6 flex flex-col gap-4 sm:hidden text-fg">
          <a href="#products" className="font-bold uppercase tracking-wide text-sm" onClick={() => setOpen(false)}>Products</a>
          <a href="#compare" className="font-bold uppercase tracking-wide text-sm" onClick={() => setOpen(false)}>Compare</a>
          <a href="#pricing" className="font-bold uppercase tracking-wide text-sm" onClick={() => setOpen(false)}>Pricing</a>
          <a href="#cta" className="bg-fg text-inverse px-4 py-2 font-black uppercase text-center" onClick={() => setOpen(false)}>Start</a>
        </div>
      )}
    </nav>
  )
}
