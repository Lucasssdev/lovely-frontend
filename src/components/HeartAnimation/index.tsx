import React from 'react'
import * as S from './styles'

const HeartAnimation = () => {
    return (
        <S.Container>
            <S.Preloader>
                <S.Span1 />
                <S.Span2 />
                <S.Span3 />
            </S.Preloader>

            <S.Shadow />
        </S.Container>
    )
}

export default HeartAnimation
