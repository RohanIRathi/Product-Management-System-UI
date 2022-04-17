import { useState, useEffect } from "react";

// API
import API from '../API';

// Helpers
import { CustomError } from "../helpers";

const initialState = {};

export const useRetailerDetailsFetch = (user_id) => {
	const [retailer, setRetailer] = useState(initialState);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const [errorText, setErrorText] = useState("Something Went Wrong");

	const fetchRetailerDetails = async(user_id) => {
		try {
			setLoading(true);
			setError(false);

			const data = await API.fetchRetailerDetails(user_id);

			if(!data.success) {
				setErrorText(data.error);
				throw CustomError();
			}
			setRetailer(data.retailer);
		} catch {
			setError(true);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		const user = JSON.parse(sessionStorage.getItem('user'));
		if(user && user.is_superuser && user.is_staff) {
			fetchRetailerDetails(user_id);
		}
	}, [user_id]);

	return { retailer, loading, setLoading, error, setError,  errorText, setErrorText };
};