import React, { useState } from "react";
import Explore from "../assets/Exemt.jpg";
import Event1 from "../assets/event-1.jpg";
import Event2 from "../assets/event-2.jpg";
import Event3 from "../assets/event-3.jpg";
import Event4 from "../assets/event-4.jpg";
import Arman from "../assets/Arman.jpg";

const features = [
  {
    title: "Find Events",
    description: "Meet like-minded people with similar interests.",
    imageUrl: Event1,
    bgColor: "bg-black",
  },
  {
    title: "Build Community",
    description: "Connect with new people in your area.",
    imageUrl: Event4,
    bgColor: "bg-black",
  },
  {
    title: "Meet People",
    description: "Make long lasting friendships.",
    imageUrl: Event3,
    bgColor: "bg-black",
  },
  {
    title: "Enjoy Lyfe",
    description: "Experience the excitement of Lyfe together.",
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
      <div className="w-full max-w-screen-xl px-4">
        {/* Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mt-10 text-left">
          Our Features
        </h1>

        <div className="flex flex-col items-center py-12 bg-white w-full">
          {/* Desktop View - Grid layout for 4 cards in a row */}
          <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`relative w-full h-96 rounded-2xl overflow-hidden shadow-lg ${feature.bgColor} hover:scale-105 transition-transform duration-300`}
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
                <div className="absolute inset-0 p-6 flex flex-col justify-end text-white z-10">
                  <h2 className="text-lg font-semibold">{feature.title}</h2>
                  <p className="text-xl font-medium">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile View - Slider layout */}
          <div className="relative w-full md:hidden">
            {/* Single Slide */}
            <div
              className={`relative w-full h-96 rounded-2xl overflow-hidden shadow-lg ${features[currentIndex].bgColor}`}
            >
              {/* Background Image */}
              <img
                src={features[currentIndex].imageUrl}
                alt={features[currentIndex].title}
                className="w-full h-full object-cover"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>

              {/* Text Overlay */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end text-white z-10">
                <h2 className="text-lg font-semibold">
                  {features[currentIndex].title}
                </h2>
                <p className="text-xl font-medium">
                  {features[currentIndex].description}
                </p>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-4 w-full px-4">
              <button
                className="text-2xl bg-gray-800 text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700"
                onClick={handlePrev}
                aria-label="Previous Feature"
              >
                ‹
              </button>
              <button
                className="text-2xl bg-gray-800 text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700"
                onClick={handleNext}
                aria-label="Next Feature"
              >
                ›
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddleMain;
