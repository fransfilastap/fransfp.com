import { motion, useAnimation, useMotionValue, useTransform, useViewportScroll } from 'framer-motion'
import type { NextPage } from 'next'
import { ReactNode, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { Layout } from '../components/Layout'
import BasicMeta from '../components/meta/BasicMeta'
import OpenGraphMeta from '../components/meta/OpenGraphMeta'
import Config from '../lib/config'
import myFoto from '../public/images/me-bw.jpg'



type HeroTextProps = {
  children: ReactNode,
}

const HeroText = ({ children }: HeroTextProps) => {
  const [isVisible, setIsVisible] = useState(false)
  const { scrollY } = useViewportScroll()
  const x = useTransform(scrollY, [0, 300, 1000], [0, -800, -1000])
  const ref = useRef<HTMLHeadingElement>(null)

  const heroVariants = {
    show: {
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
        delay: 0.5,
      },
    },
    hide: {
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
      },
    }
  }

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true)
    }
      , 1000)
  }, [ref])

  return (
    <motion.h5 ref={ref} style={{y:x}} variants={heroVariants} initial="hide" animate={isVisible ? 'show' : 'hide'} className='w-full md:static z-30 font-display origin-bottom font-bold text-yellow-400 md:text-[15rem] leading-[4rem] text-[4rem] text-center md:leading-[10rem]'>{children}<span>.</span></motion.h5>
  )
}



const url = process.env.NEXT_SITE_URL || Config.site_url


type IntroProps = {
  children: React.ReactNode
}

const IntroductionElement = ({ children }: IntroProps) => {

  const variants = {
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        type: 'spring',
      }
    },
    hidden: {
      opacity: 0.3,

      transition: {
        duration: 0.5,
        type: 'spring',
      }
    }
  }

  const controls = useAnimation()
  const [ref, inView] = useInView(
    {
      rootMargin: '0px',
      threshold: 1,
    }
  );

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    } else {
      controls.start('hidden')
    }
  }, [inView,controls])


  return (
    <motion.p ref={ ref } animate={controls} variants={variants} initial="hidden" className='min-h-[20rem] text-[2.5rem] leading-[2.4rem] md:leading-[6rem] font-bold text-center md:text-justity break-words text-green-500 md:text-[6rem] font-display'>{children}.</motion.p>
  )

}


const Home: NextPage = () => {

  const variants = {
    darken: {
      backgroundColor: '#000',
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
      }
    },
    lighten: {
      backgroundColor: '#fff',
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
      }
    }
  }

  const { scrollY } = useViewportScroll()
  const controls = useAnimation()
  
  useEffect(() => {
    if (scrollY.get() > 500) {
      console.log('darken')
      controls.start('darken')
    }
  }, [controls,scrollY])

  return (
    <Layout>
      <BasicMeta />
      <OpenGraphMeta />
      <motion.div variants={ variants } initial="lighten" animate={controls} className={`w-full flex flex-col justify-start items-center h-[500vh] px-4 md:px-20 overflow-x-hidden }`}>
        <section className='flex flex-col items-center justify-center w-full h-screen'>
          <HeroText>Hello</HeroText>
          <h5 className='text-5xl font-bold font-display after:mix-blend-difference'>I’m a full-stack developer.</h5>
        </section>
        
        {/* <div className='flex flex-col md:space-y-[3rem] md:mt-[10rem] mt-[5rem] h-screen'>
          <IntroductionElement><span className='text-pink-500'>FFP</span> is full-stack developer based in Jakarta, Indonesia</IntroductionElement>
          <IntroductionElement><span className='text-pink-500'>I</span> do Laravel, Spring, React, Flutter, etc</IntroductionElement>
          </div> */}
      </motion.div>
    </Layout>
  )
}

export default Home
