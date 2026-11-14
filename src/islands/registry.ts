import type { ComponentType } from 'react'

// Cada componente carrega sob demanda (um arquivo JS por componente na build).
// adopt: o componente envolve o conteúdo que já está na página (links, cards, fotos),
// que é movido para dentro dele sem ser recriado, para manter os comportamentos do kit.
// eslint-disable-next-line @typescript-eslint/no-explicit-any -- cada componente tem props próprias
type Entry = { load: () => Promise<{ default: ComponentType<any> }>; adopt?: boolean }

export const REGISTRY = {
  SplitText: { load: () => import('../rb/SplitText') },
  RotatingText: { load: () => import('../rb/RotatingText') },
  BlurText: { load: () => import('../rb/BlurText') },
  ShinyText: { load: () => import('../rb/ShinyText') },
  GradientText: { load: () => import('../rb/GradientText'), adopt: true },
  CircularText: { load: () => import('../rb/CircularText'), adopt: true },
  Threads: { load: () => import('../rb/Threads') },
  Grainient: { load: () => import('../rb/Grainient') },
  Aurora: { load: () => import('../rb/Aurora') },
  ScrollVelocity: { load: () => import('../rb/ScrollVelocity') },
  Magnet: { load: () => import('../rb/Magnet'), adopt: true },
  SpotlightCard: { load: () => import('../rb/SpotlightCard'), adopt: true },
  AnimatedContent: { load: () => import('../rb/AnimatedContent'), adopt: true },
  TiltedCard: { load: () => import('../rb/TiltedCard') },
  SiteNav: { load: () => import('./SiteNav') },
  StarBorder: { load: () => import('../rb/StarBorder'), adopt: true },
  ClickSpark: { load: () => import('../rb/ClickSpark'), adopt: true },
} satisfies Record<string, Entry>

export type IslandName = keyof typeof REGISTRY
