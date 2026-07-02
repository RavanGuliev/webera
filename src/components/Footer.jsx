import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Heart, ArrowUpRight, Mail } from "lucide-react"

const footerLinks = [
  { name: "Ana səhifə", href: "#home" },
  { name: "Xidmətlər", href: "#services" },
  { name: "Haqqımızda", href: "#about" },
  { name: "Layihələr", href: "#projects" },
  { name: "Əlaqə", href: "#contact" },
]

export default function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <footer ref={ref} className="relative z-10 pt-12 pb-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        {/* CTA lövhəsi */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative rounded-3xl p-px bg-gradient-to-b from-[#addff1]/30 via-white/5 to-transparent mb-16"
        >
          <div className="relative rounded-3xl bg-gradient-to-br from-[#00395e] to-[#002641] px-8 py-12 sm:px-14 sm:py-16 overflow-hidden">
            <div className="absolute -top-24 -right-24 w-[300px] h-[300px] rounded-full bg-[#addff1]/10 blur-[80px] pointer-events-none" />
            <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
              <div>
                <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
                  Layihəniz var?{" "}
                  <span className="bg-gradient-to-r from-[#addff1] to-white bg-clip-text text-transparent">
                    Gəlin danışaq.
                  </span>
                </h2>
                <p className="text-gray-400 mt-4 max-w-lg">
                  İdeyanızı bizimlə bölüşün — 24 saat ərzində sizə qayıdış edək.
                </p>
              </div>
              <a
                href="#contact"
                className="group shrink-0 bg-[#addff1] text-[#003152] font-bold px-8 py-4 rounded-full flex items-center gap-2 hover:bg-white transition-all duration-300 shadow-[0_0_40px_rgba(173,223,241,0.3)] hover:-translate-y-0.5 active:scale-95"
              >
                Söhbətə başla
                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Əsas footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-white/5"
        >
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#addff1] to-[#5fb3d4] flex items-center justify-center">
              <span className="text-[#003152] font-display font-bold text-base">W</span>
            </div>
            <span className="font-display text-white font-semibold text-lg tracking-tight">
              Webera<span className="text-[#addff1]">.</span>
            </span>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3">
            {footerLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-400 hover:text-[#addff1] transition-colors text-sm"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <a
            href="mailto:info@webera.az"
            className="flex items-center gap-2 text-gray-400 hover:text-[#addff1] transition-colors text-sm"
          >
            <Mail size={15} />
            info@webera.az
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-gray-500 text-sm">© 2026 Webera. Bütün hüquqlar qorunur.</p>
          <p className="text-gray-500 text-sm flex items-center gap-1.5">
            Bakıda
            <span className="dot-pulse inline-flex" style={{ animationDuration: "1.5s" }}>
              <Heart size={13} className="text-red-500 fill-red-500" />
            </span>
            ilə hazırlanıb
          </p>
        </motion.div>
      </div>

      {/* Nəhəng watermark */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none flex justify-center mt-6 -mb-16 sm:-mb-24"
      >
        <span className="font-display font-bold text-outline leading-none text-[22vw] sm:text-[18vw] lg:text-[14rem] tracking-tight">
          WEBERA
        </span>
      </div>
    </footer>
  )
}
