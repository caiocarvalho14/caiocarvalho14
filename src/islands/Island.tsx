import type { CSSProperties, ElementType, ReactNode } from 'react'
import type { IslandName } from './registry'

// Marca um ponto da página estática onde um componente do React Bits é montado no navegador.
// O conteúdo (children) vai no HTML gerado na build: é o que o Google lê e o que aparece
// enquanto o JavaScript carrega. Depois, src/islands/client.tsx troca pelo componente animado.
type Props = {
  name: IslandName
  props?: Record<string, unknown>
  as?: ElementType
  className?: string
  style?: CSSProperties
  children?: ReactNode
  // aria-label do elemento (por exemplo num h1 cujo texto é dividido em letras)
  label?: string
}

export default function Island({ name, props, as: Tag = 'div', className, style, children, label }: Props) {
  return (
    <Tag
      data-rb={name}
      data-rb-props={props ? JSON.stringify(props) : undefined}
      className={className}
      style={style}
      aria-label={label}
    >
      {children}
    </Tag>
  )
}
