import Nav from './Nav'
export default function Header(){

    return(
        <div className="flex items-center justify-between px-8 py-6 bg-slate-950 md:px-12 lg:px-28">
            <h1 className="text-2xl font-bold text-white uppercase">
                <a href="#MovieApp">Movie App</a>
                </h1>
            <Nav />
        </div>
    )
}