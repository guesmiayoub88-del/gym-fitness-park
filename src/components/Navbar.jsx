import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <a href="#accueil" className="text-xl font-black uppercase tracking-widest text-white">
          Gym <span className="text-lime-400">Fitness</span> Park
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <a href="#accueil" className="text-sm font-semibold uppercase tracking-wide text-white transition hover:text-lime-400">
            Accueil
          </a>
          <a href="#disciplines" className="text-sm font-semibold uppercase tracking-wide text-white/70 transition hover:text-lime-400">
            Disciplines
          </a>
          <a href="#coachs" className="text-sm font-semibold uppercase tracking-wide text-white/70 transition hover:text-lime-400">
            Coachs
          </a>
          <a href="#galerie" className="text-sm font-semibold uppercase tracking-wide text-white/70 transition hover:text-lime-400">
            Galerie
          </a>
          <a href="#abonnements" className="text-sm font-semibold uppercase tracking-wide text-white/70 transition hover:text-lime-400">
            Abonnements
          </a>
          <a
            href="#inscription"
            className="rounded-full bg-lime-400 px-6 py-3 text-sm font-black uppercase tracking-wide text-black transition hover:bg-lime-300"
          >
            S'inscrire
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="text-white md:hidden"
          aria-label="Menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-black px-6 py-6 md:hidden">
          <div className="flex flex-col gap-5">
            <a href="#accueil" onClick={() => setOpen(false)} className="text-sm font-bold uppercase text-white">
              Accueil
            </a>
            <a href="#disciplines" onClick={() => setOpen(false)} className="text-sm font-bold uppercase text-white/70">
              Disciplines
            </a>
            <a href="#coachs" onClick={() => setOpen(false)} className="text-sm font-bold uppercase text-white/70">
              Coachs
            </a>
            <a href="#galerie" onClick={() => setOpen(false)} className="text-sm font-bold uppercase text-white/70">
              Galerie
            </a>
            <a href="#abonnements" onClick={() => setOpen(false)} className="text-sm font-bold uppercase text-white/70">
              Abonnements
            </a>
            <a
              href="#inscription"
              onClick={() => setOpen(false)}
              className="rounded-full bg-lime-400 px-6 py-3 text-center text-sm font-black uppercase text-black"
            >
              S'inscrire
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}