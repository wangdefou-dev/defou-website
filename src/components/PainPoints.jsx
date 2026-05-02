import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const painPoints = [
  {
    num: '01',
    title: '想用不会用',
    desc: '"AI 很火，但跟我的业务有什么关系？"缺乏 AI 适配分析，无从下手。',
    tag: 'Awareness',
  },
  {
    num: '02',
    title: '学了用不起来',
    desc: '培训停留在工具演示层面，回到工位还是老样子，无法融入现有流程。',
    tag: 'Adoption',
  },
  {
    num: '03',
    title: '试了跑不通',
    desc: '缺乏持续调优与流程改造，AI 项目在试点阶段就无疾而终。',
    tag: 'Execution',
  },
  {
    num: '04',
    title: '缺人搞不定',
    desc: '没有专职 AI 工程师，也养不起，迫切需要"外脑"补齐短板。',
    tag: 'Talent',
  },
  {
    num: '05',
    title: 'API 门槛高',
    desc: '海外账号、API Key、Token 支付——基础设施问题拦在门外。',
    tag: 'Infrastructure',
  },
]

export default function PainPoints() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="pain-points" className="relative py-24 px-6" ref={ref}>
      <div className="absolute inset-0 dot-grid opacity-40" />

      <div className="relative max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-warm-white mb-5 tracking-tight">
            企业AI落地的<span className="text-primary">五重障碍</span>
          </h2>
          <p className="text-warm-gray text-lg max-w-xl mx-auto">
            先动手的企业正在用 AI 重建竞争壁垒，而 95% 的企业投了钱却看不到回报
          </p>
        </motion.div>

        <div className="space-y-0">
          {painPoints.map((item, i) => (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group grid grid-cols-[auto_1fr_auto] md:grid-cols-[60px_160px_1fr_120px] items-center gap-4 md:gap-6 py-5 border-t border-white/[0.06] first:border-t-0 hover:bg-white/[0.02] transition-colors px-4 -mx-4 rounded-lg"
            >
              <span className="font-mono text-sm text-primary/80 hidden md:block">{item.num}</span>
              <h3 className="text-lg font-semibold text-warm-white">{item.title}</h3>
              <p className="text-base text-warm-gray leading-relaxed col-span-full md:col-span-1">{item.desc}</p>
              <span className="font-mono text-xs tracking-widest uppercase text-text-muted/80 justify-self-end hidden md:block">{item.tag}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
