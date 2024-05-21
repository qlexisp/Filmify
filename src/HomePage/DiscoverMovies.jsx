import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import '../styles.css';
import { Autoplay, Pagination } from 'swiper/modules';

export default function DiscoverMovies() {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchTrending = async () => {
            try {
                const response = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=e0fa0c69b5ec0c1fd6153567c8a33701');
                const data = await response.json();
                setMovies(data.results);
                console.log
            } catch (error) {
                console.error('Error fetching trending movies:', error);
            }
        };

        fetchTrending();
    }, []);

    return (
        <>
            <Swiper pagination={true} modules={[Pagination, Autoplay]} className="mySwiper text-[#EEEEEE] my-8 w-[90%] h-[50%] rounded-2xl hidden">
                {movies
                    .slice(0, 10)
                    .map(movie => (
                        <SwiperSlide key={movie.id}>
                            <div className="w-full h-full swiper-slide-content">
                                <img className="block object-cover w-full h-full backdrop-image brightness-50" src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt={`Backdrop for ${movie.id}`} />
                                <div className="flex items-center justify-center w-full h-full lg:top-0 lg:left-0 lg:absolute overlay">
                                    <img className="poster-image absolute hidden lg:block lg:top-10 lg:left-10 lg:w-[12%] lg:h-auto z-10 rounded-lg shadow-md" src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title} />
                                    <img className="w-[50%] h-auto lg:hidden rounded-lg" src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title} />
                                    <h2 className="text-[#EEEEEE] absolute top-[85%] text-xl font-bold md:hidden lg:hidden">{movie.title}</h2>
                                    <div className="movie-details static hidden lg:block lg:absolute lg:top-[19%] lg:left-[18%] text-[#EEEEEE] lg:z-20">
                                        <h2 className="mb-4 text-2xl font-bold lg:text-3xl">{movie.title}</h2>
                                        <p className="hidden lg:block lg:text-[#EEEEEE]">{movie.overview}</p>
                                        <ul className="flex items-center mt-2 text-[#EEEEEE]">
                                            <li className="mr-4 font-bold">⭐ {movie.vote_average > 3 ? `${movie.vote_average.toFixed(1)}` : movie.vote_average} </li>
                                            <li className="font-bold">{movie.release_date ? new Date(movie.release_date).getFullYear() : "?"}</li>
                                        </ul>
                                        <button className="px-2 py-3 mt-4 font-bold bg-blue-600 rounded hover:bg-blue-700">Read More</button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
            </Swiper>
        </>
    );
}