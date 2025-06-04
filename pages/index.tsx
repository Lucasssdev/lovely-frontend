import * as S from '../styles/Home'
import useController from '../pagesControllers/home/controller'
import { faMars, faVenus, faHeart } from '@fortawesome/pro-solid-svg-icons'
import HeartAnimation from '../src/components/HeartAnimation'
export default function Home() {
    const controller = useController()

    return (
        <S.Container className="test">
            <S.Marquee>
                <S.MarqueeInner>
                    <S.MarqueeGroup>
                        {[...Array(controller.amountPhotos)].map((_, i) => {
                            const photos = [1, 2, 3, , 910]
                            if (photos.includes(i + 1)) return <S.Photo key={i} src={`/photo-${i + 1}.jpg`} />
                        })}
                    </S.MarqueeGroup>
                    <S.MarqueeGroup>
                        {[...Array(controller.amountPhotos)].map((_, i) => {
                            const photos = [1, 2, 3, , 910]
                            if (photos.includes(i + 1)) return <S.Photo key={i} src={`/photo-${i + 1}.jpg`} />
                        })}
                    </S.MarqueeGroup>
                </S.MarqueeInner>
            </S.Marquee>
            <S.Content>
                {/* nomes */}
                <S.Names key={`names`} src="/names.png" />

                {/* declaração em texto */}
                <S.Declaration>
                    Nosso amor não precisa ser explicado, <br /> ele é sentido ❤️‍🔥
                    <br /> <br />É aquele tipo de conexão que acontece no jeito como nos olhamos 👁️‍🗨️, nas conversas que fluem sem
                    esforço 🗨️, na paz que sentimos só por estarmos juntos 🌙. <br />
                    <br />A gente não forçou nada 💫, e talvez seja isso que torna tudo tão especial ✨. Porque no fim, o que
                    temos é leve, verdadeiro e inteiro.
                    <br />
                    <br />
                    <strong>E é NOSSO 💑</strong>
                    <br />
                    <br />
                    ♾️
                    <br />
                    <br />
                    <strong>
                        EU TE AMO PARA TODO O SEMPRE
                        <br />
                        <br />
                        <S.Icon icon={faHeart} color="#ff2323" iconSize="2rem" />
                    </strong>
                </S.Declaration>
                <S.Line />
                {/* contador de tempo juntos */}
                <S.SubTitle>Estamos juntos há:</S.SubTitle>
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
                <S.Line />
                <S.Declaration>
                    Nosso encontro não foi sorte, foi uma <br />
                    <strong>✨Deuscidência✨</strong> <br />
                    <br />
                    Desde o primeira vez que nosso olhar se cruzou 👀, algo em mim já soube que você mudaria tudo. Cada conversa
                    🗣️, cada risada 😄, me fazia querer estar mais perto. <br />
                    <br />
                    A distância que vivemos me ensinou o valor imenso que você tem na minha vida 💌 e, agora, mais do que nunca,
                    tenho a certeza de que quero continuar construindo nosso futuro lado a lado 🏡, vivendo e aprendendo juntos
                    todos os dias 📖. E quero que esse contador passe dos 100 anos 💯❤️.
                    <br />
                    <br />
                    Se tivesse um único desejo, seria que você pudesse se ver do jeito que eu te vejo — porque aí você entenderia
                    exatamente por que eu amo tanto você 💕.
                </S.Declaration>
                <S.Line />
                <S.SubTitle>Nossos Matches</S.SubTitle>

                <S.ComparisonTable>
                    <S.TableHead>
                        <S.TableRow>
                            <S.TableHeader>
                                <S.HeaderEmoji>
                                    <S.Icon icon={faMars} color="var(--color-primary)" />
                                </S.HeaderEmoji>
                            </S.TableHeader>
                            <S.TableHeader>VS</S.TableHeader>
                            <S.TableHeader>
                                <S.HeaderEmoji>
                                    <S.Icon icon={faVenus} color="var(--color-contrast)" />
                                </S.HeaderEmoji>
                            </S.TableHeader>
                        </S.TableRow>
                    </S.TableHead>

                    <tbody>
                        <S.TableRow>
                            <S.TableCell>
                                <S.Bullet color="var(--bg-level-zero)" />
                            </S.TableCell>
                            <S.TableCell>Cor</S.TableCell>
                            <S.TableCell>
                                <S.Bullet color="var(--color-primary)" />
                            </S.TableCell>
                        </S.TableRow>

                        <S.TableRow>
                            <S.TableCell>🏕️{/* natureza */}</S.TableCell>
                            <S.TableCell>Lugar</S.TableCell>
                            <S.TableCell>🏚️{/* cidade */}</S.TableCell>
                        </S.TableRow>

                        <S.TableRow>
                            <S.TableCell>🧀🍲 </S.TableCell>
                            <S.TableCell>Comida</S.TableCell>
                            <S.TableCell>🥩🍫 </S.TableCell>
                        </S.TableRow>
                        <S.TableRow>
                            <S.TableCell>🍉 </S.TableCell>
                            <S.TableCell>Fruta</S.TableCell>
                            <S.TableCell>🥝 </S.TableCell>
                        </S.TableRow>

                        <S.TableRow>
                            <S.TableCell>Rick and Morty</S.TableCell>
                            <S.TableCell>Filme Série </S.TableCell>
                            <S.TableCell>Mamma Mia</S.TableCell>
                        </S.TableRow>

                        <S.TableRow>
                            <S.TableCell>Nacional</S.TableCell>
                            <S.TableCell>Estilo musical</S.TableCell>
                            <S.TableCell>ABBA</S.TableCell>
                        </S.TableRow>

                        <S.TableRow>
                            <S.TableCell>🎮</S.TableCell>
                            <S.TableCell>Hobby</S.TableCell>
                            <S.TableCell>🎨</S.TableCell>
                        </S.TableRow>

                        <S.TableRow>
                            <S.TableCell>❄️</S.TableCell>
                            <S.TableCell>Estação do ano</S.TableCell>
                            <S.TableCell>☀️</S.TableCell>
                        </S.TableRow>

                        <S.TableRow>
                            <S.TableCell>🐶{/* dog */}</S.TableCell>
                            <S.TableCell>Pet</S.TableCell>
                            <S.TableCell>🐶{/* dog */}</S.TableCell>
                        </S.TableRow>

                        <S.TableRow>
                            <S.TableCell>🥛{/* leite */}</S.TableCell>
                            <S.TableCell>Bebida</S.TableCell>
                            <S.TableCell>🍷{/* vinho */}</S.TableCell>
                        </S.TableRow>

                        <S.TableRow>
                            <S.TableCell>Doce de leite </S.TableCell>
                            <S.TableCell>Doce </S.TableCell>
                            <S.TableCell>Açai</S.TableCell>
                        </S.TableRow>

                        <S.TableRow>
                            <S.TableCell>Autoconhecimento</S.TableCell>
                            <S.TableCell>Livro </S.TableCell>
                            <S.TableCell>Romance</S.TableCell>
                        </S.TableRow>

                        <S.TableRow>
                            <S.TableCell>🍔{/* hamburgueria */}</S.TableCell>
                            <S.TableCell>Restaurante</S.TableCell>
                            <S.TableCell>🍣{/* japonês */}</S.TableCell>
                        </S.TableRow>
                    </tbody>
                </S.ComparisonTable>
                <S.Line />
                <S.Declaration>
                    <S.MyLove>Meu amor,</S.MyLove> você mudou completamente minha maneira de ver o amor. Não pensei que um
                    sentimento pudesse ser tão intenso e tão natural ao mesmo tempo. 💖
                    <br />
                    <br />
                    Amo a forma como você é forte 💪 e frágil 🌸, determinada 🎯 e meiga 🫶, sempre em busca de ser melhor e me
                    inspirando a crescer também. ✨
                    <br />
                    <br />
                    Seu olhar 👀 me desmonta, seu sorriso 😊 me tranquiliza, e tudo em você me faz querer estar por perto sempre.
                    🤍
                    <br />
                    <br />
                    Obrigado por ter me esperado, por ser tão incrível 🌟 e por acreditar em nós. 🙏
                    <br />
                    <br />
                    Eu quero viver cada instante ao seu lado, e levar esse amor pela vida inteira. 💑❤️
                </S.Declaration>
                <S.Line />
                <S.SubTitle>Nossas Fotos</S.SubTitle>
                <S.PhotoGrid>
                    {Array.from({ length: controller.amountPhotos }).map((_, index) => (
                        <S.PhotoItem key={index} src={`/photo-${index + 1}.jpg`} />
                    ))}
                </S.PhotoGrid>

                {/* 🎲 Jogo de Perguntas */}
                {/*     <S.GameTitle>Jogo de Perguntas</S.GameTitle>
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

                {controller.currentQuestion && <S.QuestionBox>{controller.currentQuestion}</S.QuestionBox>} */}
                <HeartAnimation />
            </S.Content>
        </S.Container>
    )
}

Home.getLayout = function getLayout(page: any) {
    return { page }
}
