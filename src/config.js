// Configuration for Product Management System API

const API_URL = 'http://127.0.0.1:8000';

// Authentication
const LOGIN_URL = `${API_URL}/login/`;
const SIGNUP_URL = `${API_URL}/signup/`;

// Fetch Data
const FETCH_DISTRIBUTORSLIST_URL = `${API_URL}/getDistributorsList/`;
const FETCH_ALL_PRODUCTS_URL = `${API_URL}/products/getAllProducts/`;
const FETCH_RETAILERS_LIST_URL = `${API_URL}/getAllRetailers/`;

// POST data
const ADD_PRODUCT_URL = `${API_URL}/products/addProduct/`;

export {
	API_URL,
	LOGIN_URL,
	FETCH_DISTRIBUTORSLIST_URL,
	SIGNUP_URL,
	FETCH_ALL_PRODUCTS_URL,
	FETCH_RETAILERS_LIST_URL,
	ADD_PRODUCT_URL
};