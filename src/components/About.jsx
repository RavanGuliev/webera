import { useRef, useEffect } from "react"
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion"
import { Shield, Zap, HeadphonesIcon, BookOpen } from "lucide-react"
import SectionHeader from "./SectionHeader"

const features = [
  {
    icon: Shield,
    title: "Yüksək Keyfiyyət",
    description:
      "Müasir texnologiyalar və qabaqcıl metodlarla təmin etdiyimiz xidmətlərimiz hər zaman yüksək standartlara cavab verir.",
  },
  {
    icon: Zap,
    title: "Sürətli və Effektiv",
    description:
      "Biznes ehtiyaclarınıza uyğun çevik həllər təklif edirik. Hər addımda vaxtınıza qənaət edərək nəticəyə odaklanırıq.",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Dəstək",
    description:
      "24/7 texniki dəstək ilə yanınızdayıq. Problemləri operativ həll edərək işinizin dayanmadan davam etməsini təmin edirik.",
  },
  {
    icon: BookOpen,
    title: "Təcrübə və Bilik",
    description:
      "İllərin təcrübəsi və fərqli sahələrdəki dərin biliklərimizlə sizə rəqəmsal dünyada ən doğru strategiyanı təqdim edirik.",
  },
]

const statCards = [
  { value: 50, suffix: "+", label: "Tamamlanmış layihə", highlight: true },
  { value: 99, suffix: "%", label: "Müştəri məmnuniyyəti" },
  { value: 48, suffix: "h", label: "Orta təhvil müddəti" },
  { value: 24, suffix: "/7", label: "Dəstək xidməti" },
]

function CountUp({ value, suffix, className }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-40px" })
  const mv = useMotionValue(0)
  const rounded = useTransform(mv, (v) => Math.round(v))

  useEffect(() => {
    if (isInView) {
      const controls = animate(mv, value, { duration: 1.6, ease: "easeOut" })
      return () => controls.stop()
    }
  }, [isInView, mv, value])

  return (
    <span ref={ref} className={`tabular-nums ${className}`}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  )
}

function FeatureRow({ feature, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className="group flex items-start gap-5 p-5 rounded-2xl border border-transparent hover:border-[#addff1]/15 hover:bg-white/[0.02] transition-all duration-300"
    >
      <div className="w-12 h-12 shrink-0 rounded-xl bg-[#addff1]/10 border border-[#addff1]/15 flex items-center justify-center transition-all duration-300 group-hover:bg-[#addff1] group-hover:shadow-[0_0_20px_rgba(173,223,241,0.4)]">
        <feature.icon
          size={22}
          className="text-[#addff1] transition-colors duration-300 group-hover:text-[#003152]"
        />
      </div>
      <div>
        <h3 className="font-display text-lg font-semibold text-white mb-1.5 transition-colors duration-300 group-hover:text-[#addff1]">
          {feature.title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
      </div>
    </motion.div>
  )
}

export default function About() {
  const statsRef = useRef(null)
  const statsInView = useInView(statsRef, { once: true, margin: "-80px" })

  return (
    <section id="about" className="py-28 relative">
      {/* Statik fon parıltısı */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-[#addff1]/5 blur-[100px] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        <SectionHeader
          label="Niyə Biz?"
          title="Üstünlüklərimiz"
          description="Webera olaraq biz mürəkkəb problemlərə sadə və innovativ həllər tapırıq. Rəqəmsal yüksəlişiniz üçün bütün alətlər bir yerdə."
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-2">
            {features.map((feature, index) => (
              <FeatureRow key={feature.title} feature={feature} index={index} />
            ))}
          </div>

          <motion.div
            ref={statsRef}
            initial={{ opacity: 0, y: 40 }}
            animate={statsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="grid grid-cols-2 gap-5"
          >
            {statCards.map((stat) => (
              <div
                key={stat.label}
                className={`rounded-3xl p-8 border transition-all duration-300 hover:-translate-y-1 ${
                  stat.highlight
                    ? "bg-[#addff1] border-[#addff1] shadow-[0_20px_60px_-20px_rgba(173,223,241,0.5)]"
                    : "bg-gradient-to-b from-[#00395e]/60 to-[#002641]/60 border-white/5 hover:border-[#addff1]/30"
                }`}
              >
                <CountUp
                  value={stat.value}
                  suffix={stat.suffix}
                  className={`font-display text-4xl sm:text-5xl font-bold block ${
                    stat.highlight ? "text-[#003152]" : "text-white"
                  }`}
                />
                <p
                  className={`text-sm mt-3 ${
                    stat.highlight ? "text-[#003152]/70 font-medium" : "text-gray-400"
                  }`}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
