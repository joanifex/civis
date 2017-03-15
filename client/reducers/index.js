import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import auth from './auth'
import flash from './flash';
import reps from './reps';

const rootReducer = combineReducers({
  routing: routerReducer,
  auth,
  flash,
  reps
});

export default rootReducer;
