import React, { useState } from "react";
import Explore from "../assets/Exemt.jpg";

const features = [
  {
    title: "Digital Tab",
    description: "Open tab digitalized",
    imageUrl: Explore,
    bgColor: "bg-black",
  },
  {
    title: "Click & Collect",
    description: "Ordering from anywhere",
    imageUrl: Explore,
    bgColor: "bg-black",
  },
  {
    title: "Pre-ordering",
    description: "Group ordering in advance",
    imageUrl: Explore,
    bgColor: "bg-black",
  },
  {
    title: "Pre-payment",
    description: "Deposit thanks to payment link",
    imageUrl: Explore,
    bgColor: "bg-gradient-to-b from-gray-900 to-purple-800",
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
    <div>
      {/* Title */}
      <h1 className="text-5xl text-center md:text-9xl md:text-left md:pl-10 mt-10">
        Our features.
      </h1>

      <div className="flex flex-col items-center py-12 bg-white">
        {/* Desktop View - Flex layout */}
        <div className="hidden md:flex flex-wrap justify-center gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`relative w-80 h-[35rem] rounded-2xl overflow-hidden shadow-lg ${feature.bgColor} hover:scale-105 transition-transform duration-300`}
            >
              {/* Background Image */}
              <img
                src={feature.imageUrl}
                alt={feature.title}
                className="w-full h-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
                <div className="space-y-2">
                  <h2 className="text-sm font-medium">{feature.title}</h2>
                  <p className="text-2xl font-medium">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View - Slider layout */}
        <div className="relative w-80 h-[35rem] md:hidden">
          {/* Single Slide */}
          <div className={`relative ${features[currentIndex].bgColor}`}>
            {/* Background Image */}
            <img
              src={features[currentIndex].imageUrl}
              alt={features[currentIndex].title}
              className="w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
              <div className="space-y-2">
                <h2 className="text-sm font-medium">{features[currentIndex].title}</h2>
                <p className="text-2xl font-medium">{features[currentIndex].description}</p>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-4 w-full px-28">
            <button
              className="text-2xl bg-gray-800 text-white px-5 py-2 rounded-full"
              onClick={handlePrev}
            >
              ‹
            </button>
            <button
              className="text-2xl bg-gray-800 text-white px-5 py-2 rounded-full"
              onClick={handleNext}
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddleMain;
