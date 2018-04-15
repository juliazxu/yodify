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
import {Input} from './../components/Input';
import {Output} from './../components/Output';
import {VoicePlayer} from './../components/VoicePlayer';

const logger = createLogger();

const Enzyme = require('enzyme');
const EnzymeAdapter = require('enzyme-adapter-react-16');
Enzyme.configure({ adapter: new EnzymeAdapter() });

const middlewares = [thunk, promise, logger];
const mockStore = configureMockStore(middlewares);

//Input component
describe('Input component while loading', () => {
  let container = shallow(<Input loading={true} />);

  it('should only render the icon', () => {
    expect(container.length).toEqual(1);
  });
})

//Output component
describe('Output Component while loading', () => {
  let container = shallow(<Output yodifiedMessage='test' loading={true} />);

  it('should not render any child components', () => {
    expect(container.find('h2').length).toEqual(0);
    expect(container.find(VoicePlayer).length).toEqual(0);
  });
});

describe('Output Component with empty message', () => {
  let container = shallow(<Output yodifiedMessage='' loading={false} />);

  it('should not render any child components', () => {
    expect(container.find('h2').length).toEqual(0);
    expect(container.find(VoicePlayer).length).toEqual(0);
  });
});

describe('Output Component with props', () => {
  let container = shallow(<Output yodifiedMessage='Test message, this is.' loading={false} />);

  it('should render without throwing an error', () => {
    expect(container.length).toEqual(1);
  });

  it('should render props', () => {
    expect(container.instance().props.yodifiedMessage).toBe('Test message, this is.');
    expect(container.instance().props.loading).toBe(false);
  });

  it('should render a VoicePlayer and h2', () => {
    expect(container.find(VoicePlayer).length).toEqual(1);
    expect(container.find('h2').length).toEqual(1);
    expect(container.find('h2').children().length).toEqual(2);
    expect(container.find('h2').text()).toEqual('<VoicePlayer />Test message, this is.');
  });
});

// Connected Input Component
// describe('Input Component Snapshot', () => {
//   const initialState = {loading: false};
//   const store = mockStore(initialState);
//   let container = shallow(<Provider store={store}><Input /></Provider>);

//   it('should render without throwing an error', () => {
//     expect(container.length).toEqual(1)
//   });

  // it('props should match state', () => {
  //   expect(container.find('div').prop('loading')).toEqual(initialState.loading);
  // });
// });

// VoicePlayer Component
// describe('VoicePlayer should render', () => {
//   let container = shallow(<VoicePlayer yodifiedMessage="play test message" />);

//   it('should render without throwing an error', () => {
//     expect(container.length).toEqual(1);
//     expect(container.instance().props.yodifiedMessage).toBe('play test message');
//   });

//   it('should render span with icon'), () => {
//     expect(container.find('span').length).toEqual(1);
//     expect(container.find('i').length).toEqual(1);
//   }
// });