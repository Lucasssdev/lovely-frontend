import { ThemeProvider } from 'styled-components'
import useStore from '../zustand/store'

//Objeto das cores de cada tema do sistema
const themes = {
    light: {
        background: {
            color: {
                depthLevelZero: '#E4EAF0',
                depthLevelOne: '#F0F4F8',
                depthLevelTwo: '#F3F9FF',
                depthLevelMax: '#FFFFFF',
            },
            contrastBackground: {
                depthLevelZero: '#D9DCE0',
                depthLevelOne: '#F0F4F8',
                depthLevelTwo: '#F3F9FF',
                depthLevelMax: '#D9D9D9',
            },
        },
        primary: {
            default: '#561AEB   ',
            auxiliar: '#5B48D9',
            glow: '#561AEB',
            off: '#C1BBE8',
            contrastA: '#FFFFFF',
            contrastB: '#522ba7',
        },
        success: {
            default: '#3EE8BC',
            auxiliar: '#60D0B3',
            glow: '#3EE8BC',
            off: '#B4EBDD',
            contrastA: '#35795C',
            contrastB: '#FFFFFF',
        },
        alert: {
            default: '#FF8D38',
            auxiliar: '#E37524',
            glow: '#FF8D38',
            off: '#F9BC8F',
            contrastA: '#8E4D1D',
            contrastB: '#FFFFFF',
        },
        danger: {
            default: '#FD5D5C',
            auxiliar: '#CF4F4F',
            glow: '#FD5D5C',
            off: '#EEA7A7',
            contrastA: '#642121',
            contrastB: '#8E1D1D',
        },
        highlight: {
            default: '#4E5064',
            auxiliar: '#2B2E44',
            glow: '#4E5064',
            off: '#B8BACD',
            contrastA: '#FFFFFF',
            contrastB: '#FFFFFF',
        },
        textPrimary: '#4E5064',
        textsecundary: '#A5A5A5',
    },
    dark: {
        background: {
            color: {
                depthLevelZero: '#070707',
                depthLevelOne: '#131314',
                depthLevelTwo: '#1D1D20',
                depthLevelMax: '#2E2E32',
            },
            contrastBackground: {
                depthLevelZero: '#393A3C',
                depthLevelOne: '#131314',
                depthLevelTwo: '#1D1D20',
                depthLevelMax: '#2E2E32',
            },
        },
        primary: {
            default: '#6F5AFF',
            auxiliar: '#5B48D9',
            glow: '#6F5AFF  ',
            off: ' #55516B',
            contrastA: '#FFFFFF',
            contrastB: '#522ba7',
        },
        secundary: '#A5A5A5',
        success: {
            default: '#3EE8BC',
            auxiliar: '#60D0B3',
            glow: '#3EE8BC',
            off: '#58746D',
            contrastA: '#35795C',
            contrastB: '#FFFFFF',
        },
        alert: {
            default: '#FF8D38',
            auxiliar: '#E37524',
            glow: '#FF8D38',
            off: '#78604E',
            contrastA: '#8E4D1D',
            contrastB: '#FFFFFF',
        },
        danger: {
            default: '#FD5D5C',
            auxiliar: '#CF4F4F',
            glow: '#FD5D5C',
            off: '#FD5D5C',
            contrastA: '#642121',
            contrastB: '#8E1D1D',
        },
        highlight: {
            default: '#B8BACD',
            auxiliar: '#2B2E44',
            glow: '#4E5064',
            off: '#B8BACD',
            contrastA: '#FFFFFF',
            contrastB: '#FFFFFF',
        },
        textPrimary: '#E7E7E7',
        textsecundary: '#A5A5A5',
    },
}

export default function Theme({ children }: any) {
    const selectedTheme: string = useStore((state: { theme: string }) => state.theme)
    return <ThemeProvider theme={themes[selectedTheme as keyof typeof themes] ?? themes.dark}>{children}</ThemeProvider>
}
