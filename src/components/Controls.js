import React from 'react';

function Controls(props) {
  return (
      <div className="controls">
        <h2>
          Controls
        </h2>
        {props.children}
      </div>
  );
}

export default Controls;
