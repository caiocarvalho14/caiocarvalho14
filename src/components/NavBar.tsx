import Island from '../islands/Island'
import { NavLogo } from '../islands/SiteNav'
import { MAIN_ACTION } from '../content'

// A barra é o Card Nav do React Bits (src/islands/SiteNav.tsx), montado no navegador.
// O HTML abaixo é a versão estática: o que aparece antes do JavaScript carregar e o que o Google lê.
export default function NavBar() {
  return (
    <header className="site-nav">
      <a className="skip-link" href="#top">Pular para o conteúdo</a>
      <Island name="SiteNav" className="site-nav__island">
        <nav className="site-nav__fallback" aria-label="Principal">
          <div className="site-nav__links">
            <a href="#desafios">Desafios</a>
            <a href="#solucoes">Soluções</a>
            <a href="#projetos">Projetos</a>
          </div>
          <a className="site-nav__home" href="#top"><NavLogo /></a>
          <a className="site-nav__cta" href="#contato">{MAIN_ACTION}</a>
        </nav>
      </Island>
    </header>
  )
}
