import { useState, useEffect } from 'react';

// API
import API from '../API';

const initialState = []

export const useAllProductsFetch = () => {
	const [products, setProducts] = useState(initialState);
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(false);

	const fetchAllProducts = async () => {
		try {
			setError(false);
			setLoading(true);

			const data = await API.fetchAllProducts();
			if (!data.success)
				throw new Error();
			else
				setProducts(data.products_list);
		} catch (error) {
			setError(true);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchAllProducts();
	}, []);

	return { products, error, loading };
}