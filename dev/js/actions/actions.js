import {convert} from './../services/yodify';
import {SUBMIT_MESSAGE, CONVERT_MESSAGE} from "../constants/action-types";

export function convertYodify(input){
  return function (dispatch){
    dispatch(submitMessage(input))
    return new Promise((resolve, reject) => {
      let to_resolve = convert(input);
      resolve(to_resolve);
      reject(to_resolve);
    })
    .then(response => {
      dispatch(sendConvertedMessage(response.data))
    })
    .catch(error => {
      dispatch(sendConvertedMessage("Sleeping, Yoda is. In one hour you can try, herh."))
    })
  }
}

export const sendConvertedMessage = (yodifiedMessage) => {
  return {
    type: CONVERT_MESSAGE,
    payload: yodifiedMessage
  }
}

export const submitMessage = (input) => {
  return {
    type: SUBMIT_MESSAGE,
    payload: input
  }
};