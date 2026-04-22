import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { GraduationCap, Target, Footprints, Cpu, ArrowRight } from 'lucide-react'

const plans = [
  { icon: GraduationCap, title: '企业AI培训', price: '5,000', unit: '起', desc: '2小时起，可定制', detail: '根据课程时长、定制程度及讲师配置报价' },
  { icon: Target, title: 'AI战略咨询', price: '10,000', unit: '起', desc: '按项目周期及深度', detail: '为企业梳理场景、评估可行性、制定路线图' },
  { icon: Footprints, title: 'AI转型陪跑', price: '50,000', unit: '/期', desc: '1-6个月，全程支持', detail: '深入运营、持续跟踪、调优建议与排障', featured: true },
  { icon: Cpu, title: '智能体开发', price: '10,000', unit: '/个', desc: '按需求复杂度定价', detail: '根据功能范围及集成要求定价' },
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
          <h2 className="text-4xl md:text-5xl font-bold text-warm-white mb-5 tracking-tight">
            服务<span className="text-primary">费用</span>
          </h2>
          <p className="text-warm-gray text-lg">灵活定价，中小企业也能轻松启动</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {plans.map((plan, i) => {
            const Icon = plan.icon
            return (
              <motion.div
                key={plan.title}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className={`group relative rounded-2xl transition-all duration-500 hover:-translate-y-1 ${plan.featured ? 'hover:shadow-[0_20px_50px_-15px_rgba(217,119,6,0.1)]' : ''}`}
              >
                {plan.featured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10">
                    <span className="px-4 py-1.5 text-[10px] font-semibold rounded-full bg-primary text-[#09090b]">
                      推荐
                    </span>
                  </div>
                )}

                <div className={`relative glass-card rounded-2xl p-6 h-full ${plan.featured ? 'border-primary/15' : ''}`}>
                  <div className="w-10 h-10 rounded-xl bg-primary/8 flex items-center justify-center mb-5">
                    <Icon size={18} className="text-primary/60" />
                  </div>

                  <h3 className="text-base font-semibold text-warm-white/90 mb-4">{plan.title}</h3>

                  <div className="mb-5">
                    <span className="text-xs text-text-muted">¥</span>
                    <span className="text-3xl font-bold text-warm-white ml-0.5">{plan.price}</span>
                    <span className="text-text-muted text-sm ml-1">{plan.unit}</span>
                  </div>

                  <p className="text-xs text-primary/70 mb-1">{plan.desc}</p>
                  <p className="text-[11px] text-text-muted/60 mb-6 leading-relaxed">{plan.detail}</p>

                  <a href="#contact" className="flex items-center justify-center gap-1.5 w-full py-2.5 rounded-xl text-sm transition-all duration-300 border border-white/[0.05] text-warm-gray hover:text-warm-white hover:border-primary/25 hover:bg-primary/5">
                    咨询报价 <ArrowRight size={13} />
                  </a>
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-xs text-text-muted/50 mt-8"
        >
          具体费用以实际需求沟通后的正式报价为准
        </motion.p>
      </div>
    </section>
  )
}
