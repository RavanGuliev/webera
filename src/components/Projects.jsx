import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "framer-motion"
import { ExternalLink } from "lucide-react"

const projects = [
  {
    title: "Dolph Game",
    category: "E-ticarət Platformaları",
    description:
      "Dolphgame artıq tamamilə yeniləndi! Daha sürətli, daha müasir və tam istifadəçi dostu yeni interfeysimizlə xidmətinizdəyik. Sayta keçid edin, fərqi özünüz görün!",
    image: "/projects/dolphnew.png",
    tags: ["Nuxt.js", "Laravel", "E-ticarət"],
    url: "https://dolphgame.vercel.app/",
  },
  {
    title: "Goaf Az",
    category: "E-ticarət Platformaları",
    description:
      "Goaf.az artıq tamamilə yeniləndi! Tam modern dizayn, maksimum sürət və yenilənmiş interfeyslə xidmətinizdəyik. Sayta keçid edin və yeni təcrübəni özünüz sınaqdan keçirin!",
    image: "/projects/goaf.png",
     tags: ["Nuxt.js", "Laravel", "E-ticarət"],

    url: "https://goafaz.com/",
  },
  {
    title: "Mona Arte",
    category: "Korporativ Saytlar",
    description:
      "Monaarte.az-da estetik yenilik! Yaradıcılığımızı və memarlıq baxışımızı indi daha modern, vizual olaraq mükəmməl və tamamilə yenilənmiş interfeysimizlə sizə təqdim edirik. Saytımıza keçid edin, xəyallarınızdakı məkanların rəqəmsal vizualına şahid olun!",
    image: "/projects/monaarte1.png",
tags: ["Laravel", "MVC", "Custom Development", "Architecture & Design", "Responsive Web"],
    url: "https://monaarte.az/",
  },
  {
    title: "Caffecino",
    category: "QR Menü & Avtomatlaşdırma",
    description:
      "Caffecino üçün xüsusi olaraq hazırladığımız QR menyu sistemini tamamilə sıfırdan kodlaşdırdıq. Hazır şablonlar və ya ləng işləyən platformalar yoxdur! Müştərilərin menyunu rahatlıqla incələməsi, sürətli və kəsintisiz bir istifadəçi təcrübəsi (UI/UX) yaşaması üçün hər bir detalı xüsusi olaraq işlənib. Kafe və restoran menecmentində rəqəmsal sürət!",
    image: "/projects/caffecinoa.png",
    tags: ["QR", "Restoran", "Rəqəmsal"],
    url: "https://caffecino.az/",
  },
  
  {
    title: "Dark Mocha Template",
    category: "QR Menü & Avtomatlaşdırma",
    description: "Kafe və coffee shop-lar üçün premium tünd tonlarda hazırlanmış rəqəmsal menyu şablonu. Heç bir hazır freymvork asılılığı olmadan, tamamilə sıfırdan kodlaşdırılıb. Müştərilərin menyunu rahatlıqla incələməsi, sürətli və kəsintisiz bir istifadəçi təcrübəsi (UI/UX) yaşaması üçün hər bir animasiya və keçid xüsusi olaraq optimizasiya edilib.",
    image: "/projects/temp44.png",
    tags: ["Minimalist", "Dark Mode", "QR Menu"],
    url: "https://template4-1xgp.vercel.app/" 
  },

  {
    title: "Minimal Light Template",
    category: "QR Menü & Avtomatlaşdırma",
    description: "Geniş vizual sahələri və təmiz tipofrafiyası ilə ön plana çıxan minimalist kafe və restoran şablonu. Brendin korporativ kimliyini və təamlarını ən estetik şəkildə təqdim etmək üçün dizayn edilib. Mobil-fokuslu arxitekturası sayəsində bütün cihazlarda donma olmadan, anında reaksiyası verən UI/UX quruluşu.",
    image: "/projects/temp11.png",
    tags: ["Clean", "Light Mode", "Corporate"],
    url: "https://template5-eta.vercel.app/"
  },

  {
    title: "Dynamic Grid Template",
    category: "QR Menü & Avtomatlaşdırma",
    description: "Canlı rənglər və dinamik grid (tor) strukturu ilə yığılmış müasir şəhər kafesi şablonu. İstifadəçilərin kateqoriyalar arasında sürətlə keçid edə bilməsi və vizual olaraq doyması üçün front-end tərəfi xüsusi kodlaşdırılıb. Kafe menecmentində vizual sürəti və interaktivliyi maksimuma çatdıran rəqəmsal həll.",
    image: "/projects/temp33.png",
    tags: ["Dynamic", "Grid", "Interactive"],
    url: "https://template3-opal-nine.vercel.app/"
  },

  {
    title: "Elegant Premium Template",
    category: "QR Menü & Avtomatlaşdırma",
    description: "Premium kafe-restoranlar və lounge-lar üçün zəriflik və lüksü ön plana çıxaran xüsusi şablon. Heç bir ləng işləyən platformaya əsaslanmır; sıfırdan yığılan sürətli keçidləri ilə həm masa arxasında QR menyu kimi, həm də rəsmi korporativ veb sayt kimi istifadəyə tam uyğundur.",
    image: "/projects/temp22.png",
    tags: ["Elegant", "Premium", "UX/UI"],
    url: "https://template4-1xgp.vercel.app/"
  }
]



