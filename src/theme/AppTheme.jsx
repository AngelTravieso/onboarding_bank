import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'
import { miBancoTheme } from './'

export const AppTheme = ({ children }) => {
  return (
    <ThemeProvider theme={ miBancoTheme } >
        <CssBaseline /> 
        { children }
    </ThemeProvider>
  )
}
