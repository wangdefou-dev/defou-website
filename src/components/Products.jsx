import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { UserCheck, Settings, Megaphone } from 'lucide-react'

const products = [
  {
    icon: UserCheck,
    title: '招聘提效Agent',
    features: ['自动化简历筛选', '候选人智能初筛', '面试安排自动化', '大幅降低HR重复工作量'],
    gradient: 'from-blue-500 via-cyan-500 to-blue-600',
    glow: 'rgba(59, 130, 246, 0.15)',
    badge: '效率+70%',
  },
  {
    icon: Settings,
    title: '内部管理Agent',
    features: ['审批流程智能化', '会议纪要自动生成', '日报/周报智能汇总', '内部知识库即时问答'],
    gradient: 'from-violet-500 via-purple-500 to-violet-600',
    glow: 'rgba(139, 92, 246, 0.15)',
    badge: '热门',
  },
  {
    icon: Megaphone,
    title: '新媒体运营Agent',
    features: ['内容选题辅助', '文案智能撰写', '多平台自动分发', '运营数据分析'],
    gradient: 'from-orange-500 via-pink-500 to-rose-500',
    glow: 'rgba(244, 114, 182, 0.15)',
    badge: '产出3x',
  },
]

export default function Products() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="products" className="relative py-20 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 tracking-tight">
            核心产品
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> AI Agent</span>
          </h2>
          <p className="text-white/40 text-lg">智能体驱动业务提效，让AI为你工作</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {products.map((product, i) => {
            const Icon = product.icon
            return (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="group relative"
              >
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-b opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  style={{ background: `linear-gradient(180deg, ${product.glow}, transparent)` }} />

                <div className="relative glass-card rounded-2xl p-8 h-full transition-all duration-500 group-hover:-translate-y-1" style={{ boxShadow: `0 0 0 0 ${product.glow}` }}
                  onMouseEnter={e => e.currentTarget.style.boxShadow = `0 20px 60px -15px ${product.glow}`}
                  onMouseLeave={e => e.currentTarget.style.boxShadow = `0 0 0 0 ${product.glow}`}>

                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${product.gradient} p-[1px]`}>
                      <div className="w-full h-full rounded-xl bg-dark/80 flex items-center justify-center">
                        <Icon size={20} className="text-white/80" />
                      </div>
                    </div>
                    <span className={`px-3 py-1 text-[10px] font-medium rounded-full bg-gradient-to-r ${product.gradient} text-white`}>
                      {product.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-6">{product.title}</h3>

                  <ul className="space-y-3">
                    {product.features.map((f) => (
                      <li key={f} className="flex items-center gap-3 text-white/40 text-sm">
                        <div className={`w-1 h-1 rounded-full bg-gradient-to-r ${product.gradient} shrink-0`} />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
