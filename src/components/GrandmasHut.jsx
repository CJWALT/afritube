import React from "react";
import grandma from "../assets/Grandma.png";
import hut from "../assets/hutLogo.png";
import topCloud from "../assets/cloudbtm.png";
import rainCloud from '../assets/rainCloud.png'
import { NavLink } from "react-router-dom";
import Button from "./UI/Button";

const GrandmasHut = () => {
  return (
    <div className="bg-white relative z-[999] px-[20px] py-[20px] sm:py-[80px]">
      <img src={rainCloud} className="z-0 absolute left-[-40px] top-[-120px] w-[250px] hidden md:left-[10%] sm:block"/>
      <img src={topCloud} className="z-0 absolute right-0 top-[-40px]"/>
      <div className="container mx-auto flex flex-col-reverse px-[0px] py-6 items-center justify-between md:flex-row xl:px-[200px]">
        <div className="mr-[30px] px-2">
          <img src={hut} />
          <h2 className="text-5xl text-[#A9603A] font-medium my-3">
            Grand Ma<br/> welcomes you to her hut
          </h2>
          <p>Step into Grandma's hut and experience her <br /> heartwarming hospitality like never before.</p>
          <NavLink to='/content/grandma'>
          <Button
              color="transparent"
              spec="ml-[0px] text-white text-sm my-3 px-8 py-2 hover:bg-[grey] rounded bg-btn"
              cta="SEE&nbsp;MORE"
            />
          </NavLink>
        </div>
          <img src={grandma} className="w-[400px] my-4 z-10" />
      </div>
    </div>
  );
};

export default GrandmasHut;
