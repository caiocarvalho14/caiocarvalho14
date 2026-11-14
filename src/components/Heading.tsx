import Island from '../islands/Island'

// Título de seção com as palavras surgindo do desfoque ao entrar na tela (React Bits: Blur Text).
// "muted" é a segunda frase, em cinza.
type Props = { id: string; text: string; muted?: string; tone?: 'light' | 'dark' }

export default function Heading({ id, text, muted, tone = 'light' }: Props) {
  return (
    <h2 id={id} className="rb-heading">
      <Island name="BlurText" as="span" props={{ text, animateBy: 'words', delay: 80, direction: 'bottom', distance: 24 }}>
        {text}
      </Island>
      {muted && (
        <>
          {' '}
          <Island
            name="BlurText"
            as="span"
            className="muted"
            props={{
              text: muted,
              animateBy: 'words',
              delay: 80,
              direction: 'bottom',
              distance: 24,
              color: tone === 'dark' ? '#989eac' : '#646e81',
            }}
          >
            {muted}
          </Island>
        </>
      )}
    </h2>
  )
}
