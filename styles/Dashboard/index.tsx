import styled from 'styled-components'
interface Props {
    bg: boolean
}

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: flex-start;
    align-items: center;
    gap: 50px;
`
export const ButtonHome = styled.button`
    display: inline-block;
    transition: all 0.2s ease-in;
    position: relative;
    overflow: hidden;
    z-index: 1;
    color: var(--color-text-secundary);
    padding: 0.7em 1.7em;
    font-size: 18px;
    border-radius: 0.5em;
    background: transparent;
    border: 1px solid var(--bg-level-max);
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    &:active {
        color: var(--color-text-primary);
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }

    &:before {
        content: '';
        position: absolute;
        left: 50%;
        transform: translateX(-50%) scaleY(1) scaleX(1.25);
        top: 100%;
        width: 140%;
        height: 180%;
        background-color: rgba(0, 0, 0, 0.05);
        border-radius: 50%;
        display: block;
        transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
        z-index: -1;
        color: var(--color-text-primary);
    }

    &:after {
        content: '';
        position: absolute;
        left: 55%;
        transform: translateX(-50%) scaleY(1) scaleX(1.45);
        top: 180%;
        width: 160%;
        height: 190%;
        background-color: var(--color-primary);
        border-radius: 50%;
        display: block;
        transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
        z-index: -1;
        color: var(--color-text-primary);
    }

    &:hover {
        cursor: pointer;
        color: var(--color-text-primary);
        border: 1px solid var(--color-primary);
    }

    &:hover:before {
        top: -35%;
        background-color: var(--color-primary);
        transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
    }

    &:hover:after {
        top: -45%;
        background-color: var(--color-primary);
        transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
    }
`
