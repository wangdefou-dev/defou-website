import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { GraduationCap, Target, Footprints, Cpu, ArrowRight } from 'lucide-react'

const plans = [
  {
    icon: GraduationCap,
    title: '企业AI培训',
    price: '5,000',
    unit: '起',
    desc: '2小时起，可定制',
    detail: '根据课程时长、定制程度及讲师配置报价',
  },
  {
    icon: Target,
    title: 'AI战略咨询',
    price: '10,000',
    unit: '起',
    desc: '按项目周期及深度',
    detail: '为企业梳理场景、评估可行性、制定路线图',
  },
  {
    icon: Footprints,
    title: 'AI转型陪跑',
    price: '50,000',
    unit: '/期',
    desc: '1-6个月，全程支持',
    detail: '深入运营、持续跟踪、调优建议与排障',
    featured: true,
  },
  {
    icon: Cpu,
    title: '智能体开发',
    price: '10,000',
    unit: '/个',
    desc: '按需求复杂度定价',
    detail: '根据功能范围及集成要求定价',
  },
]

export default function Pricing() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="pricing" className="relative py-20 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 tracking-tight">
            服务
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">费用</span>
          </h2>
          <p className="text-white/40 text-lg">灵活定价，中小企业也能轻松启动</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {plans.map((plan, i) => {
            const Icon = plan.icon
            return (
              <motion.div
                key={plan.title}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={`group relative rounded-2xl transition-all duration-500 hover:-translate-y-1 ${plan.featured ? '' : ''}`}
              >
                {plan.featured && (
                  <>
                    <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-primary/50 via-accent/30 to-transparent" style={{ WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor', maskComposite: 'exclude', padding: '1px' }} />
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10">
                      <span className="px-4 py-1.5 text-[10px] font-semibold rounded-full bg-gradient-to-r from-primary to-accent text-white shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                        推荐
                      </span>
                    </div>
                  </>
                )}

                <div className={`relative glass-card rounded-2xl p-6 h-full ${plan.featured ? 'bg-gradient-to-b from-primary/5 to-transparent' : ''}`}>
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/15 to-accent/15 flex items-center justify-center mb-5">
                    <Icon size={18} className="text-white/60" />
                  </div>

                  <h3 className="text-base font-semibold text-white mb-4">{plan.title}</h3>

                  <div className="mb-5">
                    <span className="text-xs text-white/30">¥</span>
                    <span className="text-3xl font-bold text-white ml-0.5">{plan.price}</span>
                    <span className="text-white/30 text-sm ml-1">{plan.unit}</span>
                  </div>

                  <p className="text-xs text-primary-light/80 mb-1">{plan.desc}</p>
                  <p className="text-[11px] text-white/25 mb-6 leading-relaxed">{plan.detail}</p>

                  <a href="#contact" className="flex items-center justify-center gap-1.5 w-full py-2.5 rounded-xl text-sm transition-all duration-300 border border-white/8 text-white/50 hover:text-white hover:border-primary/40 hover:bg-primary/5 group-hover:border-primary/30">
                    咨询报价 <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center text-xs text-white/20 mt-8"
        >
          具体费用以实际需求沟通后的正式报价为准
        </motion.p>
      </div>
    </section>
  )
}
