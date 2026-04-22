import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { GraduationCap, Compass, Footprints, Bot, RefreshCcw, ArrowRight } from 'lucide-react'

const steps = [
  { icon: GraduationCap, num: '01', title: '企业AI培训', desc: '从认知到实操，全面提升团队AI能力', color: 'from-blue-400 to-cyan-400' },
  { icon: Compass, num: '02', title: 'AI战略咨询', desc: '梳理场景、评估可行性、制定路线图', color: 'from-violet-400 to-purple-400' },
  { icon: Footprints, num: '03', title: 'AI转型陪跑', desc: '深入运营一线，持续跟踪确保落地', color: 'from-primary to-accent' },
  { icon: Bot, num: '04', title: 'Agent开发部署', desc: '定制智能体，完成集成与上线', color: 'from-emerald-400 to-teal-400' },
  { icon: RefreshCcw, num: '05', title: '持续优化迭代', desc: '数据驱动调优，形成自主AI能力', color: 'from-amber-400 to-orange-400' },
]

export default function Services() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="services" className="relative py-20 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 tracking-tight">
            一站式
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">AI落地服务</span>
          </h2>
          <p className="text-white/40 text-lg">从认知启蒙到自主迭代，全链路闭环</p>
        </motion.div>

        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-8 right-8 h-px -translate-y-1/2">
            <div className="w-full h-full bg-gradient-to-r from-primary/40 via-accent/40 to-primary/40" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/40 via-accent/40 to-primary/40 blur-sm" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
            {steps.map((step, i) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 40 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="relative group"
                >
                  <div className="glass-card glass-card-hover rounded-2xl p-6 text-center transition-all duration-500 hover:-translate-y-2">
                    <div className={`w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br ${step.color} bg-opacity-10 flex items-center justify-center relative`}>
                      <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${step.color} opacity-15`} />
                      <Icon size={20} className="relative text-white/90" />
                    </div>
                    <div className={`text-xs font-mono bg-gradient-to-r ${step.color} bg-clip-text text-transparent mb-2`}>{step.num}</div>
                    <h3 className="text-white font-semibold mb-2 text-sm">{step.title}</h3>
                    <p className="text-white/30 text-xs leading-relaxed">{step.desc}</p>
                  </div>
                  {i < steps.length - 1 && (
                    <div className="hidden md:flex absolute top-1/2 -right-3 -translate-y-1/2 z-10">
                      <ArrowRight size={14} className="text-white/10" />
                    </div>
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
