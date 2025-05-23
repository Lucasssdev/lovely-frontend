import React from 'react'
import Footer from '../LayoutComponents/Footer'
import * as S from './styles'
import { PropsAuthLayout } from './types'

const AuthLayout = ({ children }: PropsAuthLayout) => {
    return (
        <S.Container>
            {/*<WarningVersionBeta />*/}
            <S.Body>{children}</S.Body>
            <Footer />
        </S.Container>
    )
}
export default AuthLayout
