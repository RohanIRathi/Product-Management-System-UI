import { useState, useEffect } from 'react';

// API
import API from '../API';

const initialState = [];

export const useDistributorsFetch = () => {
	const [state, setState] = useState(initialState);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	const fetchDistributorsList = async () => {
		try {
			setLoading(true);
			setError(false);

			const data = await 
				API.fetchDistributorsList();
			if(!data.success) {
				setError(true);
			} else {
				setState(data.dist_list);
			}
		} catch (error) {
			setError(true);
		} finally {
			setLoading(false);
		}
	}

	useEffect(() => {
		fetchDistributorsList();
	}, []);

	return { state, loading, setLoading, error };
};