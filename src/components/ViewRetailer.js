import React from "react";
import { useParams } from "react-router-dom";

// Components
import SideNavbar from "./SideNavbar";
import { Wrapper } from "./Wrapper/Wrapper.styles";
import Spinner from "./Spinner";
import Error from "./Error";
import Retailer from './Retailer';

// Hooks
import { useRetailerDetailsFetch } from "../hooks/useRetailerDetailsFetch";
import { useRetailerOrdersFetch } from "../hooks/useRetailerOrdersFetch";

const ViewRetailer = () => {
	const { user_id } = useParams();
	const { retailer, loading, setLoading, error, setError, errorText, setErrorText } = useRetailerDetailsFetch(user_id);

	const orders = useRetailerOrdersFetch(user_id, setLoading, setError, setErrorText);

	return ( loading ?
		<Spinner />
		:
		<Wrapper>
			<SideNavbar />
			{ error ?
			<Error text={ errorText } />
			: null }
			<Retailer retailer={ retailer } orders={ orders } />
		</Wrapper>
	);
};

export default ViewRetailer;