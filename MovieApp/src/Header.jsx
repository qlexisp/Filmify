export default function Header(){

    return(
        <div className="bg-gray-900 px-8 py-6 flex justify-between items-center">
            <h1 className="font-bold text-xl uppercase text-white">Movie App</h1>
            <nav className="text-white">
                <a href="#Home" className="mr-2">Home</a>
                <a href="Movies" className="mr-2">Movies</a>
                <a href="Tv shows" className="">Tv shows</a>
            </nav>
        </div>
    )
}