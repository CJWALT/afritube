import React from "react";
import { FaGooglePlay, FaApple } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Button from "./UI/Button";
import cloud from "../assets/prefootercloud.png";

const PreFooter = () => {
  return (
    <div className="bg-white relative">
      <div className="pt-[100px]">
        <div className="container mx-auto pre-footer rounded-lg px-4 py-16 overflow-hidden relative z-10 flex flex-col justify-between md:flex-row">
          <div>
            {" "}
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
              <button className="bg-white px-4 py-2 my-2 text-start rounded-lg flex items-center outline-0 text-linkGray sm:text-center">
                <FaApple className="mr-2 text-xl mb-1" /> Get on Apple
              </button>
              <button className="bg-white px-4 py-2 my-2 text-start rounded-lg flex items-center outline-0 text-linkGray sm:text-center">
                <FaGooglePlay className="mr-2" /> Get on Google Play
              </button>
              <img
                src={cloud}
                className="hidden absolute bottom-[-50px] right-[170px] w-[300px] md:block z-0"
              />
            </span>
          </div>
          <NavLink to='/'>
          <Button
              color="transparent"
              spec="ml-[0px] text-start text-white text-sm overflow-hidden my-4 w-[100%] px-8 py-2 mr-8 hover:bg-[grey] rounded bg-btn sm:text-center sm:mr-10"
              cta=" Create an Account"
            />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default PreFooter;
