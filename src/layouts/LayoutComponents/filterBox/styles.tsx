import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Container = styled.div`
    display: grid;
    grid-template-columns: 55px auto 40px;
    background-color: var(--bg-level-one);
    width: 100%;
    padding: 10px 0px;
    box-sizing: border-box;
    height: 59px;
    border-radius: 4px;
    &:hover {
        background-color: var(--bg-level-max);
        cursor: pointer;
    }
`

export const Title = styled.span`
    font-weight: 400;
    font-size: 16px;
    width: 145px;
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
        width: 145px;
        height: 16px;
        line-height: 16px;
        align-items: center;
        display: flex;
    }
`
export const IconWrapper = styled.div`
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    display: flex;
    // background-color: #0800ff !important;
    align-items: center;
    justify-content: center;
`

export const MagnifyingGlass = styled(FontAwesomeIcon)`
    font-size: 16px;
    text-align: center;
    color: var(--color-text-secundary);
`
export const Star = styled(FontAwesomeIcon)`
    font-size: 16px;
    text-align: center;
    color: var(--color-primary);
`
