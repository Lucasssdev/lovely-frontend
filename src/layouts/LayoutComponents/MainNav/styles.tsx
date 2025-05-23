import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type MagicCreationButtonProps = {
    hiddenMenu: boolean
}
export const Container = styled.div`
    height: 100%;
    width: 100%;
    display: grid;
    // background-color: red;
    grid-template-rows: 55px auto 151px 55px auto 56px;
    position: relative;
    max-height: 100vh;
    transition-duration: 0.5s;
    &.open {
        .itemMenu {
            width: 200px;
        }
        section,
        a {
            width: 100%;

            grid-template-columns: 55px auto;
        }
    }
    &.hidden {
        .itemMenu {
            width: 0px;
        }
        section,
        a {
            width: 55px;
            grid-template-columns: 55px auto;
        }
    }
`
export const SimpleOption = styled.a`
    display: grid;
    height: 55px;
    grid-template-columns: 55px auto;
    //background-color: green;
    max-width: 240px !important;
    min-width: 55px !important;
    flex-wrap: nowrap;
    color: var(--color-text-primary);
    font-size: 16px;
    font-weight: 400;
    &:hover {
        background-color: var(--bg-level-zero-contrast);
        cursor: pointer;
    }
`
export const PageIndicator = styled.a`
    display: grid;
    grid-template-columns: 55px auto;
    max-width: 240px !important;
    min-width: 55px !important;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: flex-start;
    min-height: 55px !important;
    color: var(--color-primary);
    font-size: 16px;
    font-weight: 400;
    strong {
        font-weight: 700;
    }
    div {
        display: flex;

        max-width: 185px !important;
        &:hover {
            cursor: pointer;
        }
    }
`
export const PersonalField = styled.div`
    display: grid;
    width: 55px;
    grid-template-rows: repeat(2, 53px);
    padding-top: 10px;
`
export const MagicCreationButton = styled.section<MagicCreationButtonProps>`
    display: grid;
    height: 55px;
    width: 90% !important;
    grid-template-columns: 55px auto;
    position: relative;
    align-items: center;
    justify-content: flex-start;
    color: var(--color-primary-contrast);
    background-color: var(--color-primary);
    border-top-right-radius: 27.5px;
    border-bottom-right-radius: 27.5px;
    min-width: 65px;
    font-size: 18px;
    font-weight: 700;
    flex-wrap: nowrap;
    transition-duration: 0.8s;

    svg {
        transition-duration: 1s;
        font-size: 25px;
    }
    &:hover {
        cursor: pointer;
        width: 100% !important;
        padding-left: ${(props) => (!props.hiddenMenu ? 15 : 0)}px !important;
        svg {
            transform: rotate(180deg);

            font-weight: 700;
        }
    }
    p {
        margin-left: ${(props) => (props.hiddenMenu ? -150 : 0)}px !important;
    }
`
export const MoreOptions = styled.div`
    display: grid;
    gap: 2px;
    padding-top: 34px;
    overflow-x: hidden;
    overflow-y: auto;
    margin-right: 8px;
    grid-template-rows: repeat(6, 55px);
    ::-webkit-scrollbar {
        width: 5px;
    }
    ::-webkit-scrollbar-track {
        background-color: rgba(0, 0, 0, 0.1);
        border-radius: 50px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: var(--bg-level-two);
        border-radius: 50px;
    }
`

export const Profile = styled.div`
    display: flex;
    height: 55px;
    position: relative;
    grid-template-columns: 34px auto;
    align-items: center;
    justify-content: space-between;
`
export const WrapperUserProfile = styled.div`
    display: grid;
    //background-color: red;
    height: 100%;
    grid-template-columns: 55px auto;
    max-width: 240px !important;
    min-width: 55px !important;
    flex-wrap: nowrap;
    > .avatar {
        width: 55px;
        height: 55px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    > .avatar > img {
        background-color: transparent;
        border-radius: 50%;
        object-fit: cover;
    }
    &:hover {
        cursor: pointer;
    }
`
export const WrapperCloseContainer = styled.div`
    background-color: transparent;
    height: 100vh;
    width: 100vw;
    top: 0;
    position: fixed;
`
export const Preferences = styled.span`
    width: 185px;
    min-height: 16px;
    line-height: 16px;
    overflow: hidden;
    position: relative;
    line-height: 16px;
    transition-duration: 0.5s;

    * {
        transition-duration: 0.8s;
    }
    display: flex;
    text-transform: uppercase;
    font-size: 13px !important;
    align-items: center;
    gap: 5px;
    color: var(--color-text-secundary);
    &:hover {
        text-decoration: underline;
        svg {
            padding-left: 9px;
        }
    }
    > p {
        position: absolute;
        width: 185px;
        height: 16px;

        line-height: 16px;
        align-items: center;
        display: flex;
    }
`
export const WrapperSubMenu = styled.div`
    display: flex;
    //grid-template-columns: 120px 33px;
    max-width: 160px;
    align-items: center;
    position: absolute;
`
export const Notifications = styled.div`
    display: flex;
    //grid-template-columns: 120px 33px;
    max-width: 160px;
    align-items: center;
`
export const Amount = styled.label`
    display: flex;
    background-color: var(--color-danger) !important;
    height: 23px;
    border-radius: 4px;
    font-weight: 700;
    font-size: 14px;
    color: var(--color-danger-contrastB);
    margin-left: 15px;
    justify-content: center;
    align-items: center;
    width: 33px;
`
export const Person = styled.div`
    display: flex;
    flex: 1;
    font-size: 16px;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
`
export const Text = styled.div`
    width: 185px;
    min-height: 16px;
    line-height: 16px;
    align-items: center;
    display: flex;
    overflow: hidden;
    position: relative;
    transition-duration: 0.5s;
    > p {
        position: absolute;
        width: 185px;
        height: 16px;
        line-height: 16px;
        align-items: center;
        display: flex;
    }
`
export const IconWrapper = styled.div`
    width: 55px;
    height: 100%;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    transition-duration: 0.5s;
`

export const Icon = styled(FontAwesomeIcon)`
    min-height: 10px;
    min-width: 10px;

    font-size: 18px;
    text-align: center;
`
