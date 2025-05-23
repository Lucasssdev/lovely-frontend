export const defineTextColorByRgba = (rgba?: string) => {
    const match = rgba && rgba.match(/rgba\((\d+), (\d+), (\d+), (\d+(\.\d+)?)\)/)
    if (!match) {
        return 'var(--color-text-primary)'
    }
    const red = parseInt(match[1])
    const green = parseInt(match[2])
    const blue = parseInt(match[3])

    // Obtém a cor de texto com base na cor de fundo
    const contrastColor = getContrastColor(red, green, blue)

    return contrastColor
}
const getContrastColor = (red: number, green: number, blue: number): 'var(--color-text-primary)' | 'var(--bg-level-one)' => {
    // Determina se a cor é quente ou fria
    const isWarm = isWarmColor(red, green, blue)

    // Retorna a cor de texto com base na temperatura da cor
    return !isWarm ? 'var(--color-text-primary)' : 'var(--bg-level-one)'
}

const isWarmColor = (red: number, green: number, blue: number): boolean => {
    // Calcula a soma das intensidades de vermelho, verde e azul
    const warmthScore = red * 2 - green * 0.5 - blue * 0.5
    // Verifica se a pontuação de calor está acima de um limite arbitrário para determinar se a cor é quente ou fria
    const threshold = 0 // Valor escolhido arbitrariamente, ajuste conforme necessário

    return warmthScore >= threshold
}
