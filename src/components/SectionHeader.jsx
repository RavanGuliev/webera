import { useRef } from "react"
import { motion, useInView } from "framer-motion"

export default function SectionHeader({ label, title, description }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mb-14 md:flex md:items-end md:justify-between gap-8"
    >
      <div>
        <span className="inline-flex items-center gap-3 text-[#addff1] font-semibold text-sm tracking-[0.2em] uppercase">
          <span className="w-8 h-px bg-gradient-to-r from-[#addff1] to-transparent" />
          {label}
        </span>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-4">
          {title}
        </h2>
      </div>
      {description && (
        <p className="text-gray-400 max-w-md mt-5 md:mt-0 md:text-right leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  )
}
