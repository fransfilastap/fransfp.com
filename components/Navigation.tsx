import React, { Fragment } from "react";
import { motion } from "framer-motion";
import Burger from "./Burger";
import DarkModeToggle from "./DarkModeToggle";
import NavigationItem from "./NavigationItem";
import WebLogo from "./WebLogo";
import Link from "next/link";

const variants = {
  open: { opacity: 1, x: 0, zIndex: 999999,backgroundColor: "rgb(245 158 11)",transition: {
      staggerChildren: 0.2,
      staggerDirection: -1
    } },
  closed: { opacity: 0,zIndex: -1, x: "-100%",transition: {
      staggerChildren: 0.2,
      staggerDirection: 1
    } },
}

const burgerVariants = {
    open: { zIndex: 99999999 },
    closed: { zIndex: 1 }
}

const sideVariants = {
    closed: {
      x: '-100%',
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1
    }
  },
    open: {
      x: 0,
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1
    }
  }
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

export const Navigation = () => {

    const [isOpen, setIsOpen] = React.useState<boolean>(false);

    const handleClick = () => {
        document.body.style.overflow = 'unset';
        setIsOpen(!isOpen);
    }

    return <React.Fragment>
        <header className="fixed flex flex-wrap items-center justify-center w-full p-4 backdrop-blur-md bg-white/50 dark:bg-black/30">
            <div className="container mx-auto">
                <div className="flex flex-wrap items-center justify-between">
                    <div className="flex items-center space-x-9">
                        <motion.div animate={
                            isOpen ? "open" : "closed"
                        } variants={burgerVariants}>
                            <Burger active={isOpen} onClick={function (): void {
                                setIsOpen((prevIsOpen) => !prevIsOpen);
                                document.body.style.overflow = 'hidden';
                            }} />
                        </motion.div>
                        <WebLogo />
                    </div>
                    
                    <div className="flex flex-row items-center justify-between space-x-0 md:space-x-5 ">
                        <NavigationItem href="/" label="Home" />
                        {/*                         <NavigationItem href="/works" label="Works" /> */}
                        <NavigationItem href="/about" label="About" />
                        <NavigationItem href="/posts" label="Posts" />
                        <DarkModeToggle />
                    </div>
                </div>
            </div>
        </header>
        <motion.div
            animate={isOpen ? "open" : "closed"}
            variants={variants}
            className="fixed top-0 left-0 flex flex-col items-start justify-center w-full h-screen px-8 overflow-hidden" >
            
            <Burger active={isOpen} onClick={
                function (): void {
                    setIsOpen((prevIsOpen) => !prevIsOpen);
                    document.body.style.overflow = 'unset';
                }}
            />

            <motion.div variants={sideVariants} className="flex flex-col space-y-7">
                <Link href="/">
                    <motion.a variants={itemVariants} className="text-6xl font-bold text-blue-500" onClick={handleClick}>Home</motion.a>
                </Link>
                <Link href="/about">
                    <motion.a variants={itemVariants} className="text-6xl font-bold text-blue-500" onClick={handleClick}>About</motion.a>
                </Link>
                <Link href="/posts">
                    <motion.a variants={itemVariants} className="text-6xl font-bold text-blue-500" onClick={handleClick}>Posts</motion.a>
                </Link>
            </motion.div>

            <WebLogo/>

        </motion.div>
    </React.Fragment>;
}