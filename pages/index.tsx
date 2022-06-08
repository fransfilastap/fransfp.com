import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Layout } from './components/Layout'

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>fransfp.com</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col items-center h-[calc(85vh)]">
        <div className='flex flex-col items-center justify-center h-screen'>
          <h1 className='text-9xl md:text-[15rem] p-0 font-bold text-black dark:text-white'>Hello</h1>
          <h5 className='text-2xl font-bold text-blue-500 dark:text-white'>I'm Frans Filasta Pratama</h5>
          <h5 className='text-black dark:text-white'>Full-stack Software Developer</h5>
        </div>
      </div>
    </Layout>
  )
}

export default Home
