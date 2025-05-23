import * as jose from 'jose'

export const isValid = async (jwt: string) => {
    const secret = new TextEncoder().encode(process.env.NEXT_PUBLIC_KEY_JWT) // Codifica a chave secreta do JWT em bytes usando UTF-8
    try {
        const { payload } = await jose.jwtVerify(jwt, secret) // Verifica a validade do JWT usando a chave secreta e obtém o payload (conteúdo) do JWT
        return true // Retorna true se o JWT for válido
    } catch (error) {
        console.log(error) // Registra o erro no console
        return false // Retorna false se houver algum erro na verificação do JWT, indicando que o JWT não é válido
    }
}
