import { AnimatePresence, motion, useReducedMotion, useSpring } from 'motion/react'
import { useEffect, useMemo, useState, type PointerEvent, type ReactNode } from 'react'
import styled, { keyframes } from 'styled-components'

import { dictionaries } from '../../i18n/dictionaries'
import { locales, useApp } from '../../i18n'
import { socialLinks } from '../../pages/home/content'

const isTyping = (el: EventTarget | null) =>
  el instanceof HTMLElement && (el.isContentEditable || ['INPUT', 'TEXTAREA', 'SELECT'].includes(el.tagName))

/* ---------- Magnetic wrapper: element leans toward the cursor ---------- */

export function Magnetic({ children, strength = 0.3 }: { children: ReactNode; strength?: number }) {
  const reduced = useReducedMotion() ?? false
  const x = useSpring(0, { stiffness: 220, damping: 16 })
  const y = useSpring(0, { stiffness: 220, damping: 16 })

  const onMove = (e: PointerEvent<HTMLSpanElement>) => {
    if (reduced || e.pointerType !== 'mouse') return
    const r = e.currentTarget.getBoundingClientRect()
    x.set((e.clientX - (r.left + r.width / 2)) * strength)
    y.set((e.clientY - (r.top + r.height / 2)) * strength)
  }
  const reset = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <MagneticBox style={{ x, y }} onPointerMove={onMove} onPointerLeave={reset}>
      {children}
    </MagneticBox>
  )
}

const MagneticBox = styled(motion.span)`
  display: inline-flex;

  @media (max-width: 640px) {
    display: flex;
    > * {
      flex: 1;
    }
  }
`

/* ---------- Language switcher: segmented "terminal" pill ---------- */

export function LanguageSwitcher() {
  const { locale, setLocale, t } = useApp()

  return (
    <Switcher role="radiogroup" aria-label={t.lang.label}>
      <SwitcherIcon aria-hidden="true">⌁</SwitcherIcon>
      {locales.map((l) => {
        const active = l.code === locale
        return (
          <SwitcherOption
            key={l.code}
            role="radio"
            aria-checked={active}
            title={dictionaries[l.code].meta.langName}
            $active={active}
            onClick={() => setLocale(l.code)}
          >
            {active && <SwitcherGlow layoutId="lang-glow" transition={{ type: 'spring', stiffness: 380, damping: 30 }} />}
            <span>{l.short}</span>
          </SwitcherOption>
        )
      })}
    </Switcher>
  )
}

const Switcher = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 2px;
  padding: 3px;
  border-radius: 999px;
  border: 1px solid rgba(127, 214, 255, 0.18);
  background: rgba(4, 8, 16, 0.7);
  font-family: ${({ theme }) => theme.fonts.mono};
`

const SwitcherIcon = styled.span`
  padding: 0 0.35rem 0 0.45rem;
  color: #7fd6ff;
  font-size: 0.9rem;
  text-shadow: 0 0 8px #7fd6ff;
`

const SwitcherOption = styled.button<{ $active: boolean }>`
  position: relative;
  min-width: 2.3rem;
  min-height: 34px;
  padding: 0 0.55rem;
  border-radius: 999px;
  color: ${({ $active }) => ($active ? '#04070d' : 'rgba(208, 220, 245, 0.7)')};
  font-size: 0.74rem;
  font-weight: 600;
  letter-spacing: 0.08em;

  span {
    position: relative;
    z-index: 1;
  }

  &:hover {
    color: ${({ $active }) => ($active ? '#04070d' : '#fff')};
  }
