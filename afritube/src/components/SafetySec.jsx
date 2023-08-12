import React from "react";
import safety from '../assets/Safety-image.png';
import Button from "./UI/Button";
import { Link } from "react-router-dom";

const SafetySec = () => {
  return (
    <div className="container mx-auto flex flex-col items-center mt-[50px]">
      <div className="text-center mx-8">
      <h4 className="font-semibold text-[#01878F]">Safety</h4>
      <h2 className="font-bold text-2xl">
        With <span className="text-[#429BD6]">Afritube Parents control</span>, Kids can watch educational<br/>content safely
      </h2>
      <Link to='/content'>
      <Button spec='relative z-[99] my-4 bg-black text-white hover:bg-[grey]' cta='Get Started'/>
      </Link>
      </div>
      <img src={safety} className="w-[450px] mt-[50px]"/>
    </div>
  );
};

export default SafetySec;
