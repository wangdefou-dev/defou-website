import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { TrendingUp, ArrowRight } from 'lucide-react'
import { useEffect, useState, useRef } from 'react'

function AnimNum({ target, suffix = '' }) {
  const [val, setVal] = useState(0)
  const ref = useRef(null)
  const [go, setGo] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setGo(true) }, { threshold: 0.5 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
  useEffect(() => {
    if (!go) return
    const n = parseInt(target)
    if (isNaN(n)) { setVal(target); return }
    let s = 0; const step = Math.max(1, Math.ceil(n / 40))
    const t = setInterval(() => { s += step; if (s >= n) { setVal(n); clearInterval(t) } else setVal(s) }, 30)
    return () => clearInterval(t)
  }, [go, target])
  return <span ref={ref}>{val}{suffix}</span>
}

const cases = [
  {
    company: '深圳华益集团', tag: '招聘提效',
    pain: '月处理 800+ 份简历，筛选效率低',
    solution: '部署招聘 Agent，自动完成简历初筛与匹配打分',
    results: [{ num: '70', suffix: '%', label: '筛选效率提升' }, { num: '40', suffix: '%', label: '招聘周期缩短' }],
  },
  {
    company: '澳门中西创新学院', tag: '新媒体运营',
    pain: '内容产能不足，多平台运营成本高',
    solution: '引入新媒体 Agent 辅助选题与文案生成',
    results: [{ num: '3', suffix: 'x', label: '内容产出量提升' }, { num: '50', suffix: '%', label: '运营人力成本降低' }],
  },
]

export default function Cases() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="cases" className="relative py-24 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-warm-white mb-5 tracking-tight">
            客户<span className="text-primary">成功案例</span>
          </h2>
          <p className="text-warm-gray text-lg">从招聘提效到全面转型，用数字说话</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {cases.map((c, i) => (
            <motion.div
              key={c.company}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="group glass-card rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_50px_-15px_rgba(217,119,6,0.08)]"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-warm-white">{c.company}</h3>
                  <span className="px-2.5 py-1 text-xs font-medium rounded-md bg-primary/10 text-primary">{c.tag}</span>
                </div>
                <p className="text-sm text-primary mb-2 leading-relaxed">{c.pain}</p>
                <div className="flex items-start gap-2 text-sm text-warm-gray leading-relaxed">
                  <ArrowRight size={12} className="text-primary mt-0.5 shrink-0" />
                  {c.solution}
                </div>
              </div>

              <div className="grid grid-cols-2 border-t border-white/[0.03]">
                {c.results.map(r => (
                  <div key={r.label} className="p-5 text-center border-r last:border-r-0 border-white/[0.03]">
                    <div className="text-2xl font-bold text-warm-white flex items-center justify-center gap-1">
                      <TrendingUp size={14} className="text-primary" />
                      <AnimNum target={r.num} suffix={r.suffix} />
                    </div>
                    <div className="text-xs text-text-muted mt-1">{r.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
