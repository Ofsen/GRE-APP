import { wcClient } from './wcApiConfig';
import {
	GET_DISHS,
	SET_LOADING,
	SET_SINGLE_LOADING,
	DISHS_ERROR,
	SINGLE_DISH_ERROR,
	GET_SINGLE_DISH,
	RESET_DISHS,
	RESET_SINGLE,
} from './types';

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

export const getDishById = (id) => async (dispatch) => {
	try {
		setSingleLoading();

		const res = await wcClient().get(`dishs/${id}`);

		dispatch({
			type: GET_SINGLE_DISH,
			payload: res.data,
		});
	} catch (err) {
		dispatch({
			type: SINGLE_DISH_ERROR,
			payload: err.response,
		});
	}
};

// Set loading to true
export const setSingleLoading = () => {
	return {
		type: SET_SINGLE_LOADING,
	};
};
// Set loading to true
export const setLoading = () => {
	return {
		type: SET_LOADING,
	};
};

export const resetSingle = () => (dispatch) => {
	setSingleLoading();
	dispatch({
		type: RESET_SINGLE,
	});
};
export const reset = () => (dispatch) => {
	setLoading();
	dispatch({
		type: RESET_DISHS,
	});
};
