import { Link } from "react-router-dom"
import { AnimatePresence, motion, useCycle } from "framer-motion";

type Props = {
    isOpen: boolean;
}

const itemVariants = {
  closed: {
    opacity: 0
  },
  open: { opacity: 1 }
};

const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1
    }
  },
  open: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1
    }
  }
};

const MobileNavigation = ({ isOpen }: Props) => {
    
/*     const [open, cycleOpen] = useCycle(false, true);

    useEffect(() => {
        cycleOpen();
    }, [cycleOpen, isOpen]); */

    return (
        <AnimatePresence>
            <motion.aside className="flex flex-col w-0 h-screen bg-black">
                <nav className="flex flex-col items-center justify-center w-full h-full">
                    <div className="container mx-auto">
                        <Link href="/">
                            <a className="text-2xl font-bold text-white">FFP</a>
                        </Link>
                        <ul className="flex flex-col items-center justify-center w-full h-full">
                            <li className="flex flex-col items-center justify-center w-full h-full">
                                <Link href="/">
                                    <a className="text-2xl font-bold text-white">Home</a>
                                </Link>
                            </li>
                            <li className="flex flex-col items-center justify-center w-full h-full">
                                <Link href="/works">
                                    <a className="text-2xl font-bold text-white">Works</a>
                                </Link>
                            </li>
                            <li className="flex flex-col items-center justify-center w-full h-full">
                                <Link href="/about">
                                    <a className="text-2xl font-bold text-white">About</a>
                                </Link>
                            </li>
                            <li className="flex flex-col items-center justify-center w-full h-full">
                                <Link href="/posts">
                                    <a className="text-2xl font-bold text-white">Posts</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </motion.aside>
        </AnimatePresence>
    );
}

export default MobileNavigation;