import React from 'react';

const filterBarStyle = {backgroundColor: "#fff",  borderTop: "1px solid #ccc"};
const filterHeaderStyle = {margin:0};

function FilterBar() {
  return (
      <div className="filter-bar" style={filterBarStyle}>
        <h2 style={filterHeaderStyle}>
          Filter Controls
        </h2>
      </div>
  );
}

export default FilterBar;
