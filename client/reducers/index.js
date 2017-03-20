import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import auth from './auth'
import flash from './flash';
import reps from './reps';

const appReducer = combineReducers({
  routing: routerReducer,
  auth,
  flash,
  reps,
})

const rootReducer = (state, action) => {
  if (action.type === 'USER_LOGOUT') {
    state = undefined
  }

  return appReducer(state, action)
}

export default rootReducer;
