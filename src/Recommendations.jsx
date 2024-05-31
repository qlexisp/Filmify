import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom";

export default function Recommendations({ movieId }) {

    const [recommendations, setRecommendations] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRecommendations = async () => {
            try {
                const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/recommendations?language=en-US&page=1&api_key=e0fa0c69b5ec0c1fd6153567c8a33701`);
                const data = await response.json();
                setRecommendations(data);
            } catch (error) {
                console.error('Error fetching recommendations:', error);
            } finally {
                setLoading(false);
            }
        };

        if (movieId) {
            fetchRecommendations();
        }
    }, [movieId]);

    if (loading) {
        return <div>Loading recommendations...</div>;
    }

    if (!recommendations || !recommendations.results || recommendations.results.length === 0) {
        return <div className="text-[#8E8E8E] ml-6 mt-2">No recommendations found.</div>;
    }

    return (
        <>
            <div className="mt-4 ml-6">
                <h2 className="text-[#8E8E8E] mb-2 font-bold">Recommended Movies:</h2>
                <div className="grid grid-cols-2 w-[90%] md:flex gap-2 md:w-[60%]">
                    {recommendations.results
                        .slice(0, 6)
                        .map(recMovie => (
                            <div key={recMovie.id} className="">
                                <NavLink to={`/movie/${recMovie.id}`}>
                                    <img src={`https://image.tmdb.org/t/p/w200${recMovie.poster_path}`} alt={recMovie.title} className="h-auto rounded" />
                                </NavLink>
                            </div>
                        ))}
                </div>
            </div>
        </>
    )
}