import { motion } from 'framer-motion'
import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
import { Layout } from '../components/Layout'
import BasicMeta from '../components/meta/BasicMeta'
import OpenGraphMeta from '../components/meta/OpenGraphMeta'
import NoSSR from '../components/NoSSR'
import Config from '../lib/config'

const url = process.env.NEXT_SITE_URL || Config.site_url

const variants = {
  visible: {
      transition: {
        staggerChildren: 0.025
      }
    }
};


type Props = {
  text: string,
  tag: keyof JSX.IntrinsicElements,
  className?: string,
  children?: React.ReactNode
}

const AnimatedText = ({ text,tag,className, children }: Props) => {

  const itemVariants = {
    hidden: {
      y: "1000%",
        opacity: 0,
        transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 }
      },
      visible: {
        y: 0,
        opacity: 1,
        transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 }
      }
  }

  const splitWords = text.split(" ")
  const letters = []

  for (const [, item] of splitWords.entries()) {
    letters.push(item.split(""))
  }

  letters.map((item, _index) => {
    return item.push("\u00A0")
  });

  const Tag = tag;

  return (
      <Tag>
      {letters.map((item, index) => {
        return (
          item.flatMap((letter, _index) => {
            return (
              <motion.span key={_index+index} variants={itemVariants} className={className}>{letter}</motion.span>
            )
          })
        )
      })}
    </Tag>
  )
}

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
      <div className="flex flex-col items-center h-[calc(85vh)]">
        <div className='flex flex-col items-center justify-center w-full min-h-screen'>
          <motion.div variants={variants} initial="hidden" animate={visible?"visible":"hidden"} className='container mx-4'>
            <NoSSR>
              <AnimatedText tag='h1' className='text-7xl md:text-[15rem] font-bold text-black dark:text-amber-500' text="Hello" />
              <AnimatedText tag='h5' className='text-7xl md:text-[13rem] font-bold text-black dark:text-amber-500' text="I'm Frans" />
              <AnimatedText tag='p' className='text-2xl font-bold text-black md:text-3xl md:ml-4 dark:text-amber-500' text="Full-stack Software Developer" />
            </NoSSR>
            {/* <h5 className='ml-2 text-4xl font-bold text-black md:ml-4 dark:text-white'>I&apos;m Frans Filasta Pratama</h5>
            <h5 className='ml-2 text-2xl text-black md:ml-4 dark:text-white'>Full-stack Software Developer</h5> */}
          </motion.div>
        </div>
      </div>
    </Layout>
  )
}

export default Home
