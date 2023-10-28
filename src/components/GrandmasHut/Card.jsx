import React, { useState } from "react";
import Favouritecontext from "../../store/reducer";
import { useContext } from "react";
import { history } from "../../TextData";

const Card = ({ data }) => {
  const ctx = useContext(Favouritecontext);
  const openModal = (book) => {
    ctx.dispatch({
      type: "OPENTEXTMODAL",
      payload: book,
    });
  };

  return (
    <>
      {data.map((book)  => (
        <span key={book.id} onClick={() => openModal(book)}>
        <div
          className="bg-white rounded-md w-[100%] my-4 cursor-pointer md:w-[200px]"
          onClick={openModal}
        >
          <img src={book.thumbnail} alt="thumbnail" className="pt-2 h-[140px] w-[100%] object-cover rounded" />
          <p className="text-center py-2">{book.name}</p>
        </div>

        </span>
      ))}
    </>
  );
};

export default Card;
