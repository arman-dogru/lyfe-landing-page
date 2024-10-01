import React from 'react';
import Phone from "../assets/phone.png";
const middleMain = () => {
    return (
        <div>
            <div className="grid sm:grid-cols-1 md:grid-cols-2">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-center mb-20">
                    <img
                        src={Phone}
                        alt="Centered Image"
                        className="w-full max-w-md md:max-w-lg lg:max-w-6xl h-auto"
                    />
                </div>
                <div className="flex justify-center items-center ">
                    <h1 className="w-8/12 text-2xl sm:text-4xl md:text-5xl lg:text-7xl text-indigo-300 font-semibold">
                        We're solely for the small and independent artist (AI Generated Chnage)
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default middleMain