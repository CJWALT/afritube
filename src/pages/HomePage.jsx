import React from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import SafetySec from "../components/SafetySec";
import VideoIntro from "../components/VideoIntro";
import GameIntro from "../components/GameIntro";
import MusicIntro from "../components/MusicIntro";
import GrandmasHut from "../components/GrandmasHut";
import Testimonial from "../components/Testimonial";
import PreFooter from "../components/PreFooter";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <SafetySec />
      <VideoIntro />
      <GameIntro />
      <MusicIntro />
      <GrandmasHut />
      <Testimonial />
      <PreFooter />
      <Footer />
      <AboutUs />
    </>
  );
};

export default HomePage;
