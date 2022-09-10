import { ThemeProvider } from 'styled-components'
import { Routes } from './routes'
import GlobalStyles from './theme'
import theme from './theme/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default App
