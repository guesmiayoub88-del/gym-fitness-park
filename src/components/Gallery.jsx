import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

const images = [
  {
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=85",
    title: "L'espace training",
    category: "ÉQUIPEMENTS",
    size: "md:col-span-2 md:row-span-2",
  },
  {
    image:
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=900&q=85",
    title: "Force & puissance",
    category: "MUSCULATION",
    size: "",
  },
  {
    image:
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=900&q=85",
    title: "Repousse tes limites",
    category: "PERFORMANCE",
    size: "",
  },
  {
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=85",
    title: "Un mental solide",
    category: "ENTRAÎNEMENT",
    size: "",
  },
  {
    image:
      "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?auto=format&fit=crop&w=900&q=85",
    title: "Passe au niveau supérieur",
    category: "FITNESS",
    size: "",
  },
]

export default function Gallery() {
  return (
    <section id="galerie" className="bg-[#080808] px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end"
        >
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-12 bg-lime-400" />
              <span className="text-sm font-bold uppercase tracking-[0.3em] text-lime-400">
                Notre univers
              </span>
            </div>

            <h2 className="text-4xl font-black uppercase leading-none text-white sm:text-5xl lg:text-7xl">
              Built For
              <br />
              <span className="text-lime-400">Greatness.</span>
            </h2>
          </div>

          <p className="max-w-md text-base leading-7 text-white/50">
            Découvre l'univers du training et prépare-toi à dépasser tes
            objectifs, séance après séance.
          </p>
        </motion.div>

        <div className="grid auto-rows-[240px] gap-4 md:auto-rows-[280px] md:grid-cols-3">
          {images.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`group relative overflow-hidden bg-[#111] ${item.size}`}
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <span className="text-xs font-bold tracking-[0.2em] text-lime-400">
                  {item.category}
                </span>

                <div className="mt-2 flex items-end justify-between gap-4">
                  <h3 className="text-xl font-black uppercase text-white sm:text-2xl">
                    {item.title}
                  </h3>

                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/30 text-white transition group-hover:border-lime-400 group-hover:bg-lime-400 group-hover:text-black">
                    <ArrowUpRight size={20} />
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}