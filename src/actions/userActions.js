import { wcClient } from './wcApiConfig';
import { SET_USER, USER_ERROR, RESET } from './types';

export const setUser = (newUserId) => async (dispatch) => {
	try {
		const res = await wcClient().post(
			'users/',
			{
				_id: newUserId,
			},
			{
				'Content-Type': 'application/json',
			}
		);

		dispatch({
			type: SET_USER,
			payload: res.data,
		});
	} catch (err) {
		dispatch({
			type: USER_ERROR,
			payload: err.response,
		});
	}
};

export const reset = () => (dispatch) => {
	dispatch({
		type: RESET,
	});
};
