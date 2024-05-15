import { NavLink } from "react-router-dom"

export default function SearchResult({ movies }) {
    return (
        <div className="bg-[#1a1820]">
            <div className="mx-6 my-6 lg:mx-20">
                <p className="text-xl font-bold text-red-600">Results for </p>
                <h2 className="text-4xl font-bold text-white"></h2>
            </div>
            <div className="flex grid flex-col mx-6 text-white lg:grid-cols-6 lg:gap-5 lg:mx-20">
                {movies.map(movie => (
                    <div key={movie.id} className="flex items-center justify-center my-4">
                        <div className="flex flex-col w-full h-full">
                            <NavLink to={`/movie/${movie.id}`}><img src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : '/src/assets/poster_unavailable.jpg'} alt={movie.title} className="w-auto h-auto bg-gray-600 rounded-lg" />
                            </NavLink>
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
    );
}