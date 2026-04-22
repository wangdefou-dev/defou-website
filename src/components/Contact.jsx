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
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/8 to-primary/5" />
          <div className="absolute inset-0 glass-card" />

          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

          <div className="relative p-10 md:p-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 tracking-tight">
              开启你的
              <span className="shimmer-text">AI转型之旅</span>
            </h2>
            <p className="text-white/35 text-lg mb-12 max-w-xl mx-auto leading-relaxed">
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
                    <div className="w-10 h-10 rounded-xl glass-card flex items-center justify-center">
                      <Icon size={16} className="text-primary-light/60" />
                    </div>
                    <div>
                      <div className="text-[10px] text-white/25 uppercase tracking-wider">{item.label}</div>
                      <div className="text-sm text-white/70">{item.value}</div>
                    </div>
                  </div>
                )
              })}
            </div>

            <p className="text-xs text-white/25 mb-8">联系人：王阳</p>

            <a href="mailto:wangyang@defou.ai" className="group relative inline-flex items-center gap-2 px-10 py-4 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent" />
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-50 blur-2xl transition-all duration-500" />
              <span className="relative text-white font-semibold text-lg">立即联系</span>
              <ArrowRight size={20} className="relative text-white group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
