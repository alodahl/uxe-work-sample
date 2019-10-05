import React from 'react'
import { Link } from 'react-router-dom'

const style = { width: "50%", float: 'left' }
const ControlList = ({ controls }) => (
  <ul style={style}>
    { controls.map((c) => (
      <li key={c.id}>
        <Link to={`/controls/${c.id}`}>{c.name} - {c.text}</Link>
      </li>
    ))}
  </ul>
)

export default ControlList;
