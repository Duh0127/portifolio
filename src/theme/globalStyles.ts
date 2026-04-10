import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
    -webkit-text-size-adjust: 100%;
    background: ${({ theme }) => theme.colors.background.primary};
  }

  html,
  body,
  #root {
    min-height: 100%;
  }

  body {
    min-height: 100vh;
    background: ${({ theme }) => theme.colors.background.primary};
    color: ${({ theme }) => theme.colors.text.primary};
    overflow-x: hidden;
    font-family: ${({ theme }) => theme.fonts.body};
    line-height: 1.5;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body::before {
    content: '';
    position: fixed;
    inset: 0;
    z-index: -1;
    background:
      radial-gradient(
        circle at top,
        rgba(99, 123, 176, 0.05) 0%,
        transparent 34%
      ),
      radial-gradient(
        circle at 78% 12%,
        rgba(73, 90, 136, 0.08) 0%,
        transparent 26%
      ),
      linear-gradient(
        180deg,
        ${({ theme }) => theme.colors.background.primary} 0%,
        ${({ theme }) => theme.colors.background.secondary} 100%
      );
    pointer-events: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${({ theme }) => theme.fonts.display};
    font-weight: 700;
    letter-spacing: -0.03em;
  }

  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }

  button,
  input,
  textarea,
  select {
    border: none;
    outline: none;
    background: none;
    color: inherit;
    font: inherit;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  a,
  button,
  input,
  textarea,
  select {
    transition:
      border-color 0.2s ease,
      background-color 0.2s ease,
      color 0.2s ease,
      box-shadow 0.2s ease,
      transform 0.2s ease,
      opacity 0.2s ease;
  }

  :focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.brand.primary};
    outline-offset: 3px;
  }

  section[id] {
    scroll-margin-top: 7rem;
  }

  @media (max-width: 920px) {
    section[id] {
      scroll-margin-top: 8.25rem;
    }
  }

  ul,
  ol {
    list-style: none;
  }

  ::selection {
    background: ${({ theme }) => theme.colors.brand.accent};
    color: ${({ theme }) => theme.colors.text.primary};
  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.background.primary};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.background.tertiary};
    border-radius: 999px;
    border: 2px solid ${({ theme }) => theme.colors.background.primary};
  }

  @media (prefers-reduced-motion: reduce) {
    html {
      scroll-behavior: auto;
    }

    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`
