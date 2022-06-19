import { motion, useAnimation, useMotionValue, useTransform, useViewportScroll } from 'framer-motion'
import type { NextPage } from 'next'
import { ReactNode, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { Layout } from '../components/Layout'
import BasicMeta from '../components/meta/BasicMeta'
import OpenGraphMeta from '../components/meta/OpenGraphMeta'
import Config from '../lib/config'
import myFoto from '../components/assets/images/me-bw.jpg'



type HeroTextProps = {
  children: ReactNode,
}

const HeroText = ({ children }: HeroTextProps) => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLHeadingElement>(null)

  const heroVariants = {
    show: {
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
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
      , 300)
  }, [ref])

  return (
    <motion.h5 ref={ref} variants={heroVariants} initial="hide" animate={isVisible ? 'show' : 'hide'} className='w-full md:static font-display origin-bottom font-bold text-lime-500 md:text-[9rem] leading-[4rem] text-[6rem] text-center md:leading-[10rem]'>{children}<span>.</span></motion.h5>
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
    <motion.p ref={ ref } animate={controls} variants={variants} initial="hidden" className='container min-h-[20rem] text-[1.7rem] leading-[2rem] md:leading-[6rem] font-bold text-justify break-words text-green-500 md:text-[4.5rem] font-display'>{children}.</motion.p>
  )

}


const Home: NextPage = () => {

  const { scrollY } = useViewportScroll()
  const mastheadRef = useRef<HTMLDivElement>(null)
  const ref = useRef<HTMLDivElement>(null)

  const mhY = useTransform(scrollY, [0, 1000], [0, -800])


  return (
    <Layout>
      <BasicMeta />
      <OpenGraphMeta />
        <motion.section ref={mastheadRef} className='flex flex-col items-center justify-center w-full h-screen -z-30'>
          <video autoPlay={true} muted playsInline loop className='absolute top-0 left-0 object-cover w-full h-full -z-10 filter brightness-50'>
            <source src="pexels-oleg-lehnitsky-8323975.mp4" type="video/mp4" />
          </video>
          <HeroText>FFP</HeroText>
          <h5 className='text-2xl font-bold text-center text-white md:text-5xl font-display'>Seorang full-stack developer.</h5>
        </motion.section>
        <motion.section ref={ref} style={{ y: mhY }} className='flex flex-col items-center justify-center py-32 bg-white'>
          <IntroductionElement>Saya adalah <br/><span className='text-pink-500'>Frans Filasta Pratama</span>.<br/> seorang full-stack developer yang berlokasi di <span className='text-black underline'>Jakarta, Indonesia</span></IntroductionElement>
        </motion.section>
      <div className='container w-full'>
        <motion.img
        src={myFoto.src}
        className='z-10 w-full h-auto rounded-3xl -mt-96'
        
      />
      </div>
    </Layout>
  )
}

export default Home
