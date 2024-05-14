import { useNavigate, useLoaderData } from "react-router-dom";
import SearchResult from './searchResult';
import SearchBar from './SearchBar';
import Header from './Header';

export default function SearchMovie() {

    const movies = useLoaderData();
    console.log(movies);
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
                <SearchBar />
                <SearchResult movies={movies.results} />
            </div>
        </>
    )
}