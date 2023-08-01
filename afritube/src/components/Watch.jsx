import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { TbArrowsShuffle2 } from "react-icons/tb";
import { MdDesktopMac, MdFavorite } from "react-icons/md";
import VideoList from "./VideoList";
import { BiSad } from "react-icons/bi";
import { ImSad } from "react-icons/im";
import End from "./UI/End";

function Watch() {

  useEffect(()=>{
    document.body.style.overflowY='auto' 
  },[])

  return (
    <div className="container mx-auto">
      <div className="px-4"></div>
      <div className="bg-secBlue rounded-xl p-7 mx-8 ">
        <div className="mb-6 flex flex-row relative justify-between gap-20 overflow-y-scroll scrollbar-none">
          <div className="flex flex-row self-center justify-between gap-6 align-center  h-8">
            <button className="text-sm px-3 w-32  py-0 rounded-[.7rem] border-navButtonIcon border bg-watchBtnTypesBg hover:bg-black hover:text-white">
              Megas XLR{" "}
            </button>
            <button className="text-sm px-3 w-32  py-0 rounded-[.7rem] border-navButtonIcon border bg-watchBtnTypesBg hover:bg-black hover:text-white">
              Megas XLR{" "}
            </button>
            <button className="text-sm px-3 w-32 py-0 rounded-[.7rem] border-navButtonIcon border bg-watchBtnTypesBg hover:bg-black hover:text-white">
              Superman{" "}
            </button>
            <button className="px-3 py-0 w-32 text-sm rounded-[.7rem] border-navButtonIcon border bg-watchBtnTypesBg hover:bg-black hover:text-white">
              Baby shark{" "}
            </button>
          </div>

          <div>
            <TbArrowsShuffle2 className="self-center justify-end bg-white rounded-full text-6xl p-4" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
          <VideoList />
        </div>
        <End />
      </div>
    </div>
  );
}

export default Watch;
