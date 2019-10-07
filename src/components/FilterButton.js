import React from "react";

const buttonPercentStyle = {
  color: "#ccc"
};

const buttonIconStyle = {
  height: "12px",
  verticalAlign: "middle"
};


function FilterButton(props) {
  return (
    <button className="filter-button uppercase-title vertical-align">
      <img src={props.icon} alt={props.iconAltText} style={buttonIconStyle}/>
      <span style={{margin:"5px"}}>{props.text}</span>
      {props.percent && <span style={buttonPercentStyle}>{props.percent}%</span>}
    </button>
  );
}

export default FilterButton;
