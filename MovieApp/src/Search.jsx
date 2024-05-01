export default function SearchMovie() {

    return (
<form className="flex justify-center items-center my-8">
    <label className="sr-only">Enter a movie: </label><br />
    <input className="border px-2 py-2" type="text" name="query" placeholder="Movies, dramas & other..." />
    <button className="bg-blue-500 py-2 px-4 text-white font-bold ml-2" type="submit">Search</button>
</form>

    )
}