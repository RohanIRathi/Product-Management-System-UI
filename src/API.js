import {
	FETCH_DISTRIBUTORSLIST_URL,
	LOGIN_URL,
	SIGNUP_URL
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
		).json();

		return data;
	},
	logout: async(setUser) => {
		localStorage.clear();
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
	}
};

export default apiFunctions;