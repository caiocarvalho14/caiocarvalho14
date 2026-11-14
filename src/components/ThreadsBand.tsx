import Island from '../islands/Island'

// Faixa decorativa entre Desafios e Soluções: linhas finas ondulando devagar (React Bits: Threads).
// Fica no espaço entre as duas seções, sem empurrar o conteúdo.
export default function ThreadsBand() {
  return (
    <div className="threads-band" aria-hidden="true">
      <Island
        name="Threads"
        className="threads-band__lines"
        props={{
          color: '#1a4be0',
          accentColor: '#7aa2ff',
          lineCount: 36,
          amplitude: 0.9,
          distance: 0.22,
          thickness: 0.45,
          softness: 1.6,
          speed: 0.22,
          angle: 4,
          brightness: 1,
          opacity: 0.35,
          enableMouseInteraction: true,
        }}
      />
    </div>
  )
}
