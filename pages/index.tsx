import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Layout } from '../components/Layout'

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>fransfp.com</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col items-center h-[calc(85vh)]">
        <div className='flex flex-col items-center justify-center w-full h-screen'>
          <div className='container mx-4'>
          <h1 className='text-9xl md:text-[15rem] p-0 font-bold text-black dark:text-white'>Hello</h1>
          <h5 className='text-2xl font-bold text-blue-500 dark:text-white'>I&apos;m Frans Filasta Pratama</h5>
          <h5 className='text-black dark:text-white'>Full-stack Software Developer</h5>
          </div>
        </div>
        <svg width="200" height="203" viewBox="0 0 200 203" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M199.982 101.021C199.994 101.022 200.005 101.023 200.017 101.024L199.982 101.848V101.021ZM199.982 101.021V101.007H199.419C174.698 100.911 156.189 94.5679 142.323 85.1329C128.453 75.6956 119.199 63.1443 113.023 50.5889C106.847 38.0318 103.756 25.4805 102.209 16.0643C101.436 11.3574 101.049 7.43711 100.856 4.69543C100.759 3.32467 100.711 2.24879 100.687 1.51682C100.675 1.15085 100.669 0.870869 100.665 0.68302C100.664 0.589096 100.663 0.518207 100.663 0.471118L100.663 0.418433L199.982 101.021ZM101.221 186.803C100.729 189.796 100.393 192.475 100.162 194.74C99.9321 192.475 99.5957 189.796 99.1041 186.803C97.5475 177.322 94.4338 164.669 88.2025 151.999C81.9703 139.326 72.6143 126.625 58.5707 117.069C46.7137 109.001 31.5363 103.189 12.1175 101.514C31.5363 99.8399 46.7137 94.0279 58.5707 85.9597C72.6143 76.4036 81.9703 63.7028 88.2025 51.0303C94.4338 38.3595 97.5475 25.707 99.1041 16.2264C99.5959 13.2314 99.9324 10.5516 100.163 8.28623C100.393 10.5516 100.73 13.2314 101.222 16.2264C102.779 25.707 105.894 38.3595 112.126 51.0303C118.359 63.7028 127.716 76.4036 141.76 85.9597C153.617 94.0274 168.794 99.8392 188.211 101.514C168.791 103.188 153.612 109.001 141.754 117.069C127.711 126.625 118.355 139.326 112.122 151.999C105.891 164.669 102.777 177.322 101.221 186.803Z" fill="#8E3AE2" stroke="black"/></svg>

      </div>
    </Layout>
  )
}

export default Home
