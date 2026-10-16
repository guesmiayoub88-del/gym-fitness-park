
import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, CheckCircle2 } from "lucide-react"

export default function Registration() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    plan: "Premium",
    goal: "Prise de muscle",
  })

  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
    setSubmitted(false)
  }

  return (
    <section id="inscription" className="bg-[#080808] px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:gap-20">
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-12 bg-lime-400" />
            <span className="text-sm font-bold uppercase tracking-[0.3em] text-lime-400">
              Passe à l'action
            </span>
          </div>

          <h2 className="text-5xl font-black uppercase leading-tight text-white sm:text-6xl lg:text-7xl">
            Your Next
            <span className="block text-lime-400">Chapter</span>
            Starts Now.
          </h2>

          <p className="mt-7 max-w-lg text-base leading-7 text-white/50">
            Partage tes coordonnées et tes objectifs pour demander des
            informations sur les abonnements du club.
          </p>

          <div className="mt-10 flex items-center gap-4 border-l-2 border-lime-400 pl-5">
            <div>
              <p className="font-bold text-white">Ton objectif. Ton rythme.</p>
              <p className="mt-1 text-sm text-white/40">
                Commence à préparer ton prochain défi.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border border-white/10 bg-[#0d0d0d] p-6 sm:p-10"
        >
          {submitted ? (
            <div className="flex min-h-[400px] flex-col items-center justify-center text-center">
              <CheckCircle2 size={56} className="text-lime-400" />
              <h3 className="mt-6 text-2xl font-black uppercase text-white">
                Formulaire rempli !
              </h3>
              <p className="mt-3 max-w-sm text-sm leading-6 text-white/50">
                Cette démonstration ne transmet pas encore tes informations au
                club. Connecte un service de formulaire pour recevoir les demandes.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-7 border border-white/20 px-6 py-3 text-sm font-bold text-white transition hover:border-lime-400 hover:text-lime-400"
              >
                Modifier les informations
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-white/60">
                  Nom complet
                </label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Ton nom complet"
                  className="w-full border border-white/10 bg-black px-4 py-4 text-white outline-none transition placeholder:text-white/25 focus:border-lime-400"
                />
              </div>

              <div>
                <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-white/60">
                  Numéro de téléphone
                </label>
                <input
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  placeholder="Ton numéro de téléphone"
                  className="w-full border border-white/10 bg-black px-4 py-4 text-white outline-none transition placeholder:text-white/25 focus:border-lime-400"
                />
              </div>

              <div>
                <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-white/60">
                  Abonnement souhaité
                </label>
                <select
                  name="plan"
                  value={form.plan}
                  onChange={handleChange}
                  className="w-full border border-white/10 bg-black px-4 py-4 text-white outline-none focus:border-lime-400"
                >
                  <option>Starter</option>
                  <option>Premium</option>
                  <option>Performance</option>
                  <option>Je souhaite être conseillé</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-white/60">
                  Ton objectif
                </label>
                <select
                  name="goal"
                  value={form.goal}
                  onChange={handleChange}
                  className="w-full border border-white/10 bg-black px-4 py-4 text-white outline-none focus:border-lime-400"
                >
                  <option>Prise de muscle</option>
                  <option>Perte de poids</option>
                  <option>Remise en forme</option>
                  <option>Endurance et cardio</option>
                  <option>Performance sportive</option>
                </select>
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-3 bg-lime-400 px-6 py-4 font-black uppercase tracking-wide text-black transition hover:bg-lime-300"
              >
                Envoyer ma demande
                <ArrowRight size={19} />
              </button>

              <p className="text-center text-xs leading-5 text-white/30">
                Démonstration : aucune donnée n'est envoyée au club pour le moment.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
