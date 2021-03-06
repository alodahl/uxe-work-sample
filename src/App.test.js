import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


function render(comp) {
  const div = document.createElement('div');
  ReactDOM.render(comp, div);
  ReactDOM.unmountComponentAtNode(div);
}

it('renders without crashing', () => {
  render(<App/>);
});
