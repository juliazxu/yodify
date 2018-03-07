import { SUBMIT_MESSAGE, CONVERT_MESSAGE } from "../constants/action-types";

// const initialState = {
//   message: '',
//   loading: false,
//   yodifiedMessage: ''
// }

export function message (state = null, action) {
  switch (action.type) {
    case SUBMIT_MESSAGE:
      return { ...state, message: action.payload, loading: true };
    case CONVERT_MESSAGE:
      return { ...state, yodifiedMessage: action.payload, loading: false };
    default:
      return state;
  }
}