import Header from '../Header/Header'
import SearchBar from '../Search/SearchBar'
import React, { useState, useEffect } from 'react';
import DisplayMovies from '../DisplayMovies';

export default function FullUpComingMovies() {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchTrending = async () => {
            try {
                const response = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1&api_key=e0fa0c69b5ec0c1fd6153567c8a33701');
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
            <Header />
            <SearchBar />
            <DisplayMovies movies={movies} />
        </>
    )
}