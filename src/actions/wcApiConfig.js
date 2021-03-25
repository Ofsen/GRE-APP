import axios from 'axios';

export const wcClient = () =>
	axios.create({
		baseURL: 'Root EndPoint',
		headers: {
			'Content-Type': 'application/json',
		},
	});
