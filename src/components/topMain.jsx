import React, { useState, useEffect } from "react";
import Image1 from "../assets/Image1.jpg";
import Image2 from "../assets/Image2.jpg";
import Image3 from "../assets/Image3.jpg";
import Image4 from "../assets/Image4.jpg";
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
    <div id="top-main" className="">
      {/* Scrolling Text at Bottom */}
      <div className="bottom-4 w-full md:w-full overflow-hidden whitespace-nowrap py-24">
        <div id="banner" className="animate-scroll inline-block">
          {[...Array(2)].map((_, i) => (
            <span key={i} className="mx-4 text-5xl md:text-8xl text-black">
              <b>✦ LYFE ✦</b>
              <span className="text-7xl"> Beyond The Screen</span>
              <b>✦ LYFE ✦</b>
              <span className="text-7xl"> Beyond The Screen</span>
              <b>✦ LYFE ✦</b>
              <span className="text-7xl"> Beyond The Screen</span>
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

      <div className="grid sm:grid-cols-1 lg:grid-cols-2 py-0 min-h-min bottom-40 relative">
        <div className="flex flex-row justify-center items-center">
          <h1
            className={`w-1/2 text-4xl sm:text-center  md:text-5xl md:text-center lg:text-left lg:text-7xl text-left transition-opacity duration-1000 bottom-20 ${
              fadeIn ? "opacity-100" : "opacity-0"
            }`}
          >
            {texts[currentText]}
          </h1>
        </div>

        <div className="relative mx-auto min-h-min">
  {/* Image1 with 2175x2900 aspect ratio, smaller with rounded edges */}
  <ScrollAnimation animateIn="backInUp">
    <div className="block md:relative mt-4 md:mt-0 -left-28 top-40 z-0 w-60 rounded-full overflow-hidden"> {/* Reduced size and added rounded edges */}
      <img
        src={Image1}
        alt="Image 1"
        className="object-cover w-full h-full"
      />
    </div>
  </ScrollAnimation>

  {/* Image2 with 4:6 aspect ratio, smaller with rounded edges */}
  <ScrollAnimation animateIn="backInRight">
    <div className="block md:relative mt-4 md:mt-0 left-36 top-0 z-20 w-60 rounded-full overflow-hidden"> {/* Reduced size and added rounded edges */}
      <img
        src={Image2}
        alt="Image 2"
        className="object-fill w-full h-full"
      />
    </div>
  </ScrollAnimation>

  {/* Image3 with 2591x3888 aspect ratio, smaller with rounded edges */}
  <ScrollAnimation animateIn="backInUp" offset={20}>
    <div className="block md:relative mt-4 md:mt-0 -left-24 -top-40 z-10 w-60 rounded-full overflow-hidden"> {/* Reduced size and added rounded edges */}
      <img
        src={Image3}
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
