import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { NavLink } from 'react-router-dom';

export default function TopRatedMovies() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchTrending = async () => {
            try {
                const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&api_key=e0fa0c69b5ec0c1fd6153567c8a33701');
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
            <div className="mx-6 mt-4 lg:mx-20 text-[#EEEEEE]">
                <h2 className="text-2xl font-bold mb-2">Top Rated Movies</h2>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    autoplay={{ delay: 5000 }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Scrollbar, Autoplay]}
                    breakpoints={{
                        300: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        640: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 6,
                            spaceBetween: 20,
                        },
                    }}
                    className="mySwiper"
                >

                    {movies
                        .slice(0, 10)
                        .map(movie => (
                            <SwiperSlide key={movie.id}>
                                <NavLink to={`/movie/${movie.id}`}>
                                    <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title} className="rounded-lg shadow-md" />
                                </NavLink>
                            </SwiperSlide>
                        ))}
                </Swiper>
            </div>
        </>
    )
}