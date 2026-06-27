import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ArrowRight, Play, Sparkles } from "lucide-react"

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

const floatAnimation = {
  y: [0, -10, 0],
  transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
}

export default function Hero() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true })

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Animated gradient orbs */}
      <motion.div
        className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full blur-[80px] bg-[#addff1]/5"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full bg-blue-500/5 blur-[80px]"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute top-24 left-[10%] w-2 h-2 bg-[#addff1] rounded-full opacity-30"
        animate={floatAnimation}
      />
      <motion.div
        className="absolute bottom-1/3 right-[15%] w-3 h-3 rounded-full bg-[#addff1]/40"
        animate={{
          y: [0, -15, 0],
          transition: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 },
        }}
      />
      <motion.div
        className="absolute top-1/3 right-[25%] w-1.5 h-1.5 rounded-full bg-white/20"
        animate={{
          y: [0, -8, 0],
          transition: { duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
        }}
      />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-16 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-center lg:text-left"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm mb-6 bg-[#addff1]/10 text-white"
            >
              <Sparkles size={14} />
              <span className="w-2 h-2 rounded-full animate-pulse bg-white" />
              İnnovativ Rəqəmsal Həllər
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 transition-colors"
            >
              Biznesinizi{" "}
              <motion.span
                className="text-[#addff1] inline-block"
                animate={{
                  textShadow: [
                    "0 0 20px rgba(107,143,0,0.3)",
                    "0 0 40px rgba(107,143,0,0.6)",
                    "0 0 20px rgba(107,143,0,0.3)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                Rəqəmsallaşdırırıq
              </motion.span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-400 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              Webera olaraq biz mürəkkəb problemlərə sadə və innovativ həllər tapırıq.
              Sizin biznesinizin rəqəmsal yüksəlişi üçün lazım olan bütün alətləri peşəkar komandamızla təqdim edirik.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-3 rounded-full font-semibold flex items-center gap-2 shadow-lg bg-[#addff1] text-[#003152]"
              >
                Bizimlə əlaqə
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight size={18} />
                </motion.span>
              </motion.a>
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="border border-[#addff1] px-8 py-3 rounded-full font-semibold flex items-center gap-2 transition-all text-white"
              >
                <Play size={18} />
                Layihələrimiz
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: 20 }}
            animate={isInView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
            className="hidden lg:flex justify-center perspective-[1000px]"
          >
            <motion.div
              className="relative"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="w-[350px] h-[350px] md:w-[450px] md:h-[450px] rounded-full blur-3xl absolute -top-10 -right-10 bg-gradient-to-br from-[#addff1]/20 to-transparent" />
              <motion.div
                className="relative z-10 bg-[#003152] rounded-3xl p-8 shadow-2xl border border-[#003152]"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <motion.div
                    className="w-3 h-3 rounded-full bg-red-500"
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <motion.div
                    className="w-3 h-3 rounded-full bg-yellow-500"
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                  />
                  <motion.div
                    className="w-3 h-3 rounded-full bg-[#addff1]"
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                  />
                </div>
                <div className="space-y-3">
                  {["Veb Saytlar", "Mobil Tətbiqlər", "UI/UX Dizayn"].map((item, i) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -30 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.8 + i * 0.15, duration: 0.5 }}
                      whileHover={{ x: 5, backgroundColor: "rgba(107,143,0,0.05)" }}
                      className="flex items-center gap-3 bg-[#003152] rounded-xl px-4 py-3 cursor-default transition-colors"
                    >
                      <motion.div
                        className="w-2 h-2 bg-[#addff1] rounded-full"
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
                      />
                      <span className="text-gray-400 text-sm">{item}</span>
                      <div className="ml-auto flex gap-1">
                        {[...Array(3)].map((_, j) => (
                          <motion.div
                            key={j}
                            className="w-2 h-2 rounded-full"
                            style={{ backgroundColor: j <= i ? "#22c55e" : "rgba(34,197,94,0.2)" }}
                            animate={j <= i ? { scale: [1, 1.3, 1] } : {}}
                            transition={{ duration: 1, repeat: Infinity, delay: j * 0.2 }}
                          />
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
