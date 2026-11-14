import Heading from '../components/Heading'
import Island from '../islands/Island'
import { PROJECTS } from '../content'

export default function Projetos() {
  const testimonials = PROJECTS.filter((p) => p.testimonial)
  return (
    <section className="section ground-inverse projetos" id="projetos" aria-labelledby="projetos-h">
      {/* aurora azul ao fundo da faixa escura (React Bits: Aurora) */}
      <Island
        name="Aurora"
        className="projetos__aurora"
        props={{ colorStops: ['#0c1631', '#1a4be0', '#5b8cff'], amplitude: 0.9, blend: 0.85, speed: 0.6, opacity: 0.55 }}
      />
      <div className="wrap">
        <div className="section-head">
          <Heading id="projetos-h" text="Projetos entregues" tone="dark" />
          <p>Feitos para o negócio de cada cliente, no computador e no celular.</p>
        </div>
        <div className="grid grid--top">
          {PROJECTS.map((p, i) => (
            <Island
              key={p.id}
              as="article"
              name="AnimatedContent"
              className="project span-6"
              props={{ distance: 70, duration: 1, delay: i * 0.15, blur: 8 }}
            >
              <p className="t-label project__kind">{p.kind}</p>
              <h3 className="t-card">{p.name}</h3>
              <p className="project__line">{p.description}</p>
              <div className="project__devices">
              {/* print que inclina seguindo o mouse, com brilho (React Bits: Tilted Card) */}
              <Island
                name="TiltedCard"
                className="project__shot"
                props={{
                  imageSrc: `${p.image}-1600.webp`,
                  altText: p.alt,
                  containerHeight: '100%',
                  containerWidth: '100%',
                  imageHeight: '100%',
                  imageWidth: '100%',
                  rotateAmplitude: 8,
                  scaleOnHover: 1.03,
                  showTooltip: false,
                  flipOnClick: false,
                  gyroscope: false,
                  radius: 16,
                  glare: 0.35,
                }}
              >
                <img
                  src={`${p.image}-1600.webp`}
                  srcSet={`${p.image}-960.webp 960w, ${p.image}-1600.webp 1600w`}
                  sizes="(max-width: 1023px) 100vw, 628px"
                  width="1600"
                  height="900"
                  alt={p.alt}
                  loading="lazy"
                  data-source="client"
                  data-subject={`site ${p.name}`}
                />
              </Island>
              {/* print do celular numa moldura de iPhone */}
              <div className="phone">
                <div className="phone__screen">
                  <img
                    src={`${p.mobile}-640.webp`}
                    srcSet={`${p.mobile}-360.webp 360w, ${p.mobile}-640.webp 634w`}
                    sizes="(max-width: 639px) 110px, 180px"
                    width="634"
                    height="1255"
                    alt={`${p.name} no celular`}
                    loading="lazy"
                  />
                </div>
              </div>
              </div>
              {p.url && (
                <a className="link project__link" href={p.url} target="_blank" rel="noopener">
                  Visitar o site
                </a>
              )}
            </Island>
          ))}
        </div>
        {/* Depoimentos em vídeo: aparecem aqui quando um projeto em content.ts tiver "testimonial". */}
        {testimonials.map((p) => (
          <figure className="testimonial" key={`t-${p.id}`}>
            <video controls preload="none" poster={p.testimonial!.poster} src={p.testimonial!.video}></video>
            <figcaption>
              {p.testimonial!.person}, {p.testimonial!.role}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
