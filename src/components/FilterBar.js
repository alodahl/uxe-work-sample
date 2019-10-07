import React from 'react';
import FilterButton from './FilterButton';
import checkImg from "./check-icon.png";
import questionImg from "./question-icon.png";
import xImg from "./x-icon.png";


const filterBarStyle = {backgroundColor: "#fff",  borderTop: "1px solid #ccc", fontSize: "10px"};
const filterHeaderStyle = {margin:0, display: "inline", fontSize: "10px"};

function FilterBar() {
  return (
      <div className="filter-bar" style={filterBarStyle}>
        <h2 style={filterHeaderStyle}>
          Filter Controls
        </h2>
        <FilterButton text="All 148 Controls" icon={null} iconAltText=""/>
        <FilterButton text="121 Implemented" icon={checkImg} iconAltText="" percent="95"/>
        <FilterButton text="13 Not Implemented" icon={xImg} iconAltText="" percent="2"/>
        <FilterButton text="14 Unknown" icon={questionImg} iconAltText="" percent="2"/>
      </div>
  );
}

export default FilterBar;
