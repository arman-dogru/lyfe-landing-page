import { HiSpeakerWave } from "react-icons/hi2";
import { FaAnglesDown } from "react-icons/fa6";
import { PiWaveSineBold } from "react-icons/pi";
import { IoRemoveOutline } from "react-icons/io5";
import { useState } from "react";

const HeroTop = () => {
  const [musicBtn, setMusicBtn] = useState(true);

  const scrollToNextComponent = () => {
    const nextComponent = document.getElementById("banner");
    if (nextComponent) {
      nextComponent.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="relative flex flex-col items-center text-center bg-white pt-5">
      <div className="w-full flex justify-between items-center px-4 sm:px-8 md:px-20">
        {/* Music Toggle Button */}
        <div
          className="flex items-center rounded-full bg-gray-200 hover:bg-blue-700 hover:text-white p-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl cursor-pointer"
          onClick={() => setMusicBtn(!musicBtn)}
        >
          {musicBtn ? (
            <PiWaveSineBold />
          ) : (
            <IoRemoveOutline />
          )}
        </div>

        {/* Decorative Star at Top Right */}
        <div className="flex items-center justify-end w-full">
          <div className="relative right-4 sm:right-6 md:right-8 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            ✦
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative flex flex-col justify-center items-center min-h-[80vh] px-4">
        <div className="flex flex-col items-center">
          {/* Hero Text */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-black mb-4 font-maharlika">
            LYFE AWAITS.
          </h1>

          {/* Responsive Text Block */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-800 mt-8 mb-12 max-w-[90%] md:max-w-[70%] lg:max-w-[60%] font-hkgrotesk">
            An exclusive space to bring uOttawa, Carleton, and Algonquin
            students closer.
          </p>
        </div>

        {/* Join Waitlist Button */}
        <div className="flex mt-12">
          <a href="https://forms.fillout.com/t/2HnnrSfJU9us" target="_blank" rel="noopener noreferrer">
            <button className="relative border border-black rounded-full px-8 sm:px-12 md:px-16 lg:px-20 py-3 text-base flex items-center justify-center space-x-2 hover:bg-black hover:text-white transition-all duration-300 md:text-lg">
              <span>Get Early Access</span>
              <svg
                className="w-5 h-5 md:w-6 md:h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </a>
        </div>

        {/* Decorative Arrow at Bottom */}
        <div className="absolute right-0 left-0 bottom-8 flex justify-center">
          <FaAnglesDown
            className="text-3xl sm:text-4xl md:text-5xl cursor-pointer"
            onClick={scrollToNextComponent}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroTop;
