import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from "next/router";
import { useEffect } from "react";
import * as ga from './lib/ga';
import { AppProvider } from '../store/AppProvider';
import { ThemeProvider } from 'next-themes';

function MyApp({ Component, pageProps }: AppProps) {

  const router = useRouter();
  
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      ga.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <AppProvider>
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
        </ThemeProvider>
    </AppProvider>
  );
}

export default MyApp
