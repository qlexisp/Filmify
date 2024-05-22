import Nav from './Components/Nav'
import { NavLink } from "react-router-dom"
import SearchBar from '../Search/SearchBar'

export default function Header() {

    return (
        <div className="flex items-center justify-between px-8 py-6 bg-[#111111] md:px-12 lg:px-20">
            <h1 className="text-2xl font-bold text-white uppercase">
                <NavLink to="/">Filmify</NavLink>
            </h1>
            <SearchBar />
            <Nav />
        </div>
    )
}