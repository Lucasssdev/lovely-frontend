const validateEmail = (email: string) => {
    // Remover espaços em branco antes e depois da string
    const trimmedEmail = email.trim()

    // Expressão regular para validar o formato do e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    // Verificar se o e-mail é válido
    return emailRegex.test(trimmedEmail)
}
export default validateEmail
