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
		if(user_id.is_superuser && user_id.is_staff) {
			try {
				setError(false);
				setLoading(true);
				const data = await API.fetchRetailersList();

				if(data.success)
					setRetailers(data.retailer_list);
				else
					throw new Error();
			} catch (error) {
				setError(true);
			} finally {
				setLoading(false);
			}
		} else {
			setRetailers([user_id]);
			setError(false);
		}
	};

	useEffect(() => {
		fetchRetailersList();
	}, []);

	return { retailers, error, loading };
}