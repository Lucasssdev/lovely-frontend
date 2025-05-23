import styled from 'styled-components'

export const Container = styled.footer`
    display: flex;
    height: 35px;
    min-height: 35px;
    justify-content: flex-end;
    background-color: var(--bg-level-zero);
    padding: 5px 5px;
`
export const ContentFooter = styled.div`
    display: flex;
    width: auto;
    font-size: 12px;
    color: var(--color-text-secundary);
`
export const Message = styled.span`
    display: flex;
    padding-right: 3px;
    &:hover {
        color: var(--color-text-primary);
        cursor: url('../../../../public/heart-emoji.png'), default;
    }
`
export const Link = styled.span`
    display: flex;
    justify-content: flex-end;
    background-color: var(--bg-level-zero);
    padding: 0px 3px;
    text-decoration: underline;
    &:hover {
        color: var(--color-text-primary);
        cursor: pointer;
    }
`
