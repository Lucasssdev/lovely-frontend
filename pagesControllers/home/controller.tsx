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
    const [timeTogether, setTimeTogether] = useState(0)

    useEffect(() => {
        const start = new Date('2025-02-01T00:00:00').getTime()
        const update = () => setTimeTogether(Date.now() - start)
        update()
        const id = setInterval(update, 1000)
        return () => clearInterval(id)
    }, [])

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
        breakdown,
        drawQuestion,
        setSelectedTheme,
    }
}
