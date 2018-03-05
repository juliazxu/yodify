import {convert} from './../api/yodify';

const sendToConvert = (input) => {
  new Promise(resolve => {
    resolve(convert(input));
  }).then(yodifiedMessage => {
    return {
      type: 'CONVERT_MESSAGE',
      payload: yodifiedMessage
    }
  });
}

export const submitMessage = (input) => {
  console.log("You entered", input);
  sendToConvert(input);
  return {
    type: 'SUBMIT_MESSAGE',
    payload: input
  }
};