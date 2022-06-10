import type { NextPage } from 'next'
import Head from 'next/head'
import { Layout } from '../components/Layout'
import BasicMeta from '../components/meta/BasicMeta'
import OpenGraphMeta from '../components/meta/OpenGraphMeta'
import Config from '../lib/config'

const url = process.env.NEXT_SITE_URL || Config.site_url

const Home: NextPage = () => {
  return (
    <Layout>
      <BasicMeta />
      <OpenGraphMeta />
      <div className="flex flex-col items-center h-[calc(85vh)]">
        <div className='flex flex-col items-center justify-center w-full h-screen'>
          <div className='container mx-4'>
          <h1 className='text-9xl md:text-[15rem] font-bold  text-black dark:text-white'>Hello</h1>
          <h5 className='ml-2 text-4xl font-bold text-black md:ml-4 dark:text-white'>I&apos;m Frans Filasta Pratama</h5>
          <h5 className='ml-2 text-2xl text-black md:ml-4 dark:text-white'>Full-stack Software Developer</h5>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Home
