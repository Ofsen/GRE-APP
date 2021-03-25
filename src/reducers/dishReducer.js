import { GET_DISHS, SET_LOADING, DISHS_ERROR, RESET } from '../actions/types';

const initialState = {
	dishs: null,
	loading: false,
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
		case SET_LOADING:
			return { ...state, loading: true };
		case DISHS_ERROR:
			return {
				...state,
				error: action.payload,
			};
		case RESET: {
			return initialState;
		}
		default:
			return state;
	}
};
