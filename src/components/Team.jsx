import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Crown, Code, Server, BarChart3 } from 'lucide-react'

const coreTeam = [
  {
    icon: Crown,
    name: '得否',
    role: '创始人',
    desc: '10 年+ 资深运营专家，前搜狐新闻，多家企业 AI 转型顾问',
  },
  {
    icon: Code,
    name: 'Hoody',
    role: '技术合伙人',
    desc: '前字节跳动资深研发，剪映中国用户增长负责人，制造业 AI 增长顾问',
  },
  {
    icon: Server,
    name: '金尘马',
    role: '技术合伙人',
    desc: '北京交大计算机硕士，前美团高级研发工程师，前阿里巴巴高级研发工程师',
  },
  {
    icon: BarChart3,
    name: '阿川',
    role: '策略合伙人',
    desc: '前美团商业策略分析专家',
  },
]

const lecturers = [
  { name: '王强', title: '哈尔滨工业大学工学博士，深圳大学大数据研究院院长助理', tag: 'Big Data' },
  { name: '陈奕昆', title: '北航物理学院博士，广东智云城建科技有限公司 CEO', tag: 'AI + City' },
  { name: 'Roland Wayne', title: '昆士兰大学医学院博士生，香港瀚宇医略首席执行官', tag: 'AI + Health' },
  { name: '孔明', title: '心理学博士，世界五百强营销负责人，ICF 国际大师级教练', tag: 'Leadership' },
  { name: '王英杰', title: '星河产业集团产城研究院执行院长', tag: 'Industry' },
]

export default function Team() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="team" className="relative py-24 px-6" ref={ref}>
      <div className="absolute inset-0 dot-grid opacity-30" />

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-warm-white mb-5 tracking-tight">
            团队<span className="text-primary">成员</span>
          </h2>
          <p className="text-warm-gray text-lg">来自字节、美团、阿里的实战团队</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-6"
        >
          <h3 className="text-sm font-mono text-primary/50 tracking-widest uppercase mb-5">Core Team · 核心团队</h3>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {coreTeam.map((m, i) => {
            const Icon = m.icon
            return (
              <motion.div
                key={m.name}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className="glass-card glass-card-hover rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/8 flex items-center justify-center mb-4">
                  <Icon size={20} className="text-primary/60" />
                </div>
                <h4 className="text-lg font-bold text-warm-white mb-1">{m.name}</h4>
                <span className="inline-block px-2 py-0.5 text-xs rounded bg-primary/10 text-primary/70 mb-3">{m.role}</span>
                <p className="text-sm text-text-muted/60 leading-relaxed">{m.desc}</p>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-6"
        >
          <h3 className="text-sm font-mono text-primary/50 tracking-widest uppercase mb-5">Expert Faculty · 讲师团队</h3>
          <p className="text-base text-warm-gray mb-6">横跨学术界与产业界，覆盖 AI 技术、大数据、商业策略、组织管理、医疗健康等多领域</p>
        </motion.div>

        <div className="space-y-0">
          {lecturers.map((l, i) => (
            <motion.div
              key={l.name}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.35 + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-[120px_1fr_auto] md:grid-cols-[140px_1fr_100px] items-center gap-4 py-4 border-t border-white/[0.06] hover:bg-white/[0.02] transition-colors px-4 -mx-4 rounded-lg"
            >
              <h4 className="text-warm-white/90 font-semibold text-base">{l.name}</h4>
              <p className="text-sm text-text-muted/60 leading-relaxed">{l.title}</p>
              <span className="font-mono text-xs tracking-widest uppercase text-text-muted/40 justify-self-end">{l.tag}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
