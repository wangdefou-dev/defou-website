import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FileSearch, Route, TrendingUp, Users } from 'lucide-react'

const products = [
  {
    icon: FileSearch,
    name: '得贤',
    en: 'DeFou Recruit',
    subtitle: 'AI 招聘 Agent',
    tagline: '让招聘从"人海战术"变成"精准狙击"',
    features: [
      '智能简历解析与多维度匹配打分',
      '候选人自动初筛与意向沟通',
      '面试时间智能协调与日历同步',
      '招聘漏斗数据看板',
    ],
    badge: '周期-50%',
    accent: '#d97706',
  },
  {
    icon: Route,
    name: '得序',
    en: 'DeFou Flow',
    subtitle: '内部管理 Agent',
    tagline: '把组织里的"杂事"交给 AI，让团队只做"正事"',
    features: [
      '审批流程智能流转与催办提醒',
      '会议录音一键转纪要，自动提取待办',
      '日报/周报自动汇总与异常识别',
      '企业知识库智能问答',
    ],
    badge: '效率倍增',
    accent: '#d97706',
  },
  {
    icon: TrendingUp,
    name: '得声',
    en: 'DeFou Voice',
    subtitle: '新媒体 AI 助手',
    tagline: '一个人的新媒体团队，一整个团队的产出质量',
    features: [
      '热点追踪与智能选题推荐',
      '多风格文案生成与改写优化',
      '图文/短视频多平台一键分发',
      '内容数据分析与爆款复盘',
    ],
    badge: '产出3x',
    accent: '#b45309',
  },
  {
    icon: Users,
    name: '得客',
    en: 'DeFou Scout',
    subtitle: '智能获客平台',
    tagline: '每一条线索都不会被遗忘，每一个商机都不会被错过',
    features: [
      '目标客户信息聚合与画像构建',
      '客户动态实时监控与智能提醒',
      '自动化邮件序列与个性化跟进',
      '线索评分与商机漏斗管理',
    ],
    badge: '线索10x',
    accent: '#b45309',
  },
]

export default function Products() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="products" className="relative py-24 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-warm-white mb-5 tracking-tight">
            四款<span className="text-primary"> AI Agent</span> 产品
          </h2>
          <p className="text-warm-gray text-lg">覆盖招聘、管理、新媒体、获客全链路</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {products.map((product, i) => {
            const Icon = product.icon
            return (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group relative glass-card rounded-2xl p-8 transition-all duration-500 hover:-translate-y-1"
                onMouseEnter={e => e.currentTarget.style.boxShadow = `0 20px 50px -15px ${product.accent}15`}
                onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
              >
                <div className="absolute top-0 left-8 right-8 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{ background: `linear-gradient(90deg, transparent, ${product.accent}30, transparent)` }} />

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: `${product.accent}10` }}>
                      <Icon size={20} style={{ color: `${product.accent}aa` }} />
                    </div>
                    <div>
                      <div className="flex items-baseline gap-2">
                        <h3 className="text-xl font-bold text-warm-white">{product.name}</h3>
                        <span className="text-xs text-text-muted/50 font-mono italic">{product.en}</span>
                      </div>
                      <p className="text-xs text-primary/60 mt-0.5">{product.subtitle}</p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 text-[10px] font-semibold rounded-md" style={{ background: `${product.accent}12`, color: `${product.accent}cc` }}>
                    {product.badge}
                  </span>
                </div>

                <p className="text-sm text-warm-gray/80 mb-5 leading-relaxed">{product.tagline}</p>

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
