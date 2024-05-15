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
                const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=e0fa0c69b5ec0c1fd6153567c8a33701`);
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
            <div className="h-screen bg-[#1a1820] h-full">
                <Header />
                <SearchBar />
                {movie ? (
                    <div className="flex flex-col pb-12">
                        <div className="flex items-center justify-center">
                            <img src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : '/src/assets/poster_unavailable.jpg'} alt={movie.title} className="w-auto h-auto bg-gray-600 rounded-lg w-[75%] h-[75%] mb-6" />
                        </div>
                        <div className="mx-6">
                            <h2 className="text-3xl font-bold text-white">{movie.title}</h2>
                            <ul className="flex items-center mt-2 text-white">
                                <li className="mr-4 text-lg font-bold lg:text-base">⭐ {movie.vote_average > 3 ? `${movie.vote_average.toFixed(1)}` : movie.vote_average}</li>
                                <li className="mr-4 text-lg font-bold lg:text-base">{movie.runtime}m</li>
                                <li className="text-lg font-bold lg:text-base">{movie.release_date ? new Date(movie.release_date).getFullYear() : "?"}</li>
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