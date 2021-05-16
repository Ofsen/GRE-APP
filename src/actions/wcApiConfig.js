import axios from 'axios';
import apiUrl from '../apiUrl'

export const wcClient = () =>
	axios.create({
		baseURL: apiUrl,
	});
