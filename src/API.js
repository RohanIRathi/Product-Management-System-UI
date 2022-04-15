import {
	FETCH_DISTRIBUTORSLIST_URL,
	LOGIN_URL,
	SIGNUP_URL,
	FETCH_ALL_PRODUCTS_URL,
	FETCH_RETAILERS_LIST_URL,
	ADD_PRODUCT_URL,
	FETCH_DISTRIBUTOR_ORDERS_URL,
	API_URL,
	ADD_ORDER_URL,
	FETCH_VERIFICATION_DETAILS_URL
} from './config';

const defaultConfig = {
	method: "POST",
	headers: {
		'Content-Type': 'application/json'
	}
};

const apiFunctions = {
	login: async(username, password) => {
		const bodyData = {
			username,
			password
		}

		const data = await (
			await fetch(LOGIN_URL, {
				...defaultConfig,
				body: JSON.stringify(bodyData)
			})
			.then(response => {
				return response.json();
			})
			.then(data => {
				return data;
			})
		);

		return data;
	},
	logout: async(setUser) => {
		sessionStorage.clear();
		setUser(undefined);
	},
	signup: async(bodyData) => {
		const data = await (
			await fetch(SIGNUP_URL, {
				...defaultConfig,
				body: JSON.stringify(bodyData)
			})
			.then(response => {
				if(response.status === 404) {
					return {'success': false, 'error': 'Something went wrong!'};
				}
				else return response.json();
			})
			.then(data => {
				return data;
			})
		);

		return data;
	},
	fetchDistributorsList: async() => {
		const data = await (
			await fetch(FETCH_DISTRIBUTORSLIST_URL)
			.then(response => {
				if(!response.ok) {
					return {'success': false, 'error': 'Something went wrong!'};
				}
				return response.json();
			})
			.then(data => {
				return data;
			}));

		return data;
	},
	fetchAllProducts: async() => {
		const data = await (
			await fetch(FETCH_ALL_PRODUCTS_URL)
			.then(response => {
				if(!response.ok) {
					return {'success': false, 'error': response.json().error}
				}
				return response.json();
			})
			.then(data => {
				return data;
			}));
		
		return data;
	},
	fetchRetailersList: async () => {
		const session_data = sessionStorage.getItem('session_data');
		const data = await (
			await fetch(FETCH_RETAILERS_LIST_URL, {
				headers: {
					'Session': session_data,
				},
			})
			.then(response => {
				if(!response.ok) {
					return {'success': false, 'error': response.json().error}
				}
				return response.json();
			})
			.then(data => {
				return data;
			}))
		
		return data;
	},
	addProduct: async (product) => {
		const session_data = sessionStorage.getItem('session_data');
		const data = await(
			await(fetch(ADD_PRODUCT_URL, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'Session': session_data
				},
				body: JSON.stringify(product)
			})
			.then(response => {
				return response.json();
			})
			.then(data => {
				return data;
			})
			));

			return data;
	},
	fetchDistributorOrders: async () => {
		const session_data = sessionStorage.getItem('session_data');
		const data = await(
			await(fetch(FETCH_DISTRIBUTOR_ORDERS_URL, {
				headers: {
					'Session': session_data
				}
			})
			.then(response => {
				return response.json();
			})
			.then(data => {
				return data;
			}))
		);

		if(!data.success) {
			return {'success': false, 'error': data.error || 'Something Went Wrong'};
		}
		return data;
	},
	fetchOrderDetails: async (order_id) => {
		const FETCH_ORDER_DETAILS_URL = `${API_URL}/orders/fetchOrderDetails/${order_id}/`;

		const data = await(
			await fetch(FETCH_ORDER_DETAILS_URL)
			.then(response => {
				return response.json();
			})
			.then(data => {
				return data;
			})
		);

		return data;
	},
	addOrder: async(order) => {
		const data = await(
			await(fetch(ADD_ORDER_URL, {
				...defaultConfig,
				body: JSON.stringify(order)
			}))
			.then(response => {
				return response.json();
			})
			.then(data => {
				return data;
			})
		)

		if(!data.success)
			return {'success': false, 'error': data.error || "Something Went Wrong"};
		return data;
	},
	fetchVerificationDetails: async(token) => {
		const data = await(
			await(fetch(FETCH_VERIFICATION_DETAILS_URL + token, {
				'headers': {
					'Session': sessionStorage.getItem('session_data')
				}
			})
			.then(response => {
				return response.json();
			}))
		);
		return data;
	},
	acceptRetailer: async(bodyData, token) => {
		const data = await(
			await(fetch(FETCH_VERIFICATION_DETAILS_URL+token, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'Session': sessionStorage.getItem('session_data')
				},
				body: JSON.stringify(bodyData)
			})
			.then(response => {
				return response.json();
			}))
		);

		return data;
	}
};

export default apiFunctions;