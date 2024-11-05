import { ReactNode } from "react"
import { ThemeProvider } from "styled-components"

const theme = {
    colors: {
        primary: '#158A8A',
        secondary: '#000000'
    }
}

interface DefaultThemeProps{
    children: ReactNode
}

function DefaultTheme({ children }:DefaultThemeProps){
    return <ThemeProvider theme={theme}> { children } </ThemeProvider>
}

export default DefaultTheme