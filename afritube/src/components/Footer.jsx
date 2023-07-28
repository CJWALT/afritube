import React from "react";
import logo from "../assets/AFRITUBE-ICON.png";

const Footer = () => {
  const anc = "cursor-pointer text-[grey] py-1";
  return (
    <footer className="bg-white">
      <div className="container px-2 mx-auto flex flex-col justify-between py-[150px] md:flex-row">
        <img src={logo} alt="/" className="w-[45px] my-4 h-[45px] md:my-0" />
        <ul className="flex flex-col">
          <a className={anc}>Team</a>
          <a className={anc}>Product</a>
          <a className={anc}>Design</a>
          <a className={anc}>Development</a>
        </ul>
        <ul className="flex flex-col">
          <a className={anc}>
            Grand Ma's Hut{" "}
            <span className="ml-2 py-1 px-2 bg-[#FDCA40] rounded text-white">
              Coming&nbsp;soon
            </span>
          </a>
          <a className={`${anc} hover:text-black`}>Watch</a>
          <a className={`${anc} hover:text-black`}>Listen</a>
          <a className={anc}>Play</a>
        </ul>
        <ul className="flex flex-col">
          <a className={anc}> Apple</a>
          <a className={anc}> Android</a>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
