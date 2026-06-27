import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const navLinks = [
  { name: "Xidmətlər", href: "#services" },
  { name: "Haqqımızda", href: "#about" },
  { name: "Layihələr", href: "#projects" },
  { name: "Əlaqə", href: "#contact" },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="fixed top-0 left-0 w-full z-50 flex items-start justify-center p-6 pointer-events-none">
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-6xl px-6 py-3 flex items-center justify-between bg-[#003152]/80 backdrop-blur-2xl pointer-events-auto rounded-2xl transition-colors shadow-[0_0_20px_rgba(173,223,241,0.2)]"
      >
        <div className="flex items-center gap-2 text-white font-medium text-lg cursor-pointer">
          <i className="fa-solid fa-w text-white text-lg"></i>
          <span className="tracking-tight font-semibold">Webera</span>
        </div>

        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white/70 hover:text-white transition-colors text-sm font-medium"
            >
              {link.name}
            </a>
          ))}

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#addff1] text-[#003152] text-sm font-bold px-5 py-2.5 rounded-xl hover:bg-[#8ec9df] transition-all duration-200 shadow-sm active:scale-95"
          >
            Bizimlə əlaqə
          </motion.a>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-2xl pointer-events-auto"
          aria-label="Toggle menu"
        >
          <i className={`fa-solid ${menuOpen ? "fa-xmark" : "fa-bars"}`}></i>
        </button>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="absolute top-24 left-4 right-4 max-w-6xl mx-auto bg-[#003152]/95 backdrop-blur-2xl rounded-2xl p-6 pointer-events-auto shadow-[0_0_30px_rgba(173,223,241,0.2)] border border-[#addff1]/10 md:hidden"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-white/70 hover:text-white transition-colors text-base font-medium py-2 px-3 rounded-xl hover:bg-white/5"
                >
                  {link.name}
                </a>
              ))}
              <motion.a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#addff1] text-[#003152] text-sm font-bold px-5 py-3 rounded-xl hover:bg-[#8ec9df] transition-all text-center mt-2"
              >
                Bizimlə əlaqə
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
