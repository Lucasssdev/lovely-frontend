import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { isValid } from './src/jwt/isValid'

/**
 * Avalia as rotas e a existência e validade do token de autenticação.
 * Em caso da não existência ou não validade do token em páginas com a necessiade de tal, haverá redirecionamento para /login.
 * Nos casos em que houver token, se válido o usuário é redirecionado para o Dashboard, se não é redirecionado para a página de seção expirada.
 * @param request : NextRequest.
 * @returns NextReponse para encaminhar o usuário para diferentes rotas
 */

export async function middleware(request: NextRequest) {
    const token = request.cookies.get('auth_session')?.value ?? ''
    const { pathname } = request.nextUrl

    // return NextResponse.redirect(new URL('/dashboard', request.url))
    return NextResponse.next()
    if (pathname.startsWith('/_next') || pathname.startsWith('/api')) return NextResponse.next()
    if (
        (pathname.includes('/auth/section-expired') || pathname.includes('/auth/password-reset/')) &&
        request.cookies.has('auth_session')
    ) {
        return NextResponse.next()
    }

    if (!request.cookies.has('auth_session')) {
        if (pathname.startsWith('/auth') || pathname.startsWith('/checkout')) {
            request.nextUrl.pathname = pathname
            return NextResponse.rewrite(request.nextUrl)
        } else {
            return NextResponse.redirect(new URL('/dashboard', request.url))
            return NextResponse.redirect(new URL('/auth/login', request.url))
        }
    }
    if (request.cookies.has('auth_session') && (await isValid(token))) {
        if (pathname === '/') {
            return NextResponse.redirect(new URL('/dashboard', request.url))
        } else if (!pathname.startsWith('/auth')) {
            return NextResponse.next()
        } else {
            return NextResponse.redirect(new URL('/dashboard', request.url))
        }
    } else {
        return NextResponse.redirect(new URL('/auth/section-expired', request.url))
    }
}
