import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function Quote() {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true })

  const lines = ['不是卖工具，', '而是帮你把 AI', '真正用出业务价值。']

  return (
    <section className="relative py-28 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-xs font-mono text-primary/70 tracking-[0.3em] uppercase mb-8"
        >
          The Belief
        </motion.div>

        <blockquote className="text-3xl md:text-5xl lg:text-6xl font-bold text-warm-white leading-[1.2] tracking-tight">
          {lines.map((line, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 + i * 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="block"
            >
              {line}
            </motion.span>
          ))}
        </blockquote>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-8 text-sm text-text-muted"
        >
          — 得否科技 · DeFou Tech
        </motion.div>
      </div>
    </section>
  )
}
