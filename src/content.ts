// Dados do site. Para mudar textos, número ou projetos, edite aqui.

export const SITE = {
  name: 'Caio Carvalho',
  url: 'https://caiocarv.com/',
  city: 'Parnaíba',
  region: 'PI',
  // número do WhatsApp com código do país e DDD, só dígitos
  whatsapp: '5586995633313',
}

export const INSTAGRAM = { handle: '@caiocarvalho.sites', url: 'https://www.instagram.com/caiocarvalho.sites/' }

export const MAIN_ACTION = 'Falar no WhatsApp'

export function whatsappLink(text: string) {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`
}

export const WHATSAPP_DEFAULT_TEXT = 'Olá, Caio. Vi seu site e quero conversar sobre um site ou sistema para a minha loja.'

export type Project = {
  id: string
  name: string
  kind: string
  description: string
  image: string // caminho sem a largura, ex.: /img/prosperit3 -> /img/prosperit3-960.webp e -1600.webp
  mobile: string // print do celular, ex.: /img/prosperit3-mobile -> /img/prosperit3-mobile-360.webp e -640.webp
  alt: string
  url?: string // link do site no ar (opcional)
  // depoimento em vídeo do cliente (opcional). Quando existir, aparece na seção de projetos.
  testimonial?: { video: string; poster: string; person: string; role: string }
}

// Novos projetos entram nesta lista e aparecem no site automaticamente.
export const PROJECTS: Project[] = [
  {
    id: 'prosperit3',
    name: 'Prosperit3',
    kind: 'Landing page institucional',
    description:
      'Página de uma plataforma de finanças e negócios, com visual limpo para passar credibilidade, conteúdo e ferramentas financeiras.',
    image: '/img/prosperit3',
    mobile: '/img/prosperit3-mobile',
    url: 'https://prosperit3.com.br/',
    alt: 'Página inicial da Prosperit3 com o título sobre inteligência financeira e um simulador de patrimônio',
  },
  {
    id: 'bugaville',
    name: 'Espaço Bugaville',
    kind: 'Landing page de espaço de eventos',
    description:
      'Página de um espaço de eventos local, com domo de fotos do espaço, posts recentes do Instagram e contato direto.',
    image: '/img/bugaville',
    mobile: '/img/bugaville-mobile',
    url: 'https://espacobugaville.vercel.app/',
    alt: 'Página do Espaço Bugaville com a galeria de fotos da piscina, da varanda e do jardim',
  },
]

export const SERVICES = [
  {
    name: 'Landing page',
    line: 'Produtos, endereço, horário e WhatsApp numa página feita para aparecer no Google.',
    value: '1 semana',
  },
  {
    name: 'Sistema sob medida',
    line: 'Pedidos, estoque e clientes num lugar só, do jeito que sua loja já trabalha.',
    value: '2 a 3 semanas',
  },
  {
    name: 'Automação de processos',
    line: 'O sistema confirma pedidos e avisa o cliente sem você digitar nada.',
    value: 'Junto do sistema',
  },
]

export const STEPS = [
  { title: 'Conversa', line: 'Você me conta como vende hoje e o que mais toma o seu tempo.' },
  { title: 'Proposta', line: 'Eu mostro o que faz sentido para a sua loja, com prazo e valor fechados.' },
  { title: 'Entrega', line: 'Seu site ou sistema vai ao ar e eu continuo cuidando da hospedagem e do suporte.' },
]
