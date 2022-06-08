import Link from "next/link";
import Burger from "./Burger";
import DarkModeToggle from "./DarkModeToggle";
import NavigationItem from "./NavigationItem";
import WebLogo from "./WebLogo";


export const Navigation = () => {
    return (
        <header className="fixed flex flex-wrap items-center justify-center w-full p-4 backdrop-blur-md bg-white/50 dark:bg-black/30">
            <div className="container mx-auto">
                <div className="flex flex-wrap items-center justify-between">
                    <div className="flex items-center">
                        <WebLogo/>
                    </div>
                    <div className="items-center md:space-x-5 md:flex">
                        <NavigationItem href="/" label="Home" />
{/*                         <NavigationItem href="/works" label="Works" /> */}
                        <NavigationItem href="/about" label="About" />
                        <NavigationItem href="/posts" label="Posts" />
                        <DarkModeToggle/>
                    </div>
                </div>
            </div>
        </header>
    );
}