import React from "react";
import { Link } from "react-router-dom";
import status from "./StatusLogos";

const listStyle = { listStyleType: "none", padding: 0, margin: 0, position: "relative" };
const listItemStyle = {
  boxSizing: "border-box",
  height: "40px",
  borderBottom: "1px solid #ccc",
  fontSize: "12px",
  fontWeight: "400",
  padding: "10px 140px 10px 20px",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  textDecoration: "none"
};
const listItemNameStyle = { position: "absolute", padding: "3px 3px 0 0" };
const listItemLinkStyle = { textDecoration: "none", color: "inherit" };
const listItemTextStyle = { fontWeight: "500", marginLeft: "80px", };
const listItemStatusStyle = {
  position: "absolute",
  right: "10px",
  paddingTop: "3px",
  textTransform: "uppercase",
  fontSize: "10px",
  fontWeight: "700",
  display: "inline-block"
};

const ControlList = ({ controls }) => (
  <ul style={listStyle}>
    {controls.map(c => (
      <li
        tabIndex="0"
        key={c.id}
        style={listItemStyle}
        className="list-item vertical-align"
      >
        <Link to={`/controls/${c.id}`} style={listItemLinkStyle}>
          <span style={listItemNameStyle} className="uppercase-title">
            {c.name}
          </span>
          <span style={listItemTextStyle}>{c.text}</span>
          <div style={listItemStatusStyle} className="vertical-align">
            {status(c)}
          </div>
        </Link>
      </li>
    ))}
  </ul>
);

export default ControlList;
