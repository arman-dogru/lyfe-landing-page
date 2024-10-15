import React from "react";
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

const middleMain = () => {

  return (
    <div>
      {/* Title */}
      <h1 className="text-5xl text-center md:text-9xl md:text-left md:pl-10 mt-10 ">
        Our features.
      </h1>

      <div className="flex flex-col items-center py-12 bg-white">
        {/* Feature Cards */}
        <div className="flex flex-wrap justify-center gap-8">
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
                <div className="flex items-center justify-end">
                  {/* Additional Elements (e.g., icons, labels) */}
                  {/* Add additional elements here if needed */}
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default middleMain;
