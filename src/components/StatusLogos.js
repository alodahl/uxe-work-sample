import React from "react";
import checkImg from "./check-icon.png";
import questionImg from "./question-icon.png";
import xImg from "./x-icon.png";

const iconStyle = { padding: "0 2px", height: "12px" };

export const Unknown = () => (
  <span style={{ color: "orange", margin: "8px" }}>
    Unknown
    <img src={questionImg} alt="orange question mark" style={iconStyle} />
  </span>
);

export const Implemented = () => (
  <span style={{ color: "#00D16F", margin: "8px" }}>
    Implemented
    <img src={checkImg} alt="green checkmark" style={iconStyle} />
  </span>
);

export const NotImplemented = () => (
  <span style={{ color: "red", margin: "8px" }}>
    Not Implemented
    <img src={xImg} alt="red x" style={iconStyle} />
  </span>
);

const status = (control) => {
  if (!control.state) return <Unknown/>;
  else if (control.state && control.state.isImplemented) return <Implemented/>;
  else return <NotImplemented/>;
};

export default status;
