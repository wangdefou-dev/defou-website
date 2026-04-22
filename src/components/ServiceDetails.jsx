import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { GraduationCap, Target, Footprints, Cpu } from 'lucide-react'

const services = [
  { icon: GraduationCap, title: '企业AI培训', desc: '面向管理层及业务团队的AI认知普及与工具实操培训，课程可定制，支持线上/线下交付。', tags: ['管理层认知', '工具实操', '线上/线下', '可定制'] },
  { icon: Target, title: 'AI战略咨询', desc: '为企业梳理AI应用场景，评估落地可行性，制定分阶段AI转型路线图。', tags: ['场景梳理', '可行性评估', '路线图制定'] },
  { icon: Footprints, title: 'AI转型陪跑', desc: '深入企业日常运营，持续跟踪AI项目落地进度，提供调优建议与问题排障，确保转型真正产生业务价值。', tags: ['全程跟踪', '调优建议', '问题排障', '业务价值'] },
  { icon: Cpu, title: 'Agent开发与部署', desc: '根据企业具体业务场景，定制开发AI Agent并完成系统集成与上线部署。', tags: ['定制开发', '系统集成', '上线部署'] },
]

export default function ServiceDetails() {
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
            全链路<span className="text-primary">AI落地支撑</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {services.map((svc, i) => {
            const Icon = svc.icon
            return (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="group glass-card glass-card-hover rounded-2xl p-7 transition-all duration-500"
              >
                <div className="flex items-start gap-5">
                  <div className="w-11 h-11 rounded-xl bg-primary/8 flex items-center justify-center shrink-0 group-hover:bg-primary/12 transition-colors">
                    <Icon size={20} className="text-primary/60" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-semibold text-warm-white/90 mb-2">{svc.title}</h3>
                    <p className="text-text-muted text-sm leading-relaxed mb-4">{svc.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {svc.tags.map(tag => (
                        <span key={tag} className="px-2.5 py-1 text-[11px] rounded-md text-warm-gray bg-white/[0.03] border border-white/[0.04]">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
