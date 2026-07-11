import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Globe, Smartphone, Server, Package } from "lucide-react"
import SectionHeader from "./SectionHeader"

const services = [
  {
    icon: Globe,
    title: "Veb Saytların Hazırlanması",
    description:
      "Biznesiniz üçün sürətli, SEO-dostu və responsiv veb saytlar qururuq: korporativ sayt, landing page, e-commerce və xüsusi həllər.",
  },
  {
    icon: Smartphone,
    title: "Mobil Tətbiq İnkişafı",
    description:
      "iOS və Android üçün performanslı, miqyaslana bilən mobil tətbiqlər: native və ya cross-platform yanaşma ilə.",
  },
  {
    icon: Server,
    title: "Texniki Dəstək və Hosting",
    description:
      "24/7 monitorinq, server idarəetməsi, təhlükəsizlik, backup və SLA əsaslı operativ yardım — sistemləriniz daima işlək qalsın.",
  },
  {
    icon: Package,
    title: "Hazır Paketlər",
    description:
      "Sürətli start üçün hazır paketlər: korporativ sayt şablonları, rezervasiya sistemləri, email marketinq həlləri, CRM inteqrasiyası.",
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
}

function ServiceCard({ service, index }) {
  return (
    <motion.div
      variants={cardVariants}
      className="group relative h-full flex flex-col rounded-2xl p-7 bg-gradient-to-b from-[#00395e]/60 to-[#002641]/60 border border-white/5 hover:border-[#addff1]/30 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_-20px_rgba(173,223,241,0.25)] overflow-hidden"
    >
      {/* Hover-da üstdə görünən incə işıq xətti */}
      <div className="absolute top-0 inset-x-6 h-px bg-gradient-to-r from-transparent via-[#addff1]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <span className="absolute top-6 right-6 font-mono text-xs text-[#addff1]/25 group-hover:text-[#addff1]/60 transition-colors">
        {String(index + 1).padStart(2, "0")}
      </span>

      <div className="w-14 h-14 rounded-2xl bg-[#addff1]/10 border border-[#addff1]/15 flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-[#addff1] group-hover:shadow-[0_0_25px_rgba(173,223,241,0.4)]">
        <service.icon
          size={26}
          className="text-[#addff1] transition-colors duration-300 group-hover:text-[#003152]"
        />
      </div>

      <h3 className="font-display text-lg font-semibold text-white mb-3 transition-colors duration-300 group-hover:text-[#addff1]">
        {service.title}
      </h3>
      <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
    </motion.div>
  )
}

export default function Services() {
  const gridRef = useRef(null)
  const isGridInView = useInView(gridRef, { once: true, margin: "-100px" })

  return (
    <section id="services" className="py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        <SectionHeader
          label="Xidmətlərimiz"
          title="Biz nə təklif edirik"
          description="Müasir texnologiyalar və qabaqcıl metodlarla təmin etdiyimiz xidmətlərimiz hər zaman yüksək keyfiyyətə sahibdir."
        />

        <motion.div
          ref={gridRef}
          variants={containerVariants}
          initial="hidden"
          animate={isGridInView ? "visible" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
