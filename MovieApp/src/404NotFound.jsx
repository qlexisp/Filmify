import Header from './Header/Header'

export default function NotFound() {
    return (
        <>
            <div className="h-screen bg-[#1a1820]">
                <Header />
                <div className="flex justify-center my-28">
                    <div className="text-center text-white">
                        <h2 className="text-[120px] font-bold">404</h2>
                        <p className="-mt-2 font-bold">Not Found</p>
                        <p className="mt-4 text-sm">The ressource request could not be found on this server! <br />Click here to get back to the homepage!</p>
                    </div>
                </div>
            </div >
        </>
    );
}