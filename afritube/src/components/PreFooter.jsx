import React from "react";
import { BsApple } from "react-icons/bs";
import { FaGooglePlay, FaApple } from "react-icons/fa";
import cloud from "../assets/prefootercloud.png";

const PreFooter = () => {
  return (
    <div className="bg-white relative">
      <div className="pt-[100px]">
        <div className="container mx-auto pre-footer rounded-lg px-4 py-16 overflow-hidden relative z-10">
          <h1 className="font-medium text-3xl">
            Explore Afritube
            <br /> for kids.
          </h1>
          <p className="text-[#4C4A55] my-4">
            Get your kids to enjoy learning in a safe, nurturing environment{" "}
            <br />
            where they feel supported and challenged.
          </p>
          <span className="flex flex-col sm:flex-row">
            <button className="bg-white px-4 py-2 my-2 rounded-lg mr-4 flex items-center">
              <FaApple className="mr-2 text-xl mb-1" /> Get on Apple
            </button>
            <button className="bg-white px-4 py-2 my-2 rounded-lg mr-4 flex items-center">
              <FaGooglePlay className="mr-2" /> Get on Google Play
            </button>
            <img src={cloud} className="hidden absolute bottom-[-50px] right-[170px] w-[300px] md:block z-0" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default PreFooter;
