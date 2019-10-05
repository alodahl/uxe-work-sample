import React, {useState, useEffect} from 'react';
import getControls from '../api'
import { Redirect, Route, BrowserRouter as Router } from 'react-router-dom'
import ControlList from './ControlList';
import ControlMain from './ControlMain';

const sectionStyle = { backgroundColor: '#fff' };

const controlMainStyle = { ...sectionStyle, backgroundColor: '#ccc' };

const Controls = props => {
  const [controls, setControls] = useState(null);
  useEffect(() => {
    // We have provided a simple getControls() API that will load controls.json
    // for you.  getControls() imposes an artificial delay of 1500ms.
    getControls().then(controls => setControls(controls));
  })

  return (
      <div className="controls" >
        { controls &&
          <>
            <section style={sectionStyle}>
              <h2>
                Controls
              </h2>
              <ControlList controls={controls} />
              <Route exact path='/'render={() => (
                <Redirect to={{ pathname: `/controls/${controls[0].id}` }} />
              )} />
            </section>
            <section style={controlMainStyle}>
              <Route path='/controls/:controlId' render={({ match }) => (
                <ControlMain control={controls.find(c => c.id.toString() === match.params.controlId)} />
              )} />
            </section>
          </>
        }
      </div>
  );
}

export default Controls;
