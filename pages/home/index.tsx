import * as S from '../../styles/Home'
import useController from '../../pagesControllers/home/controller'

export default function Home() {
    const controller = useController()

    return (
        <S.Container>
            <S.Marquee>
                <S.MarqueeInner>
                    <S.MarqueeGroup>
                        {[...Array(5)].map((_, i) => (
                            <S.Photo key={i} src="/photo-1.jpg" />
                        ))}
                    </S.MarqueeGroup>
                    <S.MarqueeGroup>
                        {[...Array(5)].map((_, i) => (
                            <S.Photo key={`dup-${i}`} src="/photo-1.jpg" />
                        ))}
                    </S.MarqueeGroup>
                </S.MarqueeInner>
            </S.Marquee>

            {/* nomes */}
            <S.Names>
                Lara <span>&amp;</span> Lucas
            </S.Names>

            {/* declaração em texto */}
            <S.Declaration>
                No dia em que conheci você, a minha vida mudou. A maneira que você alegra o meu coração, é difícil explicar.
                <br />
                Você me faz sorrir, de um jeito especial. Se eu pudesse te dar uma coisa na vida, seria a capacidade de se ver
                através dos meus olhos.
                <br />
                Só então você entenderia o quão especial você é para mim.
                <br />
                <br />
                <strong>❤️ EU TE AMO PARA TODO O SEMPRE ❤️</strong>
            </S.Declaration>
            {/* contador de tempo juntos */}
            <strong>Estamos juntos há</strong>
            <S.CounterGrid>
                {[
                    { label: 'Anos', value: controller.breakdown().years },
                    { label: 'Meses', value: controller.breakdown().months },
                    { label: 'Dias', value: controller.breakdown().days },
                    { label: 'Horas', value: controller.breakdown().hours },
                    { label: 'Minutos', value: controller.breakdown().minutes },
                    { label: 'Segundos', value: controller.breakdown().seconds },
                ].map(({ label, value }) => (
                    <S.CounterBox key={label}>
                        <S.CounterValue>{value}</S.CounterValue>
                        <S.CounterLabel>{label}</S.CounterLabel>
                    </S.CounterBox>
                ))}
            </S.CounterGrid>

            {/* 🎲 Jogo de Perguntas */}
            <S.GameTitle>Jogo de Perguntas</S.GameTitle>

            <S.ThemesGrid>
                {controller.themes.map((theme) => (
                    <S.ThemeBox
                        key={theme}
                        active={controller.selectedTheme === theme}
                        onClick={() => controller.setSelectedTheme(theme)}
                    >
                        {theme}
                    </S.ThemeBox>
                ))}
            </S.ThemesGrid>

            <S.DrawButton disabled={!controller.selectedTheme} onClick={controller.drawQuestion}>
                Sortear pergunta
            </S.DrawButton>

            {controller.currentQuestion && <S.QuestionBox>{controller.currentQuestion}</S.QuestionBox>}
        </S.Container>
    )
}

Home.getLayout = function getLayout(page: any) {
    return { page }
}
