import React from 'react';
import ReactDOM from 'react-dom';
import FilterBar from './FilterBar';
import {shallow} from 'enzyme';
var {expect} = require('chai');


function render(comp) {
  const div = document.createElement('div');
  ReactDOM.render(comp, div);
  ReactDOM.unmountComponentAtNode(div);
}

describe('Filter Bar', () => {
  it('renders without crashing', () => {
    render(<FilterBar />);
  });
});
