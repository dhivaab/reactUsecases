import { combineReducers } from 'redux';
import user from './user';
import {connectRouter} from 'connected-react-router'

const rootReducer = (history) => combineReducers({
  user: user
});

export default rootReducer;