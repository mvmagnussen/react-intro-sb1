import React from "react";
import { TommelOppIkon } from "@sb1/ffe-icons-react";
import "./RateButton.less";

const RateButton = props => {
  return (
    <button onClick={props.clickAction} className={`rate-button`}>
      <TommelOppIkon
        className={props.type === "like" ? "thumbsup" : "thumbsdown"}
      />
    </button>
  );
};

export default RateButton;
