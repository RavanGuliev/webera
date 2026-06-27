import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Heart } from "lucide-react"

const footerLinks = [
  { name: "Ana səhifə", href: "#home" },
  { name: "Xidmətlər", href: "#services" },
  { name: "Haqqımızda", href: "#about" },
  { name: "Layihələr", href: "#projects" },
  { name: "Əlaqə", href: "#contact" },
]

export default function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.footer
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.6 }}
      className="bg-[#003152] border-t border-[#003152] py-12 relative z-10 transition-colors"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-16">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-col lg:flex-row items-center justify-between gap-8"
        >
          <motion.div
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              className="w-8 h-8 bg-[#addff1] rounded-lg flex items-center justify-center"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-white-inverse font-bold text-sm">WE</span>
            </motion.div>
            <span className="text-white font-semibold text-lg">Webera</span>
          </motion.div>

          <div className="flex flex-wrap items-center justify-center gap-6">
            {footerLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.07 }}
                className="text-gray-400 hover:text-[#addff1] transition-colors text-sm relative group"
                whileHover={{ y: -2 }}
              >
                {link.name}
                <motion.span
                  className="absolute -bottom-1 left-0 h-[2px] bg-[#addff1]"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-10 pt-6 border-t border-[#003152] flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-gray-400 text-sm">
            © 2026 Webera. Bütün hüquqlar qorunur.
          </p>
          <motion.p
            className="text-gray-400 text-sm flex items-center gap-1"
            whileHover={{ color: "#addff1" }}
          >
            
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Heart size={14} className="text-red-500" />
            </motion.span>
            Webera
          </motion.p>
        </motion.div>
      </div>
    </motion.footer>
  )
}
