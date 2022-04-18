// Configuration for Product Management System API

const API_URL = 'https://yash-enterprises.herokuapp.com';

// const API_URL = 'http://localhost:8000';

// Authentication
const LOGIN_URL = `${API_URL}/login/`;
const SIGNUP_URL = `${API_URL}/signup/`;

// Fetch Data
const FETCH_DISTRIBUTORSLIST_URL = `${API_URL}/getDistributorsList/`;
const FETCH_ALL_PRODUCTS_URL = `${API_URL}/products/getAllProducts/`;
const FETCH_RETAILERS_LIST_URL = `${API_URL}/getAllRetailers/`;
const FETCH_DISTRIBUTOR_ORDERS_URL = `${API_URL}/orders/getDistributorOrders`;
const FETCH_VERIFICATION_DETAILS_URL = `${API_URL}/verifyAccount?token=`;
const FETCH_RETAILER_DETAILS_URL = `${API_URL}/getRetailerDetails/`;
const FETCH_RETAILER_ORDERS_URL = `${API_URL}/orders/getRetailerOrders/`;

// POST data
const ADD_PRODUCT_URL = `${API_URL}/products/addProduct/`;
const ADD_ORDER_URL = `${API_URL}/orders/addOrder/`;
const CHANGE_PASSWORD_URL = `${API_URL}/changePassword/`;
const ORDER_PAID_URL = `${API_URL}/orders/orderPaid?order=`;

export {
	API_URL,
	LOGIN_URL,
	FETCH_DISTRIBUTORSLIST_URL,
	SIGNUP_URL,
	FETCH_ALL_PRODUCTS_URL,
	FETCH_RETAILERS_LIST_URL,
	ADD_PRODUCT_URL,
	FETCH_DISTRIBUTOR_ORDERS_URL,
	ADD_ORDER_URL,
	FETCH_VERIFICATION_DETAILS_URL,
	CHANGE_PASSWORD_URL,
	FETCH_RETAILER_DETAILS_URL,
	ORDER_PAID_URL,
	FETCH_RETAILER_ORDERS_URL
};