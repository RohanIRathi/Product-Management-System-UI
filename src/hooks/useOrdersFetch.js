import { useState, useEffect } from 'react';

// API
import API from '../API';

const initialState = []

export const useOrdersFetch = () => {
	const [orders, setOrders] = useState(initialState);
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(false);

	const fetchDistributorOrders = async (props) => {
		console.log(props);
		try {
			setLoading(true);
			setError(false);

			const data = await (API.fetchDistributorOrders(props));
			if(!data.success) throw new Error();
			else setOrders(data.orders);
		} catch (err) {
			setError(true);
		} finally {
			setLoading(false);
		}
	};

	const fetchRetailerOrders = async (props) => {
		try {
			setLoading(true);
			setError(false);

			const data = await (API.fetchRetailerOrders(props));
			if(!data.success) throw new Error();
			else setOrders(data.orders);
		} catch (err) {
			setError(true);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		const user = JSON.parse(sessionStorage.getItem('user'));
		if(user && user.is_superuser && user.is_staff)
			fetchDistributorOrders({});
		else if(user && !user.is_superuser && user.is_staff)
			fetchRetailerOrders({});
	}, []);

	return { orders, error, loading };
};