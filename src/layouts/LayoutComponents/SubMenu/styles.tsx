import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type ContainerProps = {
    showSubMenu: boolean
}
export const WrapperCloseSubMenu = styled.div`
    background-color: transparent;
    height: 100vh;
    width: 100vw;
    top: 0;
    position: fixed;
    z-index: -1;
    &.openMainNav {
        left: 240px;
    }
    &.hiddenMainNav {
        left: 55px;
    }
`
export const Container = styled.div<ContainerProps>`
    position: absolute;
    top: 70px;
    left: calc(100% + 1px);
    height: calc(100% - 70px);
    width: ${({ showSubMenu }) => (showSubMenu ? 265 : 0)}px;
    //width: 260px;
    transition-duration: 500ms;
    display: flex;
    flex-direction: column;
    background-color: var(--bg-level-two);
    padding: ${({ showSubMenu }) => (showSubMenu ? '12px 10px 12px 10px' : '12px 0px')};
    border-right: 1px solid var(--bg-level-max);
    a {
        padding-left: ${({ showSubMenu }) => (showSubMenu ? '10px' : '0px')};
        width: ${({ showSubMenu }) => (showSubMenu ? '100%' : '0px')};
    }
    .textsecundary {
        width: ${({ showSubMenu }) => (!showSubMenu ? '0px' : '165px')};
    }
    ${WrapperCloseSubMenu} {
        display: ${({ showSubMenu }) => (showSubMenu ? 'flex' : 'none')};
    }

    overflow-x: hidden;
    overflow-y: auto;
    ::-webkit-scrollbar {
        width: 0px;
    }
    ::-webkit-scrollbar-track {
        background-color: transparent;
        border-radius: 50px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: transparent;
        border-radius: 50px;
    }
`

export const Content = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, auto);
`
export const Course = styled.a`
    display: flex;
    text-decoration: none;
    height: 80px;
    background-color: var(--bg-level-one);
    //padding-left: 12px;
    border-radius: 4px;
    transition-duration: 500ms;
`
export const HeaderTexts = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    //padding-left: 10px;
    gap: 5px;
`
export const Header = styled.div`
    display: flex;
    flex-direction: column;
    //background-color: aqua;
    gap: 5px;
    align-items: flex-start;
    justify-content: center;
`
export const Filters = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 6px;
    //  background-color: red !important;
    font-size: 18px;
    padding-top: 50px;
    &:hover {
        cursor: text;
    }
`

export const BrowseResources = styled.div`
    display: flex;
    flex-direction: column;
    gap: 7px;
    padding-top: 34px;
`

export const TextPrimary = styled.span`
    font-size: 16px;
    font-weight: 700;
    text-transform: uppercase;
    color: var(--color-text-secundary);
`
export const Textsecundary = styled.div`
    font-size: 13px;
    font-weight: 400;
    color: var(--color-text-secundary);
    width: 165px;
    min-height: 16px;
    line-height: 16px;
    align-items: center;
    display: flex;
    overflow: hidden;
    position: relative;
    line-height: 16px;
    transition-duration: 0.5s;
    > p {
        position: absolute;
        width: 165px;
        height: 16px;
        line-height: 16px;
        align-items: center;
        display: flex;
    }
`
export const Title = styled.span`
    font-size: 13px;
    font-weight: 400;
    color: var(--color-text-secundary);
`

export const Language = styled.div`
    display: flex;
    width: 100%;
    text-transform: uppercase;
    gap: 5px;
    align-items: center;
    height: 100%;
    color: var(--color-text-secundary);
    select {
        //  appearance: none;
        outline: none;
        background-color: transparent;
        border: hidden;
        // height: 23px;
        font-size: 16px;
        font-weight: 700;
        color: var(--color-text-secundary);
        option {
            background-color: var(--bg-level-max);
        }
    }
    &:hover {
        color: var(--color-text-primary);
        //text-decoration: underline;
    }
`
export const Logout = styled.div`
    display: grid;
    height: 23px;
    color: var(--color-text-secundary);
    grid-template-columns: 36px auto;
    align-items: center;
    font-size: 16px;
    gap: 10px;
    font-weight: 400;
    &:hover {
        color: var(--color-text-primary);
        //text-decoration: underline;
    }
`
export const Text = styled.span`
    display: flex !important;
    align-items: center;
    span {
        margin-left: 4px;
        &:hover {
            cursor: pointer;
            color: var(--color-text-primary);
            text-decoration: underline;
        }
    }
`
export const IconWrapper = styled.div`
    width: 65px;
    height: 100%;
    margin: 0;
    padding: 0;
    display: flex;
    //background-color: #0800ff !important;
    align-items: center;
    justify-content: center;
`

export const Icon = styled(FontAwesomeIcon)`
    font-size: 28px;
    text-align: center;
    color: var(--color-alert);
`
