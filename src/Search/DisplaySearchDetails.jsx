import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import SearchBar from './SearchBar';

export default function DisplaySearchDetails() {

    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=e0fa0c69b5ec0c1fd6153567c8a33701&append_to_response=casts,videos,images,releases`);
                const data = await response.json();
                setMovie(data);
            } catch (error) {
                console.error('Error fetching movie details:', error);
            }
        };

        fetchMovieDetails();
    }, [id]);

    return (
        <>
            <div className="bg-[#1a1820] h-full">
                <Header />
                <SearchBar />
                {movie ? (
                    <div className="flex flex-col pb-12 lg:flex-row lg:mx-20">
                        <div className="flex items-center justify-center">
                            <img src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : '/src/assets/poster_unavailable.jpg'} alt={movie.title} className="bg-gray-600 rounded-lg w-[90%] h-[90%] mb-6 lg:w-full lg:h-full" />
                        </div>
                        <div className="mx-6 lg:mt-6">
                            <h2 className="text-3xl font-bold text-white">{movie.title}</h2>
                            <ul className="flex items-center mt-2 text-white">
                                <li className="mr-4 text-lg font-bold lg:text-base">⭐ {movie.vote_average > 3 ? `${movie.vote_average.toFixed(1)}` : movie.vote_average} </li>
                                <li className="mr-4 text-lg font-bold lg:text-base">{movie.runtime}m</li>
                                <li className="text-lg font-bold lg:text-base">{movie.release_date ? new Date(movie.release_date).getFullYear() : "?"}</li>
                            </ul>
                            <ul className="flex text-gray-400 mt-1">
                                <li className="text-white">
                                    {movie.genres
                                        .map(genre => genre.name)
                                        .join(', ')}
                                </li>
                            </ul>
                            <ul className="text-white font-bold mt-2">
                                <span className="text-gray-400">Directed by </span>
                                <li className="mr-2 inline">
                                    {movie.casts.crew
                                        .filter(crew => crew.job === "Director")
                                        .slice(0, 2)
                                        .map(crew => crew.original_name)
                                        .join(', ')}
                                </li>
                            </ul>
                            <ul className="text-white mt-2 font-bold">
                                <span className="text-gray-400 items-start">Starring </span>
                                <li className="mr-2 inline">
                                    {movie.casts.cast
                                        .filter(cast => cast.known_for_department === "Acting")
                                        .slice(0, 9)
                                        .map(cast => cast.name)
                                        .join(', ')}
                                </li>
                            </ul>
                            <p className="mt-4 text-white">{movie.overview}</p>
                        </div>
                    </div>
                )
                    :
                    (
                        <div>Loading...</div>
                    )}
            </div >
        </>
    );

}