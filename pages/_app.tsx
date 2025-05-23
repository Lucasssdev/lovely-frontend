import { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import React from 'react'
import Head from 'next/head'
import Layout from '../styles/globalsStyles'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Theme from '../src/config/themes'

config.autoAddCss = false

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
    const getLayout = Component.getLayout ?? ((page) => page)

    return (
        <>
            <Head>
                <title>Generic Project</title>
                <link rel="icon" href="logoSymbol.svg" />
                <meta name="robots" content="noindex,nofollow" />
            </Head>

            {getLayout(
                <Theme>
                    <Layout />
                    <Component {...pageProps} />
                </Theme>
            )}
        </>
    )
}
export default MyApp
