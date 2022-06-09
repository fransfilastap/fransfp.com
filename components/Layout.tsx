import Head from 'next/head'
import {AnimatePresence, motion} from 'framer-motion'
import Link from 'next/link'
import { Footer } from './Footer'
import { Navigation } from './Navigation'

type Props = {
    children: React.ReactNode
}

export const Layout = ({ children }: Props) => {

    const spring = {
      type: "spring",
      damping: 20,
      stiffness: 100,
      when: "afterChildren"
    };
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