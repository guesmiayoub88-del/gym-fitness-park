import { motion } from "framer-motion"
import { ArrowRight, Check, Crown, Dumbbell, Zap } from "lucide-react"

const plans = [
  {
    name: "STARTER",
    subtitle: "Pour commencer",
    icon: Dumbbell,
    price: "À définir",
    period: "",
    features: [
      "Accès au club",
      "Espace musculation",
      "Espace cardio",
    ],
    featured: false,
  },
  {
    name: "PREMIUM",
    subtitle: "Pour aller plus loin",
    icon: Crown,
    price: "À définir",
    period: "",
    features: [
      "Accès au club",
      "Espace musculation",
      "Espace cardio",
      "Accompagnement selon disponibilité",
    ],
    featured: true,
  },
  {
    name: "PERFORMANCE",
    subtitle: "Pour repousser tes limites",
    icon: Zap,
    price: "À définir",
    period: "",
    features: [
      "Accès au club",
      "Espaces d'entraînement",
      "Objectifs personnalisés",
    ],
    featured: false,
  },
]

export default function Memberships() {
  return (
    <section
      id="abonnements"
      className="bg-black px-6 py-24 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-lime-400" />
            <span className="text-sm font-bold uppercase tracking-[0.3em] text-lime-400">
              Nos abonnements
            </span>
            <span className="h-px w-10 bg-lime-400" />
          </div>

          <h2 className="text-4xl font-black uppercase leading-tight text-white sm:text-5xl lg:text-7xl">
            Invest in
            <span className="block text-lime-400">Yourself.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-white/50">
            Choisis la formule adaptée à tes objectifs et prépare-toi à passer
            au niveau supérieur.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-3">
          {plans.map((plan, index) => {
            const Icon = plan.icon

            return (
              <motion.article
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className={`relative flex flex-col border p-8 transition duration-300 hover:-translate-y-2 sm:p-10 ${
                  plan.featured
                    ? "border-lime-400 bg-lime-400 text-black"
                    : "border-white/10 bg-[#0a0a0a] text-white hover:border-lime-400/50"
                }`}
              >
                {plan.featured && (
                  <span className="absolute right-5 top-5 rounded-full bg-black px-4 py-2 text-[10px] font-black uppercase tracking-widest text-lime-400">
                    Popular
                  </span>
                )}

                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl ${
                    plan.featured
                      ? "bg-black text-lime-400"
                      : "bg-lime-400/10 text-lime-400"
                  }`}
                >
                  <Icon size={27} />
                </div>

                <p
                  className={`mt-8 text-xs font-bold uppercase tracking-[0.2em] ${
                    plan.featured ? "text-black/60" : "text-white/40"
                  }`}
                >
                  {plan.subtitle}
                </p>

                <h3 className="mt-2 text-3xl font-black uppercase">
                  {plan.name}
                </h3>

                <div
                  className={`mt-8 border-b pb-8 ${
                    plan.featured ? "border-black/20" : "border-white/10"
                  }`}
                >
                  <p className="text-2xl font-black">{plan.price}</p>
                  <p
                    className={`mt-2 text-sm ${
                      plan.featured ? "text-black/60" : "text-white/40"
                    }`}
                  >
                    Tarif à confirmer auprès du club
                  </p>
                </div>

                <ul className="mt-8 flex-1 space-y-5">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check
                        size={19}
                        className={`mt-0.5 shrink-0 ${
                          plan.featured ? "text-black" : "text-lime-400"
                        }`}
                      />
                      <span
                        className={`text-sm ${
                          plan.featured ? "text-black/80" : "text-white/70"
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#inscription"
                  className={`mt-10 flex items-center justify-center gap-3 px-6 py-4 text-sm font-black uppercase tracking-wide transition ${
                    plan.featured
                      ? "bg-black text-lime-400 hover:bg-black/80"
                      : "bg-white/5 text-white hover:bg-lime-400 hover:text-black"
                  }`}
                >
                  Choisir cette formule
                  <ArrowRight size={18} />
                </a>
              </motion.article>
            )
          })}
        </div>

        <p className="mt-8 text-center text-xs leading-6 text-white/30">
          Les tarifs et les prestations doivent être confirmés directement
          auprès de Gym Fitness Park Sfax.
        </p>
      </div>
    </section>
  )
}