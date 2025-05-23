export function validateName(name: string): boolean {
    // Remover espaços em branco no início e no final
    const trimmedName = name.trim()

    // Remover caracteres especiais e números usando replace
    const nameOnlyLetters = trimmedName.replace(/[^a-zA-ZÀ-ÿ ]/g, '')

    // Verificar se o nome contém apenas letras
    if (trimmedName !== nameOnlyLetters) {
        return false
    }

    // Verificar se o nome tem pelo menos duas palavras separadas por espaço
    const words = nameOnlyLetters.split(' ')
    if (words.length < 2) {
        return false
    }

    return true
}
