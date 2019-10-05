import React from 'react';
import ReactDOM from 'react-dom';
import Controls from './Controls';
import {shallow} from 'enzyme';
var {expect} = require('chai');


function render(comp) {
  const div = document.createElement('div');
  ReactDOM.render(comp, div);
  ReactDOM.unmountComponentAtNode(div);
}

describe('Controls Column', () => {
  it('renders without crashing', () => {
    render(<Controls />);
  });
  it('renders without crashing', () => {
    render(<Controls />);
  });
});
