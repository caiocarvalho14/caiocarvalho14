// app.tsx

// components
import NavBar from "./components/NavBar"

// sections
import Hero from "./sections/Hero"
import About from "./sections/About"
import Projects from "./sections/Projects"
import Contact from "./sections/Contact"

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-cyan-500/30">
      {/* Background Effect */}
      <div className="fixed inset-0 z-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(6,182,212,0.15),rgba(255,255,255,0))] pointer-events-none"></div>
      <NavBar/>
      <Hero/>
      <About/>
      <Projects/>
      <Contact/>
    </div>
  )
}