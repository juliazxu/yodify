import * as actions from './../actions/actions';
import * as types from './../constants/action-types';

describe('actions', () => {
  it('should create an action to submit a message', () => {

    const text = 'I am submitting a test message';
    const expectedAction = {
      type: types.SUBMIT_MESSAGE,
      payload: text
    }

    expect(actions.submitMessage(text)).toEqual(expectedAction);
  });
});

describe('actions', () => {
  it('should create an action to convert a message', () => {

    const text = 'Converted test message, I am sending.';
    const expectedAction = {
      type: types.CONVERT_MESSAGE,
      payload: text
    }

    expect(actions.sendConvertedMessage(text)).toEqual(expectedAction);
  });
});