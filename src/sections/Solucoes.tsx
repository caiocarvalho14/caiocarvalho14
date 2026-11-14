import Heading from '../components/Heading'
import Island from '../islands/Island'
import { SERVICES } from '../content'

// Diagrama (kit): os canais soltos de hoje entrando num sistema só, com a luz correndo pelas linhas.
const DIAGRAM = {
  layout: 'fanin',
  alt: 'Pedidos do Instagram e do WhatsApp, clientes do Google, o estoque da planilha e as contas do caderno entram num só sistema da loja, que mostra o painel do dia.',
  ground: 'none',
  sources: [
    { label: 'Instagram', icon: 'instagram-icon', sub: 'Pedidos' },
    { label: 'WhatsApp', icon: 'whatsapp', sub: 'Pedidos' },
    { label: 'Google', icon: 'google-icon', sub: 'Clientes novos' },
    { label: 'Planilha', icon: 'google-sheets', sub: 'Estoque' },
    { label: 'Caderno', icon: 'ui:notebook-pen', sub: 'Contas' },
  ],
  target: { label: 'Sistema da loja', icon: 'ui:store' },
  then: { label: 'Painel do dia', icon: 'ui:layout-dashboard', meta: 'hoje' },
}

export default function Solucoes() {
  return (
    <section className="section" id="solucoes" aria-labelledby="solucoes-h">
      <div className="wrap">
        <div className="grid grid--top">
          <div className="span-5 stack-6">
            <Heading id="solucoes-h" text="Soluções para a sua loja." muted="Você escolhe por onde começar." />
            <ul className="rows">
              {SERVICES.map((s, i) => (
                <Island
                  key={s.name}
                  as="li"
                  name="AnimatedContent"
                  className="service-row"
                  props={{ distance: 40, direction: 'horizontal', reverse: true, duration: 0.8, delay: i * 0.12 }}
                >
                  <span className="rows__name">
                    {s.name}
                    <small>{s.line}</small>
                  </span>
                  <span className="rows__value">{s.value}</span>
                </Island>
              ))}
            </ul>
            <p className="solucoes__note">
              Hospedagem, manutenção e suporte inclusos. O valor sai na proposta, porque cada loja precisa de uma coisa.
            </p>
          </div>
          <Island
            name="AnimatedContent"
            className="span-6 start-7 solucoes__col"
            props={{ distance: 60, duration: 1, scale: 0.94, blur: 8 }}
          >
            <div className="frame solucoes__visual">
              <div className="dg" data-diagram={JSON.stringify(DIAGRAM)} data-icon-base="/assets/icons"></div>
            </div>
          </Island>
        </div>
      </div>
    </section>
  )
}
