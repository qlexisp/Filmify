export function MenuIcon() {
    return (
        <img className="w-6 h-6" src="src/assets/menuicon.png" />
    );
}

export function CloseMenu({ isOpen }) {
    return (
        <div className="relative font-bold text-right text-white uppercase">
            <div className="flex justify-end">
                <img className="w-6 h-6 mb-2" src="src/assets/closemenu.png" alt="Close menu" />
            </div>
            <div className={`transform ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>
                <a href="#Home" className="block hover:text-gray-500 hover:duration-300">Home</a>
                <a href="#Movies" className="block hover:text-gray-500 hover:duration-300">Movies</a>
                <a href="#Tvshows" className="block hover:text-gray-500 hover:duration-300">Tv shows</a>
            </div>
        </div>
    );
}
