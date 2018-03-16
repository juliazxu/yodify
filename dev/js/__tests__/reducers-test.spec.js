import {message} from './../reducers/message';
import {CONVERT_MESSAGE, SUBMIT_MESSAGE} from './../constants/action-types';

const initialState = {
  message: '',
  loading: false,
  yodifiedMessage: ''
}

describe('message reducer', () => {
  it('should return the initial state', () => {
    expect( message(undefined, {}) ).toEqual(initialState);
  });

  it('should submit a message', () => {
    let action = {
      type: SUBMIT_MESSAGE,
      payload: "This is a test message"
    }
    let result = {
      "loading": true, 
      "message": "This is a test message",
      "yodifiedMessage": ""
    };
    expect( message(undefined, action) ).toEqual(result);
  });

  it('should convert a message', () => {
    let action = {
      type: CONVERT_MESSAGE,
      payload: "Converted message, this is."
    }
    let result = {
      "loading": false, 
      "message": "", 
      "yodifiedMessage": "Converted message, this is."
    };
    expect( message(undefined, action) ).toEqual(result);
  });
});