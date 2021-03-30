import { combineReducers } from 'redux';
import dishReducer from './dishReducer';
import userReducer from './userReducer';

export default combineReducers({
	dish: dishReducer,
	user: userReducer,
});
