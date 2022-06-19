import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext, useRef } from "react";
import { AppContext } from "../store/app-context";

import styles from "./MenuItem.module.css";

type Props ={
    href: string;
    label: string;
}

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
            <motion.a ref={ref} variants={itemVariants} className={`${styles['menu-item']} text-[2rem] uppercase font-extrabold transition duration-300 ease-in-out font-display md:text-[6rem] hover:text-lime-300 ${isActive(href) ? 'text-lime-500':'text-lime-100'}`} onClick={handleClick}>
                {label}
            </motion.a>
        </Link>
    );
}

export default MenuItem;