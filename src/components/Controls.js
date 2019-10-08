import React, { useState, useEffect } from "react";
import getControls from "../api";
import { Redirect, Route } from "react-router-dom";
import ControlList from "./ControlList";
import ControlMain from "./ControlMain";

const controlContainerStyle = {
  backgroundColor: "#fff",
  width: "50%",
  height: "100%",
  overflow: "hidden",
  float: "left"
};
const controlListContainerStyle = {
  ...controlContainerStyle,
  boxSizing: "border-box",
  width: "50%",
  display: "inline-block",
  float: "left",
  zIndex: "1",
  borderRight: "1px solid #ccc",
  position: "relative",
  boxShadow: "1px 1px 1px rgba(0, 0, 0, .2)"
};
const controlHeader = {
  backgroundColor: "#eee",
  margin: 0,
  padding: "10px 20px"
};
const controlSubheaderContainer = { padding: "10px 20px", borderBottom: "1px solid #ccc"};
const controlSubheader = { margin: 0, display: "inline", marginRight: "30px" };
const controlSubheaderLast = { display: "inline", float: "right", margin: "5px"};
const controlMainContainerStyle = {
  boxSizing: "border-box",
  display: "inline-block",
  width: "50%",
  backgroundColor: "#EBF4FD",
  margin: 0,
  padding: 0,
  height: "3985px",
  zIndex: "0",
};
const controlMainStyle = {
  backgroundColor: "#fff",
  border: "1px solid #ccc",
  borderRadius: "5px",
  margin: "10px",
  boxShadow: "1px 1px 1px rgba(0, 0, 0, .2)"
};

const Controls = props => {
  const [controls, setControls] = useState(null);
  useEffect(() => {
    // We have provided a simple getControls() API that will load controls.json
    // for you.  getControls() imposes an artificial delay of 1500ms.
    getControls().then(controls => setControls(controls));
  });

  return (
    <div className="controls" style={{ height: "100%" }}>
      {controls && (
        <>
          <div style={controlListContainerStyle}>
            <h2 className="uppercase-title" style={controlHeader}>
              Controls
            </h2>
            <div style={controlSubheaderContainer}>
              <h3 className="uppercase-title" style={controlSubheader}>
                Control
              </h3>
              <h3 className="uppercase-title" style={controlSubheader}>
                Description
              </h3>
              <h3 className="uppercase-title" style={controlSubheaderLast}>Status</h3>
            </div>
            <ControlList controls={controls} />
            <Route
              exact
              path="/"
              render={() => (
                <Redirect to={{ pathname: `/controls/${controls[0].id}` }} />
              )}
            />
          </div>
          <div style={controlMainContainerStyle}>
            <div style={controlMainStyle}>
              <Route
                path="/controls/:controlId"
                render={({ match }) => (
                  <ControlMain
                    control={controls.find(
                      c => c.id.toString() === match.params.controlId
                    )}
                  />
                )}
              />
            </div>
          </div>
        </>
      )}
      <div style={{ clear: "both" }} />
    </div>
  );
};

export default Controls;
