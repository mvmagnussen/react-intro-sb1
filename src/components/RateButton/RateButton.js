import React from "react";

const RateButton = props => {
  return (
    <button onClick={props.clickAction}>
      {props.type === "like" ? "Liker" : "Misliker"}
    </button>
  );
};

export default RateButton;
