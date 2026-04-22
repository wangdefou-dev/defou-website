import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useEffect, useState, useRef } from 'react'

function CountUp({ target, suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setStarted(true) }, { threshold: 0.5 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    if (!started) return
    const num = parseInt(target)
    if (isNaN(num)) { setCount(target); return }
    let s = 0
    const step = Math.ceil(num / (duration / 16))
    const t = setInterval(() => {
      s += step
      if (s >= num) { setCount(num); clearInterval(t) }
      else setCount(s)
    }, 16)
    return () => clearInterval(t)
  }, [started, target, duration])

  return <span ref={ref}>{typeof count === 'number' ? count : target}{suffix}</span>
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-18 overflow-hidden">
      <div className="absolute inset-0 mesh-bg" />

      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-primary/[0.04]" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-primary/[0.02]" />

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-primary/20 bg-primary/5 text-sm mb-10"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          <span className="text-primary-light font-medium">企业AI落地一站式服务商</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl md:text-8xl font-bold text-warm-white leading-[1.08] mb-8 tracking-tight"
        >
          让每一家企业
          <br />
          <span className="shimmer-text">都能用好AI</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-xl text-warm-gray max-w-2xl mx-auto mb-14 leading-relaxed"
        >
          AI不是未来，是现在。从企业培训、战略咨询、AI转型陪跑到智能体开发，
          <br className="hidden md:block" />
          助力企业高效拥抱人工智能时代。
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.36, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a href="#contact" className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-primary hover:bg-primary-light text-[#09090b] font-semibold text-lg transition-all duration-300 hover:shadow-[0_0_40px_rgba(217,119,6,0.2)]">
            开始AI转型
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#services" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl border border-white/[0.06] text-warm-gray hover:text-warm-white hover:border-white/[0.1] transition-all duration-300">
            了解服务
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="mt-24 grid grid-cols-3 gap-8 max-w-md mx-auto"
        >
          {[
            { num: '87', suffix: '%', desc: '企业认为AI是战略重点' },
            { num: '3', suffix: 'x', desc: 'AI企业运营效率提升' },
            { num: '70', suffix: '%', desc: 'AI项目未能落地' },
          ].map((item, i) => (
            <motion.div
              key={item.desc}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 + i * 0.08 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-warm-white">
                <CountUp target={item.num} suffix={item.suffix} />
              </div>
              <div className="text-xs text-text-muted mt-2">{item.desc}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark to-transparent" />
    </section>
  )
}