`

const SwitcherGlow = styled(motion.span)`
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: linear-gradient(120deg, #9fe4ff, #b6a9ff);
  box-shadow: 0 0 16px rgba(127, 214, 255, 0.6);
`

/* ---------- Full-screen "recompile" overlay played on language change ---------- */

const sweep = keyframes`
  from { transform: translateY(-100%); }
  to { transform: translateY(100vh); }
`
const fill = keyframes`
  from { width: 0; }
  to { width: 100%; }
`

export function LanguageTransition() {
  const { switching, t } = useApp()
  const reduced = useReducedMotion() ?? false

  return (
    <AnimatePresence>
      {switching && !reduced && (
        <Overlay
          key="lang-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          aria-hidden="true"
        >
          <ScanLine />
          <Console>
            <p>
              <b>&gt;</b> {t.lang.switching}
              <Caret />
            </p>
            <Bar>
              <i />
            </Bar>
            <small>{t.meta.greeting} · {t.meta.langName}</small>
          </Console>
        </Overlay>
      )}
    </AnimatePresence>
  )
}

const blink = keyframes`50% { opacity: 0; }`

const Overlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  z-index: 90;
  display: grid;
  place-items: center;
  background:
    repeating-linear-gradient(0deg, rgba(127, 214, 255, 0.04) 0 1px, transparent 1px 4px),
    rgba(3, 6, 12, 0.82);
  backdrop-filter: blur(10px);
  pointer-events: none;
`

const ScanLine = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  height: 30vh;
  background: linear-gradient(180deg, transparent, rgba(127, 214, 255, 0.18), transparent);
  animation: ${sweep} 0.8s cubic-bezier(0.6, 0, 0.3, 1) forwards;
`

const Console = styled.div`
  width: min(420px, calc(100% - 2rem));
  font-family: ${({ theme }) => theme.fonts.mono};
  color: #cfe9ff;
  font-size: 0.95rem;

  b {
    color: #7fd6ff;
  }

  small {
    display: block;
    margin-top: 0.8rem;
    color: rgba(208, 220, 245, 0.6);
    letter-spacing: 0.12em;
    text-transform: uppercase;
    font-size: 0.72rem;
  }
`

const Caret = styled.span`
  display: inline-block;
  width: 0.6ch;
  height: 1em;
  margin-left: 0.3ch;
  vertical-align: -0.15em;
  background: #7fd6ff;
  animation: ${blink} 0.7s steps(1) infinite;
`

const Bar = styled.div`
  margin-top: 0.9rem;
  height: 3px;
  border-radius: 99px;
  background: rgba(127, 214, 255, 0.12);
  overflow: hidden;

  i {
    display: block;
    height: 100%;
    background: linear-gradient(90deg, #7fd6ff, #8b7bff, #f0a6ff);
    animation: ${fill} 0.75s ease-out forwards;
  }
`

/* ---------- Command palette (Ctrl/⌘ + K) ---------- */

type Command = { id: string; group: string; label: string; hint?: string; run: () => void }

const sectionIds = ['sobre', 'projetos', 'stacks', 'soft-skills', 'contato'] as const

export function CommandPalette() {
  const { t, setLocale, locale, toggleScene, sceneOn } = useApp()
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [cursor, setCursor] = useState(0)
  const [toast, setToast] = useState('')

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setOpen((o) => !o)
      } else if (e.key === '/' && !isTyping(e.target)) {
        e.preventDefault()
        setOpen(true)
      } else if (e.key === 'Escape') {
        setOpen(false)
      }
    }
    const onOpen = () => setOpen(true)
    window.addEventListener('keydown', onKey)
    window.addEventListener('open-command-palette', onOpen)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('open-command-palette', onOpen)
    }
  }, [])

  const close = () => {
    setOpen(false)
    setQuery('')
    setCursor(0)
  }

  const commands: Command[] = useMemo(() => {
    const go = (id: string) => () => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    return [
      { id: 'top', group: t.palette.groups.navigate, label: t.palette.top, hint: '↑', run: () => window.scrollTo({ top: 0, behavior: 'smooth' }) },
      ...sectionIds.map((id, i) => ({
        id,
        group: t.palette.groups.navigate,
        label: t.nav.items[id],
        hint: String(i + 1),
        run: go(id),
      })),
      ...locales.map((l) => ({
        id: `lang-${l.code}`,
        group: t.palette.groups.language,
        label: `${dictionaries[l.code].meta.langName}${l.code === locale ? ' ✓' : ''}`,
        hint: l.short,
        run: () => setLocale(l.code),
      })),
      ...socialLinks.map((s) => ({
        id: s.label,
        group: t.palette.groups.links,
        label: s.label,
        hint: '↗',
        run: () => window.open(s.href, '_blank', 'noopener'),
      })),
      {
        id: 'scene',
        group: t.palette.groups.fun,
        label: t.palette.motion,
        hint: sceneOn ? 'ON' : 'OFF',
        run: () => {
          toggleScene()
          setToast(sceneOn ? t.toast.motionOff : t.toast.motionOn)
        },
      },
    ]
  }, [t, locale, setLocale, sceneOn, toggleScene])

  const filtered = commands.filter((c) =>
    `${c.label} ${c.group} ${c.id}`.toLowerCase().includes(query.trim().toLowerCase()),
  )

  useEffect(() => {
    if (!toast) return
    const id = window.setTimeout(() => setToast(''), 1800)
    return () => window.clearTimeout(id)
  }, [toast])

  const runAt = (i: number) => {
    const cmd = filtered[i]
    if (!cmd) return
    close()
    cmd.run()
  }

  let lastGroup = ''

  return (
    <>
      <AnimatePresence>
        {open && (
          <Backdrop
            key="palette"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          >
            <Dialog
              role="dialog"
              aria-modal="true"
              aria-label={t.palette.trigger}
              initial={{ opacity: 0, y: -16, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <SearchRow>
                <span aria-hidden="true">⌘</span>
                <input
                  autoFocus
                  value={query}
                  placeholder={t.palette.placeholder}
                  aria-label={t.palette.placeholder}
                  onChange={(e) => {
                    setQuery(e.target.value)
                    setCursor(0)
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'ArrowDown') {
                      e.preventDefault()
                      setCursor((c) => Math.min(c + 1, filtered.length - 1))
                    } else if (e.key === 'ArrowUp') {
                      e.preventDefault()
                      setCursor((c) => Math.max(c - 1, 0))
                    } else if (e.key === 'Enter') {
                      runAt(cursor)
                    }
                  }}
                />
                <kbd>ESC</kbd>
              </SearchRow>

              <List role="listbox">
                {filtered.length === 0 && <Empty>{t.palette.empty}</Empty>}
                {filtered.map((cmd, i) => {
                  const header = cmd.group !== lastGroup ? cmd.group : null
                  lastGroup = cmd.group
                  return (
                    <div key={cmd.id}>
                      {header && <GroupLabel>{header}</GroupLabel>}
                      <Item
                        role="option"
                        aria-selected={i === cursor}
                        $active={i === cursor}
                        onMouseEnter={() => setCursor(i)}
                        onClick={() => runAt(i)}
                      >
                        <span>{cmd.label}</span>
                        {cmd.hint && <kbd>{cmd.hint}</kbd>}
                      </Item>
                    </div>
                  )
                })}
              </List>
            </Dialog>
          </Backdrop>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {toast && (
          <Toast
            key={toast}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            role="status"
          >
            {toast}
          </Toast>
        )}
      </AnimatePresence>
    </>
  )
}

export function PaletteButton() {
  const { t } = useApp()
  const isMac = typeof navigator !== 'undefined' && /Mac|iPhone|iPad/.test(navigator.platform)
  return (
    <PaletteTrigger
      type="button"
      aria-label={t.palette.trigger}
      title={t.palette.trigger}
      onClick={() => window.dispatchEvent(new Event('open-command-palette'))}
    >
      <kbd>{isMac ? '⌘' : 'Ctrl'}</kbd>
      <kbd>K</kbd>
    </PaletteTrigger>
  )
}

const kbdStyle = `
  kbd {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 1.5rem;
    height: 1.4rem;
    padding: 0 0.35rem;
    border-radius: 6px;
    border: 1px solid rgba(127, 214, 255, 0.22);
    background: rgba(127, 214, 255, 0.06);
    color: rgba(208, 230, 255, 0.85);
    font-family: 'IBM Plex Mono', monospace;
    font-size: 0.68rem;
  }
`

const PaletteTrigger = styled.button`
  display: inline-flex;
  gap: 3px;
  align-items: center;
  min-height: 40px;
  padding: 0 0.55rem;
  border-radius: 999px;
  border: 1px solid rgba(127, 214, 255, 0.16);
  background: rgba(4, 8, 16, 0.7);
  ${kbdStyle}

  &:hover {
    border-color: rgba(127, 214, 255, 0.5);
    box-shadow: 0 0 18px rgba(127, 214, 255, 0.2);
  }

  @media (hover: none) {
    display: none;
  }
`

const Backdrop = styled(motion.div)`
  position: fixed;
  inset: 0;
  z-index: 80;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 14vh 1rem 1rem;
  background: rgba(2, 4, 9, 0.6);
  backdrop-filter: blur(8px);
`

const Dialog = styled(motion.div)`
  width: min(560px, 100%);
  overflow: hidden;
  border-radius: 20px;
  border: 1px solid rgba(127, 214, 255, 0.22);
  background: linear-gradient(180deg, rgba(12, 18, 30, 0.97), rgba(6, 10, 18, 0.98));
  box-shadow:
    0 30px 90px rgba(0, 0, 0, 0.6),
    0 0 0 1px rgba(139, 123, 255, 0.08),
    0 0 60px rgba(94, 200, 255, 0.12);
  ${kbdStyle}
`

const SearchRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 1.1rem;
  border-bottom: 1px solid rgba(127, 214, 255, 0.12);

  > span {
    color: #7fd6ff;
  }

  input {
    flex: 1;
    font-size: 1rem;
    color: #f4f7ff;

    &::placeholder {
      color: rgba(180, 195, 225, 0.5);
    }
  }
`

const List = styled.div`
  max-height: min(380px, 55vh);
  overflow-y: auto;
  padding: 0.5rem;
`

const GroupLabel = styled.p`
  padding: 0.7rem 0.7rem 0.35rem;
  color: rgba(154, 165, 188, 0.7);
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.68rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
`

const Item = styled.button<{ $active: boolean }>`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 0.7rem 0.8rem;
  border-radius: 12px;
  text-align: left;
  font-size: 0.94rem;
  color: ${({ $active }) => ($active ? '#fff' : 'rgba(208, 216, 233, 0.8)')};
  background: ${({ $active }) => ($active ? 'linear-gradient(90deg, rgba(127, 214, 255, 0.14), rgba(139, 123, 255, 0.08))' : 'transparent')};
  box-shadow: ${({ $active }) => ($active ? 'inset 2px 0 0 #7fd6ff' : 'none')};
`

const Empty = styled.p`
  padding: 1.4rem 0.8rem;
  color: rgba(180, 195, 225, 0.6);
  font-size: 0.92rem;
`

const Toast = styled(motion.div)`
  position: fixed;
  left: 50%;
  bottom: 1.5rem;
  z-index: 85;
  translate: -50% 0;
  padding: 0.7rem 1.1rem;
  border-radius: 999px;
  border: 1px solid rgba(127, 214, 255, 0.3);
  background: rgba(6, 10, 18, 0.92);
  color: #dff4ff;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.8rem;
  letter-spacing: 0.06em;
  box-shadow: 0 0 30px rgba(94, 200, 255, 0.2);
`
