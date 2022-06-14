import React, { Fragment } from "react";
import { motion } from "framer-motion";
import WebLogo from "./WebLogo";
import Link from "next/link";
import { useRouter } from "next/router";

const menuContainerVariants = {
  open: {
    scaleY: 1,
    zIndex: 49,
    transition: { 
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.1
    }
  },
  closed: {
    zIndex:49,
    scaleY: 0,
    transition: {
      when: 'afterChildren',
      staggerChildren: 0.1,
    }
  },
}
const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
  },
  closed: {
    opacity: 0,
    y: -20,},
};

const headerVariants = {
  open: {
    color: "#000",
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    }
  },
  closed: {
    color: "#fff",
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    }
  }
}

const logoVariants = {
  open: {
    backgroundColor: "#fff",
  },
  closed: {
    backgroundColor: "#000",
  }
}

const burgerVariants = {
  open: {
    
  }
}

export const Navigation = () => {

  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const router = useRouter();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = e.target as HTMLElement;
    const url = target.getAttribute("href");

    setIsOpen(!isOpen);
        setTimeout(() => {
           router.push(url!);
    }, 1000);
    
        //document.body.style.overflow = 'unset';
      
      

    }

    return <React.Fragment>
        <motion.header initial="closed" animate={isOpen?'open':'closed'} variants={headerVariants} className="fixed z-50 flex flex-wrap items-center justify-center w-full px-2 py-4 dark:bg-black">
                <div className="flex flex-wrap items-center justify-between w-full pl-4 md:px-20">
                    <div className="flex items-center space-x-9">
                        <Link href="/">
                          <motion.a variants={logoVariants} className={ `font-display px-2 py-1 -ml-3 text-xl font-extrabold rounded-none md:ml-1` }>
                              FFP
                          </motion.a>
                      </Link>
                    </div>
                    
                    <div className="flex flex-row items-center justify-between space-x-0 md:space-x-5 ">
              <motion.button variants={{
                open: {
                  color: '#fff',
                  backgroundColor: '#000',
                },
                closed: {
                  color: '#000',
                  backgroundColor: '#fff',
                }
              }} onClick={() => {
                setIsOpen(!isOpen);
                        }} className="relative flex flex-row items-center justify-center h-10 px-2 py-1 space-x-2 overflow-hidden font-serif text-2xl font-bold border-2 border-black rounded-full">
                          <div className="flex flex-col items-center justify-center font-display">
                  <motion.span  variants={
                    {
                      open: {
                        y: 0,
                        opacity: 0,
                        transition: {
                          duration: 0.5,
                          ease: "easeInOut",
                        }
                      },
                      closed: {
                        y: '50%',
                        opacity: 1,
                        transition: {
                          duration: 0.5,
                          ease: "easeInOut",
                        }
                      }
                    }
                            }>MENU</motion.span>
                            <motion.span variants={
                    {
                      open: {
                        y: '-60%',
                        opacity: 1,
                        transition: {
                          duration: 0.5,
                        }
                      },
                      closed: {
                        y: 0,
                        opacity:0,
                      }
                    }
                            }>CLOSE</motion.span>
                          </div>
                          <div className="flex flex-col items-center justify-center space-y-2">
                  <motion.div variants={
                    {
                      open: {
                        rotate: '-45deg',
                        translateY: '5.5px',
                        backgroundColor: '#fff',
                        transition: {
                          duration: 0.5,
                          ease: "easeInOut",
                        },
                      },
                      closed: {
                        rotate: '0deg',
                        backgroundColor: '#000',
                        transition: {
                          duration: 0.5,
                          ease: "easeInOut",
                        },
                      }
                    }
                            } className="w-8 h-1 origin-center bg-black"></motion.div>
                            <motion.div variants={
                    {
                      open: {
                        rotate: '45deg',
                        translateY: '-5.5px',
                        backgroundColor: '#fff',
                        transition: {
                          duration: 0.5,
                          ease: "easeInOut",
                        },
                      },
                      closed: {
                        rotate: '0deg',
                        backgroundColor: '#000',
                        transition: {
                          duration: 0.5,
                          ease: "easeInOut",
                        },
                      }
                    }
                            } className="w-8 h-1 origin-center bg-black"></motion.div>
                          </div>
                        </motion.button>
                    </div>
                </div>
        </motion.header>
      <motion.div
            animate={isOpen ? "open" : "closed"}
            initial="closed"
            variants={menuContainerVariants}
            className="fixed flex flex-col items-center justify-center w-full h-screen overflow-hidden origin-top bg-black " >
            <div className="container flex flex-col items-end space-y-2 ">
                <Link href="/" passHref>
                    <motion.a variants={itemVariants} className="text-5xl font-normal transition duration-200 ease-in-out font-display md:text-9xl text-white/30 hover:text-white" onClick={handleClick}>Home</motion.a>
                </Link>
                <Link href="/about" passHref>
                    <motion.a variants={itemVariants} className="text-5xl font-normal transition duration-200 ease-in-out font-display md:text-9xl text-white/30 hover:text-white" onClick={handleClick}>About Me</motion.a>
                </Link>
                <Link href="/posts" passHref>
                    <motion.a variants={itemVariants} className="text-5xl font-normal transition duration-200 ease-in-out font-display md:text-9xl text-white/30 hover:text-white" onClick={handleClick}>Posts</motion.a>
                </Link>
        </div>
        </motion.div>
    </React.Fragment>;
}