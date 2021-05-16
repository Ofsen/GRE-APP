import { SET_USER, USER_ERROR, RESET_USER } from '../actions/types';

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
		case RESET_USER: {
			return initialState;
		}
		default:
			return state;
	}
};
