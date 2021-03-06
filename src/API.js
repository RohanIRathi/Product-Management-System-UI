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
	FETCH_VERIFICATION_DETAILS_URL,
	CHANGE_PASSWORD_URL,
	FETCH_RETAILER_DETAILS_URL,
	ORDER_PAID_URL,
	FETCH_RETAILER_ORDERS_URL
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
	fetchDistributorOrders: async (props) => {
		const URL = props.user_id ?
			FETCH_DISTRIBUTOR_ORDERS_URL+'/?retailer='+props.user_id
			: FETCH_DISTRIBUTOR_ORDERS_URL+'/';
		const session_data = sessionStorage.getItem('session_data');
		const data = await(
			await(fetch(URL, {
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
	},
	changePassword: async(bodyData) => {
		const session_data = sessionStorage.getItem('session_data');

		const params = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Session': session_data
			},
			body: JSON.stringify(bodyData)
		};

		const data = await(
			await(fetch(CHANGE_PASSWORD_URL, params)
			.then(response => {
				return response.json();
			}))
		);

		return data;
	},
	fetchRetailerDetails: async(user_id) => {
		const session_data = sessionStorage.getItem('session_data');
		const url = `${FETCH_RETAILER_DETAILS_URL}${user_id}/`;

		const data = await(
			await(fetch(url, {
				method: 'GET',
				headers: {
					'Session': session_data
				}
			}))
			.then(response => {
				return response.json();
			})
		);

		return data;
	},
	orderPaid: async(order_id) => {
		const session_data = sessionStorage.getItem('session_data');
		const data = await(
			await(fetch(ORDER_PAID_URL+order_id, {
				headers: {
					'Session': session_data
				}
			}))
			.then(response => {
				return response.json();
			})
		);

		return data;
	},
	fetchRetailerOrders: async(props) => {
		const session_data = sessionStorage.getItem('session_data');
		const URL = props.user_id ?
			FETCH_RETAILER_ORDERS_URL + '?distributor=' + props.user_id
			: FETCH_RETAILER_ORDERS_URL;
		const data = await(
			await(fetch(URL, {
				headers: {
					'Session': session_data
				}
			}))
			.then(response => {
				return response.json();
			})
		);

		return data;
	}
};

export default apiFunctions;