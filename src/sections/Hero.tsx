import Arrow from '../components/Arrow'
import Island from '../islands/Island'
import HeroCards from '../components/HeroCards'
import { INSTAGRAM, MAIN_ACTION } from '../content'

const BUSINESSES = ['lojas', 'restaurantes', 'salões', 'clínicas', 'lojas']

export default function Hero() {
  return (
    <section className="hero hero--center" aria-labelledby="hero-h">
      {/* gradiente azul e branco se movendo devagar, com um grão leve (React Bits: Grainient) */}
      <Island
        name="Grainient"
        className="hero__bg"
        props={{
          colors: ['#ffffff', '#e4ecff', '#b9cdff', '#f3f6ff'],
          lightMode: true,
          angle: 40,
          speed: 0.35,
          flow: 0.6,
          silk: 0.5,
          softness: 1.3,
          grainAmount: 0.035,
          grainAnimated: false,
          interactive: true,
          stir: 0.5,
          clickSwirl: false,
        }}
      />
      <HeroCards />
      <div className="wrap hero__inner">
        {/* foto redonda com o texto girando em volta (React Bits: Circular Text) */}
        <Island
          name="CircularText"
          className="hero__portrait"
          props={{
            text: 'CAIO CARVALHO ✦ DESENVOLVEDOR WEB ✦ PARNAÍBA ✦ ',
            size: 196,
            fontSize: 12,
            fontWeight: 500,
            spinDuration: 26,
            color: '#1a4be0',
            onHover: 'speedUp',
          }}
        >
          <img
            className="hero__photo"
            src="/img/caio-round-480.webp"
            srcSet="/img/caio-round-320.webp 320w, /img/caio-round-480.webp 480w"
            sizes="160px"
            width="480"
            height="480"
            alt="Caio Carvalho, desenvolvedor"
            fetchPriority="high"
            data-source="client"
            data-subject="o desenvolvedor"
          />
        </Island>

        <p className="hero__pill">
          <span className="dot" aria-hidden="true"></span>
          <Island
            name="ShinyText"
            as="span"
            props={{ text: 'Parnaíba (PI) e todo o Brasil', color: '#4a5570', shineColor: '#1a4be0', speed: 3 }}
          >
            Parnaíba (PI) e todo o Brasil
          </Island>
        </p>

        <h1 id="hero-h" className="hero__title">
          <Island
            name="SplitText"
            as="span"
            className="hero__line"
            props={{ text: 'Sites e sistemas para', tag: 'span', splitType: 'words', effect: 'blur', trigger: 'load', delay: 90, duration: 1 }}
          >
            Sites e sistemas para
          </Island>
          <span className="hero__line hero__line--2">
            <Island
              name="RotatingText"
              as="span"
              className="hero__rotate"
              props={{
                texts: BUSINESSES,
                mainClassName: 'hero__rotate-word',
                effect: 'slide',
                splitBy: 'characters',
                staggerDuration: 0.025,
                staggerFrom: 'last',
                rotationInterval: 2600,
                transition: { type: 'spring', damping: 30, stiffness: 400 },
              }}
            >
              lojas
            </Island>{' '}
            <Island
              name="SplitText"
              as="span"
              props={{ text: 'de Parnaíba', tag: 'span', splitType: 'words', effect: 'blur', trigger: 'load', delay: 90, duration: 1 }}
            >
              de Parnaíba
            </Island>
          </span>
        </h1>

        <Island
          name="AnimatedContent"
          className="hero__rest"
          props={{ trigger: 'mount', distance: 30, duration: 1, delay: 0.5, blur: 8 }}
        >
          <p className="hero__lead">
            Faço o site que coloca sua loja no Google e o sistema que organiza pedidos e
            estoque.
          </p>
          <div className="btn-row hero__actions">
            <a className="btn btn--primary" href="#contato">{MAIN_ACTION}<Arrow /></a>
            <a className="btn btn--secondary" href="#projetos">Ver projetos</a>
          </div>
          <a className="hero__insta" href={INSTAGRAM.url} target="_blank" rel="noopener">
            <img src="/assets/icons/instagram-icon.svg" alt="" width="18" height="18" />
            Siga no Instagram <strong>{INSTAGRAM.handle}</strong>
          </a>
        </Island>
      </div>

      {/* faixa de texto que acelera com a rolagem (React Bits: Scroll Velocity) */}
      <div className="hero__marquee" aria-hidden="true">
        <Island
          name="ScrollVelocity"
          props={{
            texts: ['Landing pages ✦ Sistemas sob medida ✦ Automação de processos ✦ Hospedagem e suporte inclusos ✦ '],
            velocity: 35,
            numCopies: 4,
            className: 'hero__marquee-text',
            fadeEdges: true,
            fontSize: 15,
            fontWeight: 500,
            color: '#646e81',
          }}
        >
          <span className="hero__marquee-text">Landing pages ✦ Sistemas sob medida ✦ Automação de processos ✦ Hospedagem e suporte inclusos ✦</span>
        </Island>
      </div>
    </section>
  )
}
