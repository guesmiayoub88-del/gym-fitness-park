import { motion } from "framer-motion"
import {
  Dumbbell,
  Flame,
  HeartPulse,
  PersonStanding,
  Trophy,
  Zap,
} from "lucide-react"

const disciplines = [
  {
    icon: Dumbbell,
    number: "01",
    title: "Musculation",
    description: "Développe ta force et construis ta masse musculaire avec un espace équipé.",
  },
  {
    icon: Flame,
    number: "02",
    title: "Cardio",
    description: "Améliore ton endurance et brûle des calories avec des équipements performants.",
  },
  {
    icon: HeartPulse,
    number: "03",
    title: "Fitness",
    description: "Travaille ton conditionnement physique et améliore ton énergie au quotidien.",
  },
  {
    icon: PersonStanding,
    number: "04",
    title: "Coaching",
    description: "Profite d'un accompagnement adapté à tes objectifs et à ton niveau.",
  },
  {
    icon: Trophy,
    number: "05",
    title: "Performance",
    description: "Repousse tes limites avec des entraînements orientés performance.",
  },
  {
    icon: Zap,
    number: "06",
    title: "Functional Training",
    description: "Développe puissance, mobilité, explosivité et coordination.",
  },
]

export default function Disciplines() {
  return (
    <section
      id="disciplines"
      className="bg-[#080808] px-6 py-24 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 max-w-3xl"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-12 bg-lime-400" />
            <span className="text-sm font-bold uppercase tracking-[0.3em] text-lime-400">
              Nos disciplines
            </span>
          </div>

          <h2 className="text-4xl font-black uppercase leading-none text-white sm:text-5xl lg:text-7xl">
            Train Hard.
            <br />
            <span className="text-lime-400">Stay Strong.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-white/50 sm:text-lg">
            Un espace pensé pour t'aider à progresser, que ton objectif soit
            la force, la condition physique ou la performance.
          </p>
        </motion.div>

        <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-3">
          {disciplines.map((discipline, index) => {
            const Icon = discipline.icon

            return (
              <motion.div
                key={discipline.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group relative bg-[#080808] p-8 transition duration-500 hover:bg-lime-400 sm:p-10"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 text-lime-400 transition duration-500 group-hover:border-black/20 group-hover:text-black">
                    <Icon size={26} strokeWidth={1.8} />
                  </div>

                  <span className="text-sm font-bold text-white/20 transition group-hover:text-black/40">
                    {discipline.number}
                  </span>
                </div>

                <h3 className="mt-12 text-2xl font-black uppercase text-white transition group-hover:text-black">
                  {discipline.title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-white/50 transition group-hover:text-black/70">
                  {discipline.description}
                </p>

                <div className="mt-8 h-px w-10 bg-lime-400 transition-all duration-500 group-hover:w-full group-hover:bg-black/30" />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}