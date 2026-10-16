import { motion } from "framer-motion"
import { ArrowDown, ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative flex min-h-screen items-center overflow-hidden bg-black"
    >
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=2200&q=90"
          alt="Gym Fitness Park"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-28 lg:px-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-6 flex items-center gap-3"
          >
            <span className="h-px w-12 bg-lime-400" />
            <span className="text-sm font-bold uppercase tracking-[0.3em] text-lime-400">
              Sfax • Tunisia
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-6xl font-black uppercase leading-[0.9] tracking-tight text-white sm:text-7xl lg:text-9xl"
          >
            Push
            <br />
            <span className="text-lime-400">Your</span>
            <br />
            Limits
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 max-w-xl text-base leading-7 text-white/70 sm:text-lg"
          >
            Repousse tes limites. Construis ta force. Transforme ton corps
            et ton esprit dans un environnement pensé pour la performance.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="#disciplines"
              className="group flex items-center justify-center gap-3 rounded-full bg-lime-400 px-8 py-4 font-black uppercase tracking-wide text-black transition hover:bg-lime-300"
            >
              Découvrir le club
              <ArrowRight
                size={20}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>

            <a
              href="#inscription"
              className="flex items-center justify-center rounded-full border border-white/30 bg-white/5 px-8 py-4 font-black uppercase tracking-wide text-white backdrop-blur-sm transition hover:border-lime-400 hover:text-lime-400"
            >
              S'inscrire maintenant
            </a>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#disciplines"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 transition hover:text-lime-400"
      >
        <ArrowDown className="animate-bounce" size={24} />
      </motion.a>
    </section>
  )
}