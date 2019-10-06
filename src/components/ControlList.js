import React from "react";
import { Link } from "react-router-dom";

const listStyle = { listStyleType: "none", padding: 0 };
const listItemStyle = {
  borderBottom: "1px solid #ccc",
  height: "20px",
  fontSize: "12px",
  padding: "10px 20px",
  verticalAlign: "middle",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  textDecoration: "none",
};
const listItemLinkStyle = { textDecoration: "none", color: "inherit"};

const ControlList = ({ controls }) => (
  <ul style={listStyle}>
    {controls.map(c => (
      <li key={c.id} style={listItemStyle} className="list-item">
        <Link to={`/controls/${c.id}`} style={listItemLinkStyle}>
          {c.name} - {c.text}
        </Link>
      </li>
    ))}
  </ul>
);

export default ControlList;
