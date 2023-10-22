import React, { useState } from "react";
import AudiBooks from "../components/GrandmasHut/AudiBooks";
import AudioSuggestion from "../components/AudioSuggestion";
import AfricanLiterature from "../components/GrandmasHut/AfricanLiterature";
import AfricanHistory from "../components/GrandmasHut/AfricanHistory";
import ExploreAfrica from "../components/GrandmasHut/ExploreAfrica";
import MusicIntro from "../components/MusicIntro";

const GrandMaHut = () => {
  let literature = 'literature';
  let history = 'history';
  let books = 'books';
  let explore = 'explore';

  const [activeTab, setActiveTab] = useState(literature)
  const btn = 'text-sm px-3 w-32  py-0 rounded-[.7rem] border-navButtonIcon border bg-watchBtnTypesBg hover:bg-black hover:text-white'

  
  return (
    <div className="container mx-auto p-4 bg-secBlue rounded-lg">
    <div className="flex flex-row flex-wrap self-center justify-center gap-2 py-4 align-center">
      <button className={`${btn} ${activeTab === literature ? 'bg-black text-white' : ''}`} onClick={()=> setActiveTab(literature)}>
        African&nbsp;Literatures{" "}
      </button>
      <button className={`${btn} ${activeTab === history ? 'bg-black text-white' : ''}`} onClick={()=> setActiveTab(history)}>
        African&nbsp;History{" "}
      </button>
      <button className={`${btn} ${activeTab === books ? 'bg-black text-white' : ''}`} onClick={()=> setActiveTab(books)}>
        Audio&nbsp;Books
      </button>
      <button className={`${btn} ${activeTab === explore? 'bg-black text-white' : ''}`} onClick={()=> setActiveTab(explore)}>
        Explore&nbsp;Africa
      </button>
    </div>
    <AudioSuggestion />
    {activeTab === literature && <AfricanLiterature />}
    {activeTab === history&&  <AfricanHistory />}
     {activeTab === books && <AudiBooks />}
     {activeTab === explore && <ExploreAfrica />}
    </div>
  );
};

export default GrandMaHut;
