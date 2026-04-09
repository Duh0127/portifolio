import type { SVGProps } from 'react'

export const InstagramIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M17.5 3h-11A3.5 3.5 0 0 0 3 6.5v11A3.5 3.5 0 0 0 6.5 21h11a3.5 3.5 0 0 0 3.5-3.5v-11A3.5 3.5 0 0 0 17.5 3Z"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M16.25 7.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
        fill="currentColor"
      />
      <path
        d="M12 8.25A3.75 3.75 0 1 0 15.75 12 3.75 3.75 0 0 0 12 8.25Z"
        stroke="currentColor"
        strokeWidth="1.7"
      />
    </svg>
  )
}

export const LinkedinIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M6.75 9.25H3.75V20.25H6.75V9.25Z" fill="currentColor" />
      <path
        d="M5.25 7.5A1.75 1.75 0 1 0 5.25 4a1.75 1.75 0 0 0 0 3.5Z"
        fill="currentColor"
      />
      <path
        d="M11 9.25h2.88v1.5h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.6v6.46h-3V14.5c0-1.38-.03-3.15-1.92-3.15-1.92 0-2.21 1.5-2.21 3.05v5.85h-3V9.25Z"
        fill="currentColor"
      />
    </svg>
  )
}

export const GithubIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 2.75a9.25 9.25 0 0 0-2.92 18.03c.46.09.63-.2.63-.45v-1.58c-2.56.56-3.1-1.09-3.1-1.09-.42-1.06-1.03-1.34-1.03-1.34-.84-.57.07-.56.07-.56.93.07 1.42.96 1.42.96.82 1.42 2.16 1.01 2.69.77.08-.6.32-1.01.58-1.24-2.04-.23-4.18-1.02-4.18-4.55 0-1 .35-1.82.94-2.46-.1-.23-.41-1.17.09-2.43 0 0 .77-.24 2.52.94A8.8 8.8 0 0 1 12 7.94c.78 0 1.58.1 2.32.31 1.75-1.18 2.52-.94 2.52-.94.5 1.26.19 2.2.1 2.43.58.64.94 1.46.94 2.46 0 3.54-2.15 4.31-4.2 4.54.33.29.62.86.62 1.74v2.58c0 .25.17.55.64.45A9.25 9.25 0 0 0 12 2.75Z"
        fill="currentColor"
      />
    </svg>
  )
}
