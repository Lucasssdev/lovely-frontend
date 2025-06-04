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

export const Names = styled.img`
    width: 100%;
    max-width: 500px;
    height: 100%;
    background-image: ${({ src }) => `url(${src})`};
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    object-fit: contain;
    margin-top: 3rem;
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
    //border: 1px solid red;
    //background: black;
    //min-height: 100%;
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

/* --- Tabela de Comparativo --- */
export const ComparisonTable = styled.table`
    width: 100%;
    border-collapse: collapse;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    overflow: hidden;
    margin-bottom: 2rem;
`

export const TableHead = styled.thead`
    // background: ${({ theme }) => theme.secondary};
`

export const TableRow = styled.tr`
    /* Linha do cabeçalho já cuida da cor; para o body, alternar fundo */
    &:nth-child(odd) td {
        background: ${({ theme }) => theme.background.color.depthLevelTwo};
    }
    &:nth-child(even) td {
        background: ${({ theme }) => theme.background.color.depthLevelOne};
    }

    /* Efeito hover em cada linha do corpo da tabela */
    &:hover td {
        background: ${({ theme }) => theme.off}80; /* 50% opacidade do “off” */
    }
`

export const TableHeader = styled.th`
    color: #fff;
    font-weight: 600;
    font-size: 1rem;
    padding: 0.75rem 1rem;
    border-right: 1px solid rgba(255, 255, 255, 0.2);
    width: 100px;
    &:last-child {
        border-right: none;
    }
`

export const TableCell = styled.td`
    padding: 0.75rem 1rem;
    font-size: 1rem;
    color: ${({ theme }) => theme.textPrimary};
    border-right: 1px solid rgba(0, 0, 0, 0.05);
    white-space: pre-wrap;
    text-align: center;

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
    font-size: 1.4rem;
    font-weight: 700;
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
