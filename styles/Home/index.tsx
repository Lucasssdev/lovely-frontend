import styled, { keyframes } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Container = styled.div`
    width: 100%;
    height: 100%;
    overflow: auto;
    overflow-x: hidden;
    background: var(--bg-level-one);
    // background: linear-gradient(180deg, rgba(242, 194, 194, 1) 1%, rgba(191, 217, 214, 1) 50%, rgba(119, 242, 230, 1) 100%);
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: var(--color-text-primary);
    padding-bottom: 3rem;
    ::-webkit-scrollbar {
        width: 0px;
    }

    .firt-text {
        text-align: center;
        margin-bottom: 2rem;
    }
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 2rem;
    width: 100%;
    // height: 100%;
    gap: 1rem;
    text-align: center;
`

export const Names = styled.img<{ start: boolean }>`
    width: 100%;
    max-width: 500px;
    height: 100%;
    background-image: ${({ src }) => `url(${src})`};
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    object-fit: contain;
    margin: 3rem 0;
    transform: ${({ start }) => (start ? 'translateY(0px) scale(1)' : 'translateY(100px) scale(0.5)')};
    margin-top: ${({ start }) => (start ? '5rem' : '15rem')};
    transition-duration: 2.5s;
`

export const CounterGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    width: 100%;
    max-width: 400px;
    margin: 2rem 0;
    background-color: var(--bg-level-two);
    padding: 2rem;
    border-radius: 0.5rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
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

export const Playlist = styled.div`
    color: var(--bg-level-two);
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem 0;

    .iframe {
        border-radius: 12px;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    }
    @media (max-width: 768px) {
        width: 100%;
    }
`
export const CounterValue = styled.span`
    font-size: 1.5rem;
    font-weight: bold;
    color: var(--bg-level-two);
`

export const CounterLabel = styled.span`
    font-size: 0.875rem;
    color: var(--bg-level-two);
`
export const Declaration = styled.p`
    font-size: 1rem;
    line-height: 1.6;
    text-align: left;
    color: var(--color-text-primary);

    text-align: center;
    margin: 1rem 0;
    //padding: 1rem;
`

export const Marquee = styled.div`
    overflow: hidden;
    width: 100%;
    mask-image: linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%);
    -webkit-mask-image: linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%);
`
const marquee = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`
export const MarqueeInner = styled.div`
    display: flex;
    width: max-content;
    animation: ${marquee} 30s linear infinite;
`
export const Photo = styled.div<{ src: string }>`
    width: 280px;
    min-height: 500px;
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

export const ComparisonTable = styled.table`
    width: 100%;
    border-collapse: collapse;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    overflow: hidden;
    margin-bottom: 2rem;
`

export const TableHead = styled.thead``

export const TableRow = styled.tr`
    &:nth-child(odd) td {
        background: ${({ theme }) => theme.background.color.depthLevelTwo};
    }
    &:nth-child(even) td {
        background: ${({ theme }) => theme.background.color.depthLevelOne};
    }

    &:hover td {
        background: ${({ theme }) => theme.secondary}80;
    }
`

export const TableHeader = styled.th`
    color: #fff;
    font-weight: 600;
    font-size: 1rem;
    padding: 0.75rem 1rem;
    width: 100px;
`

export const TableCell = styled.td`
    padding: 0.75rem 1rem;
    font-size: 1rem;
    color: ${({ theme }) => theme.textPrimary};
    border-right: 1px solid rgba(0, 0, 0, 0.05);
    white-space: pre-wrap;
    text-align: center;

    &.isEmoji {
        font-size: 1.8rem;
    }
    &:last-child {
        border-right: none;
    }

    /* Quebrar texto longo, se houver */
    word-break: break-word;
    //  white-space: nowrap; /* Evita quebra automática; no overflow ele rola */
`

