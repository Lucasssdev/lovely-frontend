import styled, { keyframes } from 'styled-components'

// === ANIMAÇÕES ===
export const rotate = keyframes`
  50% {
    transform: rotate(360deg);
  }
  100% {
    transform: rotate(720deg);
  }
`

export const shape1 = keyframes`
  60% {
    transform: scale(0.4);
  }
`

export const shape2 = keyframes`
  40% {
    transform: scale(0.4);
  }
`

export const shape3 = keyframes`
  50% {
    border-radius: 100%;
    transform: scale(0.5) rotate(-45deg);
  }
  100% {
    transform: scale(0.98) rotate(-45deg);
  }
`

export const shadowAnim = keyframes`
  50% {
    transform: translateX(-50%) scale(0.5);
    border-color: #f2f2f2;
  }
`
export const Container = styled.div`
    margin: 4rem 0;
`

export const Preloader = styled.div`
    animation: ${rotate} 2.3s cubic-bezier(0.75, 0, 0.5, 1) infinite;
    position: relative;
`

export const Span = styled.span`
    --c: #f23f3f;
    position: absolute;
    display: block;
    height: 64px;
    width: 64px;
    background: var(--c);
    border: 1px solid var(--c);
    border-radius: 100%;
`

export const Span1 = styled(Span)`
    transform: translate(-28px, -28px);
    animation: ${shape1} 2.3s cubic-bezier(0.75, 0, 0.5, 1) infinite;
`

export const Span2 = styled(Span)`
    transform: translate(28px, -28px);
    animation: ${shape2} 2.3s cubic-bezier(0.75, 0, 0.5, 1) infinite;
`

export const Span3 = styled(Span)`
    position: relative;
    border-radius: 0px;
    transform: scale(0.98) rotate(-45deg);
    animation: ${shape3} 2.3s cubic-bezier(0.75, 0, 0.5, 1) infinite;
`

export const Shadow = styled.div`
    position: relative;
    top: 30px;
    left: 50%;
    transform: translateX(-50%);
    display: block;
    height: 16px;
    width: 64px;
    border-radius: 50%;
    background-color: #d9d9d9;
    border: 1px solid #d9d9d9;
    animation: ${shadowAnim} 2.3s cubic-bezier(0.75, 0, 0.5, 1) infinite;
`
