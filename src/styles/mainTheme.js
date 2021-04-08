import { createMuiTheme } from '@material-ui/core/styles'

const mainTheme = createMuiTheme({
  palette: {
    primary: {
      light: '#9cffff',
      main: '#84ffff',
      dark: '#5cb2b2',
      constrastText: '#fff'
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      constrastText: '#000'
    }
  }
})

export default mainTheme