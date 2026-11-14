import Heading from '../components/Heading'
import Island from '../islands/Island'

// Os três problemas da loja que vende só pelo Instagram, cada um com o ícone real da ferramenta.
const ITEMS = [
  {
    title: 'Vendas presas ao alcance do post',
    line: 'Se o Instagram não entrega o post, ninguém vê seus produtos naquele dia.',
    icons: [{ src: '/assets/icons/instagram-icon.svg', alt: 'Instagram', cls: 'ic-ink' }],
  },
  {
    title: 'Clientes do Google com o concorrente',
    line: 'Quem pesquisa uma loja como a sua em Parnaíba encontra primeiro o concorrente que tem site.',
    icons: [{ src: '/assets/icons/google-icon.svg', alt: 'Google', cls: '' }],
  },
  {
    title: 'Pedidos anotados em três lugares',
    line: 'Pedido no WhatsApp, estoque na planilha, conta no caderno. No fim do mês ninguém sabe quanto vendeu.',
    icons: [
      { src: '/assets/icons/whatsapp.svg', alt: 'WhatsApp', cls: '' },
      { src: '/assets/icons/google-sheets.svg', alt: 'Google Sheets', cls: 'ic-tall' },
    ],
  },
]

export default function Desafios() {
  return (
    <section className="section" id="desafios" aria-labelledby="desafios-h">
      <div className="wrap">
        <div className="section-head">
          <Heading id="desafios-h" text="Os desafios de vender só pelo Instagram." muted="Três coisas que travam a loja local." />
        </div>
        <div className="grid">
          {ITEMS.map((item, i) => (
            // cada card entra em sequência e tem uma luz que segue o mouse (React Bits: Animated Content + Spotlight Card)
            <Island
              key={item.title}
              name="AnimatedContent"
              className="span-4 pain"
              props={{ distance: 60, duration: 0.9, delay: i * 0.12, blur: 6 }}
            >
              <Island
                name="SpotlightCard"
                className="pain__card"
                props={{ theme: 'light', spotlightColor: 'rgba(26, 75, 224, 0.22)', spotlightSize: 320, borderGlow: 0.8 }}
              >
                <div className="pain__icons" role="img" aria-label={item.icons.map((ic) => ic.alt).join(' e ')}>
                  {item.icons.map((ic) => (
                    <img key={ic.alt} className={`ic ic-56 ${ic.cls}`.trim()} src={ic.src} alt="" width="56" height="56" loading="lazy" />
                  ))}
                </div>
                <span className="pain__num" aria-hidden="true">0{i + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.line}</p>
              </Island>
            </Island>
          ))}
        </div>
      </div>
    </section>
  )
}
