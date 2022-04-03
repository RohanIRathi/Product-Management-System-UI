import { useState, useEffect } from 'react';

// API
import API from '../API';

const initialState = []

export const useRetailersFetch = () => {
	const [retailers, setRetailers] = useState(initialState);
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(false);

	const fetchRetailersList = async () => {
		const user_id = JSON.parse(sessionStorage.getItem('user'));
		try {
			setError(false);
			setLoading(true);
			const data = await API.fetchRetailersList(user_id.id);
			console.log(data);

			if(data.success)
				setRetailers(data.retailer_list);
			else
				throw new Error();
		} catch (error) {
			setError(true);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchRetailersList();
	}, []);

	return { retailers, error, loading };
}