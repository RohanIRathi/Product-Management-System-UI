import React from "react";
import { Navigate, useLocation } from "react-router-dom";

// Components
import SideNavbar from "./SideNavbar";
import Error from "./Error";
import Spinner from "./Spinner";
import Products from './Products';

// Styles
import { Wrapper } from "./Wrapper/Wrapper.styles";

// Hooks
import { useAllProductsFetch } from "../hooks/useAllProductsFetch";

const Home = () => {
	const location = useLocation();

	const { products, error, loading } = useAllProductsFetch();

	return (
		loading ?
			<Spinner />
			:
			sessionStorage.getItem('session_key') === null ?
			<Navigate to='/login' state={{from: location}} replace />
			:
			<Wrapper>
				<SideNavbar home />
				{ error ? <Error text="Something Went Wrong" /> :
				<Products products={ products } />
				}
			</Wrapper>
	);
};

export default Home;