import { useState } from "react";
import { MenuIcon } from '../Components/ResponsiveNav'
import { CloseMenu } from '../Components/ResponsiveNav'
import { NavLink } from "react-router-dom"

export default function Nav() {

    const [isOpen, setIsOpen] = useState(false);
    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="flex items-center justify-center text-white">
            <div className="hidden md:flex md:uppercase md:font-bold">
                <NavLink to="/" className="mr-2 hover:text-gray-500 hover:duration-300">Home</NavLink>
                <a href="#Movies" className="mr-2 hover:text-gray-500 hover:duration-300">Movies</a>
                <a href="#Tvshows" className="hover:text-gray-500 hover:duration-300">Tv shows</a>
            </div>

            <div className="flex items-center md:hidden">
                <button onClick={toggleNavbar}>{isOpen ? <CloseMenu isOpen={isOpen} /> : <MenuIcon />}</button>
            </div>
        </nav>
    )
}