import styled from 'styled-components'

type ConteinerProps = {
    hiddenMenu: boolean
}
export const Screen = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    overflow: auto;
`
export const Container = styled.div<ConteinerProps>`
    display: flex;
    position: relative;
    background-color: var(--bg-level-one);
    color: var(--color-text-primary);
    z-index: 0;
    #wrapper-opportunity-modal {
        display: none;
    }
`
export const LateralMenu = styled.nav<ConteinerProps>`
    border-right: 1px solid var(--bg-level-zero-contrast);
    display: flex;
    position: absolute;
    width: ${({ hiddenMenu }) => (hiddenMenu ? 55 : 240)}px;
    height: 100vh;
    background-color: var(--bg-level-max);
    transition-duration: 0.5s;
    z-index: 9;
`
export const Body = styled.div<ConteinerProps>`
    display: flex;
    padding-left: ${({ hiddenMenu }) => (hiddenMenu ? 55 : 240)}px;
    flex-direction: column;
    overflow: hidden;
    height: 100vh;
    width: 100%;
    //max-height: calc(100vh - 200px);

    transition-duration: 500ms;
    transition: padding-left 0s ease-out;
    transition-delay: ${({ hiddenMenu }) => (hiddenMenu ? '0s' : '450ms')};
`

export const Page = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    //max-height: 100vh !important;
    overflow-x: hidden;
    overflow-y: scroll;
    //background-color: red;

    ::-webkit-scrollbar {
        width: 15px;
    }
    ::-webkit-scrollbar-track {
        background-color: rgba(0, 0, 0, 0.1);
        border-left: solid 1px rgba(255, 255, 255, 0.1);
        //border-radius: 50px;
    }
    ::-webkit-scrollbar-thumb {
        background-color: var(--bg-level-max);
        //  border-radius: 50px;
    }
`
