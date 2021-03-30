import {
	GET_DISHS,
	SET_LOADING,
	SET_SINGLE_LOADING,
	DISHS_ERROR,
	SINGLE_DISH_ERROR,
	GET_SINGLE_DISH,
	RESET,
	RESET_SINGLE,
} from '../actions/types';

const initialState = {
	dishs: null,
	singleDish: null,
	loading: false,
	singleLoading: false,
	error: null,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case GET_DISHS:
			return {
				...state,
				dishs: action.payload,
				loading: false,
			};
		case GET_SINGLE_DISH:
			return {
				...state,
				singleDish: action.payload,
				loading: false,
			};
		case SET_LOADING:
			return { ...state, loading: true };
		case SET_SINGLE_LOADING:
			return { ...state, singleLoading: true };
		case DISHS_ERROR:
		case SINGLE_DISH_ERROR:
			return {
				...state,
				error: action.payload,
			};
		case RESET_SINGLE:
			return {
				...state,
				singleDish: null,
				singleLoading: false,
			};
		case RESET: {
			return initialState;
		}
		default:
			return state;
	}
};
