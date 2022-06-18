import { useRouter } from "next/router";

import styles from "./BackButton.module.css";

type Props = {
    label: string;
    href?: string;
}

const BackButton = ({ label, href }: Props) => {
    
    const router = useRouter()

    const handleClick = () => {
        router.back();
    }

    return (
        <button
            onClick={handleClick}
            className={ `flex flex-row p-2 space-x-2 transition-colors duration-200 ease-in-out border border-black rounded-full group ${styles.back}` }>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span className="font-bold font-display ">{ label }</span>
        </button>
    );
}
export default BackButton;
