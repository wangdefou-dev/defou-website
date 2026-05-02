import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Compass, GraduationCap, Footprints, Bot, Zap } from 'lucide-react'

const steps = [
  { icon: Compass, num: '01', title: 'AI 战略咨询', desc: '梳理场景、评估 ROI、制定路线图' },
  { icon: GraduationCap, num: '02', title: '企业 AI 培训', desc: '聚焦真实业务场景，课后立即可用' },
  { icon: Footprints, num: '03', title: 'AI 转型陪跑', desc: '全程跟踪落地，持续调优直到出效果' },
  { icon: Bot, num: '04', title: 'Agent 开发', desc: '按需定制交付，不用养团队也有 AI 能力' },
  { icon: Zap, num: '05', title: 'Token 充值', desc: '一站式解决注册、支付、充值问题' },
]

export default function Services() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="services" className="relative py-24 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-warm-white mb-5 tracking-tight">
            五位一体<span className="text-primary">完整闭环</span>
          </h2>
          <p className="text-warm-gray text-lg">咨询 → 培训 → 陪跑 → 产品 → 算力，企业 AI 落地服务体系</p>
        </motion.div>

        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-8 right-8 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
            {steps.map((step, i) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 40 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="group"
                >
                  <div className="glass-card glass-card-hover rounded-2xl p-6 text-center transition-all duration-500 hover:-translate-y-1">
                    <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary/8 flex items-center justify-center group-hover:bg-primary/12 transition-colors">
                      <Icon size={20} className="text-primary/90" />
                    </div>
                    <div className="text-sm font-mono text-primary/80 mb-2">{step.num}</div>
                    <h3 className="text-warm-white font-semibold mb-2 text-base">{step.title}</h3>
                    <p className="text-text-muted text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
