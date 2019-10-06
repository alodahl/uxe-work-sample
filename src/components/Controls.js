import React, {useState, useEffect} from 'react';
import getControls from '../api'
import { Redirect, Route } from 'react-router-dom'
import ControlList from './ControlList';
import ControlMain from './ControlMain';

const controlSectionStyle = { backgroundColor: '#fff', width: "50%", height: "100%", boxSizing: "border-box" };
const controlListContainerStyle = { ...controlSectionStyle, float: 'left', borderTop: "1px solid #ccc", borderRight: "1px solid #ccc" };
const controlHeader = { backgroundColor: '#eee', margin: 0};
const controlMainContainerStyle = { width: "50%", backgroundColor: '#EBF4FD', float: 'right', height: "100%" };
const controlMainStyle = {backgroundColor: '#fff', border: "1px solid #ccc", borderRadius:"5px", margin: "10px"};
const Controls = props => {
  const [controls, setControls] = useState(null);
  useEffect(() => {
    // We have provided a simple getControls() API that will load controls.json
    // for you.  getControls() imposes an artificial delay of 1500ms.
    getControls().then(controls => setControls(controls));
  })

  return (
      <div className="controls" style={{height: "100%"}}>
        { controls &&
          <>
            <section style={controlListContainerStyle}>
              <h2 style={controlHeader}>
                Controls
              </h2>
              <ControlList controls={controls} />
              <Route exact path='/'render={() => (
                <Redirect to={{ pathname: `/controls/${controls[0].id}` }} />
              )} />
            </section>
            <section style={controlMainContainerStyle}>
              <div style={controlMainStyle}>
                <Route path='/controls/:controlId' render={({ match }) => (
                  <ControlMain control={controls.find(c => c.id.toString() === match.params.controlId)} />
              )} />
              </div>
            </section>
          </>
        }
      </div>
  );
}

export default Controls;
