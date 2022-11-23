import { BrowserRouter} from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './Global/GlobalStyle'
import { defaultTheme } from './Global/themes/default'
import { Router } from './Router'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router/>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
