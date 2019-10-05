import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import {shallow} from 'enzyme';
var {expect} = require('chai');


function render(comp) {
  const div = document.createElement('div');
  ReactDOM.render(comp, div);
  ReactDOM.unmountComponentAtNode(div);
}

describe('Header', () => {
  it('renders without crashing', () => {
    render(<Header />);
  });
});
