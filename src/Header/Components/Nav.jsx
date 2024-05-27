import { useState } from "react";
import { NavLink } from "react-router-dom"
import { Spiral as Hamburger } from 'hamburger-react'
import SearchBar from "../../Search/SearchBar";

export default function Nav() {
    const [isOpen, setOpen] = useState(false);

    return (
        <nav className="z-50 text-[#EEEEEE] flex">
            <div className="md:hidden">
                <Hamburger toggled={isOpen} toggle={setOpen} />
            </div>
            <div className={`fixed inset-0 absolute block pl-8 pt-2 top-20 w-full left-0 right-0 bg-[#111111] flex flex-col ${isOpen ? 'block' : 'hidden'} md:flex md:items-center md:relative md:inset-auto md:flex-row`}>
                <NavLink to="/" className="mb-2 mr-2 text-xl lg:font-semibold md:font-semibold md:mb-0 md:text-base lg:mb-0 lg:text-base hover:duration-300 hover:text-white">Home</NavLink>
                <a href="" className="text-xl mr-2 md:text-base md:font-semibold lg:text-base lg:font-semibold hover:duration-300 hover:text-white">Genres</a>
                <a href="" className="mb-2 mr-2 text-xl lg:font-semibold md:font-semibold md:mb-0 md:text-base lg:mb-0 lg:text-base hover:duration-300 hover:text-white">Upcoming</a>
                <a href="" className="text-xl md:text-base md:font-semibold lg:text-base lg:font-semibold hover:duration-300 hover:text-white">Top Rated</a>
            </div>
        </nav>
    )
}