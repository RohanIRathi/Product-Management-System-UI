// Configuration for Product Management System API

const API_URL = 'http://127.0.0.1:8000';

// Authentication
const LOGIN_URL = `${API_URL}/login/`;
const SIGNUP_URL = `${API_URL}/signup/`;

// Fetch Data
const FETCH_DISTRIBUTORSLIST_URL = `${API_URL}/getDistributorsList/`;

export {
	API_URL,
	LOGIN_URL,
	FETCH_DISTRIBUTORSLIST_URL,
	SIGNUP_URL
};