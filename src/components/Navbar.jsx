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

const navLinkClass = "px-4 py-2 text-sm font-bold text-warm-gray hover:text-warm-white rounded-lg hover:bg-white/[0.03] transition-all duration-300"
const navMobileLinkClass = "px-4 py-3 font-bold text-warm-gray hover:text-warm-white hover:bg-white/[0.03] rounded-xl transition-all"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-[#09090b]/70 backdrop-blur-2xl border-b border-white/[0.04]' : ''}`}>
      <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5">
          <img src="/logo.png" alt="得否科技" className="h-8 w-8 rounded-lg" />
          <span className="text-xl font-bold text-warm-white tracking-tight">得否科技</span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {navItems.map(item => (
            <a key={item.href} href={item.href} className={navLinkClass}>
              {item.label}
            </a>
          ))}
          <a href="#contact" className="ml-4 group relative px-5 py-2.5 text-sm rounded-xl overflow-hidden bg-primary/90 hover:bg-primary transition-colors">
            <span className="relative text-[#09090b] font-semibold">联系我们</span>
          </a>
        </div>

        <button className="md:hidden text-warm-gray hover:text-warm-white transition-colors" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-[#09090b]/95 backdrop-blur-2xl border-b border-white/[0.04]">
          <div className="px-6 py-6 flex flex-col gap-2">
            {navItems.map(item => (
              <a key={item.href} href={item.href} onClick={() => setMobileOpen(false)} className={navMobileLinkClass}>
                {item.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setMobileOpen(false)} className="mt-2 px-4 py-3 text-center rounded-xl bg-primary text-[#09090b] font-semibold">
              联系我们
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
