import Head from 'next/head'
import {AnimatePresence, motion} from 'framer-motion'
import { Footer } from './Footer'
import { Navigation } from './Navigation'
import { useTheme } from 'next-themes'
import { useEffect, useMemo } from 'react'

type Props = {
    children: React.ReactNode
}

const spring = {
      type: "spring",
      damping: 20,
      stiffness: 100,
      when: "afterChildren"
    };
    

export const Layout = ({ children }: Props) => {

    const { theme, setTheme } = useTheme();

    useEffect(() => {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
            const newColorScheme = event.matches ? "dark" : "light";
            setTheme(newColorScheme);
            console.log(newColorScheme);
        });
    },[setTheme]);

    useEffect(() => {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setTheme('dark');
        }
    },[]);
    
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
                <AnimatePresence>
                    <motion.main
                        transition={spring}
                        initial={{ x: 300, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -300, opacity: 0 }}
                        className="flex-1">{children}</motion.main>
                </AnimatePresence>
                <Footer/>
            </div>
        </div> 
    )
}