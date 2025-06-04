import { ThemeProvider } from 'styled-components'

//Objeto das cores de cada tema do sistema
const themes = {
    background: {
        color: {
            depthLevelZero: '#070707',
            depthLevelOne: '#131314',
            depthLevelTwo: '#1D1D20',
            depthLevelMax: '#2E2E32',
        },
    },
    primary: '#77F2E6',
    secondary: '#5EF2D7',
    auxiliar: '#A0D9D3',
    off: '#BFD9D6',
    contrastA: '#F2C2C2',
    textPrimary: '#E7E7E7',
    textsecundary: '#A5A5A5',
}

export default function Theme({ children }: any) {
    return <ThemeProvider theme={themes}>{children}</ThemeProvider>
}