const categories = ["Hamısı", "Korporativ Saytlar", "E-ticarət Platformaları", "QR Menü & Avtomatlaşdırma", "İnteqrasiya & Mail Sistemləri"]

function ProjectCard({ project, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const Wrapper = project.url ? motion.a : motion.div

  return (
    <Wrapper
      ref={ref}
      {...(project.url ? { href: project.url, target: "_blank", rel: "noopener noreferrer" } : {})}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      exit={{ opacity: 0, transition: { duration: 0.15 } }}
      transition={{ duration: 0.35, delay: index * 0.03, ease: "easeOut" }}
      whileHover={{ y: -6 }}
      className="group bg-[#003152] rounded-2xl overflow-hidden border border-[#003152] hover:border-[#addff1]/20 transition-colors duration-500 shadow-[0_0_12px_rgba(173,223,241,0.12)] hover:shadow-[0_0_30px_rgba(173,223,241,0.3)]"
    >
      <div className="relative overflow-hidden h-64">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6 }}
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-[#003152] via-transparent to-transparent"
          initial={{ opacity: 0.6 }}
          whileHover={{ opacity: 0.3 }}
        />
        <motion.div
          className="absolute top-4 left-4"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <motion.span
            className="bg-[#addff1] text-[#003152] text-xs font-bold px-3 py-1 rounded-full inline-block"
            whileHover={{ scale: 1.1 }}
          >
            {project.category}
          </motion.span>
        </motion.div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#addff1] transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, i) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.05 }}
              className="text-xs text-gray-400 bg-[#003152] px-3 py-1 rounded-full"
            >
              {tag}
            </motion.span>
          ))}
        </div>
        <motion.a
          href="#"
          className="inline-flex items-center gap-2 text-[#addff1] text-sm font-semibold"
          whileHover={{ gap: "0.75rem" }}
        >
          Ətraflı
          <motion.span
            animate={{ x: [0, 3, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ExternalLink size={14} />
          </motion.span>
        </motion.a>
      </div>
    </Wrapper>
  )
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("Hamısı")
  const headerRef = useRef(null)
  const isInView = useInView(headerRef, { once: true })

  const filtered =
    activeCategory === "Hamısı"
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-16">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.1 }}
            className="text-[#addff1] font-semibold text-sm tracking-widest uppercase"
          >
            Layihələrimiz
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-4 mb-6 transition-colors">
            Son işlərimiz
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Fərqli sahələr üçün hazırladığımız layihələrlə tanış olun.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-[#addff1] text-[#003152] shadow-lg"
                  : "bg-[#003152] text-gray-400 hover:bg-[#003152] hover:text-white"
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filtered.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
