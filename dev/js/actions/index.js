import {convert} from './../api/yodify';

// export function fetchPosts(subreddit) {
//   return function (dispatch) {
//     dispatch(requestPosts(subreddit))
//     return fetch(`https://www.reddit.com/r/${subreddit}.json`)
//       .then(
//         response => response.json(),
//         error => console.log('An error occurred.', error)
//       )
//       .then(json =>
//         dispatch(receivePosts(subreddit, json))
//       )
//   }
// }

export function convertYodify(input) {
  return function (dispatch) {
    dispatch(submitMessage(input))
    return new Promise(resolve => {
      let to_resolve = convert(input);
      console.log({to_resolve})
      resolve(to_resolve);
    })
    .then(response => {
      console.log('dispatched', response);
      dispatch(sendConvertedMessage(response.data))
    })
  }
}

export function sendConvertedMessage (yodifiedMessage) {
  console.log('message is', yodifiedMessage);
  return {
    type: 'CONVERT_MESSAGE',
    payload: yodifiedMessage
  }
}

export const submitMessage = (input) => {
  console.log("You entered", input);
  return {
    type: 'SUBMIT_MESSAGE',
    payload: input
  }
};