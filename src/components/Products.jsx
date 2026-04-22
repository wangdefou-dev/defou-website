import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { UserCheck, Settings, Megaphone } from 'lucide-react'

const products = [
  {
    icon: UserCheck,
    title: '招聘提效Agent',
    features: ['自动化简历筛选', '候选人智能初筛', '面试安排自动化', '大幅降低HR重复工作量'],
    badge: '效率+70%',
    accent: '#d97706',
  },
  {
    icon: Settings,
    title: '内部管理Agent',
    features: ['审批流程智能化', '会议纪要自动生成', '日报/周报智能汇总', '内部知识库即时问答'],
    badge: '热门',
    accent: '#f472b6',
  },
  {
    icon: Megaphone,
    title: '新媒体运营Agent',
    features: ['内容选题辅助', '文案智能撰写', '多平台自动分发', '运营数据分析'],
    badge: '产出3x',
    accent: '#b45309',
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
          <h2 className="text-4xl md:text-5xl font-bold text-warm-white mb-5 tracking-tight">
            核心产品<span className="text-primary"> AI Agent</span>
          </h2>
          <p className="text-warm-gray text-lg">智能体驱动业务提效，让AI为你工作</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {products.map((product, i) => {
            const Icon = product.icon
            return (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="group relative glass-card rounded-2xl p-8 transition-all duration-500 hover:-translate-y-1"
                onMouseEnter={e => e.currentTarget.style.boxShadow = `0 20px 50px -15px ${product.accent}15`}
                onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
              >
                <div className="absolute top-0 left-8 right-8 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{ background: `linear-gradient(90deg, transparent, ${product.accent}30, transparent)` }} />

                <div className="flex items-center justify-between mb-6">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: `${product.accent}10` }}>
                    <Icon size={20} style={{ color: `${product.accent}aa` }} />
                  </div>
                  <span className="px-2.5 py-1 text-[10px] font-semibold rounded-md" style={{ background: `${product.accent}12`, color: `${product.accent}cc` }}>
                    {product.badge}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-warm-white mb-5">{product.title}</h3>

                <ul className="space-y-3">
                  {product.features.map(f => (
                    <li key={f} className="flex items-center gap-3 text-warm-gray text-sm">
                      <div className="w-1 h-1 rounded-full shrink-0" style={{ background: `${product.accent}60` }} />
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
