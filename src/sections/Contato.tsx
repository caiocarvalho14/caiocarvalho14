import Arrow from '../components/Arrow'
import Heading from '../components/Heading'
import Island from '../islands/Island'
import { MAIN_ACTION, SITE, STEPS, WHATSAPP_DEFAULT_TEXT, whatsappLink } from '../content'

// O formulário não envia dados para servidor: o site.js monta a mensagem e abre o WhatsApp com ela pronta.
export default function Contato() {
  return (
    <section className="section" id="contato" aria-labelledby="contato-h">
      <div className="wrap">
        <div className="grid grid--top">
          <div className="span-5 stack-6">
            <Heading id="contato-h" text="Me conte como sua loja funciona hoje" />
            {/* aparece enquanto o formulário não está completo; some quando o botão do formulário aparece (site.js) */}
            <a
              className="btn btn--primary contact-direct"
              href={whatsappLink(WHATSAPP_DEFAULT_TEXT)}
              target="_blank"
              rel="noopener"
              data-wa-direct
            >
              {MAIN_ACTION}
              <Arrow />
            </a>
            <p className="t-lead">A conversa é pelo WhatsApp e não tem compromisso. Depois dela, o caminho é este:</p>
            <ol className="steps-list">
              {STEPS.map((s, i) => (
                <Island
                  key={s.title}
                  as="li"
                  name="AnimatedContent"
                  props={{ distance: 40, duration: 0.8, delay: 0.15 + i * 0.18, blur: 6 }}
                >
                  <span className="steps-list__num" aria-hidden="true">{i + 1}</span>
                  <span>
                    <strong>{s.title}</strong>
                    {s.line}
                  </span>
                </Island>
              ))}
            </ol>
          </div>
          <Island
            name="AnimatedContent"
            className="span-6 start-7 contact-col"
            props={{ distance: 60, duration: 1, delay: 0.1, blur: 8 }}
          >
            <form
              className="form contact-form"
              action={`https://wa.me/${SITE.whatsapp}`}
              method="get"
              target="_blank"
              data-whatsapp
              data-fix="Falta preencher {n} campo(s)."
              noValidate
            >
              <div className="field">
                <label htmlFor="f-nome">Seu nome</label>
                <input id="f-nome" type="text" autoComplete="name" required aria-describedby="f-nome-err" data-wa="nome" />
                <p className="field__error" id="f-nome-err" hidden>Escreva seu nome.</p>
              </div>
              <div className="field">
                <label htmlFor="f-cidade">Sua cidade</label>
                <input id="f-cidade" type="text" autoComplete="address-level2" required aria-describedby="f-cidade-err" data-wa="cidade" />
                <p className="field__error" id="f-cidade-err" hidden>Escreva a cidade da sua loja.</p>
              </div>
              <div className="field">
                <label htmlFor="f-loja">Sua loja ou negócio</label>
                <input id="f-loja" type="text" autoComplete="organization" required aria-describedby="f-loja-err" data-wa="loja" />
                <p className="field__error" id="f-loja-err" hidden>Escreva o nome ou o tipo da sua loja.</p>
              </div>
              <div className="field">
                <label htmlFor="f-precisa">O que você precisa</label>
                <select id="f-precisa" required aria-describedby="f-precisa-err" data-wa="precisa" defaultValue="">
                  <option value="" disabled>Escolha uma opção</option>
                  <option>Landing page</option>
                  <option>Sistema sob medida</option>
                  <option>Ainda não sei</option>
                </select>
                <p className="field__error" id="f-precisa-err" hidden>Escolha uma opção da lista.</p>
              </div>
              <div className="field field--full">
                <label htmlFor="f-msg">Como você vende hoje (opcional)</label>
                <textarea id="f-msg" rows={3} data-wa="mensagem"></textarea>
              </div>
              <input type="hidden" name="text" value="" />
              {/* só aparece quando os campos obrigatórios estão preenchidos (site.js) */}
              <div className="btn-row contact-submit" data-wa-submit hidden>
                <button className="btn btn--primary" type="submit">{MAIN_ACTION}<Arrow /></button>
              </div>
              <p className="form__status" role="status" data-form-status></p>
              <p className="t-small contact-hint" data-wa-hint>Preencha nome, cidade, loja e o que você precisa para enviar por aqui, ou fale direto pelo botão do WhatsApp.</p>
              <p className="t-small contact-ready" data-wa-ready hidden>O WhatsApp abre com a sua mensagem pronta. É só tocar em enviar.</p>
            </form>
          </Island>
        </div>
      </div>
    </section>
  )
}
