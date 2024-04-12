import { combineReducers } from 'redux';
import userReducer from './userReducer';
import managementReducer from './managementReducer';

const rootReducer = combineReducers({
  user: userReducer,
  management: managementReducer
});

export default rootReducer;
