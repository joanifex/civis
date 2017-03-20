import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import auth from './auth'
import flash from './flash';
import reps from './reps';
import zipcode from './zipcode';

const rootReducer = combineReducers({
  routing: routerReducer,
  auth,
  flash,
  reps,
  zipcode
});

export default rootReducer;
