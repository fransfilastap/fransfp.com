import {motion} from 'framer-motion'
import React from 'react';

type Props = {
    title: string;
    description?: string;
    image?: string;
    children?: React.ReactNode;
}

const variants = {
    hidden: {
        scaleY: 0,
        opacity: 0,
        transformOrigin: 'top',
    },
    visible: {
        scaleY: 1,
        opacity: 1,
        transition: {
            delayChildren: 0.5,
            staggerChildren: 0.1
        }
    }
}

const itemsVariants = {
    hidden: {
        opacity: 0,
        y: -20
    },
    visible: {
        opacity: 1,
        y: 0
    }
}

const FFPCard = ({ title, description, image, children }: Props) => {
    
    const [isVisible, setIsVisible] = React.useState(false);
    
    React.useEffect(() => {
        setTimeout(() => {
            setIsVisible(true);
        }
            , 300);
    },[]);
    
    return (
        <motion.div initial="hidden" variants={variants} animate={isVisible ? 'visible':'hidden' } className="w-full px-4 pt-32 pb-4 md:p-4 bg-lime-500 min-h-[15rem] border-b-8 border-black rounded-b-3xl flex flex-col items-start justify-end">
            <div className='md:px-16'>
                <motion.h5 variants={itemsVariants} className="font-bold text-black font-display text-7xl">{title}</motion.h5>
            </div>
        </motion.div>
    )
}

export default FFPCard;