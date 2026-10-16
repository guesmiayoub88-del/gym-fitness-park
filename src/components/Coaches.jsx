import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

const coaches = [
  {
    name: "Coach Performance",
    specialty: "Force & Musculation",
    image:
      "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Coach Fitness",
    specialty: "Fitness & Cardio",
    image:
      "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Coach Training",
    specialty: "Functional Training",
    image:
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=900&q=85",
  },
]

export default function Coaches() {
  return (
    <section id="coachs" className="bg-black px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 flex flex-col justify-between gap-8 lg:flex-row lg:items-end"
        >
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-12 bg-lime-400" />
              <span className="text-sm font-bold uppercase tracking-[0.3em] text-lime-400">
                Encadrement
              </span>
            </div>

            <h2 className="text-4xl font-black uppercase leading-none text-white sm:text-5xl lg:text-7xl">
              Train With
              <br />
              <span className="text-lime-400">Purpose.</span>
            </h2>
          </div>

          <p className="max-w-md text-base leading-7 text-white/50">
            Un accompagnement orienté vers la progression, la technique et
            l'atteinte de tes objectifs.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {coaches.map((coach, index) => (
            <motion.article
              key={coach.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className="group relative overflow-hidden bg-[#0b0b0b]"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={coach.image}
                  alt={coach.name}
                  className="h-full w-full object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-7">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-lime-400">
                    {coach.specialty}
                  </span>

                  <h3 className="mt-2 text-2xl font-black uppercase text-white">
                    {coach.name}
                  </h3>
                </div>

                <div className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full bg-lime-400 text-black opacity-0 transition duration-500 group-hover:opacity-100">
                  <ArrowUpRight size={22} />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}