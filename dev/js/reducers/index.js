import { SUBMIT_MESSAGE, CONVERT_MESSAGE } from "../constants/action-types";

/*
 * All reducers get two parameters passed in, state and action that occurred
 *       > state isn't entire apps state, only the part of state that this reducer is responsible for
 * */

const initialState = {
  message: '',
  loading: false,
  yodifiedMessage: ''
}

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT_MESSAGE:
      return { ...state, message: action.payload, loading: true };
    case CONVERT_MESSAGE:
      return { ...state, yodifiedMessage: action.payload, loading: false };
    default:
      return state;
  }
}
