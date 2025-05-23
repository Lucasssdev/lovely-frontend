import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    background-color: var(--bg-level-one);
    color: var(--color-text-primary);
    overflow: hidden;
`
export const Body = styled.article`
    height: 100%;
    overflow: auto;
    ::-webkit-scrollbar {
        width: 10px;
    }
    ::-webkit-scrollbar-track {
        background-color: rgba(0, 0, 0, 0.1);
        border-radius: 50px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: var(--bg-level-zero);
        border-radius: 50px;
    }
`
