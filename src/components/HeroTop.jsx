import { TiStarFullOutline } from "react-icons/ti";
import { HiSpeakerWave } from "react-icons/hi2";
import { FaAnglesDown } from "react-icons/fa6";

const HeroTop = () => {
  const text = "Join our beta · ";

  return (
    <div className="relative flex flex-col  items-center text-center bg-white pt-5 justify-between">
      <div className="w-full flex justify-between md:px-28">
        <div>
          <HiSpeakerWave size={62} />
        </div>
        {/* Decorative Star at Top Right */}
        <div>
          <TiStarFullOutline size={70} />
        </div>
      </div>
      <div className="relative flex flex-col justify-center items-center h-screen">
        <div className="flex flex-col items-center ">
          {/* Hero Text */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl  text-black mb-4">
            LYFE AWAITS.
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-4xl text-gray-600 mt-12 mb-12 w-1/2 ">
            An exclusive space to bring uOttawa, Carleton, and Algonquin
            students closer.
          </p>
        </div>
      </div>{" "}
      <div className="flex">
        {/* Button */}
        <button className="relative border border-black rounded-full px-32 py-4 text-xl flex items-center justify-between space-x-3 hover:bg-black hover:text-white transition-all duration-300">
          <span>Join Waitlist</span>
          <svg
            className="w-8 h-8 absolute right-0"
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

        {/* Decorative Arrow at Bottom */}
        <div className="absolute right-6 hidden lg:block">
          <FaAnglesDown size={50}/>
        </div>
      </div>
      {/* Scrolling Text at Bottom */}
      <div className=" bottom-4 w-full overflow-hidden whitespace-nowrap py-10">
        <div className="animate-scroll inline-block">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="mx-4 text-6xl text-black">
              {text}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroTop;