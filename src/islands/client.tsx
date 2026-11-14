// Monta os componentes do React Bits nos pontos marcados com data-rb na página estática.
import { useLayoutEffect, useRef } from 'react'
import { createRoot } from 'react-dom/client'
import { REGISTRY, type IslandName } from './registry'

// Coloca de volta, dentro do componente, os nós que já estavam na página.
// eslint-disable-next-line react-refresh/only-export-components -- arquivo de entrada, não é recarregado por HMR
function Adopt({ nodes }: { nodes: Node[] }) {
  const ref = useRef<HTMLSpanElement>(null)
  useLayoutEffect(() => {
    ref.current?.append(...nodes)
  }, [nodes])
  return <span ref={ref} className="rb-adopt" />
}

// Resolve quando o splash começa a sair (ou na hora, se não há splash nesta visita). Ver o script no <head>.
const html = document.documentElement
const splashDone: Promise<void> =
  html.classList.contains('has-splash') && !html.classList.contains('is-revealed')
    ? new Promise((resolve) => window.addEventListener('splash:reveal', () => resolve(), { once: true }))
    : Promise.resolve()

async function mount(el: HTMLElement) {
  const name = el.dataset.rb as IslandName
  const entry = REGISTRY[name]
  if (!entry) return
  const props = el.dataset.rbProps ? JSON.parse(el.dataset.rbProps) : {}
  const { default: Component } = await entry.load()
  // as animações da abertura e da barra esperam a cortina do splash subir (o código já fica carregado)
  if (el.closest('.hero, .site-nav')) await splashDone
  const adopt = 'adopt' in entry && entry.adopt
  const nodes = adopt ? [...el.childNodes] : []
  if (adopt) el.replaceChildren()
  el.dataset.rbMounted = ''
  createRoot(el).render(adopt ? <Component {...props}><Adopt nodes={nodes} /></Component> : <Component {...props} />)
}

function start() {
  // de fora para dentro: um componente que envolve outro é montado primeiro
  document.querySelectorAll<HTMLElement>('[data-rb]').forEach((el) => {
    mount(el).catch((err) => console.error(`React Bits: ${el.dataset.rb}`, err))
  })
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start)
else start()
