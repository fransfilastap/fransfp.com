import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext, useRef } from "react";
import { AppContext } from "../store/app-context";

type Props ={
    href: string;
    label: string;
}

const classNames = 'text-5xl font-extrabold transition duration-300 ease-in-out font-display md:text-9xl hover:text-green-500';

const MenuItem = ({ href, label }: Props) => {

    const { menuOpen, toggleMenu } = useContext(AppContext);
    const router = useRouter();
    const ref = useRef<HTMLAnchorElement>(null)

    const itemVariants = {
        open: {
            opacity: 1,
            y: 0,
        },
        closed: {
            opacity: 0,
            y: -20,},
    };

    const delayRouteChange = (__href: string) => {
        setTimeout(() => {
            router.push(__href);
        }, 1000);
    }

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        const target = e.target as HTMLElement;
        const url = target.getAttribute("href");

        if (menuOpen) {
            toggleMenu();
            delayRouteChange(url!);
        }
    }

    const isActive = (__href: string) => {
        return __href === router.pathname;
    }

    return (
        <Link href={href} passHref>
            <motion.a ref={ref} variants={itemVariants} className={`${classNames} ${isActive(href) ? 'text-green-500':'text-pink-500'}`} onClick={handleClick}>
                {label}
            </motion.a>
        </Link>
    );
}

export default MenuItem;