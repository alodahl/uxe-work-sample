import React from 'react';
import ReactDOM from 'react-dom';
import Status from './Status';
import {shallow} from 'enzyme';
var {expect} = require('chai');


function render(comp) {
  const div = document.createElement('div');
  ReactDOM.render(comp, div);
  ReactDOM.unmountComponentAtNode(div);
}

describe('Status Column', () => {
  it('renders without crashing', () => {
    render(<Status />);
  });
  it('has a nested container', () => {
    let status = shallow(<Status />);
    expect(status.children()).to.have.lengthOf(1);
  });
});
