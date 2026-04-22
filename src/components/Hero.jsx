import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
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
    let start = 0
    const step = Math.ceil(num / (duration / 16))
    const timer = setInterval(() => {
      start += step
      if (start >= num) { setCount(num); clearInterval(timer) }
      else setCount(start)
    }, 16)
    return () => clearInterval(timer)
  }, [started, target, duration])

  return <span ref={ref}>{typeof count === 'number' ? count : target}{suffix}</span>
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-18 overflow-hidden">
      <div className="absolute inset-0 mesh-bg" />

      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-white/[0.03] animate-[pulse-glow_6s_ease-in-out_infinite]" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-white/[0.02] animate-[pulse-glow_8s_ease-in-out_infinite_1s]" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full border border-white/[0.01] animate-[pulse-glow_10s_ease-in-out_infinite_2s]" />

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-card text-primary-light text-sm mb-10"
        >
          <Sparkles size={14} className="animate-pulse" />
          <span className="bg-gradient-to-r from-primary-light to-accent-light bg-clip-text text-transparent font-medium">
            企业AI落地一站式服务商
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl md:text-8xl font-bold text-white leading-[1.1] mb-8 tracking-tight"
        >
          让每一家企业
          <br />
          <span className="shimmer-text">都能用好AI</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-xl text-white/40 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          AI不是未来，是现在。从企业培训、战略咨询、AI转型陪跑到智能体开发，
          <br className="hidden md:block" />
          助力企业高效拥抱人工智能时代。
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a href="#contact" className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-60 blur-2xl transition-all duration-500" />
            <span className="relative text-white font-semibold text-lg">开始AI转型</span>
            <ArrowRight size={20} className="relative text-white group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#services" className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl glass-card text-white/70 hover:text-white hover:border-white/10 transition-all duration-300">
            了解服务
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 grid grid-cols-3 gap-8 max-w-lg mx-auto"
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
              transition={{ duration: 0.5, delay: 0.8 + i * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent">
                <CountUp target={item.num} suffix={item.suffix} />
              </div>
              <div className="text-xs text-white/30 mt-2 leading-relaxed">{item.desc}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark to-transparent" />
    </section>
  )
}
