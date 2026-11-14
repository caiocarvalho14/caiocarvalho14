// Barra de navegação com cards que abrem (React Bits: Card Nav), já configurada para o site.
import CardNav, { type CardNavItem } from '../rb/CardNav'
import { INSTAGRAM, MAIN_ACTION, PROJECTS, SITE, WHATSAPP_DEFAULT_TEXT, whatsappLink } from '../content'

const NAV_ITEMS: CardNavItem[] = [
  {
    label: 'Sua loja',
    description: 'O que trava quem vende só pelo Instagram e como resolver.',
    bgColor: '#eef2fb',
    textColor: '#0c1631',
    links: [
      { label: 'Desafios', href: '#desafios' },
      { label: 'Soluções', href: '#solucoes' },
    ],
  },
  {
    label: 'Projetos',
    description: 'Sites no ar, no computador e no celular.',
    bgColor: '#0c1631',
    textColor: '#ffffff',
    links: PROJECTS.map((p) => ({ label: p.name, href: '#projetos' })),
  },
  {
    label: 'Contato',
    description: 'Conversa pelo WhatsApp, sem compromisso.',
    bgColor: '#1a4be0',
    textColor: '#ffffff',
    links: [
      { label: 'Formulário', href: '#contato' },
      { label: 'WhatsApp direto', href: whatsappLink(WHATSAPP_DEFAULT_TEXT) },
      { label: `Instagram ${INSTAGRAM.handle}`, href: INSTAGRAM.url },
    ],
  },
]

export function NavLogo() {
  return (
    <span className="site-nav__logo">
      <span className="mark" data-mark="ring" aria-hidden="true"></span>
      {SITE.name}
    </span>
  )
}

export default function SiteNav() {
  return (
    <CardNav
      logo={<NavLogo />}
      logoAlt={`${SITE.name}, início`}
      logoHref="#top"
      items={NAV_ITEMS}
      cta={{ label: MAIN_ACTION, href: '#contato' }}
      theme="light"
      surface="glass"
      maxWidth={1280}
      cardHeight={196}
      accentColor="#1a4be0"
      ariaLabel="Principal"
    />
  )
}
