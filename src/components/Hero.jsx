import React from "react";
import image from "../assets/hero-image.png";
import tag from "../assets/hero-tag.png";
import cloud from "../assets/hero-cloud.png";
import greenIll from "../assets/green-illustration.png";
import Button from "./UI/Button";
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <div className="gradient">
      <div className="container mx-auto flex flex-col justify-center items-center py-8 md:flex-row">
        <div>
          <img src={image} alt="hero img" className="w-[400px] mr-8" />
        </div>
        <div className="flex flex-col">
          <div className="flex justify-between items-end ml-8">
            <img src={tag} alt="hero tag"  className="w-[250px]"/>
            <img src={cloud} alt="hero tag" className="hidden w-[80px] sm:block"/>
          </div>
          <NavLink to='content'>
          <Button cta='Get Started' spec='bg-black text-white my-4 hover:bg-[grey] self-start'/>
          </NavLink> 
          <img src={greenIll} alt='illustraion' className="w-[300px] self-end"/>
        </div>
      </div>
    </div>
  );
};

export default Hero;
