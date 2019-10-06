import React from 'react'
import { Link } from 'react-router-dom'

const listStyle = {listStyleType: "none", padding: 0, overflow: "hidden"};
const listItemStyle = { borderBottom: "1px solid #ccc", height: "20px", fontSize: "14px", padding: "10px 20px", overflow: "hidden", lineHeight: "20px"};

const ControlList = ({ controls }) => (
  <ul style={listStyle}>
    { controls.map((c) => (
      <li key={c.id} style={listItemStyle}>
        <Link to={`/controls/${c.id}`}>{c.name} - {c.text}</Link>
      </li>
    ))}
  </ul>
)

export default ControlList;
