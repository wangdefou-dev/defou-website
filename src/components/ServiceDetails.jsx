import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Compass, GraduationCap, Footprints, Cpu, Coins } from 'lucide-react'

const services = [
  {
    icon: Compass,
    num: '01',
    title: 'AI 战略咨询',
    tagline: '不是所有场景都值得上 AI，帮你找到真正该用的那几个',
    desc: '为企业进行 AI 应用场景全面梳理，评估技术可行性与业务 ROI，输出分阶段 AI 转型路线图。',
    tags: ['业务流程诊断', '场景优先级评估', '分阶段路线图', '技术选型建议'],
  },
  {
    icon: GraduationCap,
    num: '02',
    title: '企业 AI 培训',
    tagline: '听完就能用，用了就有效',
    desc: '面向管理层与业务团队的 AI 认知普及与工具实操培训。聚焦真实业务场景，课后每个人都能把 AI 用进日常工作。',
    tags: ['AI 认知破冰', '工具实操训练', '场景工作坊', '进阶专题'],
  },
  {
    icon: Footprints,
    num: '03',
    title: 'AI 转型陪跑',
    tagline: '培训解决"知道"，陪跑解决"做到"',
    desc: '深入企业日常运营，以驻场或远程方式持续跟踪 AI 项目落地全过程，确保 AI 真正跑起来。',
    tags: ['场景落地执行', '流程 AI 化改造', '种子团队培养', '效果复盘迭代'],
  },
  {
    icon: Cpu,
    num: '04',
    title: 'Agent 开发与部署',
    tagline: '你说业务需求，我们交付能跑的 Agent',
    desc: '根据企业具体业务场景，定制开发 AI Agent 并完成系统集成与上线部署，提供端到端的交付服务。',
    tags: ['需求分析与方案设计', 'Agent 开发调优', '飞书/钉钉/企微集成', '上线部署与运维'],
  },
  {
    icon: Coins,
    num: '05',
    title: 'Token 充值',
    tagline: '不用自己跑通 API，开箱即用的 AI 算力',
    desc: '为企业客户提供主流大模型（OpenAI、Claude、Gemini 等）Token 统一采购与充值服务，一站式解决算力供给。',
    tags: ['Token 采购充值', 'API Key 托管监控', '用量预警续费', '多模型成本优化'],
  },
]

export default function ServiceDetails() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="service-details" className="relative py-24 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-warm-white mb-5 tracking-tight">
            全链路<span className="text-primary">服务详情</span>
          </h2>
          <p className="text-warm-gray text-lg">不是卖工具，而是帮你把 AI 真正用出业务价值</p>
        </motion.div>

        <div className="space-y-5">
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
                  <div className="flex items-center gap-4 shrink-0">
                    <span className="font-mono text-xs text-primary/40">{svc.num}</span>
                    <div className="w-11 h-11 rounded-xl bg-primary/8 flex items-center justify-center group-hover:bg-primary/12 transition-colors">
                      <Icon size={20} className="text-primary/60" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-3 mb-1">
                      <h3 className="text-base font-semibold text-warm-white/90">{svc.title}</h3>
                      <span className="text-xs text-primary/50 italic hidden sm:inline">{svc.tagline}</span>
                    </div>
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
