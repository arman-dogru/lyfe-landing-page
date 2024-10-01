import React from "react";
import TopMain from "../components/topMain.jsx";
import MiddleMain from "../components/middleMain.jsx";
import BottomMain from "../components/bottomMain.jsx";
import HeroTop from "../components/HeroTop.jsx";
const New = () => {
  return (
    <div className="font-poppins">
      <HeroTop />
      <TopMain />
      <MiddleMain />
      <BottomMain />
    </div>
  );
};

export default New;
