import { combineReducers } from 'redux';
import { message } from './message';

const allReducers = combineReducers({
  message
});

export default allReducers;