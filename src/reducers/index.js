import { combineReducers } from 'redux';
import AuthTokenReducer from './AuthTokenReducer';
import UserReducer from './UserReducer';
export default combineReducers( { AuthTokenReducer, UserReducer } )