import React from 'react'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import { FilterBoxProps } from './types'
import * as S from './styles'

//Esse é o componente de cada filtro do uruario no submenu
const FilterBox = ({ item, onClick }: FilterBoxProps) => {
    return (
        <S.Container id={item.id} onClick={() => onClick}>
            {item.icon ? (
                <S.IconWrapper>
                    <S.MagnifyingGlass icon={item.icon} />
                </S.IconWrapper>
            ) : null}
            <S.Title>
                <p>{item.label}</p>
            </S.Title>
            <S.IconWrapper>
                <S.Star icon={solid('star')} />
            </S.IconWrapper>
        </S.Container>
    )
}
export default FilterBox
