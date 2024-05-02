import { useState } from "react";
import { MenuIcon } from './ResponsiveNav'
import { CloseMenu } from './ResponsiveNav'

export default function Nav() {

    const [isOpen, setIsOpen] = useState(false);
    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="text-white">
            <div className="hidden md:flex md:uppercase md:font-bold">
                <a href="#Home" className="mr-2 hover:text-gray-500 hover:duration-300">Home</a>
                <a href="#Movies" className="mr-2 hover:text-gray-500 hover:duration-300">Movies</a>
                <a href="#Tvshows" className="hover:text-gray-500 hover:duration-300">Tv shows</a>
            </div>

            <div className="md:hidden flex items-center">
                <button onClick={toggleNavbar}>{isOpen ? <CloseMenu isOpen={isOpen} /> : <MenuIcon />}</button>
            </div>
        </nav>
    )
}