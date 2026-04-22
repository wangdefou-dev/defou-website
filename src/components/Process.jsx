import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const timeline = [
  { period: '第1周', title: '初步沟通', items: ['了解需求', '明确痛点', '初步评估'] },
  { period: '第2-3周', title: '方案设计', items: ['场景梳理', '方案定制', '报价确认'] },
  { period: '第4-8周', title: '开发交付', items: ['Agent开发', '系统集成', '测试上线'] },
  { period: '持续', title: '陪跑优化', items: ['效果跟踪', '迭代调优', '能力沉淀'] },
]

export default function Process() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section className="relative py-20 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-warm-white mb-5 tracking-tight">
            合作<span className="text-primary">路径</span>
          </h2>
          <p className="text-warm-gray text-lg">平均交付周期 1-3 个月</p>
        </motion.div>

        <div className="relative">
          <div className="hidden md:block absolute top-6 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            {timeline.map((step, i) => (
              <motion.div
                key={step.period}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                <div className="hidden md:flex justify-center mb-8">
                  <div className="relative">
                    <div className="w-3 h-3 rounded-full bg-primary/80 relative z-10" />
                    <div className="absolute -inset-1.5 rounded-full bg-primary/20 animate-ping" />
                  </div>
                </div>

                <div className="glass-card glass-card-hover rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1">
                  <div className="text-xs font-mono text-primary/60 mb-2">{step.period}</div>
                  <h3 className="text-base font-semibold text-warm-white/90 mb-4">{step.title}</h3>
                  <ul className="space-y-2.5">
                    {step.items.map(item => (
                      <li key={item} className="text-sm text-text-muted flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-primary/40 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
