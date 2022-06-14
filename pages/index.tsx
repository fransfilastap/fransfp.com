import { motion } from 'framer-motion'
import type { NextPage } from 'next'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Layout } from '../components/Layout'
import BasicMeta from '../components/meta/BasicMeta'
import OpenGraphMeta from '../components/meta/OpenGraphMeta'
import NoSSR from '../components/NoSSR'
import Config from '../lib/config'
import myFoto from '../public/images/me-bw.jpg'
import styles from './index.module.css'

const variants = {
  show: {
    opacity: 1,
    y:0,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
  hide: {
    opacity: 0.1,
    y: '10px',
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  }
}

const url = process.env.NEXT_SITE_URL || Config.site_url

const Home: NextPage = () => {

  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setVisible(true)
    }, 600)
    
  }, [])



  return (
    <Layout>
      <BasicMeta />
      <OpenGraphMeta />
      <div className={`w-full flex flex-col justify-center items-center min-h-screen px-20 py-20 `}>
          <NoSSR>
            <motion.h5 variants={variants} initial="hide" animate={visible?'show':'hide'} className='font-display font-bold text-black md:text-[10rem] text-7xl'>Born to Code</motion.h5>
          <motion.svg className={'absolute -z-10 right-5 w-60 h-auto'}  viewBox="0 0 181 181" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M139.764 149.57L14.9042 103.994L116.803 18.6507L139.764 149.57Z" fill="#51DA7F" stroke="black"/>
            <path d="M112.873 100.371L49.7331 104.113L108.48 41.7804L112.873 100.371Z" fill="#8E3AE2" stroke="black"/>
            <path d="M108.477 41.4306L117.6 18.0293" stroke="black" strokeLinecap="round"/>
            <path d="M47.4952 104.511H14.7324L139.33 150.18L113.021 100.043L47.4952 104.511Z" fill="#EDB72B" stroke="black" strokeLinecap="round"/>
            </motion.svg>
          </NoSSR>
      </div>
    </Layout>
  )
}

export default Home
