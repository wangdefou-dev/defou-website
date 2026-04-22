import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const founder = {
  name: '王阳',
  role: '创始人',
  desc: '10年+资深运营专家，曾就职于搜狐新闻、阅客信息，多家企业的AI转型和AI应用顾问。深耕互联网运营与企业数字化多年，擅长将前沿AI能力转化为可落地的业务价值。',
}

const team = [
  { name: '王强', title: '哈工大博士 · 深大数据研究院', tag: '大数据' },
  { name: '王英杰', title: '星河产业集团产城研究院执行院长', tag: '产业' },
  { name: '陈奕昆', title: '北航博士 · 智云城建CEO', tag: '技术' },
  { name: 'Roland', title: '昆士兰大学医学博士 · 瀚宇医略CEO', tag: '医疗' },
  { name: '孔明', title: '心理学博士 · 五百强营销 · ICF教练', tag: '管理' },
  { name: '金尘马', title: '前阿里巴巴高级研发工程师', tag: '技术' },
  { name: '阿川', title: '前美团商业策略分析专家', tag: '策略' },
  { name: 'hoody', title: '前字节跳动资深研发 · 剪映增长', tag: '增长' },
]

export default function Team() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="team" className="relative py-20 px-6" ref={ref}>
      <div className="absolute inset-0 dot-grid opacity-30" />

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-warm-white mb-5 tracking-tight">
            专家团队<span className="text-primary"> 学术界 × 产业界</span>
          </h2>
          <p className="text-warm-gray text-lg">横跨AI技术、大数据、商业策略、组织管理等多个领域</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-2xl bg-[#1c1917]/50 border border-primary/10 p-8 mb-8 backdrop-blur-sm"
        >
          <div className="flex items-start gap-6">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center shrink-0 text-[#09090b] text-xl font-bold">
              {founder.name.charAt(0)}
            </div>
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-xl font-bold text-warm-white">{founder.name}</h3>
                <span className="px-3 py-1 text-xs rounded-md bg-primary/10 text-primary/80 border border-primary/15">
                  {founder.role}
                </span>
              </div>
              <p className="text-warm-gray text-sm leading-relaxed">{founder.desc}</p>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {team.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.04, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card glass-card-hover rounded-xl p-5 transition-all duration-500"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-lg bg-primary/8 flex items-center justify-center text-primary/60 font-semibold text-sm">
                  {m.name.charAt(0)}
                </div>
                <div className="min-w-0">
                  <h4 className="text-warm-white/90 text-sm font-medium truncate">{m.name}</h4>
                  <span className="text-[10px] text-text-muted">{m.tag}</span>
                </div>
              </div>
              <p className="text-[11px] text-text-muted/60 leading-relaxed">{m.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
