import React from "react";
import status from "./StatusLogos";

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
  fontWeight: "700"
};
let statusTextStyle = {
  ...statusLineStyle,
  backgroundColor: "#EBF4FD",
  paddingBottom: "15px",
  fontSize: "12px",
  fontWeight: 400
};

const ControlMain = ({ control }) => {

  return (
    <div>
      <h1 style={statusNameStyle}>{control.name}</h1>
      <h2 style={statusStateStyle}>
        Status
        {status(control)}
      </h2>
      <p style={statusTextStyle}>{control.text}</p>
    </div>
  );
};

export default ControlMain;
