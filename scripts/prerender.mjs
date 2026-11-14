// Build do site, depois do `vite build`:
// 1. renderiza o React para HTML estático em dist/index.html (o que o Google lê);
// 2. troca o script de desenvolvimento das ilhas pelo arquivo gerado pelo Vite (dist/build/*.js).
// No navegador só carregam o kit (public/assets) e os componentes animados, cada um sob demanda.
import { createServer } from 'vite'
import { createElement } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { readFile, rm, writeFile } from 'node:fs/promises'

const OUT = 'dist'
// originais pesados que não vão para o ar (as versões WebP ficam em public/img)
const SKIP = ['fotos', 'projects']

const manifest = JSON.parse(await readFile(`${OUT}/.vite/manifest.json`, 'utf8'))
const entry = manifest['src/islands/client.tsx']
if (!entry) throw new Error('manifest sem src/islands/client.tsx: rode `vite build` antes')

const vite = await createServer({ server: { middlewareMode: true }, appType: 'custom', logLevel: 'error' })
try {
  const { default: App } = await vite.ssrLoadModule('/src/App.tsx')
  const body = renderToStaticMarkup(createElement(App))

  const template = await readFile('index.html', 'utf8')
  if (!template.includes('<div id="root"></div>')) throw new Error('index.html sem <div id="root"></div>')
  const css = (entry.css || []).map((href) => `<link rel="stylesheet" href="/${href}">`).join('\n')
  const html = template
    .replace('<div id="root"></div>', body)
    .replace(/\s*<script type="module" src="\/src\/main\.tsx"><\/script>/, '')
    .replace('<script type="module" src="/src/islands/client.tsx"></script>', `<script type="module" src="/${entry.file}"></script>`)
    .replace('</head>', `${css}${css ? '\n' : ''}</head>`)

  for (const dir of SKIP) await rm(`${OUT}/${dir}`, { recursive: true, force: true })
  await rm(`${OUT}/.vite`, { recursive: true, force: true })
  await writeFile(`${OUT}/index.html`, html)
  console.log(`${OUT}/index.html pronto (${Math.round(html.length / 1024)} KB), ilhas em /${entry.file}`)
} finally {
  await vite.close()
}
