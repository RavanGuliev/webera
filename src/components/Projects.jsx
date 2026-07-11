import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import SectionHeader from "./SectionHeader"

const projects = [
  {
    title: "Dolph Game",
    category: "E-ticarət Platformaları",
    description:
      "Dolphgame artıq tamamilə yeniləndi! Daha sürətli, daha müasir və tam istifadəçi dostu yeni interfeysimizlə xidmətinizdəyik. Sayta keçid edin, fərqi özünüz görün!",
    image: "/projects/dolphnew.webp",
    tags: ["Nuxt.js", "Laravel", "E-ticarət"],
    url: "https://dolphgame.vercel.app/",
  },
  {
    title: "Goaf Az",
    category: "E-ticarət Platformaları",
    description:
      "Goaf.az artıq tamamilə yeniləndi! Tam modern dizayn, maksimum sürət və yenilənmiş interfeyslə xidmətinizdəyik. Sayta keçid edin və yeni təcrübəni özünüz sınaqdan keçirin!",
    image: "/projects/goaf.webp",
    tags: ["Nuxt.js", "Laravel", "E-ticarət"],
    url: "https://goafaz.com/",
  },
  {
    title: "Mona Arte",
    category: "Korporativ Saytlar",
    description:
      "Monaarte.az-da estetik yenilik! Yaradıcılığımızı və memarlıq baxışımızı indi daha modern, vizual olaraq mükəmməl və tamamilə yenilənmiş interfeysimizlə sizə təqdim edirik. Saytımıza keçid edin, xəyallarınızdakı məkanların rəqəmsal vizualına şahid olun!",
    image: "/projects/monaarte1.webp",
    tags: ["Laravel", "MVC", "Custom Development", "Architecture & Design", "Responsive Web"],
    url: "https://monaarte.az/",
  },
  {
    title: "Caffecino",
    category: "QR Menü & Avtomatlaşdırma",
    description:
      "Caffecino üçün xüsusi olaraq hazırladığımız QR menyu sistemini tamamilə sıfırdan kodlaşdırdıq. Hazır şablonlar və ya ləng işləyən platformalar yoxdur! Müştərilərin menyunu rahatlıqla incələməsi, sürətli və kəsintisiz bir istifadəçi təcrübəsi (UI/UX) yaşaması üçün hər bir detalı xüsusi olaraq işlənib. Kafe və restoran menecmentində rəqəmsal sürət!",
    image: "/projects/caffecinoa.webp",
    tags: ["QR", "Restoran", "Rəqəmsal"],
    url: "https://caffecino.az/",
  },
  {
    title: "Dark Mocha Template",
    category: "QR Menü & Avtomatlaşdırma",
    description:
      "Kafe və coffee shop-lar üçün premium tünd tonlarda hazırlanmış rəqəmsal menyu şablonu. Heç bir hazır freymvork asılılığı olmadan, tamamilə sıfırdan kodlaşdırılıb. Müştərilərin menyunu rahatlıqla incələməsi, sürətli və kəsintisiz bir istifadəçi təcrübəsi (UI/UX) yaşaması üçün hər bir animasiya və keçid xüsusi olaraq optimizasiya edilib.",
    image: "/projects/temp44.webp",
    tags: ["Minimalist", "Dark Mode", "QR Menu"],
    url: "https://template2-sigma-seven.vercel.app/",
  },
  {
    title: "Minimal Light Template",
    category: "QR Menü & Avtomatlaşdırma",
    description:
      "Geniş vizual sahələri və təmiz tipofrafiyası ilə ön plana çıxan minimalist kafe və restoran şablonu. Brendin korporativ kimliyini və təamlarını ən estetik şəkildə təqdim etmək üçün dizayn edilib. Mobil-fokuslu arxitekturası sayəsində bütün cihazlarda donma olmadan, anında reaksiyası verən UI/UX quruluşu.",
    image: "/projects/temp11.webp",
    tags: ["Clean", "Light Mode", "Corporate"],
    url: "https://template5-eta.vercel.app/",
  },
  {
    title: "Dynamic Grid Template",
    category: "QR Menü & Avtomatlaşdırma",
    description:
      "Canlı rənglər və dinamik grid (tor) strukturu ilə yığılmış müasir şəhər kafesi şablonu. İstifadəçilərin kateqoriyalar arasında sürətlə keçid edə bilməsi və vizual olaraq doyması üçün front-end tərəfi xüsusi kodlaşdırılıb. Kafe menecmentində vizual sürəti və interaktivliyi maksimuma çatdıran rəqəmsal həll.",
    image: "/projects/temp33.webp",
    tags: ["Dynamic", "Grid", "Interactive"],
    url: "https://template3-opal-nine.vercel.app/",
  },
  {
    title: "Elegant Premium Template",
    category: "QR Menü & Avtomatlaşdırma",
    description:
      "Premium kafe-restoranlar və lounge-lar üçün zəriflik və lüksü ön plana çıxaran xüsusi şablon. Heç bir ləng işləyən platformaya əsaslanmır; sıfırdan yığılan sürətli keçidləri ilə həm masa arxasında QR menyu kimi, həm də rəsmi korporativ veb sayt kimi istifadəyə tam uyğundur.",
    image: "/projects/temp22.webp",
    tags: ["Elegant", "Premium", "UX/UI"],
    url: "https://template4-1xgp.vercel.app/",
  },
  {
    title: "Midnight Gold Template",
    category: "QR Menü & Avtomatlaşdırma",
    description:
      "Fine-dining restoran və lounge məkanları üçün tünd tonlar və qızılı vurğularla hazırlanmış premium QR menyu konsepti. Interyerin zəngin estetikasını rəqəmsal menyuya daşıyan bu şablon, hər detalın lüks hiss olunması üçün sıfırdan dizayn edilib.",
    image: "/projects/temp6.png",
    tags: ["Fine Dining", "Dark Luxury", "QR Menu"],
    url: "https://yourbrand6.vercel.app/",
  },
]

