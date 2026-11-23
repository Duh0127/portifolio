import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from 'react'

import { dictionaries, locales, type Dictionary, type Locale } from './dictionaries'

// eslint-disable-next-line react-refresh/only-export-components
export { locales, type Locale }

const STORAGE_KEY = 'eokubo.locale'

const readStored = (): Locale => {
  try {
    const v = localStorage.getItem(STORAGE_KEY)
    if (v && v in dictionaries) return v as Locale
  } catch {
    /* storage blocked */
  }
  return 'en'
}

type Ctx = {
  locale: Locale
  t: Dictionary
  /** true while the "recompile" transition plays */
  switching: boolean
  setLocale: (l: Locale) => void
  sceneOn: boolean
  toggleScene: () => void
}

const I18nContext = createContext<Ctx | null>(null)

export function AppProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(readStored)
  const [switching, setSwitching] = useState(false)
  const [sceneOn, setSceneOn] = useState(true)
  const timer = useRef<number>(0)

  const setLocale = useCallback(
    (next: Locale) => {
      if (next === locale) return
      window.clearTimeout(timer.current)
      setSwitching(true)
      // swap text mid-transition, while the scan overlay covers the page
      timer.current = window.setTimeout(() => {
        setLocaleState(next)
        try {
          localStorage.setItem(STORAGE_KEY, next)
        } catch {
          /* storage blocked */
        }
        timer.current = window.setTimeout(() => setSwitching(false), 420)
      }, 380)
    },
    [locale],
  )

  const t = dictionaries[locale]

  useEffect(() => {
    document.documentElement.lang = locales.find((l) => l.code === locale)!.htmlLang
    document.title = t.meta.title
  }, [locale, t])

  const value = useMemo(
    () => ({ locale, t, switching, setLocale, sceneOn, toggleScene: () => setSceneOn((s) => !s) }),
    [locale, t, switching, setLocale, sceneOn],
  )

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export const useApp = () => {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useApp must be used inside AppProvider')
  return ctx
}

// eslint-disable-next-line react-refresh/only-export-components
export const useT = () => useApp().t
