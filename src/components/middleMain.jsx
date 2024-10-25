import React, { useState } from "react";
import Explore from "../assets/Exemt.jpg";
import Event1 from "../assets/event-1.jpg";
import Event2 from "../assets/event-2.jpg";
import Event3 from "../assets/event-3.jpg";
import Event4 from "../assets/event-4.jpg";
import Arman from "../assets/Arman.jpg";
import "../styles/middleMain.css";

const features = [
  {
    title: "Hangout Together",
    description: "Create, share, or jump into spontaneous hangouts with friends or new people for fun moments.",
    imageUrl: Event1,
    bgColor: "bg-black",
  },
  {
    title: "Exclusive Communities & Events",
    description: "Join or create communities or events that celebrate your passions, on or off campus.",
    imageUrl: Event4,
    bgColor: "bg-black",
  },
  {
    title: "Engage with Friends",
    description: "Connect, share, and spark new challenges with your friends.",
    imageUrl: Event3,
    bgColor: "bg-black",
  },
  {
    title: "Share Moments",
    description: "Create or watch videos that reflect your student life, interests, and experiences.",
    imageUrl: Arman,
    bgColor: "bg-black",
  },
];

const MiddleMain = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % features.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? features.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="flex flex-col items-center w-full">
      {/* Wrapper Container for Title and Cards */}
      <div className="w-full max-w-screen-xl lg:px-0 md:px-4">
        {/* Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mt-10 text-center md:text-left">
          Our Features
        </h1>

        <div className="flex flex-col items-center py-12 bg-white w-full">
          {/* Desktop View - Grid layout for 4 cards in a row */}
          <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`relative md:w-full md:h-full lg:w-80 lg:h-[35rem] rounded-2xl overflow-hidden shadow-lg ${feature.bgColor} hover:scale-105 transition-transform duration-300`}
              >
                {/* Background Image */}
                <img
                  src={feature.imageUrl}
                  alt={feature.title}
                  className="w-full h-full object-cover"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>

                {/* Text Overlay */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between text-white z-10">
                  <div className="space-y-2">
                    <h2 className="text-sm font-medium">{feature.title}</h2>
                    <p className="text-2xl font-medium">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile View - Swipeable Carousel layout */}
          <div className="relative w-full md:hidden overflow-x-scroll flex space-x-4 px-6 snap-x snap-mandatory scrollbar-hide">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`relative min-w-[75%] rounded-2xl overflow-hidden shadow-lg snap-center ${feature.bgColor}`}
                style={{
                  marginLeft: index === 0 ? '1px' : '',
                  marginRight: index === features.length - 1 ? '1px' : '',
                  height: 'calc(75vw * 1.7)', // Maintaining a 1:1.9 aspect ratio on mobile view
                }}
              >
                {/* Background Image */}
                <img
                  src={feature.imageUrl}
                  alt={feature.title}
                  className="w-full h-full object-cover"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>

                {/* Text Overlay */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between text-white z-10">
                  <div className="space-y-2">
                    <h2 className="text-sm font-medium">{feature.title}</h2>
                    <p className="text-md font-medium">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddleMain;
