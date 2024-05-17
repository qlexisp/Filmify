import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function SearchBar() {
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };

    const searchMovie = async (e) => {
        e.preventDefault();
        navigate(`/search/${query}`);
    };
    return (
        <form className="flex items-center justify-center my-8" onSubmit={searchMovie}>
            <label className="sr-only" htmlFor="query">Enter a movie: </label><br />
            <div className="relative flex flex-col items-center">
                <input
                    className="py-2 text-white bg-gray-600 rounded-full pl-14 pr-28"
                    type="text"
                    name="query"
                    value={query}
                    onChange={handleInputChange}
                    placeholder="Movies, dramas & other..." />
                <button className="absolute bottom-0 left-0 px-4 py-2 rounded-full" type="submit">
                    <img src="/src/assets/search.png" className="w-6 h-6" />
                </button>
            </div>
        </form>
    );
}