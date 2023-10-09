import React from "react";

const Button = ({spec, cta}) => {
  return (
    <>
      <button className={`${spec} py-1 px-4 rounded-md font-medium`}>
        {cta}
      </button>
    </>
  );
};

export default Button;
