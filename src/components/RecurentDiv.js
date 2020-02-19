import React from "react";
import randomHex from "random-hex";
import rn from "random-number";

const RecurrentDiv = ({ width, height }) => {
  let options = {
    min: -10,
    max: 45,
    integer: true
  };

  const style = {
    // width: `${width - 10}px`,
    // height: `${height - 10}px`,
    background: `${randomHex.generate()}`,
    width: `${width}px`,
    height: `${height}px`,
    border: "1px solid black",
    display: "inline-block",
    padding: "3px",
    margin: `${rn(options)}px`,
    borderRadius: `${rn(options)}px`
  };

  if (width < 10) return null; //base case

  return (
    <div style={style}>
      <RecurrentDiv width={width - 20} height={height - 10} />
    </div>
  );
};

export default RecurrentDiv;
