import Head from 'next/head'
import {AnimatePresence, motion} from 'framer-motion'
import { Footer } from './Footer'
import { Navigation } from './Navigation'
import { useTheme } from 'next-themes'
import { useEffect, useMemo } from 'react'
import NoSSR from './NoSSR'

type Props = {
    children: React.ReactNode
}
    

export const Layout = ({ children }: Props) => {

    const { theme, setTheme } = useTheme();

    useEffect(() => {
        /* window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
            const newColorScheme = event.matches ? "dark" : "light";
            setTheme(newColorScheme);
        }); */
        setTheme("light");
    },[setTheme]);

    /* useEffect(() => {
        if (localStorage.getItem('theme')) {
            setTheme(localStorage.getItem('theme') as string);
        }
        else {
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                setTheme('dark');
            }
        }
        
    },[]); */
    
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
                <NoSSR><Navigation/></NoSSR>
                <main className='flex-1'>{children}</main>
                <Footer/>
            </div>
        </div> 
    )
}