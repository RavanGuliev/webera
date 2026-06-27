import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import {
  Globe,
  Smartphone,
  Server,
  Palette,
  Package,
  Share2,
  Calculator,
} from "lucide-react"

const services = [
  {
    icon: Globe,
    title: "Veb Saytların Hazırlanması",
    description:
      "Biznesiniz üçün sürətli, SEO-dostu və responsiv veb saytlar qururuq: korporativ sayt, landing page, e-commerce və xüsusi həllər.",
    color: "blue",
  },
  {
    icon: Smartphone,
    title: "Mobil Tətbiq İnkişafı",
    description:
      "iOS və Android üçün performanslı, miqyaslana bilən mobil tətbiqlər: native və ya cross-platform yanaşma ilə.",
    color: "violet",
  },
  {
    icon: Server,
    title: "Texniki Dəstək və Hosting",
    description:
      "24/7 monitorinq, server idarəetməsi, təhlükəsizlik, backup və SLA əsaslı operativ yardım — sistemləriniz daima işlək qalsın.",
    color: "pink",
  },

  {
    icon: Package,
    title: "Hazır Paketlər",
    description:
      "Sürətli start üçün hazır paketlər: korporativ sayt şablonları, rezervasiya sistemləri, email marketinq həlləri, CRM inteqrasiyası.",
    color: "indigo",
  },


]

const colorMap = {
  blue: {
    text: "text-blue-400",
    border: "border-blue-500/30",
    shadow: "hover:shadow-[0_0_20px_rgba(59,130,246,0.15)]",
    iconBg: "bg-blue-500/10",
    hoverBorder: "hover:border-blue-500/50",
  },
  violet: {
    text: "text-violet-400",
    border: "border-violet-500/30",
    shadow: "hover:shadow-[0_0_20px_rgba(139,92,246,0.15)]",
    iconBg: "bg-violet-500/10",
    hoverBorder: "hover:border-violet-500/50",
  },
  pink: {
    text: "text-pink-400",
    border: "border-pink-500/30",
    shadow: "hover:shadow-[0_0_20px_rgba(236,72,153,0.15)]",
    iconBg: "bg-pink-500/10",
    hoverBorder: "hover:border-pink-500/50",
  },
  cyan: {
    text: "text-cyan-400",
    border: "border-cyan-500/30",
    shadow: "hover:shadow-[0_0_20px_rgba(6,182,212,0.15)]",
    iconBg: "bg-cyan-500/10",
    hoverBorder: "hover:border-cyan-500/50",
  },
  indigo: {
    text: "text-indigo-400",
    border: "border-indigo-500/30",
    shadow: "hover:shadow-[0_0_20px_rgba(99,102,241,0.15)]",
    iconBg: "bg-indigo-500/10",
    hoverBorder: "hover:border-indigo-500/50",
  },
  red: {
    text: "text-red-400",
    border: "border-red-500/30",
    shadow: "hover:shadow-[0_0_20px_rgba(239,68,68,0.15)]",
    iconBg: "bg-red-500/10",
    hoverBorder: "hover:border-red-500/50",
  },
  orange: {
    text: "text-orange-400",
    border: "border-orange-500/30",
    shadow: "hover:shadow-[0_0_20px_rgba(249,115,22,0.15)]",
    iconBg: "bg-orange-500/10",
    hoverBorder: "hover:border-orange-500/50",
  },
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
}

function ServiceCard({ service, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const colors = colorMap[service.color]

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={`group bg-[#003152] rounded-2xl p-6 border ${colors.border} ${colors.shadow} ${colors.hoverBorder} transition-all duration-300`}
      whileHover={{ y: -8, scale: 1.02 }}
    >
      <motion.div
        className={`w-14 h-14 rounded-xl ${colors.iconBg} flex items-center justify-center mb-5`}
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
        >
          <service.icon className={colors.text} size={28} />
        </motion.div>
      </motion.div>
      <h3 className="text-xl font-semibold text-white mb-3 transition-colors">{service.title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
    </motion.div>
  )
}

export default function Services() {
  const headerRef = useRef(null)
  const isHeaderInView = useInView(headerRef, { once: true })
  const gridRef = useRef(null)
  const isGridInView = useInView(gridRef, { once: true, margin: "-100px" })

  return (
    <section id="services" className="py-24 relative">
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
            Xidmətlərimiz
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-4 mb-6 transition-colors"
          >
            Biz nə təklif edirik
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isHeaderInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Müasir texnologiyalar və qabaqcıl metodlarla təmin etdiyimiz xidmətlərimiz
            hər zaman yüksək keyfiyyətə sahibdir.
          </motion.p>
        </motion.div>

        <motion.div
          ref={gridRef}
          variants={containerVariants}
          initial="hidden"
          animate={isGridInView ? "visible" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
