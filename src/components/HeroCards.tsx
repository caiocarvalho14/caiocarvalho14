// Cartões flutuantes ao redor do título da abertura: contam o resultado que o cliente compra
// (encontrado no Google → pedido chega → pedidos organizados → site no ar).
// São ilustração de interface, não dados reais. Decorativos para leitores de tela (aria-hidden).
// A flutuação e a entrada são CSS (public/site.css); o parallax com o mouse está em public/site.js.

const Star = () => (
  <svg viewBox="0 0 24 24" width="12" height="12" aria-hidden="true">
    <path fill="#f5b400" d="m12 2.8 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2L12 17l-5.6 3 1.1-6.2L3 9.4l6.2-.9z" />
  </svg>
)

export default function HeroCards() {
  return (
    <div className="hero__cards" aria-hidden="true">
      {/* 1. a loja encontrada no Google */}
      <div className="hcard hcard--google" style={{ '--i': 0, '--d': 18 } as React.CSSProperties}>
        <div className="hcard__float">
          <div className="hcard__meta">
            <img src="/assets/icons/google-icon.svg" alt="" width="14" height="14" /> Pesquisa · Parnaíba
          </div>
          <div className="hcard__title hcard__title--link">Sua Loja · Parnaíba – PI</div>
          <div className="hcard__meta">
            <span className="hcard__stars"><Star /><Star /><Star /><Star /><Star /></span>
            <span className="hcard__open">Aberto agora</span>
          </div>
          <div className="hcard__chips">
            <span>Site</span>
            <span>Como chegar</span>
          </div>
        </div>
      </div>

      {/* 2. o pedido chegando pelo WhatsApp */}
      <div className="hcard hcard--whats" style={{ '--i': 1, '--d': 28 } as React.CSSProperties}>
        <div className="hcard__float">
          <div className="hcard__row">
            <img className="hcard__app" src="/assets/icons/whatsapp.svg" alt="" width="30" height="30" />
            <div>
              <div className="hcard__title">Novo pedido pelo site</div>
              <div className="hcard__meta">2 itens · retirada na loja</div>
            </div>
            <span className="hcard__time">agora</span>
          </div>
        </div>
      </div>

      {/* 3. os pedidos organizados no sistema */}
      <div className="hcard hcard--orders" style={{ '--i': 2, '--d': 12 } as React.CSSProperties}>
        <div className="hcard__float">
          <div className="hcard__title">Pedidos de hoje</div>
          <ul className="hcard__list">
            <li><span>Maria S.</span><span className="hcard__tag hcard__tag--ok">Pago</span></li>
            <li><span>João P.</span><span className="hcard__tag hcard__tag--wait">Separando</span></li>
            <li><span>Ana L.</span><span className="hcard__tag hcard__tag--done">Entregue</span></li>
          </ul>
        </div>
      </div>

      {/* 4. o site publicado */}
      <div className="hcard hcard--live" style={{ '--i': 3, '--d': 22 } as React.CSSProperties}>
        <div className="hcard__float">
          <div className="hcard__row">
            <span className="hcard__check">
              <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
                <path d="m5 12.5 4.5 4.5L19 7.5" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <div>
              <div className="hcard__title">Site no ar</div>
              <div className="hcard__meta">sualoja.com.br</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
