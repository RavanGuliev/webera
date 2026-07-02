import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import emailjs from "@emailjs/browser"
import { Send, Mail, MapPin, Phone, CheckCircle, Loader2 } from "lucide-react"
import SectionHeader from "./SectionHeader"

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
}

const fields = [
  { name: "name", type: "text", label: "Adınız", placeholder: "Ad Soyad", required: true },
  { name: "email", type: "email", label: "Email", placeholder: "siz@example.com", required: true },
  { name: "phone", type: "tel", label: "Telefon", placeholder: "+994 xx xxx xx xx", required: false },
]

const inputClass =
  "w-full bg-[#00243b] text-white px-5 py-3.5 rounded-xl border border-white/10 focus:border-[#addff1]/60 focus:ring-2 focus:ring-[#addff1]/10 focus:outline-none transition-all duration-300 placeholder:text-gray-600 text-sm"

const contactInfo = [
  { icon: Mail, title: "Email", value: "info@webera.az", href: "mailto:info@webera.az" },
  { icon: Phone, title: "Telefon", value: "+994 50 123 45 67", href: "tel:+994501234567" },
  { icon: MapPin, title: "Ünvan", value: "Bakı, Azərbaycan" },
]

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })
  const formRef = useRef()
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setSent(true)
          setForm({ name: "", email: "", phone: "", message: "" })
          setLoading(false)
        },
        (error) => {
          console.error("Email error:", error)
          setLoading(false)
        }
      )
  }

  return (
    <section id="contact" className="py-28 relative">
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[#addff1]/5 blur-[100px] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16" ref={ref}>
        <SectionHeader
          label="Əlaqə"
          title="Bizimlə əlaqə saxlayın"
          description="Layihəniz barədə danışmaq və ya sadəcə salam demək istəyirsinizsə, bizə yazın."
        />

        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {/* Qradient haşiyəli forma kartı */}
            <div className="rounded-3xl p-px bg-gradient-to-b from-[#addff1]/25 via-white/5 to-transparent h-full">
              <div className="rounded-3xl bg-gradient-to-b from-[#00395e]/80 to-[#002641]/80 p-8 sm:p-10 h-full">
                {sent ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="text-center py-16"
                  >
                    <CheckCircle size={64} className="text-[#addff1] mx-auto mb-6" />
                    <h3 className="font-display text-2xl font-bold text-white mb-3">
                      Mesajınız göndərildi!
                    </h3>
                    <p className="text-gray-400">Tezliklə sizinlə əlaqə saxlayacağıq.</p>
                  </motion.div>
                ) : (
                  <motion.form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="space-y-5"
                  >
                    {fields.map((field) => (
                      <motion.div key={field.name} variants={itemVariants}>
                        <label
                          htmlFor={`contact-${field.name}`}
                          className="block text-xs font-semibold tracking-[0.15em] uppercase text-gray-500 mb-2"
                        >
                          {field.label}
                          {field.required && <span className="text-[#addff1] ml-1">*</span>}
                        </label>
                        <input
                          id={`contact-${field.name}`}
                          type={field.type}
                          name={field.name}
                          value={form[field.name]}
                          onChange={handleChange}
                          placeholder={field.placeholder}
                          required={field.required}
                          className={inputClass}
                        />
                      </motion.div>
                    ))}
                    <motion.div variants={itemVariants}>
                      <label
                        htmlFor="contact-message"
                        className="block text-xs font-semibold tracking-[0.15em] uppercase text-gray-500 mb-2"
                      >
                        Mesajınız<span className="text-[#addff1] ml-1">*</span>
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Layihəniz barədə qısaca yazın..."
                        rows={4}
                        required
                        className={`${inputClass} resize-none`}
                      />
                    </motion.div>
                    <motion.div variants={itemVariants}>
                      <button
                        type="submit"
                        disabled={loading}
                        className="group w-full bg-[#addff1] text-[#003152] px-6 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-white transition-colors duration-300 disabled:opacity-50 shadow-[0_0_30px_rgba(173,223,241,0.2)] active:scale-[0.99]"
                      >
                        {loading ? (
                          <>
                            <Loader2 size={18} className="animate-spin" />
                            Göndərilir...
                          </>
                        ) : (
                          <>
                            Göndər
                            <Send
                              size={18}
                              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5"
                            />
                          </>
                        )}
                      </button>
                    </motion.div>
                  </motion.form>
                )}
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex flex-col gap-4"
          >
            {/* Mövcudluq kartı */}
            <motion.div
              variants={itemVariants}
              className="rounded-2xl p-6 bg-gradient-to-b from-[#00395e]/60 to-[#002641]/60 border border-white/5"
            >
              <div className="flex items-center gap-2.5 mb-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 dot-pulse" />
                <span className="text-emerald-400 text-sm font-semibold">
                  Yeni layihələr üçün açığıq
                </span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Mesajınıza adətən <span className="text-white font-medium">24 saat ərzində</span>{" "}
                cavab veririk.
              </p>
            </motion.div>

            {contactInfo.map((item) => {
              const Wrapper = item.href ? "a" : "div"
              return (
                <motion.div key={item.title} variants={itemVariants}>
                  <Wrapper
                    {...(item.href ? { href: item.href } : {})}
                    className="group flex items-center gap-4 rounded-2xl p-5 bg-gradient-to-b from-[#00395e]/60 to-[#002641]/60 border border-white/5 hover:border-[#addff1]/30 transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <div className="w-12 h-12 shrink-0 rounded-xl bg-[#addff1]/10 border border-[#addff1]/15 flex items-center justify-center transition-all duration-300 group-hover:bg-[#addff1]">
                      <item.icon
                        size={20}
                        className="text-[#addff1] transition-colors duration-300 group-hover:text-[#003152]"
                      />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold tracking-[0.15em] uppercase text-gray-500 mb-1">
                        {item.title}
                      </h4>
                      <p className="text-white font-medium">{item.value}</p>
                    </div>
                  </Wrapper>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
