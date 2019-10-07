import React from "react";
import { Link } from "react-router-dom";

const listStyle = { listStyleType: "none", padding: 0 };
const listItemStyle = {
  borderBottom: "1px solid #ccc",
  fontSize: "10px",
  fontWeight: "400",
  padding: "10px 20px",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  textDecoration: "none"
};
const listItemLinkStyle = { textDecoration: "none", color: "inherit" };
const listItemTextStyle = { fontWeight: "500" };

const ControlList = ({ controls }) => (
  <ul style={listStyle}>
    {controls.map(c => (
      <li key={c.id} style={listItemStyle} className="list-item vertical-align">
        <Link to={`/controls/${c.id}`} style={listItemLinkStyle}>
          <span className="uppercase-title">{c.name}</span>
          <span style={listItemTextStyle}>{c.text}</span>
        </Link>
      </li>
    ))}
  </ul>
);

export default ControlList;
