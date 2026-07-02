import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ArrowRight, ArrowUpRight, ChevronDown, Sparkles } from "lucide-react"

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

const stats = [
  { value: "50+", label: "Tamamlanmış layihə" },
  { value: "99%", label: "Müştəri məmnuniyyəti" },
  { value: "24/7", label: "Texniki dəstək" },
]

export default function Hero() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true })

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16"
    >
      {/* Fon dekorları — statik, GPU yükü yoxdur */}
      <div className="absolute inset-0 bg-dot-grid [mask-image:radial-gradient(ellipse_60%_60%_at_50%_40%,black,transparent)]" />
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full blur-[100px] bg-[#addff1]/10 opacity-40" />
      <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full bg-blue-400/10 blur-[100px] opacity-30" />

      <div className="absolute top-32 left-[10%] w-2 h-2 bg-[#addff1] rounded-full opacity-30 float-y" />
      <div
        className="absolute bottom-1/3 right-[12%] w-3 h-3 rounded-full bg-[#addff1]/40 float-y"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute top-1/3 right-[30%] w-1.5 h-1.5 rounded-full bg-white/20 float-y"
        style={{ animationDelay: "0.5s", animationDuration: "2.5s" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-center lg:text-left"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2.5 pl-3 pr-4 py-1.5 rounded-full text-sm mb-8 bg-white/[0.04] border border-[#addff1]/15 text-gray-300 backdrop-blur-sm"
            >
              <Sparkles size={14} className="text-[#addff1]" />
              İnnovativ Rəqəmsal Həllər
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 dot-pulse" />
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-bold text-white leading-[1.05] mb-7"
            >
              Biznesinizi{" "}
              <span className="inline-block bg-gradient-to-r from-[#addff1] via-white to-[#addff1] bg-clip-text text-transparent [text-shadow:none]">
                Rəqəmsallaşdırırıq
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-400 max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed"
            >
              Webera olaraq biz mürəkkəb problemlərə sadə və innovativ həllər tapırıq.
              Sizin biznesinizin rəqəmsal yüksəlişi üçün lazım olan bütün alətləri peşəkar komandamızla təqdim edirik.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mb-12"
            >
              <a
                href="#contact"
                className="group px-8 py-3.5 rounded-full font-semibold flex items-center gap-2 bg-[#addff1] text-[#003152] shadow-[0_0_30px_rgba(173,223,241,0.35)] hover:bg-white hover:shadow-[0_0_40px_rgba(173,223,241,0.5)] transition-all duration-300 hover:-translate-y-0.5 active:scale-95"
              >
                Bizimlə əlaqə
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
              <a
                href="#projects"
                className="group px-8 py-3.5 rounded-full font-semibold flex items-center gap-2 text-white border border-white/15 hover:border-[#addff1]/50 hover:bg-white/[0.03] transition-all duration-300 hover:-translate-y-0.5 active:scale-95"
              >
                Layihələrimiz
                <ArrowUpRight
                  size={18}
                  className="text-[#addff1] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center lg:justify-start divide-x divide-white/10"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="px-6 first:pl-0 text-center lg:text-left">
                  <div className="font-display text-2xl sm:text-3xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative float-y" style={{ animationDuration: "6s" }}>
              <div className="w-[400px] h-[400px] rounded-full blur-3xl absolute -top-10 -right-10 bg-gradient-to-br from-[#addff1]/15 to-transparent" />

              {/* Qradient haşiyəli brauzer pəncərəsi */}
              <div className="relative z-10 rounded-3xl p-px bg-gradient-to-b from-[#addff1]/30 via-[#addff1]/5 to-transparent w-[420px]">
                <div className="rounded-3xl bg-gradient-to-b from-[#00395e] to-[#002641] overflow-hidden">
                  <div className="flex items-center gap-1.5 px-5 py-3.5 border-b border-[#addff1]/10">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]/80" />
                    <span className="ml-3 flex-1 truncate text-center text-[11px] tracking-wide text-gray-400 bg-[#003152] rounded-md px-3 py-1">
                      webera.az
                    </span>
                  </div>

                  <div className="p-7">
                    <div className="space-y-3">
                      {["Veb Saytlar", "Mobil Tətbiqlər", "UI/UX Dizayn"].map((item, i) => (
                        <motion.div
                          key={item}
                          initial={{ opacity: 0, x: -30 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: 0.8 + i * 0.15, duration: 0.5 }}
                          className="flex items-center gap-3 bg-white/[0.03] border border-white/5 rounded-xl px-4 py-3.5 cursor-default hover:border-[#addff1]/20 transition-colors"
                        >
                          <div
                            className="w-2 h-2 bg-[#addff1] rounded-full dot-pulse"
                            style={{ animationDelay: `${i * 0.3}s`, animationDuration: "1.5s" }}
                          />
                          <span className="text-gray-300 text-sm font-medium">{item}</span>
                          <div className="ml-auto flex gap-1">
                            {[...Array(3)].map((_, j) => (
                              <div
                                key={j}
                                className={`w-2 h-2 rounded-full ${j <= i ? "dot-pulse" : ""}`}
                                style={{
                                  backgroundColor: j <= i ? "#34d399" : "rgba(52,211,153,0.15)",
                                  animationDelay: `${j * 0.2}s`,
                                  animationDuration: "1s",
                                }}
                              />
                            ))}
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : {}}
                      transition={{ delay: 1.4, duration: 0.5 }}
                      className="mt-6 pt-5 border-t border-white/5 flex items-center justify-between"
                    >
                      <span className="text-[11px] text-gray-500 font-mono">deploy: production</span>
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-emerald-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 dot-pulse" />
                        Uğurlu
                      </span>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Aşağı sürüşdürmə göstəricisi */}
      <a
        href="#services"
        aria-label="Aşağı sürüşdür"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1 text-gray-500 hover:text-[#addff1] transition-colors"
      >
        <span className="text-[10px] tracking-[0.25em] uppercase">Kəşf et</span>
        <ChevronDown size={18} className="float-y" style={{ animationDuration: "2s" }} />
      </a>
    </section>
  )
}
