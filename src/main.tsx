import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import AppRoutes from './routes/index.tsx'
import { GlobalStyles } from './theme/globalStyles.ts'
import { theme } from './theme'
import { AppProvider } from './i18n'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AppProvider>
        <AppRoutes />
      </AppProvider>
    </ThemeProvider>
  </StrictMode>,
)
