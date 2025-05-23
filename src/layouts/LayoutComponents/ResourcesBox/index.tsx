import React from 'react'
import { ResourcesBoxProps } from './types'
import * as S from './styles'
import { useRouter } from 'next/router'


//Esse componente é a opção default do submenu
const ResourcesBox = ({ icon, title, route, order, onClick }: ResourcesBoxProps) => {
    const useRoute = useRouter()
    return (
        <S.Container
            onClick={() => {
                if (onClick) {
                    onClick()
                }
                useRoute.push(route)
            }}
        >
            {icon ? (
                <S.IconWrapper>
                    <S.Icon icon={icon} />
                </S.IconWrapper>
            ) : null}
            <S.Title>
                <p>{title}</p>
            </S.Title>
        </S.Container>
    )
}
export default ResourcesBox
