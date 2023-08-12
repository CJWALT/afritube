import React, { useState } from "react";
import Button from "./UI/Button";
import bright from "../assets/brightElips.png";
import cloudSm from "../assets/VectorCloud.png";
import cloudBig from "../assets/vectorBig.png";
import stars from "../assets/stars.png";
import musicPreview from "../assets/musicPreview.png";
import {Link} from 'react-router-dom'

const MusicIntro = () => {
  const [clickPromt, setClickPromt] = useState(false)

  return (
    <div className="bg-[#01072D] py-[10px] relative pb-[100px]">
      <img
        src={cloudSm}
        alt="/"
        className="absolute top-[-50px] left-0 z-0 lt:top-[-100px]"
      />
      <img
        src={cloudBig}
        alt="/"
        className="absolute top-[-50px] right-0 z-0 lt:top-[-100px]"
      />
      <img src={stars} alt="/" className="w-[100%] h-[100%] relative z-10" />
      <div className="container mx-auto px-[0px] xl:px-[200px]">
        <div className="relative flex flex-col justify-between items-center md:flex-row">
          <div className="px-2">
            <img
              src={bright}
              className="absolute top-[20px] z-[9] w-[170px] opacity-[10%]"
            />
            <h1 className="font-bold text-3xl text-primary relative z-[99]">
              Listen
            </h1>
            <h2 className="font-medium text-xl text-white py-3 relative z-[99] md:pr-[20%]">
              Dive into an immersive world of thrilling adventures and
              challenges with our captivating selection of games!
            </h2>
            <Link to='/content/music'>
            <Button
              spec="relative z-[99] my-4 bg-white text-black hover:bg-[grey]"
              cta="View Music & Audio Books"
            />
            </Link>
          </div>
          <Link to='/content/music'>
          <div className="relative">
            <img src={musicPreview} alt="/" className="cursor-pointer my-4" onMouseOver={()=> setClickPromt(true)} onMouseLeave={()=> setClickPromt(false)}/>
            {clickPromt && <h1 className="bg-white p-4 absolute top-[20px] rounded-full cursor-pointer" onMouseOver={()=> setClickPromt(true)}>Click to Listen to music and Audio books</h1>}
          </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MusicIntro;
