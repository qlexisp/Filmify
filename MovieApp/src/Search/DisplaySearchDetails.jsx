import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

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
            {movie ? (
                <div>
                    <h2>{movie.title}</h2>
                    <p>{movie.overview}</p>
                </div>
            ) : (
                <div>Loading...</div>
            )}
        </>
    );

}