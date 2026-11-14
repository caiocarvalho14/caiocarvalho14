import { INSTAGRAM, SITE } from '../content'

// Tela de abertura: nome, "Desenvolvedor" e o Instagram no centro, sobre fundo branco.
// Depois de ~2s sobe como uma cortina e revela a página (clique ou tecla pulam a espera).
// É HTML e CSS puros (public/site.css), controlados pelo script no <head> do index.html,
// para aparecer já no primeiro quadro, antes de qualquer JavaScript da página carregar.
// Só aparece na primeira visita da sessão; sem JavaScript, não aparece.
const LETTERS = SITE.name.toUpperCase().split('')

export default function Splash() {
  return (
    <div className="splash" aria-hidden="true">
      <div className="splash__glow" />
      <div className="splash__content">
        <p className="splash__name">
          {LETTERS.map((ch, i) => (
            <span key={i} style={{ '--i': i } as React.CSSProperties}>
              {ch === ' ' ? ' ' : ch}
            </span>
          ))}
        </p>
        <span className="splash__line" />
        <span className="splash__role">Desenvolvedor</span>
        <span className="splash__insta">{INSTAGRAM.handle}</span>
      </div>
    </div>
  )
}
