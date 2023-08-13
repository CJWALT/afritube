import React, { useState } from "react";
import gameImage from "../assets/gameImage.png";
import cloud from "../assets/white-cloud.png";

const GameIntro = () => {
  return (
    <div className="relative bg-white  pb-[140px]">
      <img
        src={cloud}
        className="absolute top-[-50px] left-0 z-[9] lt:top-[-100px]"
      />
      <div className="container mx-auto px-[0px] py-6 xl:px-[200px]">
        <div className="relative flex flex-col justify-between items-center md:flex-row">
          <span className="py-8 px-2">
            <h1 className="font-bold text-3xl text-primary relative z-[99]">
              Play Games
            </h1>
            <h2 className="font-medium text-xl py-3 relative z-[99] md:pr-[20%]">
              Dive into an immersive world of thrilling adventures and
              challenges with our captivating selection of games!
            </h2>
            <div
              className={`bg-black p-1 text-white w-[200px] overflow-hidden flow-animation rounded`}
            >
              <h2>
                COMING&nbsp;SOON&nbsp;&nbsp;COMING&nbsp;SOON&nbsp;&nbsp;COMING&nbsp;SOON
              </h2>
            </div>
          </span>
          <img src={gameImage} className="w-[480px] mt-8 relative z-[99]" />
        </div>
      </div>
    </div>
  );
};

export default GameIntro;