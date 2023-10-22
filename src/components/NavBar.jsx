import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import AboutUs from "./AboutUs";
import Button from "./UI/Button";
import Logo from "./UI/Logo";

const NavBar = () => {
  const [openSideBar, setOpenSideBar] = useState(null);
  const [aboutUs, setAboutUs] = useState(false)

  useEffect(()=>{
    if(openSideBar){
     document.body.style.overflowY='hidden'
    }else if(!openSideBar){
      document.body.style.overflowY='auto' 
    }

  },[openSideBar])
 

  const openBarHandler = () => {
    setOpenSideBar((prev) => !prev);
  };

  window.onresize = () => {
    if (window.innerWidth >= 768) {
      setOpenSideBar(null);
    }
  };

  const close = () => {
    setOpenSideBar(false);
  };

  let slide = null;

  if (openSideBar && window.innerWidth < 768) {
    slide = "animate-slide-in";
  } else if (!openSideBar && window.innerWidth < 768) {
    slide = "animate-slide-out";
  }

  const onHandleNavchange =()=> {
    setOpenSideBar(false)
  }

  return (
    <div className="bg-white">
      <div className="container flex items-center justify-between mx-auto p-2">
        {openSideBar && (
          <div
            className="fixed inset-0 z-[9] bg-[#0000008f] h-[100vh] w-full  flex items-center justify-center"
            onClick={close}
          />
        )}
        <Logo />
        <div
          className={`flex fixed left-0 z-40 top-0 w-[50%] h-[100%] flex-col items-center transform bg-white items-start translate-x-[-500px] md:translate-x-[0px] md:w-auto md:items-center md:justify-between md:flex-row md:relative ${slide}`}
        >
          <div className="flex flex-col mt-[150px] md:flex-row md:mt-0">
            <a className="font-medium mx-2 text-sm my-4 md:my-0 cursor-pointer hover:text-[grey]" onClick={()=> setAboutUs(!aboutUs)}>
              About&nbsp;Us
            </a>
            <NavLink to='/content' className="font-medium mx-2 text-sm my-4 md:my-0 hover:text-[grey]" onClick={onHandleNavchange}>Videos</NavLink>
            <NavLink to='/content/grandma' className="font-medium mx-2 text-sm my-4 md:my-0 hover:text-[grey]">Stories</NavLink>
          </div>
          <div>
          <NavLink to='/content'>
          <Button
              color="transparent"
              spec="ml-[0px] text-white md:ml-[100px] hover:bg-[grey] rounded-full bg-btn"
              cta="Get&nbsp;Started"
            />
          </NavLink>
          </div>
        </div>
        <div
          className="relative hamburger z-[99] md:hidden cursor-pointer"
          onClick={openBarHandler}
        >
          <span className={`${openSideBar && "activeBar"}`}></span>
          <span className={`${openSideBar && "activeBar"}`}></span>
          <span className={`${openSideBar && "activeBar"}`}></span>
        </div>
      </div>
     {aboutUs && <AboutUs setAbout={setAboutUs}/>}
    </div>
  );
};

export default NavBar;
