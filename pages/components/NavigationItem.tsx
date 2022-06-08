import Link from "next/link";
import { useRouter } from "next/router";

type Props ={
    href: string;
    label: string;
}

const NavigationItem = ({ href, label }: Props) => {

    const router = useRouter();

    return (
        <Link href={href}>
            <a className={`hidden md:block text-gray-800 dark:text-white border-gray-800 dark:border-white  px-2 py-1 hover:border-b-4 transition-all ease-in-out duration-100 ${router.pathname == href ? 'border-b-4':''}` }>
               {label}
            </a>
        </Link>
    );
}

export default NavigationItem;