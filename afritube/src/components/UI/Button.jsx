import React from "react";

const Button = ({spec, cta}) => {
  return (
    <>
      <button className={`${spec} py-2 px-4 rounded-full font-medium`}>
        {cta}
      </button>
    </>
  );
};

export default Button;
