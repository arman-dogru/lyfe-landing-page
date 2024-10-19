import React, { useState, useEffect } from "react";
import Image1 from "../assets/Image1.jpg";
import Image2 from "../assets/Image2.jpg";
import Image3 from "../assets/Image3.jpg";
import "../styles/topMain.css";
import ScrollAnimation from "react-animate-on-scroll";

const TopMain = () => {
  const texts = [
    "Empowering artists around the globe",
    "Supporting independent creators",
    "A platform built for small artists",
    "Helping creative minds thrive",
    "Connecting the world through art",
  ];

  const [currentText, setCurrentText] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeIn(false); // Start fading out
      setTimeout(() => {
        setCurrentText((prevText) => (prevText + 1) % texts.length);
        setFadeIn(true); // Fade back in with new text
      }, 1000); // Time for fade-out transition (should match the CSS)
    }, 4000); // Total duration between text changes
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      id="top-main"
      className="relative flex flex-col items-center text-center bg-white pt-5"
    >
      {/* Scrolling Text at Bottom */}
      <div className="w-full overflow-hidden whitespace-nowrap py-8">
        <div id="banner" className="animate-scroll inline-block">
          {[...Array(2)].map((_, i) => (
            <span
              key={i}
              className="mx-4 text-3xl sm:text-5xl md:text-6xl lg:text-8xl text-black"
            >
              {[...Array(10)].map((_, j) => (
                <React.Fragment key={j}>
                  <b>✦ LYFE ✦</b>
                  <span className="mx-4"> BEYOND THE SCREEN </span>
                </React.Fragment>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div
        className="grid grid-cols-1 lg:grid-cols-2 items-center py-0 h-auto relative"
        id="AI-Text-Component"
      >
        {/* Rotating Text */}
        <div
          className="flex justify-center items-center px-4 mb-8 lg:mb-0"
          id="Rotating-Text"
        >
          <h1
            className={`w-full lg:w-3/4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl transition-opacity duration-1000 ${
              fadeIn ? "opacity-100" : "opacity-0"
            }`}
          >
            {texts[currentText]}
          </h1>
        </div>

        <div className="relative mx-auto h-auto" id="Image-Flexing">
          <ScrollAnimation animateIn="backInUp">
            <div className="block md:relative mt-4 md:mt-0 -left-20 top-32 sm:top-24 z-0 w-52 sm:w-60 rounded-full overflow-hidden">
              <img src={Image1} alt="Image 1" className="object-cover w-full h-full" />
            </div>
          </ScrollAnimation>

          <ScrollAnimation animateIn="backInRight">
            <div className="block md:relative mt-4 md:mt-0 left-36 top-0 z-20 w-52 sm:w-60 rounded-full overflow-hidden">
              <img src={Image2} alt="Image 2" className="object-cover w-full h-full" />
            </div>
          </ScrollAnimation>

          <ScrollAnimation animateIn="backInUp" offset={20}>
            <div className="block md:relative mt-4 md:mt-0 -left-16 sm:-left-24 sm:-top-40 top-24 z-10 w-52 sm:w-60 rounded-full overflow-hidden">
              <img src={Image3} alt="Image 3" className="object-cover w-full h-full" />
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
};

export default TopMain;
