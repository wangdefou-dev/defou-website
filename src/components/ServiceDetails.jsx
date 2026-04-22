import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { GraduationCap, Target, Footprints, Cpu } from 'lucide-react'

const services = [
  {
    icon: GraduationCap,
    title: '企业AI培训',
    desc: '面向管理层及业务团队的AI认知普及与工具实操培训，课程可定制，支持线上/线下交付。',
    tags: ['管理层认知', '工具实操', '线上/线下', '可定制'],
    accent: '#3b82f6',
  },
  {
    icon: Target,
    title: 'AI战略咨询',
    desc: '为企业梳理AI应用场景，评估落地可行性，制定分阶段AI转型路线图。',
    tags: ['场景梳理', '可行性评估', '路线图制定'],
    accent: '#8b5cf6',
  },
  {
    icon: Footprints,
    title: 'AI转型陪跑',
    desc: '深入企业日常运营，持续跟踪AI项目落地进度，提供调优建议与问题排障，确保转型真正产生业务价值。',
    tags: ['全程跟踪', '调优建议', '问题排障', '业务价值'],
    accent: '#06b6d4',
  },
  {
    icon: Cpu,
    title: 'Agent开发与部署',
    desc: '根据企业具体业务场景，定制开发AI Agent并完成系统集成与上线部署。',
    tags: ['定制开发', '系统集成', '上线部署'],
    accent: '#10b981',
  },
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 tracking-tight">
            全链路
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">AI落地支撑</span>
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
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group relative glass-card glass-card-hover rounded-2xl p-7 transition-all duration-500"
              >
                <div className="absolute top-0 left-8 right-8 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  style={{ background: `linear-gradient(90deg, transparent, ${svc.accent}40, transparent)` }} />

                <div className="flex items-start gap-5">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ background: `${svc.accent}15` }}>
                    <Icon size={20} style={{ color: `${svc.accent}cc` }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-semibold text-white mb-2">{svc.title}</h3>
                    <p className="text-white/35 text-sm leading-relaxed mb-4">{svc.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {svc.tags.map(tag => (
                        <span key={tag} className="px-2.5 py-1 text-[11px] rounded-md text-white/50" style={{ background: `${svc.accent}10`, border: `1px solid ${svc.accent}20` }}>
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
