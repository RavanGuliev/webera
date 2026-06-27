import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Shield, Zap, HeadphonesIcon, BookOpen } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Yüksək Keyfiyyət",
    description:
      "Müasir texnologiyalar və qabaqcıl metodlarla təmin etdiyimiz xidmətlərimiz hər zaman yüksək standartlara cavab verir.",
    stat: { value: 99, suffix: "%", label: "Müştəri məmnuniyyəti" },
  },
  {
    icon: Zap,
    title: "Sürətli və Effektiv",
    description:
      "Biznes ehtiyaclarınıza uyğun çevik həllər təklif edirik. Hər addımda vaxtınıza qənaət edərək nəticəyə odaklanırıq.",
    stat: { value: 48, suffix: "h", label: "Təhvil müddəti" },
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Dəstək",
    description:
      "24/7 texniki dəstək ilə yanınızdayıq. Problemləri operativ həll edərək işinizin dayanmadan davam etməsini təmin edirik.",
    stat: { value: 24, suffix: "/7", label: "Dəstək xidməti" },
  },
  {
    icon: BookOpen,
    title: "Təcrübə və Bilik",
    description:
      "İllərin təcrübəsi və fərqli sahələrdəki dərin biliklərimizlə sizə rəqəmsal dünyada ən doğru strategiyanı təqdim edirik.",
    stat: { value: 50, suffix: "+", label: "Tamamlanmış layihə" },
  },
]

function AnimatedCounter({ value, suffix }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.span
      ref={ref}
      className="text-3xl font-bold text-[#addff1] tabular-nums"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
    >
      <motion.span
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5 }}
      >
        {value}
      </motion.span>
      {suffix}
    </motion.span>
  )
}

function FeatureCard({ feature, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
    >
      <motion.div
        className="bg-[#003152] rounded-2xl p-6 border border-[#003152] transition-all duration-300 group h-full shadow-[0_0_15px_rgba(173,223,241,0.15)]"
        whileHover={{ y: -5, borderColor: "rgba(173,223,241,0.3)", boxShadow: "0 0 25px rgba(173,223,241,0.4), 0 0 50px rgba(173,223,241,0.2)" }}
      >
        <motion.div
          className="flex items-center justify-center w-16 h-16 mx-auto mb-6 rounded-2xl"
          style={{background: 'linear-gradient(to bottom right, #003152, #003152)'}}
          whileHover={{ scale: 1.15, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <feature.icon className="text-[#addff1]" size={28} />
        </motion.div>
        <h3 className="text-xl font-semibold text-white text-center mb-4 transition-colors duration-300 group-hover:text-[#addff1]">
          {feature.title}
        </h3>
        <p className="text-gray-400 text-sm text-center leading-relaxed mb-6">
          {feature.description}
        </p>
        <motion.div
          className="text-center pt-4 border-t border-[#003152]"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 + index * 0.15 }}
        >
          <AnimatedCounter value={feature.stat.value} suffix={feature.stat.suffix} />
          <p className="text-xs text-gray-400 mt-1">{feature.stat.label}</p>
        </motion.div>
        <motion.div
          className="mt-6 h-1 bg-[#addff1] rounded-full origin-left"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ delay: 0.5 + index * 0.15, duration: 0.8, ease: "easeOut" }}
        />
      </motion.div>
    </motion.div>
  )
}

export default function About() {
  const headerRef = useRef(null)
  const isHeaderInView = useInView(headerRef, { once: true })

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-16">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isHeaderInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.1 }}
            className="text-[#addff1] font-semibold text-sm tracking-widest uppercase"
          >
            Niyə Biz?
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-4 mb-6 transition-colors">
            Üstünlüklərimiz
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Webera olaraq biz mürəkkəb problemlərə sadə və innovativ həllər tapırıq.
            Sizin biznesinizin rəqəmsal yüksəlişi üçün lazım olan bütün alətləri peşəkar komandamızla təqdim edirik.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
