import { combineReducers } from 'redux';
import { convertMessage } from './convertMessage';

const allReducers = combineReducers({
  convertMessage
});

export default allReducers;