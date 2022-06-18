import { motion } from "framer-motion";
import { useContext } from "react";
import { AppContext } from "../store/app-context";

export default function Burger() {

  const { toggleMenu} = useContext(AppContext)

  return (
              <motion.button variants={{
                open: {
                  color: '#fff',
                },
                closed: {
                  color: '#000',
                }
              }} onClick={toggleMenu} className="relative flex flex-row items-center justify-center h-10 space-x-2 overflow-hidden font-serif text-xl font-bold">
                          
                          <div className="flex flex-col items-center justify-center space-y-2">
                  <motion.div variants={
                    {
                      open: {
                        rotate: '-45deg',
                        translateY: '5.8px',
                        backgroundColor: '#fff',
                        transition: {
                          duration: 0.2,
                          ease: "easeInOut",
                        },
                      },
                      closed: {
                        rotate: '0deg',
                        backgroundColor: '#000',
                        transition: {
                          duration: 0.2,
                          ease: "easeInOut",
                        },
                      }
                    }
                            } className="w-6 h-1 origin-center bg-black"></motion.div>
                            <motion.div variants={
                    {
                      open: {
                        rotate: '45deg',
                        translateY: '-5.8px',
                        backgroundColor: '#fff',
                        transition: {
                          duration: 0.2,
                          ease: "easeInOut",
                        },
                      },
                      closed: {
                        rotate: '0deg',
                        backgroundColor: '#000',
                        transition: {
                          duration: 0.2,
                          ease: "easeInOut",
                        },
                      }
                    }
                            } className="w-6 h-1 origin-center bg-black"></motion.div>
                          </div>
                        </motion.button>
  );
}
