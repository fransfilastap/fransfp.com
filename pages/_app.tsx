import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import * as ga from '../lib/ga';
import { AppProvider } from '../store/AppProvider';
import { ThemeProvider } from 'next-themes';
import { motion } from 'framer-motion';


const variants = {
  loading: {
    width: '0px',
    transformOrigin: 'right center',
    transition: {
      duration: 0.5,
      ease: "easeInOut"
    }
  },
  loaded: {
    width: '100%',
    transformOrigin: 'left center',
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  }
}

function MyApp({ Component, pageProps }: AppProps) {

  const router = useRouter();
  /* const [isLoading, setIsLoading] = useState<boolean>(true); */

  useEffect(() => {
    
    const handleRouteChange = (url: string) => {
      ga.pageview(url);
      /* setTimeout(() => {
        setIsLoading(true);
      }, 1000); */
    };

/*     router.events.on("routeChangeError", (e) => setIsLoading(false));
    router.events.on("routeChangeStart", (e) => setIsLoading(false)); */
    router.events.on("routeChangeComplete", handleRouteChange);
  

    return () => {
/*       router.events.off("routeChangeError", (e) => setIsLoading(false));
      router.events.off("routeChangeStart", (e) => setIsLoading(false)); */
      router.events.off("routeChangeComplete", handleRouteChange);
    };


  }, [router.events]);

  return (
    <AppProvider>
      <ThemeProvider attribute="class">
        {/* <motion.div
          initial="loaded"
          className='absolute z-50 flex flex-col h-screen bg-yellow-600'
          animate={isLoading ? "loading" : "loaded"}
          variants={variants}
        ></motion.div> */}
            <Component {...pageProps} />
        </ThemeProvider>
    </AppProvider>
  );
}

export default MyApp
