import axios from 'axios';

export const wcClient = () =>
	axios.create({
		baseURL: 'http://192.168.1.5:5000/api/',
	});
