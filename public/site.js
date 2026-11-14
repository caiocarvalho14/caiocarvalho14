// Formulário de contato: monta a mensagem com o que a pessoa escreveu e abre o WhatsApp com ela pronta.
// A validação dos campos (erros embaixo de cada um) é feita pelo assets/system.js.
document.querySelectorAll('form[data-whatsapp]').forEach((form) => {
  const value = (key) => (form.querySelector(`[data-wa="${key}"]`)?.value || '').trim()

  // O botão de enviar do formulário só aparece com os campos obrigatórios preenchidos.
  // Enquanto isso, fica visível o botão que leva direto ao WhatsApp (abaixo do título da seção).
  const section = form.closest('section') || document
  const submit = form.querySelector('[data-wa-submit]')
  const ready = form.querySelector('[data-wa-ready]')
  const hint = form.querySelector('[data-wa-hint]')
  const direct = section.querySelector('[data-wa-direct]')
  const required = [...form.querySelectorAll('[required]')]

  const update = () => {
    const complete = required.every((el) => el.value.trim() !== '')
    if (submit) submit.hidden = !complete
    if (ready) ready.hidden = !complete
    if (hint) hint.hidden = complete
    if (direct) direct.hidden = complete
  }
  required.forEach((el) => {
    el.addEventListener('input', update)
    el.addEventListener('change', update)
  })
  update()

  form.addEventListener('submit', () => {
    const lines = [
      `Olá, Caio. Meu nome é ${value('nome')}.`,
      `Minha loja: ${value('loja')}, em ${value('cidade')}.`,
      `Preciso de: ${value('precisa')}.`,
    ]
    if (value('mensagem')) lines.push(`Como vendo hoje: ${value('mensagem')}`)
    form.querySelector('input[name="text"]').value = lines.join('\n')
  })
})

// Abertura: os cartões flutuantes se deslocam de leve com o mouse (cada um na sua profundidade, ver site.css).
;(() => {
  const cards = document.querySelector('.hero__cards')
  if (!cards || !matchMedia('(hover: hover) and (pointer: fine)').matches) return
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return
  let raf = 0
  addEventListener('pointermove', (e) => {
    if (raf) return
    raf = requestAnimationFrame(() => {
      raf = 0
      cards.style.setProperty('--px', ((e.clientX / innerWidth) * 2 - 1).toFixed(3))
      cards.style.setProperty('--py', ((e.clientY / innerHeight) * 2 - 1).toFixed(3))
    })
  }, { passive: true })
})()
