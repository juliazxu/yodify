// Login-test.js
import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Input from './../Input';

// describe what we are testing
describe('Input Component', () => {
 
  // make our assertion and what we expect to happen 
  it('should render without throwing an error', () => {
    expect(shallow(<Input />).exists(<div></div>)).toBe(true)
  })
 })