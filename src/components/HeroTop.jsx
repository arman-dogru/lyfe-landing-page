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
      <div className="w-full flex justify-between items-center md:px-20">
        {/* Music Toggle Button */}
        <div
          className="flex items-center rounded-full bg-gray-200 hover:bg-blue-700 hover:text-white p-2"
          style={{ fontSize: 70 }}
          onClick={() => setMusicBtn(!musicBtn)}
        >
          {musicBtn ? (
            <PiWaveSineBold size={50} />
          ) : (
            <IoRemoveOutline size={50} />
          )}
        </div>

        {/* Decorative Star at Top Right */}
        <div className="flex items-center justify-end w-full">
          <div
            className="relative right-8"
            style={{ fontSize: "70px" }}
          >
            ✦
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div
        className="relative flex flex-col justify-center items-center"
        style={{ height: "80vh" }}
      >
        <div className="flex flex-col items-center">
          {/* Hero Text */}
          <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-8xl text-black mb-4 font-maharlika">
            LYFE AWAITS.
          </h1>

          {/* Responsive Text Block */}
          <p className="text-lg sm:text-xl md:text-2xl lg:text-4xl text-gray-800 mt-12 mb-12 max-w-[90%] md:max-w-[70%] lg:max-w-[60%] font-hkgrotesk">
            An exclusive space to bring uOttawa, Carleton, and Algonquin
            students closer.
          </p>
        </div>

        {/* Join Waitlist Button */}
        <div className="flex mt-16">
          <button className="relative border border-black rounded-full px-32 py-4 text-base flex items-center justify-between space-x-3 hover:bg-black hover:text-white transition-all duration-300 md:text-xl">
            <span>Get Early Access</span>
            <svg
              className="w-8 h-8 absolute right-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 35 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>

        {/* Decorative Arrow at Bottom */}
        <div className="absolute right-0 left-0 bottom-8 flex justify-center">
          <FaAnglesDown size={50} onClick={scrollToNextComponent} />
        </div>
      </div>
    </div>
  );
};

export default HeroTop;
