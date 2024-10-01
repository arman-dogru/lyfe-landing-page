import React from 'react';
import Hero1 from "../assets/hero1.png";

const Home = () => {
    return (
      <div className="bg-black min-h-screen flex flex-col justify-start items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-center mb-20">
          <img
            src={Hero1}
            alt="Centered Image"
            className="w-full max-w-md md:max-w-lg lg:max-w-6xl h-auto"
          />
        </div>
        <div className="text-center mt-20 mb-20">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-white">
            Lyfe. Your own
            <br /> community.
          </h1>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-center mt-20 mb-20">
          <img
            src={Hero1}
            alt="Centered Image"
            className="w-full max-w-md md:max-w-lg lg:max-w-6xl h-auto"
          />
        </div>
        {/* New Section for "AI Generated Text" */}
        <div className="w-full flex flex-col items-center mt-20 py-16 bg-black">
          {/* Main Text */}
          <div className="text-center mb-20">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
              AI Generated Text
            </h1>
          </div>

          {/* Button Section */}
          <div className="flex flex-col md:flex-row items-center justify-center mb-8 space-y-4 md:space-y-0 md:space-x-8">
            <button className="border border-white text-white py-3 px-6 text-lg font-medium">
              Let's start making music on May 5.
            </button>
            <button className="border border-white flex items-center py-3 px-6 text-lg font-medium text-white">
              <span className="mr-2">Soon on the App Store</span>
            </button>
          </div>

          {/* "Socials and Email" Footer */}
          <div className="text-white">
            <h2 className="text-lg">Socials and email</h2>
          </div>
        </div>
      </div>
    );
}

export default Home;
