import * as jose from 'jose'
import { setCookie } from 'cookies-next'

export async function token(user: object) {
    const iat = Math.floor(Date.now() / 1000) // Obtém o tempo atual em segundos
    const secret = new TextEncoder().encode(process.env.NEXT_PUBLIC_KEY_JWT) // Codifica a chave secreta do JWT em bytes usando UTF-8
    const exp = iat + 60 * 60 * 1 // Calcula o tempo de expiração do JWT em 1 hora (60 minutos * 60 segundos)
    const jwt = await new jose.SignJWT({ user }) // Cria um novo JWT com o objeto de usuário fornecido
        .setProtectedHeader({ alg: 'HS256', typ: 'JWT' }) // Define o cabeçalho protegido do JWT com o algoritmo de assinatura e o tipo de token
        .setExpirationTime(exp) // Define o tempo de expiração do JWT
        .setIssuedAt(iat) // Define o tempo de emissão do JWT
        .setNotBefore(iat) // Define o tempo a partir do qual o JWT é válido
        .sign(secret) // Assina o JWT com a chave secreta
    setCookie('Login', jwt) // Define um cookie com o nome 'Login' e o valor do JWT
    return jwt // Retorna o JWT assinado
}
