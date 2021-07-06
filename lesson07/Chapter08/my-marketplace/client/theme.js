import { createMuiTheme } from '@material-ui/core/styles'
import { blueGrey, lightGreen } from '@material-ui/core/colors'

const theme = createMuiTheme({
  palette: {
    primary: {
    light: '#ADD8E6',
    main: '#000000',
    dark: '#000080',
    contrastText: '#ADD8E6',
  },
  secondary: {
    light: '#ADD8E6',
    main: '#000000',
    dark: '#000080',
    contrastText: '#ADD8E6',
  },
    openTitle: '#000080',
    protectedTitle: '#f50000',
    type: 'light'
  }
  })

  export default theme