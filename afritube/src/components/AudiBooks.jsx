import React from "react";
import AUdioList from "./AUdioList";
import End from "./UI/End";
import AudioSuggestion from "./AudioSuggestion";
import AudioPlayer from "./AudioPlayer";

const AudiBooks = () => {
  return (
    <div className="container mx-auto p-4 bg-secBlue rounded-lg">
      <div className="flex flex-row self-center justify-center gap-2 align-center  h-8">
        <button className="text-sm px-3 w-32  py-0 rounded-[.7rem] border-navButtonIcon border bg-watchBtnTypesBg hover:bg-black hover:text-white">
          African folktales{" "}
        </button>
        <button className="text-sm px-3 w-32  py-0 rounded-[.7rem] border-navButtonIcon border bg-watchBtnTypesBg hover:bg-black hover:text-white">
          Fairy Tales{" "}
        </button>
        <button className="text-sm px-3 w-32 py-0 rounded-[.7rem] border-navButtonIcon border bg-watchBtnTypesBg ">
          Stories{" "}
        </button>
        <button className="px-3 py-0 w-32 text-sm rounded-[.7rem] border-navButtonIcon border bg-watchBtnTypesBg ">
          Fables{" "}
        </button>
      </div>
      <AudioSuggestion />
      <span className="flex flex-col justify-center">
        <h1 className="mx-8 text-xl text-[#8E8E8E]">Stories</h1>
        <AUdioList categories="stories" />
      </span>
      <span>
        <h1 className="mx-4 text-xl text-[#8E8E8E]">Audio Books</h1>
        <AUdioList categories="audiobook" />
      </span>
      <End />
      <div className="container mx-auto fixed w-[100%] top-[80vh] mx-auto">
      <AudioPlayer />
      </div>
    </div>
  );
};

export default AudiBooks;
