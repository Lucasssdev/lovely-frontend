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
        contrastBackground: {
            depthLevelZero: string
            depthLevelOne: string
            depthLevelTwo: string
            depthLevelMax: string
        }
    }
    primary: {
        default: string
        auxiliar: string
        glow: string
        off: string
        contrastA: string
        contrastB: string
    }
    success: {
        default: string
        auxiliar: string
        glow: string
        off: string
        contrastA: string
        contrastB: string
    }
    alert: {
        default: string
        auxiliar: string
        glow: string
        off: string
        contrastA: string
        contrastB: string
    }
    danger: {
        default: string
        auxiliar: string
        glow: string
        off: string
        contrastA: string
        contrastB: string
    }
    highlight: {
        default: string
        auxiliar: string
        glow: string
        off: string
        contrastA: string
        contrastB: string
    }
    textPrimary: string
    textsecundary: string
}

const GlobalStyle = createGlobalStyle<{ theme: ThemeInterface }>`

  
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
    font-family: 'Ubuntu', sans-serif;
  
  }
  
  :root{
    --bg-level-zero : ${(props) => props.theme.background.color.depthLevelZero};
    --bg-level-one : ${(props) => props.theme.background.color.depthLevelOne};
    --bg-level-two : ${(props) => props.theme.background.color.depthLevelTwo};
    --bg-level-max : ${(props) => props.theme.background.color.depthLevelMax};

    --bg-level-zero-contrast : ${(props) => props.theme.background.contrastBackground.depthLevelZero};
    --bg-level-one-contrast : ${(props) => props.theme.background.contrastBackground.depthLevelOne};
    --bg-level-two-contrast : ${(props) => props.theme.background.contrastBackground.depthLevelTwo};
    --bg-level-max-contrast : ${(props) => props.theme.background.contrastBackground.depthLevelMax};

    --color-primary : ${(props) => props.theme.primary.default};
    --color-primary-auxiliar : ${(props) => props.theme.primary.auxiliar};
    --color-primary-disabled :   ${(props) => props.theme.primary.off};
    --color-primary-glow :   ${(props) => props.theme.primary.glow};
    --color-primary-contrast :   ${(props) => props.theme.primary.contrastA};
    --color-primary-contrastB :   ${(props) => props.theme.primary.contrastB};

    --color-success : ${(props) => props.theme.success.default};
    --color-success-disabled :  ${(props) => props.theme.success.off};
    --color-success-glow :   ${(props) => props.theme.success.glow};
    --color-success-contrast :   ${(props) => props.theme.success.contrastA};
    --color-success-contrastB :   ${(props) => props.theme.success.contrastB};

    --color-alert : ${(props) => props.theme.alert.default};
    --color-alert-auxiliar : ${(props) => props.theme.alert.auxiliar};
    --color-alert-disabled :  ${(props) => props.theme.alert.off};
    --color-alert-glow :   ${(props) => props.theme.alert.glow};
    --color-alert-contrast :   ${(props) => props.theme.alert.contrastA};
    --color-alert-contrastB :   ${(props) => props.theme.alert.contrastB};

    --color-danger : ${(props) => props.theme.danger.default};
    --color-danger-disabled :  ${(props) => props.theme.danger.off};
    --color-danger-glow :   ${(props) => props.theme.danger.glow};
    --color-danger-contrast :   ${(props) => props.theme.danger.contrastA};
    --color-danger-contrastB :   ${(props) => props.theme.danger.contrastB};

    --color-highlight : ${(props) => props.theme.highlight.default};
    --color-highlight-disabled :  ${(props) => props.theme.highlight.off};
    --color-highlight-glow :   ${(props) => props.theme.highlight.glow};
    --color-highlight-contrast :   ${(props) => props.theme.highlight.contrastA};
    --color-highlight-contrastB :   ${(props) => props.theme.highlight.contrastB};

    --color-text-primary : ${(props) => props.theme.textPrimary};
    --color-text-secundary : ${(props) => props.theme.textsecundary};

    --toastify-color-light:  ${(props) => props.theme.background.color.depthLevelTwo};
    --toastify-color-dark: ${(props) => props.theme.background.color.depthLevelTwo};
    --toastify-color-info:  ${(props) => props.theme.primary.default};
    --toastify-color-success:${(props) => props.theme.success.default};
    --toastify-color-warning: ${(props) => props.theme.alert.default};
    --toastify-color-error: ${(props) => props.theme.danger.default};
    --toastify-color-transparent: rgba(54, 49, 49, 0.7);

    --toastify-icon-color-info: var(--toastify-color-info);
    --toastify-icon-color-success: var(--toastify-color-success);
    --toastify-icon-color-warning: var(--toastify-color-warning);
    --toastify-icon-color-error: var(--toastify-color-error);

    --toastify-toast-width: 320px;
    --toastify-toast-min-height: 64px;
    --toastify-toast-max-height: 800px;

    --toastify-text-color-info:${(props) => props.theme.textPrimary};
    --toastify-text-color-success:${(props) => props.theme.textPrimary};
    --toastify-text-color-warning:${(props) => props.theme.textPrimary};
    --toastify-text-color-error: ${(props) => props.theme.textPrimary};

    --toastify-spinner-color:  ${(props) => props.theme.primary.default};
    --toastify-spinner-color-empty-area: #e0e0e0;

    --fc-border-color: trasparent;
    --fc-today-bg-color: var(--color-primary);
    --fc-daygrid-event-dot-width: 0px;
    --fc-page-bg-color: trasparent;

    --color-stars: #ffc60a;
    --whatsapp-color: #25d366
  }
  .custom-toast-container {
    margin-bottom: 20px;
    z-index: 99999999 !important;
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
