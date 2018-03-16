import React from 'react'
import {shallow, mount} from 'enzyme';
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import createLogger from 'redux-logger';
import promise from 'redux-promise';

import rootReducer from './../reducers/allReducers';
import Input from './../components/Input';

const logger = createLogger();

const Enzyme = require('enzyme');
const EnzymeAdapter = require('enzyme-adapter-react-16');
Enzyme.configure({ adapter: new EnzymeAdapter() });

const middlewares = [thunk, promise, logger];
const mockStore = configureMockStore(middlewares);

describe('Input Component Snapshot', () => {
  const initialState = {loading: false};
  const store = mockStore(initialState);
  let container = shallow(<Provider store={store}><Input /></Provider>);

  it('should render without throwing an error', () => {
    expect(container.length).toEqual(1)
  });

  // it('props should match state', () => {
  //   expect(container.find(Input).prop('loading')).toEqual(initialState.loading);
  // });
 });

//  it('+++ check Prop matches with initialState', () => {
//   expect(wrapper.find(Home).prop('output')).toEqual(initialState.output)
// });