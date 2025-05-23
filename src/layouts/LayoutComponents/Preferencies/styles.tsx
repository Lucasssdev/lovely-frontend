import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import allFlags from '../../../../public/allFlags.png'
interface PropsFlag {
    index: number
}
export const Container = styled.div`
    position: absolute;
    top: -8px;
    left: 100%;
    height: 384px;
    z-index: 99999;
    width: 245px;
    display: flex;
    background-color: var(--bg-level-max);
    // transition-duration: 0.5s;
    margin-left: 20px;

    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
    ::before {
        content: '';
        position: absolute;
        right: 100%;
        top: 26px;
        width: 0;
        height: 0;

        border-top: 7px solid transparent;
        border-right: 12px solid var(--bg-level-max);
        border-bottom: 7px solid transparent;
    }
`

export const SimpleOption = styled.div`
    display: grid;
    height: 23px;
    grid-template-columns: 36px auto;
    align-items: center;
    font-size: 16px;
    gap: 10px;
    font-weight: 400;
    &:hover {
        //color: var(--color-text-secundary);
        text-decoration: underline;
    }
`

export const Photo = styled.div`
    height: 85px;
    width: 85px;
    border-radius: 50%;
    background-color: var(--bg-level-max);
    box-sizing: border-box;
    display: flex;
    padding: 6px;
    justify-content: center;
    position: relative;
    align-items: center;
    &:hover {
        > div {
            display: flex;
        }
    }
    > div {
        display: none;
        background-color: rgba(0, 0, 0, 0.7);
        align-items: center;
        justify-content: center;
        position: absolute;
        width: 75%;
        height: 75%;
        border-radius: 50%;

        &:hover {
            cursor: pointer;
        }
    }
    > img {
        width: 100%;
        height: 100%;
    }
    label {
        background-color: rgba(0, 0, 0, 0.1);
        border-radius: 50%;
        width: 100%;
        flex-direction: column;
        gap: 5px;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--color-text-primary);
        svg {
            font-size: 20px;
        }
        input {
            display: none;
        }
        &:hover {
            cursor: pointer;
        }
    }
`
export const Content = styled.div`
    display: grid;
    width: 100%;
    grid-template-rows: auto 156px 93px;
    border-radius: 4px;
    // box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
    img {
        background-color: var(--color-primary);
        border-radius: 50%;
        object-fit: cover;
        border: 6px solid var(--bg-level-max);
    }
`
export const Theme = styled.div`
    display: flex;
    width: 100%;
    gap: 10px;
    color: var(--color-text-secundary);
    * {
        transition-duration: 0.8s;
    }
    align-items: center;
    height: 100%;
    //background-color: red;
    label {
        font-size: 18px;
        margin-top: 3px;
        position: relative;
        display: inline-block;
        width: 40px;
        height: 12px;
        input {
            opacity: 0;
            width: 0;
            height: 0;
        }
        span {
            background-color: var(--bg-level-two);
            position: absolute;
            cursor: pointer;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            //  background: var(--color-primary);
            transition: 0.5s;
            border-radius: 30px;
        }
        span:before {
            position: absolute;
            content: '';
            height: 18px;
            width: 50%;
            border-radius: 50%;
            margin-top: -4px;
            box-shadow: inset 8px -4px 0px 0px var(--color-text-secundary);
            background: transparent;

            transition: 0.5s;
        }
        input:checked + span {
            background-color: var(--bg-level-two);
        }

        input:checked + span:before {
            left: 2px;
            transform: translateX(100%);
            box-shadow: inset 15px -4px 0px 15px var(--color-text-secundary);
        }
    }
    &:hover {
        color: var(--color-text-primary);
    }
`
export const Flag = styled.div<PropsFlag>`
    background-image: url(${allFlags.src});
    background-size: fill;
    background-repeat: no-repeat;
    background-position: calc((${(props) => props.index}) * -25px);
    width: 25px;
    height: 17px;
    border-radius: 2px;
    border: hidden;

    position: relative;
`
export const Options = styled.div`
    display: flex;
    flex-direction: column;
    gap: 7px;
    padding-top: 34px;
`

export const Person = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    //  background-color: red !important;
    font-size: 18px;
    margin-top: -40px;
    &:hover {
        cursor: text;
    }
`
export const LanguageAndTheme = styled.div`
    display: flex;
    flex-direction: column;

    gap: 5px;
    align-items: flex-start;
    justify-content: center;
    img {
        height: 21px;
        width: 21px;
        background-color: transparent;
        border-radius: 0%;
        object-fit: fill;
        border: hidden;
    }
`
export const UserName = styled.span`
    display: flex !important;
    text-align: center;
    font-size: 14px;
    font-weight: 700;
    color: var(--color-primary);
    &:hover {
        text-decoration: underline;
        cursor: pointer;
    }
`

export const Language = styled.div`
    display: flex;
    width: 100%;
    text-transform: uppercase;
    gap: 5px;
    align-items: center;
    height: 100%;
    color: var(--color-text-secundary);

    &:hover {
        color: var(--color-text-primary);
    }
`
export const Select = styled.div`
    text-transform: capitalize;
    color: var(--color-text-secundary);
    display: flex;
    gap: 10px;
    position: relative;
    font-size: 16px;
    font-weight: 700;
    align-items: center;
    justify-content: space-around;
    min-width: 100px;
    svg {
        font-size: 14px;

        &:hover {
            color: var(--color-text-primary);
            cursor: pointer;
        }
    }
    &:hover {
        color: var(--color-text-primary);
        cursor: pointer;
    }
`
export const LanguagesOptions = styled.div`
    position: absolute;
    background-color: var(--bg-level-two);
    border-radius: 4px;
    border: 1px solid var(--bg-level-one);
    top: calc(100% + 5px);
    //width: 100%;
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 3px;
`
export const OptionValue = styled.div`
    padding-left: 5px;
    color: var(--color-text-secundary);
    padding: 2px;
    border-radius: 4px;
    white-space: nowrap;

    &:hover {
        background-color: var(--color-primary);

        color: var(--color-text-primary);
        cursor: pointer;
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
        display: flex;
        margin-left: 3px;
    }
    &:hover {
        cursor: pointer;
        color: var(--color-text-primary);
    }
`
export const IconWrapper = styled.div`
    width: 55px;
    height: 100%;
    margin: 0;
    padding: 0;
    display: flex;
    //  background-color: red;
    align-items: center;
    justify-content: center;
`

export const Icon = styled(FontAwesomeIcon)`
    font-size: 18px;
    text-align: center;
`
