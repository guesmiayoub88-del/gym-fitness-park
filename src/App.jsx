
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Disciplines from "./components/Disciplines"
import Gallery from "./components/Gallery"
import Memberships from "./components/Memberships"
import Registration from "./components/Registration"
import Contact from "./components/Contact"

function App() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <Disciplines />
      <Gallery />
      <Memberships />
      <Registration />
      <Contact />
    </main>
  )
}

export default App
