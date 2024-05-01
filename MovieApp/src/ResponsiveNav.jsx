export function MenuIcon() {
    return (
        <img className="w-6 h-6" src="src/assets/menuicon.png" />
    );
}

export function CloseMenu() {
    return (
        <>
            <img className="w-6 h-6" src="src/assets/closemenu.png" />
            <div className="flex flex-col items-center flex-wrap">
                <a href="#Home" className="mr-2">Home</a>
                <a href="#Movies" className="mr-2">Movies</a>
                <a href="#Tvshows" className="">Tv shows</a>
            </div>
        </>
    );
}