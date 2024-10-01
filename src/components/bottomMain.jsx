import React from 'react';
import DownloadStore from '../assets/donwloadstore.png';

const BottomMain = () => {
  return (
    <div className="relative h-screen flex flex-col justify-between">
      {/* AI Generated Text with a shadow */}
      <div className="text-center my-auto">
        <div className="relative inline-block">
          <div className="absolute inset-0 bg-black opacity-30 rounded-full w-80 h-80 mx-auto blur-xl"></div>
          <h1 className="relative text-4xl sm:text-5xl md:text-6xl font-bold text-black z-10">
            JOIN US
          </h1>
        </div>
      </div>

      {/* Button Section */}
      <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 mb-8">
        <button className="border border-black  py-3 px-6 text-lg font-medium">
          Let's start making music on May 5.
        </button>
        <button className="border border-black flex items-center py-3 px-6 text-lg font-medium ">
          <svg className="h-8 w-8 text-black mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
          <img src={DownloadStore} alt="Download Store" className="h-8"/>
        </button>
      </div>

      {/* Footer - Social Icons and Scanner */}
      <div className="flex items-center justify-between px-8 pb-4">
        {/* Social Icons */}
        <div className="flex space-x-4">
          <span className="text-black hover:text-gray-600 cursor-pointer">
            {/* Facebook Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 320 512" className="h-5 w-5">
              <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5 16.3 0 29.4.4 37 1.2V7.9C291.4 4 256.4 0 236.2 0 129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
            </svg>
          </span>
          <span className="text-black hover:text-gray-600 cursor-pointer">
            {/* Instagram Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512" className="h-5 w-5">
              <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9 114.9-51.3 114.9-114.9S287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8z" />
            </svg>
          </span>
          {/* Add more social icons here */}
        </div>
        {/* Scanner Label */}
        <div className="text-blue-500 font-semibold text-lg">
          Scanner
        </div>
      </div>
    </div>
  );
};

export default BottomMain;
