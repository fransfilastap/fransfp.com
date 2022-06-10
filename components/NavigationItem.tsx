import Link from "next/link";
import { useRouter } from "next/router";

import styles from './NavigationItem.module.css';

type Props ={
    href: string;
    label: string;
}

const port = process.env.PORT || 3000;
const URL = process.env.NODE_ENV === 'production' ? process.env.NEXT_SITE_URL : `http://localhost:${port}`;

const NavigationItem = ({ href, label }: Props) => {

    const router = useRouter();

    return (
        <Link href={href}>
            <a className={`hidden ${styles['navigation-item']} md:block text-black font-semibold dark:text-white px-2 py-1 transition-all ease-in-out duration-100 ${ (router.pathname === href) || ( href === '/' ? false : router.asPath.includes(href) )  ? styles['navigation-item__active']:''}` }>
               {label}
            </a>
        </Link>
    );
}

export default NavigationItem;