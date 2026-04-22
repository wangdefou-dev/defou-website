import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { AlertTriangle, CheckCircle, XCircle } from 'lucide-react'

const withoutAI = [
  '团队不知从何下手',
  '买了工具却用不起来',
  'AI项目反复试错、浪费预算',
  '管理层焦虑，执行层迷茫',
]

const withAI = [
  '专家团队全程指导',
  '精准匹配业务场景',
  'Agent快速开发、即刻上线',
  '可衡量的业务提效成果',
]

export default function PainPoints() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="pain-points" className="relative py-20 px-6" ref={ref}>
      <div className="absolute inset-0 dot-grid opacity-40" />

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-warm-white mb-5 tracking-tight">
            企业AI转型的<span className="text-primary">真实困境</span>
          </h2>
          <p className="text-warm-gray text-lg max-w-xl mx-auto">
            87%的企业认为AI是战略重点，但仅有不到20%真正落地
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-2xl bg-[#1c1917]/40 border border-red-900/15 p-8 backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-red-900/15 flex items-center justify-center">
                <AlertTriangle size={18} className="text-red-400/70" />
              </div>
              <h3 className="text-lg font-semibold text-warm-white/80">没有AI陪跑</h3>
            </div>
            <ul className="space-y-5">
              {withoutAI.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.06 }}
                  className="flex items-start gap-3"
                >
                  <XCircle size={15} className="text-red-400/40 shrink-0 mt-0.5" />
                  <span className="text-text-muted text-sm">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-2xl bg-[#1c1917]/40 border border-primary/10 p-8 backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <CheckCircle size={18} className="text-primary/80" />
              </div>
              <h3 className="text-lg font-semibold text-warm-white/80">得否科技陪跑</h3>
            </div>
            <ul className="space-y-5">
              {withAI.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.45 + i * 0.06 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle size={15} className="text-primary/60 shrink-0 mt-0.5" />
                  <span className="text-warm-gray text-sm">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
