import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ArrowUpRight } from "lucide-react"

const navLinks = [
  { name: "Xidmətlər", href: "#services" },
  { name: "Haqqımızda", href: "#about" },
  { name: "Layihələr", href: "#projects" },
  { name: "Əlaqə", href: "#contact" },
]

function Logo() {
  return (
    <a href="#home" className="flex items-center gap-2.5 cursor-pointer group">
      <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#addff1] to-[#5fb3d4] flex items-center justify-center shadow-[0_0_20px_rgba(173,223,241,0.35)] transition-transform duration-300 group-hover:rotate-6">
        <span className="text-[#003152] font-display font-bold text-base">W</span>
      </div>
      <span className="font-display text-white font-semibold text-lg tracking-tight">
        Webera<span className="text-[#addff1]"></span>
      </span>
    </a>
  )
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="fixed top-0 left-0 w-full z-50 flex items-start justify-center p-4 sm:p-6 pointer-events-none">
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-6xl pl-5 pr-3 py-2.5 flex items-center justify-between bg-[#00253d]/70 backdrop-blur-2xl pointer-events-auto rounded-2xl border border-[#addff1]/10 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]"
      >
        <Logo />

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-white/60 hover:text-white transition-colors text-sm font-medium px-4 py-2 rounded-full hover:bg-white/5"
            >
              {link.name}
            </a>
          ))}

          <a
            href="#contact"
            className="group ml-3 bg-[#addff1] text-[#003152] text-sm font-bold pl-5 pr-4 py-2.5 rounded-xl hover:bg-white transition-colors duration-300 shadow-[0_0_20px_rgba(173,223,241,0.25)] flex items-center gap-1.5 active:scale-95"
          >
            Layihəyə başla
            <ArrowUpRight
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white p-2 pointer-events-auto"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="absolute top-20 left-4 right-4 max-w-6xl mx-auto bg-[#00253d]/95 backdrop-blur-2xl rounded-2xl p-4 pointer-events-auto shadow-[0_20px_60px_rgba(0,0,0,0.5)] border border-[#addff1]/10 md:hidden"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-white/70 hover:text-white transition-colors text-base font-medium py-3 px-4 rounded-xl hover:bg-white/5"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="bg-[#addff1] text-[#003152] text-sm font-bold px-5 py-3.5 rounded-xl hover:bg-white transition-colors text-center mt-2"
              >
                Layihəyə başla
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
