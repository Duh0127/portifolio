export const HOME_EASE = [0.16, 1, 0.3, 1] as const

export const reveal = (reducedMotion: boolean, delay = 0) =>
  reducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 22 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.2 },
        transition: {
          duration: 0.72,
          delay,
          ease: HOME_EASE,
        },
      }

export const enterFromTop = (reducedMotion: boolean) =>
  reducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 18 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.74, ease: HOME_EASE },
      }

export const hoverLift = (reducedMotion: boolean) =>
  reducedMotion ? undefined : { y: -4, transition: { duration: 0.24 } }
