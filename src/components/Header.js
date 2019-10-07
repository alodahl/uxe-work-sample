import React from "react";

const headerBarStyle = { padding: "10px 15px" };
const headerTitleStyle = { margin: 0, marginBottom: "3px", fontSize: "14px", color: "#000" };
const headerDescStyle = {
  margin: 0,
  fontSize: "12px",
  color: "#999",
  fontWeight: "500"
};

function Header() {
  return (
    <header className="header" style={headerBarStyle}>
      <h1 style={headerTitleStyle}>Implementation Assessment</h1>
      <p style={headerDescStyle}>
        Evaluate the implementation status of your security controls.
      </p>
    </header>
  );
}

export default Header;
