import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import emailjs from "@emailjs/browser"
import { Send, Mail, MapPin, Phone, CheckCircle, Loader2 } from "lucide-react"

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
}

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
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
    <section id="contact" className="py-24 relative">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-16">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.1 }}
            className="text-[#addff1] font-semibold text-sm tracking-widest uppercase"
          >
            Əlaqə
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-4 mb-6 transition-colors">
            Bizimlə əlaqə saxlayın
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Layihəniz barədə danışmaq və ya sadəcə salam demək istəyirsinizsə, bizə yazın.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div
              className="bg-[#003152] rounded-2xl p-8 border border-[#003152]"
              whileHover={{ boxShadow: "0 20px 60px rgba(0,0,0,0.3)" }}
              transition={{ duration: 0.3 }}
            >
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.5, rotateY: 90 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="text-center py-12"
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <CheckCircle size={64} className="text-[#addff1] mx-auto mb-6" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-4">Mesajınız göndərildi!</h3>
                  <p className="text-gray-400">Tezliklə sizinlə əlaqə saxlayacağıq.</p>
                </motion.div>
              ) : (
                <motion.form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  variants={containerVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  className="space-y-6"
                >
                  {[
                    { name: "name", type: "text", placeholder: "Adınız", required: true },
                    { name: "email", type: "email", placeholder: "Email", required: true },
                    { name: "phone", type: "tel", placeholder: "Telefon", required: false },
                  ].map((field) => (
                    <motion.div key={field.name} variants={itemVariants}>
                      <motion.input
                        type={field.type}
                        name={field.name}
                        value={form[field.name]}
                        onChange={handleChange}
                        placeholder={field.placeholder}
                        required={field.required}
                        whileFocus={{ scale: 1.01, borderColor: "#addff1" }}
                        className="w-full bg-[#003152] text-white px-5 py-3 rounded-xl border border-[#003152] focus:border-[#addff1] focus:outline-none transition-all duration-300 placeholder:text-gray-500"
                      />
                    </motion.div>
                  ))}
                  <motion.div variants={itemVariants}>
                    <motion.textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Mesajınız"
                      rows={4}
                      required
                      whileFocus={{ scale: 1.01, borderColor: "#addff1" }}
                      className="w-full bg-[#003152] text-white px-5 py-3 rounded-xl border border-[#003152] focus:border-[#addff1] focus:outline-none transition-all duration-300 placeholder:text-gray-500 resize-none"
                    />
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <motion.button
                      type="submit"
                      disabled={loading}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-[#addff1] text-white-inverse px-6 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all disabled:opacity-50 relative overflow-hidden"
                    >
                      {loading ? (
                        <motion.span
                          className="flex items-center gap-2"
                          animate={{ opacity: [1, 0.5, 1] }}
                          transition={{ duration: 1, repeat: Infinity }}
                        >
                          <Loader2 size={18} className="animate-spin" />
                          Göndərilir...
                        </motion.span>
                      ) : (
                        <>
                          Göndər
                          <motion.span
                            animate={{ x: [0, 3, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          >
                            <Send size={18} />
                          </motion.span>
                        </>
                      )}
                    </motion.button>
                  </motion.div>
                </motion.form>
              )}
            </motion.div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex flex-col justify-center space-y-8"
          >
            {[
              { icon: Mail, title: "Email", value: "info@webera.az" },
              { icon: Phone, title: "Telefon", value: "+994 50 123 45 67" },
              { icon: MapPin, title: "Ünvan", value: "Bakı, Azərbaycan" },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                variants={itemVariants}
                custom={i}
                className="flex items-start gap-4 group"
                whileHover={{ x: 5 }}
              >
                <motion.div
                  className="w-12 h-12 bg-[#003152] rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[#addff1]/10 transition-colors duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <item.icon className="text-[#addff1] group-hover:scale-110 transition-transform" size={22} />
                </motion.div>
                <div>
                  <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                  <p className="text-gray-400">{item.value}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
