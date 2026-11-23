export const HOME_EASE = [0.16, 1, 0.3, 1] as const

export const reveal = (reducedMotion: boolean, delay = 0) =>
  reducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 40, rotateX: 14, filter: 'blur(8px)' },
        whileInView: { opacity: 1, y: 0, rotateX: 0, filter: 'blur(0px)' },
        viewport: { once: true, amount: 0.2 },
        transition: {
          duration: 0.9,
          delay,
          ease: HOME_EASE,
        },
      }

export const enterFromTop = (reducedMotion: boolean) =>
  reducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 28, filter: 'blur(10px)' },
        animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
        transition: { duration: 1, ease: HOME_EASE },
      }

export const hoverLift = (reducedMotion: boolean) =>
  reducedMotion ? undefined : { y: -4, transition: { duration: 0.24 } }
