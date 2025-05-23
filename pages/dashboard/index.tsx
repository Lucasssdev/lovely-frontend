import * as S from '../../styles/Dashboard'
import MainLayout from '../../src/layouts/mainLayout'

import useController from '../../pagesControllers/dashboard/controller'

export default function Dashboard() {
    const controller = useController()
    return (
        <S.Container>
            <S.ButtonHome
                className="buttonHome"
                onClick={() => {
                    alert('home')
                }}
            >
                {controller.lang('homePage')}
            </S.ButtonHome>
        </S.Container>
    )
}

Dashboard.getLayout = function getLayout(page: any) {
    return <MainLayout>{page}</MainLayout>
}
