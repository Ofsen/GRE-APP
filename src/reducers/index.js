import { combineReducers } from 'redux';
import dishReducer from './dishReducer';
import userReducer from './userReducer';
import orderedDishsReducer from './orderedDishsReducer';

export default combineReducers({
	dish: dishReducer,
	user: userReducer,
	orderedDishs: orderedDishsReducer,
});
