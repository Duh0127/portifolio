import styled from 'styled-components'

export const LayoutContainer = styled.div`
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  background:
    radial-gradient(
      circle at top center,
      rgba(89, 112, 162, 0.08) 0%,
      transparent 30%
    ),
    radial-gradient(
      circle at 84% 10%,
      rgba(70, 91, 136, 0.08) 0%,
      transparent 22%
    ),
    linear-gradient(
      180deg,
      ${({ theme }) => theme.colors.background.primary} 0%,
      ${({ theme }) => theme.colors.background.secondary} 100%
    );
  color: ${({ theme }) => theme.colors.text.primary};
`

export const Content = styled.main`
  flex: 1;
  width: 100%;
`
