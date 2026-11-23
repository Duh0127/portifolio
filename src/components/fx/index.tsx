import Lenis from 'lenis'
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'motion/react'
import { lazy, Suspense, useEffect, useRef, type PointerEvent, type ReactNode } from 'react'
import styled, { keyframes } from 'styled-components'

import { useApp } from '../../i18n'
import { CommandPalette, LanguageTransition } from './interactive'

export { CommandPalette, LanguageSwitcher, LanguageTransition, Magnetic, PaletteButton } from './interactive'

const Scene3D = lazy(() => import('./Scene3D'))

/* ---------- Global layer: 3D scene, scroll progress, cursor glow, smooth scroll ---------- */

export function GlobalEffects() {
  const reduced = useReducedMotion() ?? false
  const { sceneOn } = useApp()
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30 })
  const sceneOpacity = useTransform(scrollYProgress, [0, 0.15, 1], [1, 0.55, 0.35])
  const mx = useMotionValue(-500)
  const my = useMotionValue(-500)
  const glow = useMotionTemplate`radial-gradient(520px circle at ${mx}px ${my}px, rgba(94, 200, 255, 0.07), transparent 60%)`

  useEffect(() => {
    if (reduced) return
    const lenis = new Lenis({ duration: 1.15, smoothWheel: true, anchors: { offset: -96 } })
    let id = requestAnimationFrame(function raf(time) {
      lenis.raf(time)
      id = requestAnimationFrame(raf)
    })
    const move = (e: globalThis.PointerEvent) => {
      mx.set(e.clientX)
      my.set(e.clientY)
    }
    window.addEventListener('pointermove', move, { passive: true })
    return () => {
      cancelAnimationFrame(id)
      lenis.destroy()
      window.removeEventListener('pointermove', move)
    }
  }, [reduced, mx, my])

  return (
    <>
      <ProgressBar style={{ scaleX: progress }} />
      {!reduced && sceneOn && (
        <SceneLayer style={{ opacity: sceneOpacity }} aria-hidden="true">
          <Suspense fallback={null}>
            <Scene3D />
          </Suspense>
        </SceneLayer>
      )}
      {!reduced && <CursorGlow style={{ background: glow }} aria-hidden="true" />}
      <Noise aria-hidden="true" />
      <LanguageTransition />
      <CommandPalette />
    </>
  )
}

const ProgressBar = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  z-index: 60;
  transform-origin: 0 50%;
  background: linear-gradient(90deg, #5ec8ff, #8b7bff, #f0a6ff);
  box-shadow: 0 0 12px rgba(94, 200, 255, 0.8);
`

const SceneLayer = styled(motion.div)`
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
`

const CursorGlow = styled(motion.div)`
  position: fixed;
  inset: 0;
  z-index: 1;
  pointer-events: none;
`

const Noise = styled.div`
  position: fixed;
  inset: 0;
  z-index: 2;
  pointer-events: none;
  opacity: 0.05;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
`

/* ---------- 3D tilt + spotlight card wrapper ---------- */

export function Tilt({ children, max = 8 }: { children: ReactNode; max?: number }) {
  const reduced = useReducedMotion() ?? false
  const ref = useRef<HTMLDivElement>(null)
  const rx = useSpring(0, { stiffness: 160, damping: 18 })
  const ry = useSpring(0, { stiffness: 160, damping: 18 })
  const sx = useMotionValue(50)
  const sy = useMotionValue(50)
  const shine = useMotionTemplate`radial-gradient(380px circle at ${sx}% ${sy}%, rgba(120, 210, 255, 0.16), transparent 55%)`

  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    if (reduced || e.pointerType !== 'mouse' || !ref.current) return
    const r = ref.current.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width
    const py = (e.clientY - r.top) / r.height
    ry.set((px - 0.5) * max * 2)
    rx.set(-(py - 0.5) * max * 2)
    sx.set(px * 100)
    sy.set(py * 100)
  }
  const onLeave = () => {
    rx.set(0)
    ry.set(0)
  }

  return (
    <TiltOuter>
      <TiltInner ref={ref} onPointerMove={onMove} onPointerLeave={onLeave} style={{ rotateX: rx, rotateY: ry }}>
        {children}
        {!reduced && <TiltShine style={{ background: shine }} />}
      </TiltInner>
    </TiltOuter>
  )
}

const TiltOuter = styled.div`
  perspective: 1200px;
`

const TiltInner = styled(motion.div)`
  position: relative;
  transform-style: preserve-3d;
  will-change: transform;
  border-radius: clamp(24px, 5vw, 32px);
`

const TiltShine = styled(motion.div)`
  position: absolute;
  inset: 0;
  border-radius: inherit;
  pointer-events: none;
  mix-blend-mode: screen;
`

/* ---------- Infinite tech marquee ---------- */

const slide = keyframes`
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
`

export function Marquee({ items }: { items: string[] }) {
  const { t } = useApp()
  const doubled = [...items, ...items]
  return (
    <MarqueeWrap aria-label={t.marquee}>
      <MarqueeTrack>
        {doubled.map((item, i) => (
          <MarqueeItem key={i} aria-hidden={i >= items.length}>
            <i />
            {item}
          </MarqueeItem>
        ))}
      </MarqueeTrack>
    </MarqueeWrap>
  )
}

const MarqueeWrap = styled.div`
  position: relative;
  z-index: 3;
  overflow: hidden;
  margin: 0 0 clamp(4.5rem, 8vw, 6.5rem);
  padding: 1.1rem 0;
  border-block: 1px solid rgba(120, 180, 255, 0.12);
  background: rgba(5, 9, 17, 0.55);
  backdrop-filter: blur(10px);
  mask-image: linear-gradient(90deg, transparent, black 12%, black 88%, transparent);
`

const MarqueeTrack = styled.div`
  display: flex;
  width: max-content;
  gap: 3rem;
  animation: ${slide} 38s linear infinite;
`

const MarqueeItem = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  color: rgba(208, 220, 245, 0.7);
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.9rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  white-space: nowrap;

  i {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #5ec8ff;
    box-shadow: 0 0 10px #5ec8ff;
  }
`

/* ---------- Text scramble (decoder effect) ---------- */

const GLYPHS = '!<>-_\\/[]{}=+*^?#01'

export function Scramble({ text }: { text: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const reduced = useReducedMotion() ?? false

  useEffect(() => {
    const el = ref.current
    if (!el || reduced) return
    let frame = 0
    let id = 0
    const total = text.length * 2
    const tick = () => {
      el.textContent = text
        .split('')
        .map((ch, i) => (ch === ' ' || i < frame / 2 ? ch : GLYPHS[Math.floor(Math.random() * GLYPHS.length)]))
        .join('')
      if (frame++ < total) id = requestAnimationFrame(tick)
    }
    id = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(id)
  }, [text, reduced])

  return <span ref={ref}>{text}</span>
}
