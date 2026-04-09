import { colors } from './colors'

export const theme = {
  colors,
  fonts: {
    body: "'Manrope', sans-serif",
    display: "'Sora', sans-serif",
    mono: "'IBM Plex Mono', monospace",
  },
  layout: {
    content: 'min(1120px, calc(100% - 2rem))',
  },
  shadows: {
    glow: '0 26px 80px rgba(15, 22, 38, 0.22)',
    card: '0 24px 64px rgba(0, 0, 0, 0.32)',
  },
} as const

export type AppTheme = typeof theme
