import Arrow from './Arrow'
import Island from '../islands/Island'
import { INSTAGRAM, MAIN_ACTION, SITE, WHATSAPP_DEFAULT_TEXT, whatsappLink } from '../content'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer closing footer--dark ground-inverse" id="contact" aria-labelledby="close-h">
      <div className="wrap">
        <div className="closing__cta close--type">
          <div className="section-head">
            {/* título com degradê azul em movimento (React Bits: Gradient Text) */}
            <h2 id="close-h">
              <Island
                name="GradientText"
                as="span"
                props={{ colors: ['#ffffff', '#8fb0ff', '#3d6bff', '#8fb0ff', '#ffffff'], animationSpeed: 6 }}
              >
                Sua loja no Google e organizada
              </Island>
            </h2>
            <p>Atendo Parnaíba de perto e o Brasil todo pela internet.</p>
          </div>
          {/* faíscas no clique e uma luz percorrendo a borda do botão (React Bits: Click Spark + Star Border) */}
          <Island
            name="ClickSpark"
            className="close-spark"
            props={{ sparkColor: ['#ffffff', '#8fb0ff', '#3d6bff'], sparkCount: 12, sparkRadius: 34, sparkSize: 12 }}
          >
            <Island
              name="StarBorder"
              className="close-star"
              props={{ as: 'div', color: '#8fb0ff', thickness: 2, radius: 14, stars: 2, glow: 0.9, backgroundColor: 'transparent', borderColor: 'rgba(143, 176, 255, 0.25)' }}
            >
              <a
                className="btn btn--primary btn--xl btn--wide"
                href={whatsappLink(WHATSAPP_DEFAULT_TEXT)}
                target="_blank"
                rel="noopener"
              >
                {MAIN_ACTION}
                <Arrow />
              </a>
            </Island>
          </Island>
        </div>
        <div className="closing__links">
          <div className="grid">
            <div className="span-4 stack-4">
              <a className="nav__logo" href="#top">
                <span className="mark" data-mark="ring" aria-hidden="true"></span>
                {SITE.name}
              </a>
              <p className="footer__lede">Sites e sistemas para lojas e comércio local.</p>
            </div>
            <div className="span-2 start-9 footer__col">
              <h3>Site</h3>
              <ul>
                <li><a href="#desafios">Desafios</a></li>
                <li><a href="#solucoes">Soluções</a></li>
                <li><a href="#projetos">Projetos</a></li>
              </ul>
            </div>
            <div className="span-2 footer__col">
              <h3>Onde atendo</h3>
              <ul>
                <li>{SITE.city} ({SITE.region})</li>
                <li>Todo o Brasil, on-line</li>
              </ul>
            </div>
          </div>
          <div className="footer__legal">
            <span>&copy; {year} {SITE.name}</span>
            <div className="socials">
              <a href={INSTAGRAM.url} target="_blank" rel="noopener" aria-label={`Instagram ${INSTAGRAM.handle}`}>
                <img src="/assets/icons/instagram-icon.svg" alt="" width="20" height="20" className="ic-ink" /> {INSTAGRAM.handle}
              </a>
            </div>
            <span className="credits">Instagram, Google, WhatsApp e Google Sheets são marcas de seus donos.</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
