import { useState, useEffect } from "react";

// API
import API from '../API';
import { CustomError } from "../helpers";

const initialState = [];

export const useRetailerOrdersFetch = (user_id, setLoading, setError, setErrorText) => {
	const [orders, setOrders] = useState(initialState);

	const fetchRetailerOrders = async(user_id) => {
		const data = await API.fetchDistributorOrders({ user_id });

		if(!data.success) {
			setErrorText(data.error);
			throw CustomError();
		}
		setOrders(data.orders);
	};

	useEffect(() => {
		try {
			setError(false);
			setLoading(true);

			fetchRetailerOrders(user_id);
		} catch {
			setError(true);
		} finally {
			setLoading(false);
		}
	}, [user_id]);

	return orders;
};