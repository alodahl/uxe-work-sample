import React from 'react';

const headerBarStyle = {backgroundColor: "#fff"};
const headerSection = {margin:0};
function Header() {
  return (
      <header className="header" style={headerBarStyle}>
          <h1 style={headerSection}>Implementation Assessment</h1>
          <p style={headerSection}>Evaluate the status of your security controls.</p>
      </header>
  );
}

export default Header;
