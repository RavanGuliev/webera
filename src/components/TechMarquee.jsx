const technologies = [
  "React",
  "Laravel",
  "Nuxt.js",
  "Tailwind CSS",
  "Node.js",
  "MySQL",
  "Vite",
  "Figma",
  "Three.js",
  "Vercel",
  "UI/UX",
  "SEO",
]

export default function TechMarquee() {
  return (
    <div className="relative py-8 border-y border-white/5 bg-white/[0.015] overflow-hidden marquee-mask">
      <div className="marquee-track flex items-center gap-12 w-max">
        {[...technologies, ...technologies].map((tech, i) => (
          <span
            key={`${tech}-${i}`}
            className="flex items-center gap-12 shrink-0 font-display text-lg font-medium text-white/25 hover:text-[#addff1]/60 transition-colors cursor-default select-none"
          >
            {tech}
            <span className="w-1.5 h-1.5 rounded-full bg-[#addff1]/20" />
          </span>
        ))}
      </div>
    </div>
  )
}
