import { useLoaderData } from "react-router-dom";
import SearchResult from './SearchResult';
import Header from '../Header/Header';

export default function SearchMovie() {

    const movies = useLoaderData();
    if (movies.isLoading) {
        return <div>Loading...</div>;
    }

    if (movies.isError) {
        return <div>Error loading posts.</div>;
    }
    return (
        <>
            <div className="h-screen bg-[#1a1820]">
                <Header />
                <SearchResult movies={movies.results} />
            </div>
        </>
    )
}