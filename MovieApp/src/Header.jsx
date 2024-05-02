import Nav from './Nav'
export default function Header(){

    return(
        <div className="bg-gray-900 px-8 py-6 flex justify-between items-center">
            <h1 className="font-bold text-2xl uppercase text-white">
                <a href="#MovieApp">Movie App</a>
                </h1>
            <Nav />
        </div>
    )
}