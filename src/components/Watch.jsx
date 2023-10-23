import React, { useEffect, useState } from "react";
import { TbArrowsShuffle2 } from "react-icons/tb";
import VideoList from "./VideoList";
import { foreignContent } from "../VideoData";
import { africanContent } from "../VideoData";

function Watch({active, setActive}) {

  let african = 'african';
  let foreign = 'foreign';

  useEffect(()=>{
    document.body.style.overflowY='auto' 
  },[])

  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])

  const btn = 'text-sm px-3 w-32  py-0 rounded-[.7rem] border-navButtonIcon border bg-watchBtnTypesBg hover:bg-black hover:text-white'

  return (
    <div className="container mx-auto">
      <div className="px-4"></div>
      <div className="bg-secBlue rounded-xl p-7 mx-8 ">
        <div className="mb-6 flex flex-row relative justify-between gap-20 overflow-y-scroll scrollbar-none">
          <div className="flex flex-row self-center justify-between gap-6 align-center  h-8">
          <button className={`${btn} ${active === african ? 'bg-black text-white' : ''}`} onClick={()=> setActive(african)}>
        African
      </button>
      <button className={`${btn} ${active === foreign? 'bg-black text-white' : ''}`} onClick={()=> setActive(foreign)}>
        Foreign
      </button>
          </div>

          <div>
            <TbArrowsShuffle2 className="self-center justify-end bg-white rounded-full text-6xl p-4" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
          <VideoList data={active === african ? africanContent : foreignContent}/>
        </div>
      </div>
    </div>
  );
}

export default Watch;
