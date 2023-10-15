import React from "react";
import AudiBooks from "../components/AudiBooks";
import { Outlet } from "react-router-dom";
import AudioSuggestion from "../components/AudioSuggestion";
import AfricanLiterature from "../components/GrandmasHut/AfricanLiterature";

const GrandMaHut = () => {
  return (
    <div className="container mx-auto p-4 bg-secBlue rounded-lg">
    <div className="flex flex-row flex-wrap self-center justify-center gap-2 py-4 align-center">
      <button className="text-sm px-3 w-32  py-0 rounded-[.7rem] border-navButtonIcon border bg-watchBtnTypesBg hover:bg-black hover:text-white">
        African&nbsp;Literatures{" "}
      </button>
      <button className="text-sm px-3 w-32  py-0 rounded-[.7rem] border-navButtonIcon border bg-watchBtnTypesBg hover:bg-black hover:text-white">
        African&nbsp;History{" "}
      </button>
      <button className="text-sm px-3 w-32 py-0 rounded-[.7rem] border-navButtonIcon border bg-watchBtnTypesBg hover:bg-black hover:text-white">
        Audio&nbsp;Books
      </button>
      <button className="px-3 py-0 w-32 text-sm rounded-[.7rem] border-navButtonIcon border bg-watchBtnTypesBg hover:bg-black hover:text-white">
        Explore&nbsp;Africa
      </button>
    </div>
    <AudioSuggestion />
    <AfricanLiterature />
    </div>
  );
};

export default GrandMaHut;
