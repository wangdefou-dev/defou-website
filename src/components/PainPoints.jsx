import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { AlertTriangle, CheckCircle, XCircle, Zap } from 'lucide-react'

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
      <div className="absolute inset-0 dot-grid opacity-50" />

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card text-xs text-white/50 mb-6">
            <Zap size={12} className="text-amber-400" /> 企业AI转型现状
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 tracking-tight">
            企业AI转型的
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">真实困境</span>
          </h2>
          <p className="text-white/40 text-lg max-w-xl mx-auto">
            87%的企业认为AI是战略重点，但仅有不到20%真正落地
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="group relative rounded-2xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent" />
            <div className="relative glass-card rounded-2xl p-8 border-red-500/10 hover:border-red-500/20 transition-all duration-500">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center">
                  <AlertTriangle size={18} className="text-red-400" />
                </div>
                <h3 className="text-lg font-semibold text-white/90">没有AI陪跑</h3>
              </div>
              <ul className="space-y-5">
                {withoutAI.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                    className="flex items-start gap-3"
                  >
                    <XCircle size={16} className="text-red-400/60 shrink-0 mt-0.5" />
                    <span className="text-white/40 text-sm">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="group relative rounded-2xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent" />
            <div className="absolute inset-[0px] rounded-2xl bg-gradient-to-br from-emerald-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{ padding: '1px', WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor', maskComposite: 'exclude' }} />
            <div className="relative glass-card rounded-2xl p-8 border-emerald-500/10 hover:border-emerald-500/20 transition-all duration-500">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                  <CheckCircle size={18} className="text-emerald-400" />
                </div>
                <h3 className="text-lg font-semibold text-white/90">得否科技陪跑</h3>
              </div>
              <ul className="space-y-5">
                {withAI.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.45 + i * 0.08 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle size={16} className="text-emerald-400/80 shrink-0 mt-0.5" />
                    <span className="text-white/70 text-sm">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
