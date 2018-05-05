import { SUBMIT_MESSAGE, CONVERT_MESSAGE } from "../constants/action-types";

export const initialState = {
  message: '',
  loading: false,
  yodifiedMessage: ''
}

export function message (state = initialState, action) {
  switch (action.type) {
    case SUBMIT_MESSAGE:
      return { ...state, message: action.payload, loading: true };
    case CONVERT_MESSAGE:
      return { ...state, yodifiedMessage: action.payload, loading: false };
    default:
      return state;
  }
}