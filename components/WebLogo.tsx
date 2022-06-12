import Link from "next/link";

const WebLogo = () => {
    return (
        <Link href="/">
            <a className="hidden px-2 py-1 text-xl font-extrabold text-white bg-black rounded-none md:block dark:text-black dark:bg-white">
                FFP
            </a>
        </Link>
    );
};

export default WebLogo;