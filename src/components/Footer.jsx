export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-xs text-white/20">
          &copy; {new Date().getFullYear()} 得否科技 All rights reserved.
        </div>
        <div className="text-xs bg-gradient-to-r from-primary/60 to-accent/60 bg-clip-text text-transparent font-medium">
          让每一家企业都能用好AI
        </div>
      </div>
    </footer>
  )
}
