import React from "react";
import Phone from "../assets/phone.png";
const middleMain = () => {
  return (
    <div className="">
      <div className="grid  sm:grid-cols-1 md:grid-cols-[2fr_1.2fr] lg:grid-cols-[2fr_1.1fr]">
        <div className="flex flex-col gap-5 px-5 lg:px-32 lg:gap-20">
          <div className="flex flex-col gap-14">
            <h1 className="text-start text-4xl md:text-5xl lg:text-6xl">
              What does Lyfe Do?
            </h1>
            <div className="flex flex-col items-center text-start ">
              <div className="lg:w-5/6 self-start">
                <h1 className=" text-2xl sm:text-3xl  lg:text-4xl">
                  Disover Communites
                </h1>
                <p className="text-red-500 text-xl lg:text-2xl">
                  Bringing together events and communities that empower you to
                  discover a new world.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center ">
              <div className="lg:w-5/6 self-start">
                <h1 className=" text-2xl sm:text-3xl  lg:text-4xl">Content</h1>
                <p className="text-red-500 text-xl lg:text-2xl">
                  Bringing together events and communities that empower you to
                  discover a new world.
                </p>
              </div>
            </div>
          </div>

          <div className="gap-4">
            <div className="flex flex-row mb-6 gap-2">
              <div
                className="rounded-full w-4 h-4"
                style={{ background: "#e91e63" }}
              ></div>
              <div
                className="rounded-full w-4 h-4"
                style={{ background: "#e91e63" }}
              ></div>
              <div
                className="rounded-full w-4 h-4"
                style={{ background: "#e91e63" }}
              ></div>
            </div>

            <button className="relative border border-black rounded-full px-32 py-4 text-xl flex items-center justify-between space-x-3 hover:bg-black hover:text-white transition-all duration-300">
              <span>Join Waitlist</span>
              <svg
                className="w-8 h-8 absolute right-0"
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
          {/* <div className="flex flex-col justify-center items-center">
            <div className="lg:w-4/6 self-end">
              <h1 className=" text-2xl sm:text-4xl lg:text-5xl">
                Discover Communites
              </h1>
              <p className="text-red-500 text-lg lg:text-xl">
                Text Text Text Bringing together events and communities that
                empower you to discover a new world.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center ">
            <div className="lg:w-4/6 self-center">
              <h1 className=" text-2xl sm:text-4xl lg:text-5xl">
                Discover Communites
              </h1>
              <p className="text-red-500 text-lg lg:text-xl">
                Text Text Text Bringing together events and communities that
                empower you to discover a new world.
              </p>
            </div>
          </div> */}
        </div>
        <div className="container mx-auto px-4 lg:px-1 sm:px-6  flex justify-center mb-20">
          <img
            src={Phone}
            alt="Centered Image"
            className="w-full max-w-md md:max-w-lg lg:max-w-6xl h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default middleMain;
