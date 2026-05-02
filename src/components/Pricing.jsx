import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import { Compass, GraduationCap, Rocket, Layers, ArrowRight } from 'lucide-react'

const tabs = ['咨询 & 培训', '产品报价', '陪跑方案', '套餐推荐']

const consultTraining = {
  consult: [
    { name: '快速诊断', price: '5,000' },
    { name: '完整规划', price: '20,000' },
  ],
  training: [
    { name: '认知破冰', price: '8,000' },
    { name: '工具实操', price: '20,000' },
    { name: '进阶专题', price: '40,000' },
    { name: '定制内训', price: '10,000起/天' },
  ],
}

const productPricing = [
  { name: '得贤', en: 'DeFou Recruit', pain: '招聘太慢', before: '1 个 HR 筛 100 份简历要 2 天', after: '10 分钟搞定', price: '20,000' },
  { name: '得序', en: 'DeFou Flow', pain: '办公太碎', before: '每天 1-2 小时处理审批/纪要', after: '自动完成', price: '20,000' },
  { name: '得声', en: 'DeFou Voice', pain: '内容太难', before: '1 个编辑产 1 篇要半天', after: '1 小时出 5 篇', price: '20,000' },
  { name: '得客', en: 'DeFou Scout', pain: '线索太散', before: '1 个销售手动跟 50 个客户', after: '自动追踪 500 个', price: '30,000' },
]

const coaching = [
  { plan: 'Plan A', name: '轻量陪跑', scope: '1 个月 / 1 个场景', price: '30,000' },
  { plan: 'Plan B', name: '深度陪跑', scope: '6 个月 / 3-5 个场景', price: '150,000', featured: true },
]

const packages = [
  { icon: Compass, name: '启航包', desc: 'AI 跟我有没有关系？', price: '14,980' },
  { icon: Rocket, name: '提速包', desc: '让团队真正用起来', price: '79,800' },
  { icon: Layers, name: '全栈包', desc: '从规划到落地全包了', price: '298,000', featured: true },
]

export default function Pricing() {
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true })
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section id="pricing" className="relative py-24 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-warm-white mb-5 tracking-tight">
            价格<span className="text-primary">体系</span>
          </h2>
          <p className="text-warm-gray text-lg">模块化按需组合，从试水到全面落地，丰俭由人</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center gap-2 mb-12 flex-wrap"
        >
          {tabs.map((tab, i) => (
            <button
              key={tab}
              onClick={() => setActiveTab(i)}
              className={`px-5 py-2.5 rounded-xl text-base font-medium transition-all duration-300 ${activeTab === i ? 'bg-primary text-[#09090b]' : 'text-warm-gray hover:text-warm-white hover:bg-white/[0.04] border border-white/[0.05]'}`}
            >
              {tab}
            </button>
          ))}
        </motion.div>

        {activeTab === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 gap-8"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary/8 flex items-center justify-center">
                  <Compass size={18} className="text-primary/80" />
                </div>
                <h3 className="text-lg font-semibold text-warm-white">帮你看清方向</h3>
              </div>
              {consultTraining.consult.map(item => (
                <div key={item.name} className="flex items-center justify-between py-4 border-t border-white/[0.06]">
                  <span className="text-warm-white font-medium text-base">{item.name}</span>
                  <span className="font-mono text-primary/80 font-semibold text-base">¥{item.price}</span>
                </div>
              ))}
            </div>
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary/8 flex items-center justify-center">
                  <GraduationCap size={18} className="text-primary/80" />
                </div>
                <h3 className="text-lg font-semibold text-warm-white">帮你团队会用</h3>
              </div>
              {consultTraining.training.map(item => (
                <div key={item.name} className="flex items-center justify-between py-4 border-t border-white/[0.06]">
                  <span className="text-warm-white font-medium text-base">{item.name}</span>
                  <span className="font-mono text-primary/80 font-semibold text-base">¥{item.price}</span>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {activeTab === 1 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-0"
          >
            {productPricing.map(p => (
              <div key={p.name} className="grid grid-cols-[80px_1fr_100px_100px] md:grid-cols-[100px_2fr_1fr_120px] items-center gap-4 py-5 border-t border-white/[0.06] hover:bg-white/[0.02] transition-colors px-4 -mx-4 rounded-lg">
                <div>
                  <span className="text-warm-white font-semibold">{p.name}</span>
                </div>
                <div className="text-base text-warm-gray">
                  {p.before} → <span className="text-primary/80 font-medium">{p.after}</span>
                </div>
                <div className="text-sm text-text-muted hidden md:block">{p.pain}</div>
                <div className="text-right font-mono text-primary/80 font-semibold text-base">¥{p.price}</div>
              </div>
            ))}
            <p className="text-sm text-text-muted mt-6 px-4">多产品打包有折扣 / 定制开发 ¥20,000 起 / 算力充值按量计费</p>
          </motion.div>
        )}

        {activeTab === 2 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto"
          >
            {coaching.map(c => (
              <div
                key={c.plan}
                className={`glass-card rounded-2xl p-8 transition-all duration-500 hover:-translate-y-1 ${c.featured ? 'border-primary/15 hover:shadow-[0_20px_50px_-15px_rgba(217,119,6,0.1)]' : ''}`}
              >
                <span className="font-mono text-sm text-primary/80 tracking-widest uppercase">{c.plan}</span>
                <h3 className="text-xl font-bold text-warm-white mt-3 mb-2">{c.name}</h3>
                <p className="text-base text-warm-gray mb-6">{c.scope}</p>
                <div className="text-4xl font-bold text-warm-white">
                  <span className="text-sm text-text-muted font-normal">¥</span>{c.price}
                </div>
              </div>
            ))}
          </motion.div>
        )}

        {activeTab === 3 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-3 gap-6"
          >
            {packages.map((pkg, i) => {
              const Icon = pkg.icon
              return (
                <div
                  key={pkg.name}
                  className={`group glass-card rounded-2xl p-8 text-center transition-all duration-500 hover:-translate-y-1 ${pkg.featured ? 'border-primary/15 hover:shadow-[0_20px_50px_-15px_rgba(217,119,6,0.1)]' : ''}`}
                >
                  {pkg.featured && (
                    <div className="mb-4">
                      <span className="px-4 py-1.5 text-xs font-semibold rounded-full bg-primary text-[#09090b]">推荐</span>
                    </div>
                  )}
                  <div className="w-12 h-12 mx-auto mb-5 rounded-xl bg-primary/8 flex items-center justify-center group-hover:bg-primary/12 transition-colors">
                    <Icon size={22} className="text-primary/90" />
                  </div>
                  <h3 className="text-xl font-bold text-warm-white mb-2">{pkg.name}</h3>
                  <p className="text-base text-warm-gray mb-6">{pkg.desc}</p>
                  <div className="text-3xl font-bold text-warm-white mb-6">
                    <span className="text-sm text-text-muted font-normal">¥</span>{pkg.price}
                  </div>
                  <a href="#contact" className="flex items-center justify-center gap-1.5 w-full py-3 rounded-xl text-base transition-all duration-300 border border-white/[0.05] text-warm-gray hover:text-warm-white hover:border-primary/25 hover:bg-primary/5">
                    了解详情 <ArrowRight size={13} />
                  </a>
                </div>
              )
            })}
          </motion.div>
        )}

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-sm text-text-muted mt-10"
        >
          具体费用以实际需求沟通后的正式报价为准
        </motion.p>
      </div>
    </section>
  )
}
