import { SET_ORDER, RESET_ORDER } from '../actions/types';

const initialState = {
	order: false,
	error: null,
	count: null,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case SET_ORDER:
			return {
				...state,
				order: true,
				count: action.payload,
			};
		case RESET_ORDER: {
			return initialState;
		}
		default:
			return state;
	}
};
