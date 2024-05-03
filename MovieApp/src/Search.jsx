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
            <div className="bg-[#1a1820]">
                <div className="mx-6 my-6 lg:mx-20">
                    <p className="text-xl font-bold text-red-600">Results for</p>
                    <h2 className="text-4xl font-bold text-white">{query}</h2>
                </div>
                <div className="flex grid flex-col mx-6 text-white lg:grid-cols-6 lg:gap-5 lg:mx-20">
                    {movies.map(movie => (
                        <div key={movie.id} className="flex items-center justify-center my-4">
                            <div className="h-full w-full flex flex-col">
                                <img src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : 'src/assets/poster_unavailable.jpg'} alt={movie.title} className="rounded-lg bg-gray-600 w-auto h-auto" />
                                <p className="mt-4 text-2xl font-bold lg:text-sm">{movie.title.length > 20 ? `${movie.title.substring(0, 25)}...` : movie.title}</p>
                                <div className="flex items-center justify-center justify-between mt-2">
                                    <p className="text-lg font-bold lg:text-base">⭐ {movie.vote_average > 3 ? `${movie.vote_average.toFixed(1)}` : movie.vote_average}</p>
                                    <p className="flex px-2 py-1 font-bold bg-gray-700 rounded lg:text-base">{movie.release_date ? new Date(movie.release_date).getFullYear() : "?"}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}