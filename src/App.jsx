import { useState, useEffect, lazy, Suspense } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Navbar from "./components/Navbar"

const Particles = lazy(() => import("./components/Particles"))

import Hero from "./components/Hero"
import TechMarquee from "./components/TechMarquee"
import Services from "./components/Services"
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import { ChevronUp } from "lucide-react"

function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-[#addff1] text-[#003152] rounded-full flex items-center justify-center shadow-lg shadow-[#addff1]/20"
        >
          <ChevronUp size={24} />
        </motion.button>
      )}
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <div className="bg-[#0a3f66] min-h-screen relative">
      <Suspense fallback={null}>
        <div className="fixed inset-0 z-0 w-screen h-screen pointer-events-none">
          <div className="absolute inset-0 bg-[#0a3f66]" />
          <Particles
            particleColors={["#ffffff"]}
            particleCount={100}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={false}
            alphaParticles={false}
            disableRotation={false}
          />
        </div>
      </Suspense>
      <Navbar />
      <main className="relative z-10 flex flex-col">
        <div className="order-1"><Hero /></div>
        <div className="order-2"><TechMarquee /></div>
        <div className="order-3"><Services /></div>
        <div className="order-5 md:order-4"><About /></div>
        <div className="order-4 md:order-5"><Projects /></div>
        <div className="order-6"><Contact /></div>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}