const categories = ["Hamısı", ...new Set(projects.map((p) => p.category))]

const getDomain = (url) => {
  try {
    return new URL(url).hostname.replace(/^www\./, "")
  } catch {
    return ""
  }
}

function ProjectCard({ project, index, featured }) {
  const Wrapper = project.url ? "a" : "div"
  const wrapperProps = project.url
    ? { href: project.url, target: "_blank", rel: "noopener noreferrer" }
    : {}

  return (
    <Wrapper
      {...wrapperProps}
      className={`group relative flex flex-col rounded-2xl overflow-hidden border border-[#addff1]/10 bg-gradient-to-b from-[#00395e] to-[#002641] transition-all duration-300 hover:border-[#addff1]/40 hover:shadow-[0_20px_50px_-20px_rgba(173,223,241,0.35)] hover:-translate-y-1 ${
        featured ? "md:col-span-2" : ""
      }`}
    >
      {/* Brauzer pəncərəsi başlığı */}
      <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-[#addff1]/10 bg-[#002641]/70">
        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]/80" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]/80" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]/80" />
        <span className="ml-3 flex-1 truncate text-center text-[11px] tracking-wide text-gray-400 bg-[#003152] rounded-md px-3 py-1">
          {getDomain(project.url)}
        </span>
        <ArrowUpRight
          size={15}
          className="ml-2 shrink-0 text-gray-500 transition-all duration-300 group-hover:text-[#addff1] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </div>

      {/* Screenshot */}
      <div className={`relative overflow-hidden ${featured ? "h-64 md:h-80" : "h-56"}`}>
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#002641] via-transparent to-transparent opacity-60" />
        <span className="absolute top-3 left-3 bg-[#003152]/80 backdrop-blur-sm border border-[#addff1]/20 text-[#addff1] text-[11px] font-semibold px-3 py-1 rounded-full">
          {project.category}
        </span>
        <span className="absolute inset-x-0 bottom-4 mx-auto w-max opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 bg-[#addff1] text-[#003152] text-xs font-bold px-4 py-2 rounded-full shadow-lg">
          Sayta keç ↗
        </span>
      </div>

      {/* Məzmun */}
      <div className="flex flex-col flex-1 p-6">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="font-display text-lg font-semibold text-white transition-colors duration-300 group-hover:text-[#addff1]">
            {project.title}
          </h3>
          <span className="font-mono text-xs text-[#addff1]/40 pt-1">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed line-clamp-2 mb-5">
          {project.description}
        </p>
        <div className="mt-auto flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-[11px] text-gray-300 bg-[#addff1]/5 border border-[#addff1]/10 px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="text-[11px] text-[#addff1]/60 px-2 py-1">
              +{project.tags.length - 3}
            </span>
          )}
        </div>
      </div>
    </Wrapper>
  )
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("Hamısı")

  const filtered =
    activeCategory === "Hamısı"
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  return (
    <section id="projects" className="py-28 relative">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[#addff1]/5 blur-[100px] opacity-40 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        <SectionHeader
          label="Layihələrimiz"
          title="Son işlərimiz"
          description="Fərqli sahələr üçün hazırladığımız layihələrlə tanış olun."
        />

        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((cat) => {
            const count =
              cat === "Hamısı"
                ? projects.length
                : projects.filter((p) => p.category === cat).length
            const active = activeCategory === cat
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-5 py-2 rounded-full text-sm font-medium border transition-colors duration-200 active:scale-95 ${
                  active
                    ? "text-[#003152] border-transparent"
                    : "text-gray-400 border-[#addff1]/10 bg-[#addff1]/5 hover:text-white hover:border-[#addff1]/30"
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="activeCategoryPill"
                    className="absolute inset-0 bg-[#addff1] rounded-full"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                <span className="relative z-10">
                  {cat} <span className="opacity-60 text-xs">({count})</span>
                </span>
              </button>
            )
          })}
        </div>

        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filtered.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              featured={index === 0}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
