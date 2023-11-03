import React, { useEffect, useState } from "react";
import { BiX } from "react-icons/bi";
import Favouritecontext from "../../store/reducer";
import { useContext } from "react";

const TextModal = () => {
  const [textData, setTextData] = useState(["Loading..."]);

  const ctx = useContext(Favouritecontext);
  const closeModal = () => {
    ctx.dispatch({
      type: "CLOSETEXTMODAL",
    });
  };

  const sell = ctx.state.textRefrence;

  useEffect(() => {
    function addParagraphs(text) {
      let paragraphs = text.split(/(\r\n)+/).map((paragraph, index) => {
        if (paragraph.startsWith("-")) {
          return (
            <h1 key={index} className="text-l py-2 font-bold">
              {paragraph.slice(1)}
            </h1>
          );
        } else {
          return (
            <p key={index} className="py-1 leading-8 bg-[red]">
              {paragraph}
            </p>
          );
        }
      });
      console.log(paragraphs);
      setTextData(paragraphs);
    }

    try {
      fetch(sell.text)
        .then((response) => response.text())
        .then((text) => {
          addParagraphs(text);
        });
    } catch (error) {
      setTextData("Something went Wrong, try Again");
    }
  }, []);

  return (
    <div
      className="fixed overflow-y-auto max-h-[100%] top-0 left-0 p-10 bg-[#fffffffd] w-[100%] h-[100vh] text-[black] px-[35px] md:px-[5%]"
      autoFocus
    >
      <div className="container mx-auto relative">
        <BiX
          className="p-2 rounded-full bg-[#0066A9] text-4xl text-white absolute right-[-9px] top-[-9px] cursor-pointer z-[999]"
          onClick={closeModal}
        />
        <img
          src={sell.thumbnail}
          alt="thumbnail"
          className="w-[100%] h-[400px] object-cover rounded"
        />
        <h1 className="text-3xl py-4">{sell.name}</h1>
        {textData.map((paragraph, index) => (
          <span key={index}>{paragraph}</span>
        ))}
      </div>
    </div>
  );
};

export default TextModal;
