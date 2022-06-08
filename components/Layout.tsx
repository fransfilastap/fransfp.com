import Head from 'next/head'
import Image from 'next/image'
import { Footer } from './Footer'
import { Navigation } from './Navigation'

type Props = {
    children: React.ReactNode
}

export const Layout = ({ children }: Props) => {
    return (
        <div className='flex flex-col'>
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="manifest" href="/site.webmanifest" />
                <link rel="apple-touch-icon" href="/icon.png" />
                <meta name="theme-color" content="#fff" />
            </Head>
            <div className="flex flex-col">
                <Navigation/>
                <main className="flex-1">{children}</main>
                <Footer/>
            </div>
        </div> 
    )
}