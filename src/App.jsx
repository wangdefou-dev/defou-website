import { useEffect, useRef } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import PainPoints from './components/PainPoints'
import Services from './components/Services'
import Products from './components/Products'
import ServiceDetails from './components/ServiceDetails'
import Cases from './components/Cases'
import Process from './components/Process'
import Team from './components/Team'
import Pricing from './components/Pricing'
import Contact from './components/Contact'
import Footer from './components/Footer'

function Particles() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animId
    let particles = []

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.5 + 0.5,
        dx: (Math.random() - 0.5) * 0.3,
        dy: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.5 + 0.1,
        hue: Math.random() > 0.5 ? 220 : 260,
      })
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach(p => {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `hsla(${p.hue}, 80%, 70%, ${p.opacity})`
        ctx.fill()

        p.x += p.dx
        p.y += p.dy
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1
      })

      particles.forEach((a, i) => {
        particles.slice(i + 1).forEach(b => {
          const dist = Math.hypot(a.x - b.x, a.y - b.y)
          if (dist < 120) {
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.strokeStyle = `rgba(100, 140, 255, ${0.06 * (1 - dist / 120)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        })
      })

      animId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none" />
}

function MeshGradients() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      <div className="absolute -top-[30%] -left-[10%] w-[70%] h-[70%] rounded-full bg-[radial-gradient(ellipse,rgba(59,130,246,0.08),transparent_70%)] animate-[pulse-glow_8s_ease-in-out_infinite]" />
      <div className="absolute top-[20%] -right-[15%] w-[60%] h-[60%] rounded-full bg-[radial-gradient(ellipse,rgba(139,92,246,0.06),transparent_70%)] animate-[pulse-glow_10s_ease-in-out_infinite_2s]" />
      <div className="absolute -bottom-[20%] left-[20%] w-[50%] h-[50%] rounded-full bg-[radial-gradient(ellipse,rgba(59,130,246,0.05),transparent_70%)] animate-[pulse-glow_12s_ease-in-out_infinite_4s]" />
    </div>
  )
}

export default function App() {
  return (
    <div className="relative overflow-hidden bg-dark">
      <MeshGradients />
      <Particles />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <PainPoints />
        <Services />
        <Products />
        <ServiceDetails />
        <Cases />
        <Process />
        <Team />
        <Pricing />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}
