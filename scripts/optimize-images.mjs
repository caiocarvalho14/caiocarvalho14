// Gera versões WebP leves das imagens originais (PNG) usadas no site.
// Uso: node scripts/optimize-images.mjs
import sharp from 'sharp'
import { mkdir } from 'node:fs/promises'
import { dirname } from 'node:path'

const jobs = [
  // foto do Caio (abertura)
  { src: 'public/fotos/selfie.png', out: 'public/img/caio', widths: [640, 900] },
  // projetos
  { src: 'public/projects/prosperit3/desktop.png', out: 'public/img/prosperit3', widths: [960, 1600] },
  { src: 'public/projects/espaco_bugaville/desktop.png', out: 'public/img/bugaville', widths: [960, 1600] },
]

for (const job of jobs) {
  await mkdir(dirname(job.out), { recursive: true })
  for (const w of job.widths) {
    const file = `${job.out}-${w}.webp`
    const info = await sharp(job.src).resize({ width: w, withoutEnlargement: true }).webp({ quality: 80 }).toFile(file)
    console.log(file, `${info.width}x${info.height}`, `${Math.round(info.size / 1024)} KB`)
  }
}

// prints do celular para a moldura de iPhone: mantém a barra de status do aparelho e tira a barra de
// endereço do navegador e a barra de gestos (medidas em fração da altura do print original)
async function phoneShot(src, out) {
  const meta = await sharp(src).metadata()
  const W = meta.width, H = meta.height
  const statusEnd = Math.round(H * 0.06), urlEnd = Math.round(H * 0.121), bottom = Math.round(H * 0.972)
  const top = await sharp(src).extract({ left: 0, top: 0, width: W, height: statusEnd }).png().toBuffer()
  const page = await sharp(src).extract({ left: 0, top: urlEnd, width: W, height: bottom - urlEnd }).png().toBuffer()
  const height = statusEnd + bottom - urlEnd
  const joined = await sharp({ create: { width: W, height, channels: 3, background: '#000' } })
    .composite([{ input: top, top: 0, left: 0 }, { input: page, top: statusEnd, left: 0 }])
    .png().toBuffer()
  for (const w of [360, 640]) {
    const info = await sharp(joined).resize({ width: w, withoutEnlargement: true }).webp({ quality: 82 }).toFile(`${out}-${w}.webp`)
    console.log(`${out}-${w}.webp`, `${info.width}x${info.height}`, `${Math.round(info.size / 1024)} KB`)
  }
}
await phoneShot('public/projects/prosperit3/mobile.png', 'public/img/prosperit3-mobile')
await phoneShot('public/projects/espaco_bugaville/mobile.png', 'public/img/bugaville-mobile')

// foto redonda da abertura: recorte quadrado no rosto
for (const w of [320, 480]) {
  const file = `public/img/caio-round-${w}.webp`
  await sharp('public/fotos/selfie.png').extract({ left: 110, top: 40, width: 620, height: 620 }).resize(w, w).webp({ quality: 82 }).toFile(file)
  console.log(file)
}

// imagem de compartilhamento (1200x630) a partir do print do projeto Espaço Bugaville
await sharp('public/projects/espaco_bugaville/desktop.png')
  .resize({ width: 1200, height: 630, fit: 'cover', position: 'top' })
  .jpeg({ quality: 82 })
  .toFile('public/share.jpg')
console.log('public/share.jpg')
