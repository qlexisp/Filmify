import { NavLink } from "react-router-dom"
import SearchBar from "./SearchBar";
import DisplayMovies from "../DisplayMovies";

export default function SearchResult({ movies }) {
    return (
        <div className="bg-[#191919]">
            <div className="mx-6 my-6 lg:mx-20">
                <SearchBar />
            </div>
            <DisplayMovies movies={movies} />
        </div>
    );
}