import { wcClient } from './wcApiConfig';
import { GET_DISHS, SET_LOADING, DISHS_ERROR, RESET } from './types';

// Get products
export const getDishs = () => async (dispatch) => {
	try {
		setLoading();

		const res = await wcClient().get('dishs/');

		dispatch({
			type: GET_DISHS,
			payload: res.data,
		});
	} catch (err) {
		dispatch({
			type: DISHS_ERROR,
			payload: err.response,
		});
	}
};

// Set loading to true
export const setLoading = () => {
	return {
		type: SET_LOADING,
	};
};

export const reset = () => (dispatch) => {
	setLoading();
	dispatch({
		type: RESET,
	});
};
