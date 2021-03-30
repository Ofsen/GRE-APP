import { SET_USER, USER_ERROR, RESET } from '../actions/types';

const initialState = {
	userId: null,
	error: null,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case SET_USER:
			return {
				...state,
				userId: action.payload,
			};
		case USER_ERROR:
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
