export default function LoadMore( { onClick, loading }) {
    return (
        <div className="flex justify-center mt-4">
        {loading ? (
            <p>Loading...</p>
        ) : (
            <button onClick={onClick} className="mb-12 px-4 py-2 font-bold text-white border">
                Load More
            </button>
        )}
    </div>
    )
}