import React from "react";
import checkImg from "./check-icon.png";
import questionImg from "./question-icon.png";
import xImg from "./x-icon.png";

let statusLineStyle = { padding: "15px", margin: 0 };
let statusNameStyle = {
  ...statusLineStyle,
  paddingTop: "20px",
  fontSize: "16px",
  fontWeight: 400
};
let statusStateStyle = {
  ...statusLineStyle,
  borderTop: "2px solid #EBF4FD",
  borderBottom: "1px solid #ccc",
  textTransform: "uppercase",
  fontSize: "10px",
  fontWeight: "700",
};
let statusTextStyle = {
  ...statusLineStyle,
  backgroundColor: "#EBF4FD",
  paddingBottom: "15px",
  fontSize: "12px",
  fontWeight: 400
};
let iconStyle = { padding: "0 2px", height: "12px" };

const ControlMain = ({ control }) => {
  const Status = () => {
    if (!control.state) {
      return (
        <span style={{ color: "orange", margin: "8px" }}>
          Unknown
          <img
            src={questionImg}
            alt="orange question mark"
            style={iconStyle}
          />
        </span>
      );
    } else if (control.state && control.state.isImplemented) {
      return (
        <span style={{ color: "#00D16F", margin: "8px" }}>
          Implemented
          <img
            src={checkImg}
            alt="green checkmark"
            style={iconStyle}
          />
        </span>
      );
    } else {
      return (
        <span style={{ color: "red", margin: "8px" }}>
          Not Implemented
          <img src={xImg} alt="red x" style={iconStyle} />
        </span>
      );
    }
  };

  return (
    <div>
      <h1 style={statusNameStyle}>{control.name}</h1>
      <h2 className="vertical-align" style={statusStateStyle}>
        Status
        {Status()}
      </h2>
      <p style={statusTextStyle}>{control.text}</p>
    </div>
  );
};

export default ControlMain;
