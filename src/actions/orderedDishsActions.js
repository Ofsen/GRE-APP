import { wcClient } from './wcApiConfig';
import {
	GET_ORDEREDDISHS,
	SET_ORDEREDDISHS,
	SET_LOADING_ORDEREDDISHS,
	ORDEREDDISHS_ERROR,
	ORDEREDDISHS_SET_ERROR,
	RESET_ORDEREDDISHS,
} from './types';

// Get OrderedDishs
export const getOrderedDishsByUser = (userId) => async (dispatch) => {
	try {
		setLoading();

		const res = await wcClient().get(`ordereddishs/${userId}`);

		dispatch({
			type: GET_ORDEREDDISHS,
			payload: res.data,
		});
	} catch (err) {
		dispatch({
			type: ORDEREDDISHS_ERROR,
			payload: err.response,
		});
	}
};

export const setOrderedDishs = (orderedDish) => async (dispatch) => {
	try {
		const res = await wcClient().post('ordereddishs/', orderedDish);

		dispatch({
			type: SET_ORDEREDDISHS,
			payload: res.data,
		});
	} catch (err) {
		dispatch({
			type: ORDEREDDISHS_SET_ERROR,
			payload: err.response,
		});
	}
};

// Set loading to true
export const setLoading = () => {
	return {
		type: SET_LOADING_ORDEREDDISHS,
	};
};
export const resetOrderedDishs = () => (dispatch) => {
	setLoading();
	dispatch({
		type: RESET_ORDEREDDISHS,
	});
};
