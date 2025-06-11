import * as S from '../styles/Home'
import useController from '../pagesControllers/home/controller'
import { faMars, faVenus, faHeart, faInfinity } from '@fortawesome/pro-solid-svg-icons'
import HeartAnimation from '../src/components/HeartAnimation'
export default function Home() {
    const controller = useController()

    return (
        <S.Container className="test">
            <S.Marquee>
                <S.MarqueeInner>
                    <S.MarqueeGroup>
                        {[...Array(controller.amountPhotos)].map((_, i) => {
                            const photos = [1, 2, 3, , 9, 10, 22, , 20, 27, 16]
                            if (photos.includes(i + 1)) return <S.Photo key={i} src={`/photo-${i + 1}.jpg`} />
                        })}
                    </S.MarqueeGroup>
                    <S.MarqueeGroup>
                        {[...Array(controller.amountPhotos)].map((_, i) => {
                            const photos = [1, 2, 3, , 9, 10, 22, , 20, 27, 16]
                            if (photos.includes(i + 1)) return <S.Photo key={i} src={`/photo-${i + 1}.jpg`} />
                        })}
                    </S.MarqueeGroup>
                </S.MarqueeInner>
            </S.Marquee>
            <S.Content>
                {/* nomes */}
                <S.Names key={`names`} src="/names.png" start={controller.startRender} />

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
                    <S.Icon icon={faInfinity} color="var(--color-secondary)" iconSize="2rem" />
                    <br />
                    <br />
                    <S.AnimatedCard>
                        <S.Loader>
                            EU TE
                            <S.Words>
                                <S.Word>QUERO COMIGO 🌹</S.Word>
                                <S.Word>AMO PARA SEMPRE ❤️</S.Word>
                                <S.Word>ESCOLHO TODO DIA 💍</S.Word>
                                <S.Word>LEVO NO MEU PEITO 🫀</S.Word>
                                <S.Word>VEJO NO MEU FUTURO ✨</S.Word>
                            </S.Words>
                        </S.Loader>
                    </S.AnimatedCard>
                </S.Declaration>
                <S.Icon icon={faHeart} color="#ff2323" iconSize="2rem" />
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

                {/* declaração em texto */}
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

                {/* linha do tempo */}
                <S.SubTitle>Linha do Tempo</S.SubTitle>
                <S.TimelineWrapper>
                    {controller.events.map((event, i) => (
                        <S.TimelineEvent key={i}>
                            <S.TimelineDot side={i % 2 === 0 ? 'left' : 'right'} />
                            <S.TimelineDate>
                                <b>{event.year}</b> <span>|</span> {event.date}
                            </S.TimelineDate>
                            <S.TimelineText>{event.text}</S.TimelineText>
                        </S.TimelineEvent>
                    ))}
                </S.TimelineWrapper>

                {/* playlist */}
                <S.SubTitle>Nossa Playlist</S.SubTitle>
                <S.Playlist>
                    <iframe
                        className="iframe"
                        src="https://open.spotify.com/embed/playlist/4I5rPKPogPvjW94EGzbaul?utm_source=generator&theme=0"
                        width="100%"
                        height="152"
                        frameBorder="0"
                        allow=" clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"
                    ></iframe>
                </S.Playlist>

                {/* comparativo */}
                <S.SubTitle>Nossos Matches</S.SubTitle>
                <S.ComparisonTable>
                    <S.TableHead>
                        <S.TableRow>
                            <S.TableHeader>
                                <S.HeaderEmoji>
                                    <S.Icon icon={faMars} color="var(--color-primary)" iconSize="2rem" />
                                </S.HeaderEmoji>
                            </S.TableHeader>
                            <S.TableHeader>
                                <b>VS</b>
                            </S.TableHeader>
                            <S.TableHeader>
                                <S.HeaderEmoji>
                                    <S.Icon icon={faVenus} color="var(--color-contrast)" iconSize="2rem" />
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
                            <S.TableCell className="isEmoji">🏕️{/* natureza */}</S.TableCell>
                            <S.TableCell>Lugar</S.TableCell>
                            <S.TableCell className="isEmoji">🏚️{/* cidade */}</S.TableCell>
                        </S.TableRow>

                        <S.TableRow>
                            <S.TableCell className="isEmoji">🧀🍲 </S.TableCell>
                            <S.TableCell>Comida</S.TableCell>
                            <S.TableCell className="isEmoji">🥩🍫 </S.TableCell>
                        </S.TableRow>
                        <S.TableRow>
                            <S.TableCell className="isEmoji">🍉 </S.TableCell>
                            <S.TableCell>Fruta</S.TableCell>
                            <S.TableCell className="isEmoji">🥝 </S.TableCell>
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
                            <S.TableCell className="isEmoji">🎮</S.TableCell>
                            <S.TableCell>Hobby</S.TableCell>
                            <S.TableCell className="isEmoji">🎨</S.TableCell>
                        </S.TableRow>

                        <S.TableRow>
                            <S.TableCell className="isEmoji">❄️</S.TableCell>
                            <S.TableCell>Estação do ano</S.TableCell>
                            <S.TableCell className="isEmoji">☀️</S.TableCell>
                        </S.TableRow>

                        <S.TableRow>
                            <S.TableCell className="isEmoji">🐶{/* dog */}</S.TableCell>
                            <S.TableCell>Pet</S.TableCell>
                            <S.TableCell className="isEmoji">🐶{/* dog */}</S.TableCell>
                        </S.TableRow>

                        <S.TableRow>
                            <S.TableCell className="isEmoji">🥛{/* leite */}</S.TableCell>
                            <S.TableCell>Bebida</S.TableCell>
                            <S.TableCell className="isEmoji">🍷{/* vinho */}</S.TableCell>
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
                            <S.TableCell className="isEmoji">🍔{/* hamburgueria */}</S.TableCell>
                            <S.TableCell>Restaurante</S.TableCell>
                            <S.TableCell className="isEmoji">🍣{/* japonês */}</S.TableCell>
                        </S.TableRow>
                    </tbody>
                </S.ComparisonTable>

                {/* Declaration */}
                <S.Declaration>
                    <S.MyLove>Meu amor</S.MyLove>, você mudou completamente minha maneira de ver o amor. Não pensei que um
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

                {/* Moments */}
                <S.SubTitle>Momentos</S.SubTitle>
                <S.PhotoGrid>
                    {Array.from({ length: controller.amountPhotos }).map((_, index) => (
                        <S.PhotoItem key={index} src={`/photo-${index + 1}.jpg`} />
                    ))}
                </S.PhotoGrid>
                <HeartAnimation />
            </S.Content>
        </S.Container>
    )
}

Home.getLayout = function getLayout(page: any) {
    return { page }
}
