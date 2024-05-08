import Link from "next/link"

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="flex flex-col items-center justify-center">
                <h1 className="font-bold text-5xl text-center mb-4">Not Found</h1>
                <p className="text-lg text-center">Sorry, the page you are looking for does not exist.</p>
                <Link href="/" className="bg-black font-bold text-white mt-7 py-3 px-5 rounded-md">Back</Link>
            </div>
        </div>
    )
}

export default NotFound