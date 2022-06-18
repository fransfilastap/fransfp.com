import React, { Fragment, useContext } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import MenuItem from "./MenuItem";
import { AppContext } from "../store/app-context";

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
    color: "#fff",
  },
  closed: {
    color: "rgb(236 72 153)",
  }
}

export const Navigation = () => {

    const { menuOpen, toggleMenu} = useContext(AppContext)

    return <React.Fragment>
        <motion.header initial="closed" animate={menuOpen?'open':'closed'} variants={headerVariants} className="fixed z-50 flex flex-wrap items-center justify-center w-full px-2 py-2 ">
                <div className="flex flex-wrap items-center justify-between w-full pl-4 md:px-20">
                    <div className="flex items-center space-x-9">
                        <Link href="/">
                          <motion.a variants={logoVariants} className={ `uppercase font-display px-2 py-1 -ml-3 text-xl font-extrabold md:ml-1` }>
                              FFP
                          </motion.a>
                      </Link>
                    </div>
                    
                    <div className="flex flex-row items-center justify-between space-x-0 md:space-x-5 ">
              <motion.button variants={{
                open: {
                  color: '#fff',
                },
                closed: {
                  color: '#000',
                }
              }} onClick={toggleMenu} className="relative flex flex-row items-center justify-center h-10 space-x-2 overflow-hidden font-serif text-xl font-bold">
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
                        y: '-50%',
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
                        translateY: '5.8px',
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
                        translateY: '-5.8px',
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
            animate={menuOpen ? "open" : "closed"}
            initial="closed"
            variants={menuContainerVariants}
            className={`fixed flex flex-col items-center justify-center w-full h-screen pr-4 overflow-hidden origin-top bg-black/80 backdrop-blur-3xl md:p-0`} >
        
        <motion.div variants={{
          open: {
            scaleY: 1,
            transition: {
              staggerChildren: 0.1,
              when:"beforeChildren",
              type: "spring",
            }
          },
          closed: {
            scaleY: 0,
            transition: {
              staggerChildren: 0.1,
              when:"afterChildren",
              type: "spring",
            }
          }
          
              }
            } className="container flex flex-col items-end max-h-screen py-20 space-y-2 overflow-y-scroll origin-top">
                <MenuItem href="/" label="Home" />
                <MenuItem href="/about" label="About" />
                <MenuItem href="/contact" label="Contact" />
                <MenuItem href="/posts" label="Blog" />
            </motion.div>
        </motion.div>
    </React.Fragment>;
}