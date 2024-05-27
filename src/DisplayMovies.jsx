import { NavLink } from "react-router-dom"

export default function DisplayMovies({ movies }) {
    return (
        <div className="flex grid flex-col mx-6 text-[#EEEEEE] lg:grid-cols-6 md:grid-cols-4 md:gap-5 lg:gap-5 lg:mx-20 lg:my-5 md:my-5 my-5">
            {movies.map(movie => (
                <div key={movie.id} className="flex items-center justify-center my-4">
                    <div className="flex flex-col w-full h-full">
                        <NavLink to={`/movie/${movie.id}`}><img src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : '/src/assets/poster_unavailable.jpg'} alt={movie.title} className="w-auto h-auto bg-gray-600 rounded-lg" />
                        </NavLink>
                        <p className="mt-4 text-2xl font-bold md:text-sm lg:text-sm">{movie.title.length > 20 ? `${movie.title.substring(0, 25)}...` : movie.title}</p>
                        <div className="flex items-center justify-center justify-between mt-2">
                            <p className="text-lg font-bold lg:text-base">⭐ {movie.vote_average > 3 ? `${movie.vote_average.toFixed(1)}` : movie.vote_average}</p>
                            <p className="flex px-2 py-1 font-bold bg-gray-700 rounded lg:text-base">{movie.release_date ? new Date(movie.release_date).getFullYear() : "?"}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}