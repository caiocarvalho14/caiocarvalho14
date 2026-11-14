import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import Desafios from './sections/Desafios'
import Solucoes from './sections/Solucoes'
import Projetos from './sections/Projetos'
import Contato from './sections/Contato'
import ThreadsBand from './components/ThreadsBand'
import Splash from './components/Splash'
import { MAIN_ACTION } from './content'

// A página é renderizada para HTML estático (scripts/prerender.mjs). Os comportamentos
// (menu, animações, formulário) ficam nos scripts de public/assets e public/site.js.
export default function App() {
  return (
    <>
      <Splash />
      <NavBar />
      <main id="top">
        <Hero />
        <Desafios />
        <ThreadsBand />
        <Solucoes />
        <Projetos />
        <Contato />
      </main>
      <Footer />
      <nav className="actionbar" aria-label="Ação rápida">
        <a className="btn btn--primary" href="#contato">{MAIN_ACTION}</a>
      </nav>
    </>
  )
}
