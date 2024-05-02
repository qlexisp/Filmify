import { useState } from "react";
export default function SearchMovie() {

    const [query, setQuery] = useState("");
    const [movies, setMovies] = useState([]);

    const searchMovie = async (e) => {
        e.preventDefault();

        const url = `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=e0fa0c69b5ec0c1fd6153567c8a33701`;

        try {
            const res = await fetch(url)
            const data = await res.json();
            setMovies(data.results);
        }
        catch (error) {
            console.error(err);
        }

    }
    const handleInputChange = (e) => {
        setQuery(e.target.value);
    }

    return (
        <>
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
                        <img src="src/assets/search.png" className="w-6 h-6" />
                    </button>
                </div>
            </form>

            <div className="grid grid-cols-2 gap-4 mx-4 text-white">
                {movies.map(movie => (
                    <div key={movie.id} className="p-4 mb-2 font-bold bg-gray-600">
                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                        {movie.title}
                    </div>
                ))}
            </div>
        </>
    )
}