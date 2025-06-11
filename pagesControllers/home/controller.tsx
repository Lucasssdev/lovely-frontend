import { useEffect, useState } from 'react'

type ThemeName =
    | 'Sobre nós'
    | 'Metas e sonhos'
    | 'Sexo e intimidade'
    | 'Tempo de qualidade'
    | 'Comunicação'
    | 'Saúde e estilo de vida'
    | 'Respeito e compromisso'

const QUESTIONS: Record<ThemeName, string[]> = {
    'Sobre nós': [
        'Quais coisas queremos muito fazer juntos antes de morrer?',
        'Qual foi o momento da sua vida que mais te transformou?',
        /* ... */
    ],
    'Metas e sonhos': [
        'Como você se imagina daqui a 5 ou 10 anos?',
        /* ... */
    ],
    'Sexo e intimidade': [
        'O que faz você se sentir mais seguro(a) e relaxado(a) na nossa intimidade?',
        /* ... */
    ],
    'Tempo de qualidade': [
        'Qual seria um dia perfeito juntos, do início ao fim?',
        /* ... */
    ],
    Comunicação: [
        'Qual é a melhor maneira de te pedir desculpas?',
        /* ... */
    ],
    'Saúde e estilo de vida': [
        'O que você faz para cuidar da sua saúde física e mental?',
        /* ... */
    ],
    'Respeito e compromisso': [
        'O que respeito significa para você em um relacionamento?',
        /* ... */
    ],
}
export default function useController() {
    const [startRender, setstartRender] = useState(false)
    const [timeTogether, setTimeTogether] = useState(0)
    const amountPhotos = 30
    useEffect(() => {
        const start = new Date('2025-02-01T00:00:00').getTime()
        const update = () => setTimeTogether(Date.now() - start)
        update()
        const id = setInterval(update, 1000)
        return () => clearInterval(id)
    }, [])

    useEffect(() => {
        if (startRender) return
        setstartRender(true)
    }, [startRender])

    const events = [
        { date: 'Setembro', year: '2024', text: 'Nossos olhos se cruzaram pela primeira vez na missa — o início de tudo.' },
        {
            date: 'Outubro',
            year: '2024',
            text: 'Nos aproximamos com leveza, num passeio como amigos, mas com o coração curioso.',
        },
        { date: '29 Dezembro', year: '2024', text: 'Nosso primeiro beijo — o momento em que tudo fez ainda mais sentido.' },
        { date: '30 Dezembro', year: '2024', text: 'Compartilhamos nossa primeira aventura juntos na Serra da Canastra.' },
        {
            date: '8 Janeiro',
            year: '2025',
            text: 'Vivemos um fim de semana mágico sob um céu estrelado que guardaremos pra sempre.',
        },
        { date: '19 Janeiro', year: '2025', text: 'A despedida na rodoviária foi difícil, mas cheia de promessas e amor.' },
        { date: 'Fevereiro', year: '2025', text: 'Mesmo longe, firmamos nosso compromisso de namoro — forte e sincero.' },
        { date: '19 Abril', year: '2025', text: 'O reencontro que provou que distância nenhuma apaga o que é verdadeiro.' },
        { date: '12 Junho', year: '2025', text: 'Nosso primeiro Dia dos Namorados — só o começo de todos que ainda virão.' },
    ]

    const breakdown = () => {
        const totalSeconds = Math.floor(timeTogether / 1000)
        const seconds = totalSeconds % 60
        const totalMinutes = Math.floor(totalSeconds / 60)
        const minutes = totalMinutes % 60
        const totalHours = Math.floor(totalMinutes / 60)
        const hours = totalHours % 24
        const totalDays = Math.floor(totalHours / 24)
        const months = Math.floor(totalDays / 30)
        const days = totalDays % 30
        const years = Math.floor(months / 12)
        return { years, months, days, hours, minutes, seconds }
    }
    const [selectedTheme, setSelectedTheme] = useState<ThemeName | null>(null)
    const [currentQuestion, setCurrentQuestion] = useState<string>('')

    const themes = Object.keys(QUESTIONS) as ThemeName[]

    function drawQuestion() {
        if (!selectedTheme) return
        const arr = QUESTIONS[selectedTheme]
        const idx = Math.floor(Math.random() * arr.length)
        setCurrentQuestion(arr[idx])
    }

    return {
        themes,
        timeTogether,
        selectedTheme,
        currentQuestion,
        amountPhotos,
        startRender,
        events,
        breakdown,
        drawQuestion,
        setSelectedTheme,
    }
}
