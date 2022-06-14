import Link from "next/link";

type Props = {
    isMenuOpen: boolean;
}

const WebLogo = ({isMenuOpen}:Props) => {
    return (
        <Link href="/">
            <a className={ `px-2 py-1 -ml-3 text-xl font-extrabold ${isMenuOpen ? 'text-white bg-black' : 'text-black bg-white'} rounded-none md:ml-1` }>
                FFP
            </a>
        </Link>
    );
};

export default WebLogo;