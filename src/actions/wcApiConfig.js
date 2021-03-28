import axios from 'axios';

export const wcClient = () =>
	axios.create({
		baseURL: 'http://192.168.43.231:5000/api/',
	});
