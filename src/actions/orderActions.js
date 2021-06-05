import { SET_ORDER, RESET_ORDER } from './types';

export const setOrder = (count) => async (dispatch) => {
	dispatch({
		type: SET_ORDER,
		payload: count,
	});
};

// Set loading to true
export const resetOrder = () => (dispatch) => {
	dispatch({
		type: RESET_ORDER,
	});
};
