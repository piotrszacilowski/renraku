import { useState, useEffect, useRef, useCallback } from "react"

const terminalLines = [
  { type: "comment", text: "# Agent requests premium data" },
  { type: "request", text: "GET /api/market-analysis HTTP/1.1" },
  { type: "blank", text: "" },
  { type: "status", text: "HTTP/1.1 402 Payment Required" },
  { type: "header", text: "X-Payment: x402" },
  { type: "header", text: "X-Price: 0.001 USDC" },
  { type: "header", text: "X-Network: ink" },
  { type: "blank", text: "" },
  { type: "comment", text: "# Facilitator settles on-chain..." },
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

function NetworkCanvas() {
  const canvasRef = useRef(null)
  const nodesRef = useRef([])
  const pulsesRef = useRef([])
  const animRef = useRef(null)
  const timeRef = useRef(0)

  const initNodes = useCallback((w, h) => {
    const count = Math.floor((w * h) / 12000)
    return Array.from({ length: Math.max(count, 30) }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      r: Math.random() * 2.5 + 1.5,
      hub: Math.random() > 0.8,
      phase: Math.random() * Math.PI * 2,
    }))
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    let w, h

    const resize = () => {
      const rect = canvas.parentElement.getBoundingClientRect()
      w = rect.width
      h = rect.height
      canvas.width = w * devicePixelRatio
      canvas.height = h * devicePixelRatio
      ctx.scale(devicePixelRatio, devicePixelRatio)
      canvas.style.width = w + "px"
      canvas.style.height = h + "px"
      nodesRef.current = initNodes(w, h)
      pulsesRef.current = []
    }

    resize()
    window.addEventListener("resize", resize)

    const draw = () => {
      timeRef.current += 0.016
      const t = timeRef.current
      ctx.clearRect(0, 0, w, h)
      const nodes = nodesRef.current
      const pulses = pulsesRef.current
      const connectionDist = 180

      // Update positions
      for (const n of nodes) {
        n.x += n.vx
        n.y += n.vy
        if (n.x < 0 || n.x > w) n.vx *= -1
        if (n.y < 0 || n.y > h) n.vy *= -1
      }

      // Find connections and draw them
      const connections = []
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < connectionDist) {
            connections.push([i, j, dist])
            const alpha = (1 - dist / connectionDist) * 0.3
            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.strokeStyle = `rgba(124, 154, 216, ${alpha})`
            ctx.lineWidth = 1
            ctx.stroke()
          }
        }
      }

      // Spawn traveling pulses along connections
      if (connections.length > 0 && Math.random() < 0.06) {
        const [i, j] = connections[Math.floor(Math.random() * connections.length)]
        pulses.push({
          fromX: nodes[i].x, fromY: nodes[i].y,
          toX: nodes[j].x, toY: nodes[j].y,
          progress: 0,
          speed: 0.008 + Math.random() * 0.012,
        })
      }

      // Draw and update pulses
      for (let p = pulses.length - 1; p >= 0; p--) {
        const pulse = pulses[p]
        pulse.progress += pulse.speed
        if (pulse.progress > 1) {
          pulses.splice(p, 1)
          continue
        }
        const px = pulse.fromX + (pulse.toX - pulse.fromX) * pulse.progress
        const py = pulse.fromY + (pulse.toY - pulse.fromY) * pulse.progress
        const glow = Math.sin(pulse.progress * Math.PI)

        // Glow
        const grad = ctx.createRadialGradient(px, py, 0, px, py, 12)
        grad.addColorStop(0, `rgba(124, 154, 216, ${glow * 0.6})`)
        grad.addColorStop(1, "rgba(124, 154, 216, 0)")
        ctx.beginPath()
        ctx.arc(px, py, 12, 0, Math.PI * 2)
        ctx.fillStyle = grad
        ctx.fill()

        // Core
        ctx.beginPath()
        ctx.arc(px, py, 2.5, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(200, 220, 255, ${glow * 0.9})`
        ctx.fill()
      }

      // Draw nodes
      for (const n of nodes) {
        const breathe = Math.sin(t * 1.5 + n.phase) * 0.3 + 0.7

        if (n.hub) {
          // Hub glow ring
          const hubGlow = Math.sin(t * 2 + n.phase) * 0.15 + 0.2
          const grad = ctx.createRadialGradient(n.x, n.y, n.r, n.x, n.y, n.r + 15)
          grad.addColorStop(0, `rgba(124, 154, 216, ${hubGlow})`)
          grad.addColorStop(1, "rgba(124, 154, 216, 0)")
          ctx.beginPath()
          ctx.arc(n.x, n.y, n.r + 15, 0, Math.PI * 2)
          ctx.fillStyle = grad
          ctx.fill()

          // Hub core — brighter
          ctx.beginPath()
          ctx.arc(n.x, n.y, n.r + 1, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(160, 185, 230, ${0.5 * breathe})`
          ctx.fill()
        }

        // Node dot
        ctx.beginPath()
        ctx.arc(n.x, n.y, n.r * breathe, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(124, 154, 216, ${n.hub ? 0.6 : 0.35})`
        ctx.fill()
      }

      animRef.current = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      window.removeEventListener("resize", resize)
      if (animRef.current) cancelAnimationFrame(animRef.current)
    }
  }, [initNodes])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 1 }}
    />
  )
}

export default function Hero() {
  return (
    <section className="relative px-6 pt-32 pb-32 md:pb-24 min-h-[85vh] flex flex-col justify-end bg-fg text-inverse border-b-2 border-fg overflow-x-clip noise">
      {/* Animated network background */}
      <NetworkCanvas />

      {/* Geometric accent */}
      <div className="absolute top-12 right-12 w-32 h-32 border-2 border-accent/20 rotate-12 hidden lg:block" style={{ zIndex: 2 }} />
      <div className="absolute top-20 right-20 w-32 h-32 border-2 border-accent/10 rotate-45 hidden lg:block" style={{ zIndex: 2 }} />
      <div className="absolute bottom-40 left-8 w-16 h-16 bg-accent/10 hidden lg:block" style={{ zIndex: 2 }} />

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
