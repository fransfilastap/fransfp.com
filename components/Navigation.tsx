import React, { Fragment, useContext } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import MenuItem from "./MenuItem";
import { AppContext } from "../store/app-context";
import Burger from "./Burger";
import WebLogo from "./WebLogo";

const menuContainerVariants = {
  open: {
    scaleY: 1,
    zIndex: 49,
    transition: { 
      when: 'beforeChildren',
      duration: 0.58,
      staggerChildren: 0.05,
    }
  },
  closed: {
    zIndex: 49,
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



export const Navigation = () => {

  const { menuOpen } = useContext(AppContext)


    return <React.Fragment>
        <motion.header initial="closed" animate={menuOpen?'open':'closed'} variants={headerVariants} className="fixed z-50 flex flex-wrap items-center justify-center w-full px-2 py-2 ">
                <div className="flex flex-wrap items-center justify-between w-full pl-4 md:px-20">
                    <div className="flex items-center space-x-9">
                         <WebLogo/>
                    </div>
                    
                    <div className="flex flex-row items-center justify-between space-x-0 md:space-x-5 ">
                        <Burger/>
                    </div>
                </div>
        </motion.header>
      <motion.div
            animate={menuOpen ? "open" : "closed"}
            initial="closed"
            variants={menuContainerVariants}
            className={`fixed flex flex-col items-start justify-between w-full h-screen pr-4 overflow-hidden bg-black/60 backdrop-blur-3xl pb-5 origin-top`} >
        
        <motion.div variants={{
          open: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2,
              when:"beforeChildren",
              type: "spring",
            }
          },
          closed: {
            opacity: 0,
            transition: {
              staggerChildren: 0.2,
              when:"afterChildren",
              type: "spring",
            }
          }
          
              }
            } className="container flex flex-col items-end pt-20 space-y-[0.3rem] md:-space-y-[2rem] overflow-y-scroll origin-top">
                <MenuItem href="/" label="Home" />
                <MenuItem href="/about" label="About" />
                {/* <MenuItem href="/contact" label="Contact" /> */}
                <MenuItem href="/posts" label="Blog" />
           </motion.div>
          <div className="container flex flex-col items-end space-y-3">
              <motion.a variants={{
        open: {
            opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.9,
                    ease: "easeInOut",
                  }

        },
        closed: {
            opacity: 0,
          y: -20,
              transition: {
                    duration: 0.5,
                    ease: "easeInOut",
                  }
                  
            },
    }} className="text-sm font-semibold text-yellow-100 md:text-xl font-display" href="mailto:fransfilastap@live.com">fransfilastap@live.com</motion.a>
              <motion.div variants={{
        open: {
            opacity: 1,
                  y: 0,
            transition: {
                    duration: 0.9,
                    ease: "easeInOut",
                  }
                  
        },
        closed: {
            opacity: 0,
              y: -20,
            transition: {
                    duration: 0.5,
                    ease: "easeInOut",
                  }
                  },
    }} className="flex flex-row space-x-2">
                <motion.a href="https://www.linkedin.com/in/fransfilastapratama/" className="text-sm font-semibold text-lime-100 hover:underline hover:text-lime-500 hover:underline-offset-4 md:text-xl font-display">LinkedIn</motion.a>
                <span className="flex items-center text-xl font-bold text-lime-100">.</span>
                <motion.a className="text-sm font-semibold text-lime-100 hover:underline hover:text-lime-500 hover:underline-offset-4 md:text-xl font-display" href="https://instagram.com/ankrmbg">Instagram</motion.a>
              </motion.div>
        </div>
        <motion.div variants={{
        open: {
            opacity: 1,
            y: 0,
            transition: {
                    duration: 0.9,
                    ease: "easeInOut",
                  }
                  
        },
        closed: {
            opacity: 0,
            y: -20,
          transition: {
                    duration: 0.5,
                    ease: "easeInOut",
                  }
                  },
    }} className="container flex flex-col items-end space-y-0">
                <p className="text-sm text-lime-100 font-display">&copy; Frans Filasta Pratama.</p>
                <p className="text-sm text-lime-100 font-display"> All Rights Reserved.</p>
            </motion.div>
        </motion.div>
    </React.Fragment>;
}