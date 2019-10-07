import React from 'react';

const headerBarStyle = {};
const headerTitleStyle = {margin:0, fontSize: "14px"};
const headerDescStyle = {margin:0, fontSize: "12px", color: "#878787", fontWeight: "400"};

function Header() {
  return (
      <header className="header" style={headerBarStyle}>
          <h1 style={headerTitleStyle}>Implementation Assessment</h1>
          <p style={headerDescStyle}>Evaluate the status of your security controls.</p>
      </header>
  );
}

export default Header;
