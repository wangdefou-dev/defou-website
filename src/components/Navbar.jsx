import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: '痛点', href: '#pain-points' },
  { label: '服务', href: '#services' },
  { label: '产品', href: '#products' },
  { label: '案例', href: '#cases' },
  { label: '团队', href: '#team' },
  { label: '费用', href: '#pricing' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-dark/60 backdrop-blur-2xl border-b border-white/5' : ''}`}>
      <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between">
        <a href="#" className="relative text-xl font-bold">
          <span className="bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] bg-clip-text text-transparent animate-[gradient-flow_4s_ease_infinite]">
            得否科技
          </span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {navItems.map(item => (
            <a key={item.href} href={item.href} className="px-4 py-2 text-sm text-white/50 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-300">
              {item.label}
            </a>
          ))}
          <a href="#contact" className="ml-4 group relative px-5 py-2.5 text-sm rounded-xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-80 group-hover:opacity-100 transition-opacity" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-40 blur-xl transition-opacity" />
            <span className="relative text-white font-medium">联系我们</span>
          </a>
        </div>

        <button className="md:hidden text-white/60 hover:text-white transition-colors" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-dark/90 backdrop-blur-2xl border-b border-white/5">
          <div className="px-6 py-6 flex flex-col gap-2">
            {navItems.map(item => (
              <a key={item.href} href={item.href} onClick={() => setMobileOpen(false)} className="px-4 py-3 text-white/60 hover:text-white hover:bg-white/5 rounded-xl transition-all">
                {item.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setMobileOpen(false)} className="mt-2 px-4 py-3 text-center rounded-xl bg-gradient-to-r from-primary to-accent text-white font-medium">
              联系我们
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
