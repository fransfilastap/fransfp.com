import { motion } from "framer-motion";

type Props = {
    text: string
}

const Heading = ({ text }: Props) => {
    
    return (
        <motion.h3 className={ `h-10 bg-lime-500 rounded-full border-2 border-black text-black first-letter:uppercase font-display flex flex-col justify-start items-start max-w-max px-4 py-1 -ml-3 text-xl font-extrabold md:ml-1 ` }>
            {text}
        </motion.h3>
    )
    
}

export default Heading;