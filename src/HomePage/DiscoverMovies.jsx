import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../styles.css';
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
            <Swiper pagination={true} modules={[Pagination, Autoplay]} className="mySwiper text-white my-8">
                {movies
                    .slice(0, 10)
                    .map(movie => (
                        <SwiperSlide key={movie.id}>
                            <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt={`Backdrop for ${movie.id}`} />
                        </SwiperSlide>
                    ))}
            </Swiper>
        </>
    );
}