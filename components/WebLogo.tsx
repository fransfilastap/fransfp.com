import { motion } from "framer-motion";
import Link from "next/link";


const WebLogo = () => {

    const logoVariants = {
        open: {
            color: "#fff",
        },
        closed: {
            color: "#fff",
        }
    }

    return (
        <Link href="/">
            <motion.a variants={logoVariants} className={ `cursor-pointer h-10 bg-black uppercase font-display flex flex-col justify-end items-end px-2 py-1 -ml-3 text-xl font-extrabold md:ml-1` }>
                FFP
            </motion.a>
        </Link>
    );
};

export default WebLogo;