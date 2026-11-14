// Só no `npm run dev`: gera o mesmo HTML estático da build e coloca no lugar do #root,
// antes dos scripts do kit (módulos rodam em ordem), para que eles encontrem a página pronta.
import { renderToStaticMarkup } from 'react-dom/server'
import App from './App.tsx'

const root = document.getElementById('root')
if (root) root.outerHTML = renderToStaticMarkup(<App />)
