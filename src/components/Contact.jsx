import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Phone, Mail, Globe, ArrowRight } from 'lucide-react'

export default function Contact() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="contact" className="relative py-20 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-[#1c1917]/50 backdrop-blur-xl" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

          <div className="relative p-10 md:p-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-warm-white mb-5 tracking-tight">
              开启你的<span className="shimmer-text">AI转型之旅</span>
            </h2>
            <p className="text-warm-gray text-lg mb-12 max-w-xl mx-auto leading-relaxed">
              我们不只提供方案，我们和你一起把AI跑起来。
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              {[
                { icon: Phone, label: '电话', value: '131 6866 2285' },
                { icon: Mail, label: '邮箱', value: 'wangyang@defou.ai' },
                { icon: Globe, label: '官网', value: 'defou.ai' },
              ].map(item => {
                const Icon = item.icon
                return (
                  <div key={item.label} className="flex items-center gap-3 text-left">
                    <div className="w-10 h-10 rounded-xl bg-primary/8 flex items-center justify-center">
                      <Icon size={16} className="text-primary/60" />
                    </div>
                    <div>
                      <div className="text-[10px] text-text-muted uppercase tracking-wider">{item.label}</div>
                      <div className="text-sm text-warm-gray">{item.value}</div>
                    </div>
                  </div>
                )
              })}
            </div>

            <p className="text-xs text-text-muted/50 mb-8">联系人：得否</p>

            <a href="mailto:wangyang@defou.ai" className="group inline-flex items-center gap-2 px-10 py-4 rounded-2xl bg-primary hover:bg-primary-light text-[#09090b] font-semibold text-lg transition-all duration-300 hover:shadow-[0_0_40px_rgba(217,119,6,0.2)]">
              立即联系
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
