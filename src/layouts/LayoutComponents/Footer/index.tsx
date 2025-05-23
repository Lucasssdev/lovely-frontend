import React from 'react'
import * as S from './styles'
import useController from './controller'

//Componente usado no rodapé dos layouts
const Footer = () => {
    const controller = useController()
    return (
        <S.Container>
            <S.ContentFooter>
                <S.Message>{controller.lang('thanks')}</S.Message>|<S.Link> {controller.lang('terms')}</S.Link>|
                <S.Link> {controller.lang('privacy')}</S.Link>
            </S.ContentFooter>
        </S.Container>
    )
}
export default Footer
