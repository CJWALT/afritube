import React from "react";
import Favouritecontext from "../../store/reducer";
import { useContext } from "react";
import TextModal from "./TextModal";

const Card = ({ data }) => {
  const ctx = useContext(Favouritecontext);
  const openModal = () => {
    ctx.dispatch({
      type: "OPENTEXTMODAL",
    });
  };

  const textModal = ctx.state.textModal;

  return (
    <>
      {data.map((data) => (
        <>
        <div
          className="bg-white rounded-md w-[200px] my-4 cursor-pointer"
          onClick={openModal}
        >
          <img src={data.thumbnail} alt="thumbnail" className="pt-2 h-[140px] w-[100%] object-cover rounded" />
          <p className="text-center py-2">{data.name}</p>
        </div>
        {textModal && <TextModal text={data.id}/>}
        </>
      ))}
    </>
  );
};

export default Card;
