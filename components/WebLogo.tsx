import { motion } from "framer-motion";
import Link from "next/link";


const WebLogo = () => {

    return (
        <Link href="/">
            <motion.a className={ `cursor-pointer h-10 text-black lowercase font-display flex flex-col justify-end items-end px-4 py-1 -ml-3 text-xl font-extrabold md:ml-1` }>
                Frans.
            </motion.a>
        </Link>
    );
};

export default WebLogo;