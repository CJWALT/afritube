import React, { useContext } from "react";
import AUdioList from "./AUdioList";
import End from "./UI/End";
import AudioSuggestion from "./AudioSuggestion";
import AudioPlayer from "./AudioPlayer";
import RecentlyPlayed from "./RecentlyPlayed";
import Favouritecontext from "../store/reducer";

const AudiBooks = () => {
  const ctx = useContext(Favouritecontext)
  const recentlyPlayed = ctx.state.recentlyPlayed
  return (
    <div className="container mx-auto p-4 bg-secBlue rounded-lg">
      <div className="flex flex-row flex-wrap self-center justify-center gap-2 py-4 align-center">
        <button className="text-sm px-3 w-32  py-0 rounded-[.7rem] border-navButtonIcon border bg-watchBtnTypesBg hover:bg-black hover:text-white">
          African&nbsp;folktales{" "}
        </button>
        <button className="text-sm px-3 w-32  py-0 rounded-[.7rem] border-navButtonIcon border bg-watchBtnTypesBg hover:bg-black hover:text-white">
          Fairy&nbsp;Tales{" "}
        </button>
        <button className="text-sm px-3 w-32 py-0 rounded-[.7rem] border-navButtonIcon border bg-watchBtnTypesBg hover:bg-black hover:text-white">
          Stories{" "}
        </button>
        <button className="px-3 py-0 w-32 text-sm rounded-[.7rem] border-navButtonIcon border bg-watchBtnTypesBg hover:bg-black hover:text-white">
          Fables{" "}
        </button>
      </div>
     {recentlyPlayed.length > 0 && <span className="flex flex-col justify-center">
        <h1 className="mx-4 text-xl text-[#8E8E8E]">Recently Played</h1>
        <RecentlyPlayed />
      </span>}
      <AudioSuggestion />
      <span className="flex flex-col justify-center">
        <h1 className="mx-4 text-xl text-[#8E8E8E]">Stories</h1>
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
