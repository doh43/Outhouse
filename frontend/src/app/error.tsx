"use client"
import { useRouter } from "next/navigation"

const Error = () => {
    const router = useRouter()
    
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="flex flex-col items-center justify-center">
                <h1 className="font-bold text-5xl text-center mb-4">Sorry...</h1>
                <p className="text-lg text-center">We ran into an error</p>
                <button className="bg-black font-bold text-white mt-7 py-3 px-5 rounded-md" onClick={() => router.back()}>Back</button>
            </div>
        </div>
    )
}

export default Error