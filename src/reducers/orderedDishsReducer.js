import {
	GET_ORDEREDDISHS,
	SET_ORDEREDDISHS,
	SET_LOADING_ORDEREDDISHS,
	ORDEREDDISHS_ERROR,
	ORDEREDDISHS_SET_ERROR,
	RESET_ORDEREDDISHS,
} from '../actions/types';

const initialState = {
	orderedDishsList: null,
	setOrderedDish: null,
	loadingOrderedDishs: true,
	error: null,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case GET_ORDEREDDISHS:
			return {
				...state,
				orderedDishsList: action.payload,
				loadingOrderedDishs: false,
			};
		case SET_ORDEREDDISHS:
			return {
				...state,
				setOrderedDish: action.payload,
			};
		case SET_LOADING_ORDEREDDISHS:
			return { ...state, loadingOrderedDishs: true };
		case ORDEREDDISHS_ERROR:
		case ORDEREDDISHS_SET_ERROR:
			return {
				...state,
				error: action.payload,
			};
		case RESET_ORDEREDDISHS: {
			return initialState;
		}
		default:
			return state;
	}
};
