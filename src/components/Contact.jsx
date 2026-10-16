
import { motion } from "framer-motion"
import { MapPin, Clock, ArrowUpRight, Dumbbell } from "lucide-react"

export default function Contact() {
  return (
    <>
      <section id="contact" className="bg-black px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-12 bg-lime-400" />
              <span className="text-sm font-bold uppercase tracking-[0.3em] text-lime-400">
                Nous trouver
              </span>
            </div>

            <h2 className="text-4xl font-black uppercase leading-tight text-white sm:text-6xl">
              Meet Us
              <span className="block text-lime-400">At The Gym.</span>
            </h2>

            <p className="mt-6 max-w-lg leading-7 text-white/50">
              Prêt à commencer ? Retrouve le club à Sfax et renseigne-toi
              directement sur les espaces d'entraînement et les abonnements.
            </p>

            <div className="mt-10 space-y-7">
              <div className="flex gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-lime-400/10 text-lime-400">
                  <MapPin size={23} />
                </div>
                <div>
                  <h3 className="font-bold text-white">Adresse</h3>
                  <p className="mt-2 text-sm leading-6 text-white/50">
                    Km 4.5 Route, Sfax 3022, Tunisie
                  </p>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Gym+Fitness+Park+Sfax+Tunisie"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-lime-400 hover:text-lime-300"
                  >
                    Ouvrir Google Maps
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-lime-400/10 text-lime-400">
                  <Clock size={23} />
                </div>
                <div>
                  <h3 className="font-bold text-white">Horaires indicatifs</h3>
                  <p className="mt-2 text-sm leading-6 text-white/50">
                    Les horaires sont à confirmer directement auprès du club.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative min-h-[350px] overflow-hidden border border-white/10 bg-[#101010] sm:min-h-[480px]"
          >
            <iframe
              title="Localisation de Gym Fitness Park Sfax"
              src="https://maps.google.com/maps?q=Gym%20Fitness%20Park%20Sfax%20Tunisie&t=&z=14&ie=UTF8&iwloc=&output=embed"
              className="absolute inset-0 h-full w-full border-0 grayscale invert-[0.9] contrast-[0.9]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            <a
              href="https://www.google.com/maps/search/?api=1&query=Gym+Fitness+Park+Sfax+Tunisie"
              target="_blank"
              rel="noreferrer"
              className="absolute bottom-5 left-5 flex items-center gap-3 bg-lime-400 px-5 py-4 text-sm font-black uppercase text-black transition hover:bg-lime-300"
            >
              Itinéraire
              <ArrowUpRight size={18} />
            </a>
          </motion.div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#080808] px-6 py-10 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-center">
          <a href="#accueil" className="text-xl font-black uppercase tracking-widest text-white">
            Gym <span className="text-lime-400">Fitness</span> Park
          </a>

          <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/50">
            <a href="#accueil" className="transition hover:text-lime-400">Accueil</a>
            <a href="#disciplines" className="transition hover:text-lime-400">Disciplines</a>
            <a href="#galerie" className="transition hover:text-lime-400">Galerie</a>
            <a href="#abonnements" className="transition hover:text-lime-400">Abonnements</a>
            <a href="#contact" className="transition hover:text-lime-400">Contact</a>
          </div>

          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} Gym Fitness Park. Tous droits réservés.
          </p>
        </div>
      </footer>
    </>
  )
}