/* Pequeno destaque para emojis no cabeçalho */
export const HeaderEmoji = styled.span`
    font-size: 1.4rem;
`
export const SubTitle = styled.p`
    margin-top: 2rem;
    font-size: 1.4rem;
    font-weight: 700;
    transition-duration: 500ms;
    cursor: pointer;
    &:hover {
        transform: scale(1.1);
    }
`
export const MyLove = styled.span`
    font-size: 1.5rem;
    color: var(--color-contrast);
    color: #fa5570;
`
export const Line = styled.div`
    width: 100%;
    height: 3px;
    border-radius: 8px;
    background: var(--bg-level-max);
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`

export const Bullet = styled.span<{ color: string }>`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    display: inline-block;
    background: ${({ color }) => color};
    border: solid 1px rgba(255, 255, 255, 0.5);
`

export const PhotoGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2px;
    padding: 2rem 0;
    border-radius: 12px;
`

export const PhotoItem = styled.div<{ src: string }>`
    overflow: hidden;
    width: 100px;
    height: 100px;
    background-image: ${({ src }) => `url(${src})`};
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    object-fit: cover;
    transition: transform 0.4s ease;
    &:hover {
        background-size: contain;
        object-fit: contain;
        transform: scale(2);
        border-radius: 10px;
    }
`
export const Icon = styled(FontAwesomeIcon)<{ color?: string; iconSize?: string }>`
    color: ${({ color }) => color || 'var(--text-primary)'};
    font-size: ${({ iconSize }) => iconSize || '1rem'};
`
const spin = keyframes`
  10% {
    transform: translateY(-102%);
  }
  25% {
    transform: translateY(-100%);
  }
  35% {
    transform: translateY(-202%);
  }
  50% {
    transform: translateY(-200%);
  }
  60% {
    transform: translateY(-302%);
  }
  75% {
    transform: translateY(-300%);
  }
  85% {
    transform: translateY(-402%);
  }
  100% {
    transform: translateY(-400%);
  }
`

export const AnimatedCard = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`

export const Loader = styled.div`
    color: rgb(255, 255, 255);
    font-weight: 500;
    font-size: 1rem;
    box-sizing: content-box;
    height: 40px;
    padding: 10px;
    display: flex;
    border-radius: 8px;
    white-space: nowrap;
`

export const Words = styled.div`
    overflow: hidden;
    position: relative;
    &::after {
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(var(--bg-color) 10%, transparent 30%, transparent 70%, var(--bg-color) 90%);
        z-index: 20;
    }
`

export const Word = styled.span`
    display: flex;
    justify-content: flex-start;
    height: 100%;
    padding-left: 10px;
    color: #ffffff;
    animation: ${spin} 12s infinite;
    font-weight: 700;
`

export const TimelineWrapper = styled.div`
    position: relative;
    //  margin: 5rem auto;
    // max-width: 900px;
    padding: 2rem 0;
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 4px;
        height: 100%;
        border-radius: 8px;
        background: var(--color-secondary);
    }
`

export const TimelineEvent = styled.div`
    position: relative;
    width: 100%;
    width: 50%;
    padding: 2rem 1rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    text-align: right;
    &:nth-child(even) {
        align-items: flex-start;
        text-align: left;
        left: 50%;
    }
`

export const TimelineDot = styled.div<{ side: 'left' | 'right' }>`
    content: '';
    position: absolute;
    top: 2.2rem;
    left: ${({ side }) => (side === 'left' ? 'calc(100% - 8px)' : '-8px')};
    // transform: translate(-50%, -50%);
    width: 16px;
    height: 16px;
    background: var(--color-primary);
    border-radius: 50%;
    z-index: 2;
    &:nth-child(even) {
        left: 0%;
    }
`

export const TimelineDate = styled.div`
    font-size: 1rem;
    font-weight: bold;
    color: var(--color-secondary);
    margin-bottom: 0.5rem;

    white-space: nowrap;
`

export const TimelineText = styled.p`
    font-size: 1rem;
    font-weight: 400;
    color: var(--color-text-primary);
    width: 100%;
`
