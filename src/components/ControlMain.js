import React from 'react';

let statusLineStyle = {padding: "10px", color: "#3d3d3d", margin: 0, fontWeight: "300"};
let statusNameStyle = {...statusLineStyle, paddingTop: "15px"};
let statusStateStyle = {...statusLineStyle, borderTop: "1px solid lightblue", borderBottom: "1px solid #ccc"};
let statusTextStyle = {...statusLineStyle, backgroundColor: "lightblue", color: "#3d3d3d", paddingBottom: "15px"};

const ControlMain = ({ control }) => {
  const Status = () => control.state && control.state.isImplemented ? <span style={{color:"green", margin: "5px"}}>Implemented</span> : <span style={{color:"red", margin: "5px"}}>Not Implemented</span>;

  return (
    <div>
      <h1 style={statusNameStyle}>{control.name}</h1>
      <h2 style={statusStateStyle}>Status:{Status()}</h2>
      <p style={statusTextStyle}>{control.text}</p>
    </div>);
  }

export default ControlMain;
