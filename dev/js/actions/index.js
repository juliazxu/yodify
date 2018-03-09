import {convert} from './../api/yodify';

export function convertYodify(input){
  return function (dispatch){
    dispatch(submitMessage(input))
    return new Promise(resolve => {
      let to_resolve = convert(input);
      resolve(to_resolve);
    })
    .then(response => {
      dispatch(sendConvertedMessage(response.data))
    })
  }
}

export function sendConvertedMessage (yodifiedMessage){
  return {
    type: 'CONVERT_MESSAGE',
    payload: yodifiedMessage
  }
}

export const submitMessage = (input) => {
  return {
    type: 'SUBMIT_MESSAGE',
    payload: input
  }
};