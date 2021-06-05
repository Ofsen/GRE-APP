import { combineReducers } from 'redux';
import dishReducer from './dishReducer';
import userReducer from './userReducer';
import orderedDishsReducer from './orderedDishsReducer';
import orderReducer from './orderReducer';

export default combineReducers({
	dish: dishReducer,
	user: userReducer,
	orderedDishs: orderedDishsReducer,
	order: orderReducer,
});
