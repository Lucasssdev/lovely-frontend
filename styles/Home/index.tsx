import styled, { keyframes } from 'styled-components'

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    overflow: auto;
    overflow-x: hidden;
    background: #f2c2c2;
    background: linear-gradient(180deg, rgba(242, 194, 194, 1) 1%, rgba(191, 217, 214, 1) 50%, rgba(119, 242, 230, 1) 100%);
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: var(--bg-level-one);

    ::-webkit-scrollbar {
        width: 0px;
    }

    .firt-text {
        text-align: center;
        margin-bottom: 2rem;
    }
`
export const Carousel = styled.div`
    display: flex;
    //height: 500px;
    gap: 1rem;
    text-align: center;
    // overflow: auto;
    overflow-y: visible;
`

export const Names = styled.h1`
    color: var(--bg-level-max);
    text-transform: uppercase;
    font-weight: 900;
    font-size: 2rem;
    white-space: nowrap;
    font-family: 'Love Light', cursive;
    padding: 2rem 0;

    span {
        font-size: 2.5rem;
    }
`

export const CounterGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    margin: 2rem 0;
`

export const CounterBox = styled.div`
    background: ${({ theme }) => theme.secondary};
    padding: 1rem;
    border-radius: 0.5rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const CounterValue = styled.span`
    font-size: 1.5rem;
    font-weight: bold;
    color: var(--bg-level-one);
`

export const CounterLabel = styled.span`
    font-size: 0.875rem;
    color: var(--bg-level-one);
`
export const Declaration = styled.p`
    font-size: 1rem;
    line-height: 1.6;
    text-align: left;
    color: var(--bg-level-one);
    text-align: center;
    margin-bottom: 2rem;
    padding: 1rem;
`

export const Marquee = styled.div`
    overflow: hidden;
    border: 1px solid red;
    background: black;
    min-height: 100%;
    width: 100%;
    mask-image: linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%);
    -webkit-mask-image: linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%);
    // margin-bottom: 2rem;
`
const marquee = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`
export const MarqueeInner = styled.div`
    display: flex;
    width: max-content;
    //height: 100%;

    animation: ${marquee} 30s linear infinite;
`
export const Photo = styled.div<{ src: string }>`
    width: 400px;
    min-height: 1000px;
    background-image: ${({ src }) => `url(${src})`};
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    object-fit: contain;
`
export const MarqueeGroup = styled.div`
    display: flex;
    height: 100%;

    width: 100%;
`

export const GameTitle = styled.h2`
    margin-top: 3rem;
    font-size: 1.75rem;
    color: ${({ theme }) => theme.primary};
`

export const ThemesGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    margin: 1rem 0 2rem;
`

export const ThemeBox = styled.button<{ active: boolean }>`
    padding: 1rem;
    background: ${({ active, theme }) => (active ? theme.primary : theme.background.color.depthLevelTwo)};
    color: ${({ active, theme }) => (active ? theme.contrastA : theme.textPrimary)};
    border: 2px solid ${({ theme }) => theme.primary};
    border-radius: 0.5rem;
    cursor: pointer;
    transition: background 0.2s;
    &:hover {
        background: ${({ theme }) => theme.off};
    }
`

export const DrawButton = styled.button`
    padding: 0.75rem 1.5rem;
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.contrastA};
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;
    opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
    pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};
    margin-bottom: 1.5rem;
    &:hover:not([disabled]) {
        background: ${({ theme }) => theme.glow};
    }
`

export const QuestionBox = styled.div`
    padding: 1rem;
    background: ${({ theme }) => theme.background.color.depthLevelTwo};
    border-radius: 0.5rem;
    font-size: 1rem;
    color: ${({ theme }) => theme.textPrimary};
    max-width: 500px;
    margin: 0 auto;
    text-align: center;
`
