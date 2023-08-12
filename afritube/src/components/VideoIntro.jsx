import React from "react";
import vid from "../assets/VideoAssests/cow and chicken.mp4";
import cloud from '../assets/Blue-cloud.png'
import sidecloud from '../assets/side-cloud.png'
import Button from "./UI/Button";
import bright from '../assets/brightElips.png'
import { NavLink } from "react-router-dom";

const VideoIntro = () => {
  return (
    <div className="mt-[150px] blue-background pb-[100px] relative py-8 md:pb-[30px]">
      <div className="w-[100%] h-[20px] bg-white absolute top-0"/>
      <img src={cloud} className="absolute top-[-40px] left-0 z-[9] lt:top-[-80px]"/>
      <div className="container mx-auto px-[0px] py-6 xl:px-[200px]">
        <div className="relative flex flex-col justify-between items-center w-[100%] md:flex-row">
          <span className="px-2">
            <h1 className="font-bold text-3xl text-white relative z-[99]">Watch Fun Content</h1>
            <h2 className="font-medium text-xl py-2 relative z-[99] md:pr-[20%]">
              AfriTube is your ultimate destination for wholesome and
              entertaining content.
            </h2>
            <img src={bright} className="absolute top-[-30px] z-[9] w-[170px]"/>
            <NavLink to='content'>
              <Button spec='relative z-[99] my-4 bg-black text-white hover:bg-[grey]' cta='Get Started'/>
            </NavLink>
          </span>
          <div className="relative flex flex-col mt-5 ml-0 sm:ml-4 overflow-hidden sm:overflow-visible">
             <img src={sidecloud} className="w-[50px] absolute top-[-20px] left-[-30px]"/>
             <img src={sidecloud} className="w-[50px] absolute bottom-[0px] left-[-30px]" />
             <img src={sidecloud} className="w-[50px] absolute bottom-[0px] right-[-20px]" />
             <img src={sidecloud} className="w-[50px] absolute top-[-15px] right-[-10px]" />
            <video controls  className="bg-white p-4 w-[400px] h-[250px] object-cover rounded-lg p-[20px] relative z-[99]">
              <source src={vid} type="video/mp4"/>
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoIntro;
