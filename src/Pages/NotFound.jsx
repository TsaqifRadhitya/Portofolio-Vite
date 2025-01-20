import React from "react"

export default function NotFound() {
    return (
        <div className="w-screen h-screen bg-gradient-to-br from-gray-600 to-gray-300">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-20 rounded-xl bg-opacity-20 drop-shadow-md">
                <h1 className="font-bold text-9xl text-center">404</h1>
                <h1 className="text-center font-semibold text-3xl">Page Not Found</h1>
            </div>
        </div>
    )
}