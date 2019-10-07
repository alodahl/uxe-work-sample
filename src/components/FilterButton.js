import React from 'react';

function FilterButton(props) {
  return (
        <button className="filter-button">{props.text}{props.icon}</button>
  );
}

export default FilterButton;
