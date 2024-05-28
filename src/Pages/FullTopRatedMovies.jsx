import Header from '../Header/Header'
import SearchBar from '../Search/SearchBar'
import React, { useState, useEffect } from 'react';
import DisplayMovies from '../DisplayMovies';
import LoadMore from '../LoadMore';

export default function FullTopRatedMovies() {

    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchMovies(page);
    }, [page]);

    const fetchMovies = async (page) => {
        setLoading(true);
        try {
            const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${page}&api_key=e0fa0c69b5ec0c1fd6153567c8a33701`);
            const data = await response.json();
            setMovies(prevMovies => [...prevMovies, ...data.results]);
        } catch (error) {
            console.error('Error fetching top rated movies:', error);
        }
        setLoading(false);
    };

    const loadMoreMovies = () => {
        setPage(prevPage => prevPage + 1);
    };

    return (
        <>
            <Header />
            <SearchBar />
            <DisplayMovies movies={movies} />
            <LoadMore onClick={loadMoreMovies} loading={loading} />
        </>
    )
}