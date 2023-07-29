import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { BiSolidVideos } from "react-icons/bi";
import { IoGameController } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { HiOutlineMusicNote } from "react-icons/hi";
import { GiHut } from "react-icons/gi";
import "../navButton/NavButton.jsx";
function NavButton() {
  const location = useLocation();
  const [ismusicLayoutActive, setIsmusicLayoutActive] = useState(false);

  useEffect(() => {
    setIsmusicLayoutActive(location.pathname.includes("/music"));
  }, [location]);

  return (
    <div className="w-auto flex justify-center ">
      <div className="relative pt-2 pb-2 pl-6 pr-6  w-64 my-10 rounded-full flex justify-between flex-row bg-[#FAFAFA]">
        <NavLink
          to="/content"
          className={`relative flex items-center justify-center ${
            !ismusicLayoutActive && "mx-12"
          }`}
        >
          {" "}
          <BiSolidVideos
            className={`${
              !ismusicLayoutActive &&
              "navbtn-bg text-white p-[20px] absolute text-[75px]"
            } p-2 rounded-full bg-white text-4xl`}
          />{" "}
        </NavLink>
          {" "}
          <IoGameController className="p-2 text-[#8E8E8E] rounded-full bg-white text-4xl" />{" "}
        <NavLink
          to="music"
          className={`relative flex items-center justify-center ${
            ismusicLayoutActive && "mx-12"
          }`}
        >
          {" "}
          <HiOutlineMusicNote
            className={`${
              ismusicLayoutActive &&
              "navbtn-bg text-white p-[20px] absolute text-[75px]"
            } p-2 rounded-full bg-white text-4xl`}
          />{" "}
        </NavLink>
          {" "}
          <GiHut className="p-2 rounded-full text-[#8E8E8E] bg-white text-4xl" />{" "}
      </div>
    </div>
  );
}

export default NavButton;
