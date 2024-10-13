import { HiSpeakerWave } from "react-icons/hi2";
import { FaAnglesDown } from "react-icons/fa6";
import { PiWaveSineBold } from "react-icons/pi";
import { IoRemoveOutline } from "react-icons/io5";
import { useState } from "react";

const HeroTop = () => {
  const [musicBtn, setMusicBtn] = useState(true);
  const text = "Join our beta · ";
  const scrollToNextComponent = () => {
    const nextComponent = document.getElementById("top-main");
    if (nextComponent) {
      nextComponent.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative flex flex-col  items-center text-center bg-white pt-5 justify-between ">
      <div className="w-full flex justify-between items-center md:px-20">
        <div
          className="flex items-center rounded-full bg-gray-200 hover:bg-blue-700 hover:text-white p-2"
          style={{ fontSize: 70 }}
          onClick={()=>setMusicBtn(!musicBtn)}
        >
          {musicBtn ? (
            <PiWaveSineBold size={50} />
          ) : (
            <IoRemoveOutline size={50} />
          )}
        </div>
        {/* Decorative Star at Top Right */}
        <div className="flex " style={{ fontSize: 70 }}>
          ✦
        </div>
      </div>
      <div
        className="relative flex flex-col justify-center items-center"
        style={{ height: "80vh" }}
      >
        <div className="flex flex-col items-center ">
          {/* Hero Text */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl  text-black mb-4 font-maharlika">
            LYFE AWAITS.
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-5xl text-gray-800 mt-12 mb-12 md:w-3/5 font-hkgrotesk">
            An exclusive space to bring uOttawa, Carleton, and Algonquin
            students closer.
          </p>
        </div>
        <div className="flex mt-16">
          {/* Button */}
          <button className="relative border border-black rounded-full px-32 py-4 text-xl flex items-center justify-between space-x-3 hover:bg-black hover:text-white transition-all duration-300">
            <span>Join Waitlist</span>
            <div>
              <svg
                className="w-13 h-full absolute right-0 bottom-0 border border-black rounded-full"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 28 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </div>
          </button>

          {/* Decorative Arrow at Bottom */}
          <div className="absolute right-20 bottom-24 hidden lg:block">
            <FaAnglesDown size={50} onClick={scrollToNextComponent} />
          </div>
        </div>
      </div>{" "}
      {/* Scrolling Text at Bottom */}
      <div className="bottom-4 w-full md:w-full overflow-hidden whitespace-nowrap py-10 border-l-4 border-black">
        <div className="animate-scroll inline-block">
          {[...Array(2)].map((_, i) => (
            <span key={i} className="mx-4 text-5xl md:text-8xl text-black">
              <b>✦ LYFE ✦</b>
              <span className="text-7xl"> Beyond The Screen</span>
              <b>✦ LYFE ✦</b>
              <span className="text-7xl"> Beyond The Screen</span>
              <b>✦ LYFE ✦</b>
              <span className="text-7xl"> Beyond The Screen</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroTop;
