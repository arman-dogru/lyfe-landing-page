import React, { useState, useEffect } from "react";
import Image1 from "../assets/Image1.jpg";
import Image2 from "../assets/Image2.jpg";
import Image3 from "../assets/Image3.jpg";
import Image4 from "../assets/Image4.jpg";
import Phone from "../assets/phone.png";
import "../styles/topMain.css";
import ScrollAnimation from "react-animate-on-scroll";

const topMain = () => {
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
    <div id="top-main">
      <div className="grid sm:grid-cols-1 lg:grid-cols-2 py-8  min-h-min">
        <div className="flex flex-row justify-center items-center">
          <h1
            className={`w-1/2 text-4xl sm:text-center  md:text-5xl md:text-center lg:text-left lg:text-7xl text-left transition-opacity duration-1000 ${
              fadeIn ? "opacity-100" : "opacity-0"
            }`}
          >
            {texts[currentText]}
          </h1>
        </div>
        <div className="relative mx-auto min-h-min">
          {/* Images can stay the same */}
          <ScrollAnimation animateIn="backInUp">
            <div className="block md:relative mt-4 md:mt-0  -left-28 top-20 z-0 w-96 md:w-60 h-74">
              <img
                src={Image1}
                alt="Image 1"
                className="object-cover w-full h-full"
              />
            </div>
          </ScrollAnimation>

          <ScrollAnimation animateIn="backInRight">
            <div className="block md:relative mt-4 md:mt-0 left-36 -top-28 z-20  w-96 md:w-64 h-96 md:h-64 ">
              <img
                src={Image2}
                alt="Image 2"
                className="object-fill w-full h-full"
              />
            </div>
          </ScrollAnimation>

          <ScrollAnimation animateIn="backInUp" offset={20}>
            <div className="block md:relative mt-4 md:mt-0 -left-24 -top-40  z-10  w-96 md:w-72 h-72">
              <img
                src={Image3}
                alt="Image 3"
                className="object-fill w-full h-full"
              />
            </div>
          </ScrollAnimation>

          <ScrollAnimation animateIn="backInRight" offset={20}>
            <div className="block md:relative  md:mt-0 left-32 -top-80 z-10  w-96 md:w-72 h-72 md:h-48">
              <img
                src={Image4}
                alt="Image 3"
                className="object-fill w-full h-full"
              />
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
};

export default topMain;
