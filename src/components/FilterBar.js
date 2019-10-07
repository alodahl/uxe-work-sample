import React from 'react';
import FilterButton from './FilterButton'

const filterBarStyle = {backgroundColor: "#fff",  borderTop: "1px solid #ccc", fontSize: "10px"};
const filterHeaderStyle = {margin:0, display: "inline"};

function FilterBar() {
  return (
      <div className="filter-bar" style={filterBarStyle}>
        <h2 style={filterHeaderStyle}>
          Filter Controls
        </h2>
        <FilterButton text="All 148 Controls" icon={null}/>
        <FilterButton text="121 Implemented" icon={null}/>
        <FilterButton text="13 Not Implemented" icon={null}/>
        <FilterButton text="14 Unknown" icon={null}/>
      </div>
  );
}

export default FilterBar;
