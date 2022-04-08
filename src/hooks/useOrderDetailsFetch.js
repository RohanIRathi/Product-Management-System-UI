import { useState, useEffect } from 'react';

// API
import API from '../API';

const initialState = {};

export const useOrderDetailsFetch = (order_id) => {
	const [order, setOrder] = useState(initialState);
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(false);

	const fetchOrderDetails = async (order_id) => {
		try {
			setLoading(true);
			setError(false);

			const data = await API.fetchOrderDetails(order_id);
			if(!data.success) throw new Error();
			setOrder(data.order);
		} catch(err) {
			setError(true);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchOrderDetails(order_id);
	}, [order_id]);

	return { order, loading, error };
}