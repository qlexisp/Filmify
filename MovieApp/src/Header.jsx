import Nav from './Nav'
export default function Header(){

    return(
        <div className="bg-gray-900 px-8 py-6 flex justify-between items-center">
            <h1 className="font-bold text-xl uppercase text-white">Movie App</h1>
            <Nav />
        </div>
    )
}