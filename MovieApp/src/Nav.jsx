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
                <div className="hidden md:flex">
                    <a href="#Home" className="mr-2">Home</a>
                    <a href="#Movies" className="mr-2">Movies</a>
                    <a href="#Tvshows" className="">Tv shows</a>
                </div>

                <div className="md:hidden flex items-center">
                    <button onClick={toggleNavbar}>{isOpen ? <CloseMenu /> : <MenuIcon /> }</button>
                </div>
            </nav>
    )
}