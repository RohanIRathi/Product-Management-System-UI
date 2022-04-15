import { useState, useEffect } from 'react';

// API
import API from '../API';

// Helpers
import { CustomError } from '../helpers';

const initialState = {}

export const useVerificationDetailsFetch = (userAuthorized, token) => {
	const [retailer, setRetailer] = useState(initialState);
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(false);
	const [errorText, setErrorText] = useState("Something Went Wrong");

	const fetchVerificationDetails = async(token) => {
		try {
			setError(false);
			setLoading(false);
			const data = await API.fetchVerificationDetails(token);
			if(!data.success) {
				setErrorText(data.error);
				throw CustomError(errorText);
			}
			setRetailer(data.retailer);
		} catch {
			setError(true);
		} finally {
			setLoading(false);
		}

	};

	useEffect(() => {
		if(userAuthorized)
			fetchVerificationDetails(token);
	}, [token, userAuthorized]);

	return { retailer, error, loading, errorText };
};