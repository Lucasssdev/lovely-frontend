import { createGlobalStyle } from 'styled-components'
import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { Helmet } from 'react-helmet'

interface ThemeInterface {
    background: {
        color: {
            depthLevelZero: string
            depthLevelOne: string
            depthLevelTwo: string
            depthLevelMax: string
        }
    }
    primary: string
    secondary: string
    auxiliar: string
    off: string
    contrastA: string
    textPrimary: string
    textsecundary: string
}

const GlobalStyle = createGlobalStyle<{ theme: ThemeInterface }>`
@import url('https://fonts.googleapis.com/css2?family=Edu+SA+Hand:wght@400..700&family=Love+Light&display=swap');

  body {
   margin: 0;
   padding: 0;
   height: 100vh;
   width: 100vw;
   background-color:  ${({ theme }) => theme.background.color.depthLevelOne};
   
  }
  *{
    margin: 0;
    box-sizing: border-box;
    padding: 0;
    scrollbar-color: transparent;
    ::-webkit-scrollbar{
        background-color: transparent;
    }
    ::-webkit-scrollbar-thumb{
        background-color: var(--bg-level-max);
    }
  }
  p,span,div,button,body,li,td,th,ul {
  font-family: "Love Light", cursive;
  font-weight: 400;
  font-style: normal;  
  }
  
  :root {
    /* Background */
    --bg-level-zero:            ${({ theme }) => theme.background.color.depthLevelZero};
    --bg-level-one:             ${({ theme }) => theme.background.color.depthLevelOne};
    --bg-level-two:             ${({ theme }) => theme.background.color.depthLevelTwo};
    --bg-level-max:             ${({ theme }) => theme.background.color.depthLevelMax};

    /* Cores principais da paleta */
    --color-primary:            ${({ theme }) => theme.primary};
    --color-secondary:          ${({ theme }) => theme.secondary};
    --color-auxiliar:           ${({ theme }) => theme.auxiliar};
    --color-off:                ${({ theme }) => theme.off};
    --color-contrast:          ${({ theme }) => theme.contrastA};

    /* Textos */
    --color-text-primary:       ${({ theme }) => theme.textPrimary};
    --color-text-secondary:     ${({ theme }) => theme.textsecundary};

    /* Outros personalizados (se usar) */
    --fc-border-color:           transparent;
    --fc-today-bg-color:         var(--color-primary);
    --fc-daygrid-event-dot-width: 0px;
    --fc-page-bg-color:          transparent;

    --color-stars:   #ffc60a;
    --whatsapp-color: #25d366;
  }
`

const Layout: React.FC = () => {
    const theme = useContext(ThemeContext) as ThemeInterface
    return (
        <>
            <Helmet>
                <link
                    href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap"
                    rel="stylesheet"
                />
            </Helmet>
            <GlobalStyle theme={theme} />
        </>
    )
}

export default Layout
