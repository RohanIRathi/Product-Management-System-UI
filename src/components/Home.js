import React from "react";
import { Navigate, useLocation } from "react-router-dom";

// Components
import SideNavbar from "./SideNavbar";
import Error from "./Error";
import Spinner from "./Spinner";
import Grid from "./Grid";
import Card from "./Card";

// Styles
import { Wrapper } from "./Wrapper/Wrapper.styles";

// Hooks
import { useAllProductsFetch } from "../hooks/useAllProductsFetch";

const Home = () => {
	const location = useLocation();

	const { products, error, loading } = useAllProductsFetch();

	if(error) {
		return <Error text="Something Went Wrong" />
	}

	return (
		loading ?
			<Spinner />
			:
			sessionStorage.getItem('session_key') === null ?
			<Navigate to='/login' state={{from: location}} replace />
			:
			<Wrapper>
				<SideNavbar home />
				<Grid>
				{ products.map((product) => (
					<Card product={ product } key={ product.id } />
				)) }
				</Grid>
			</Wrapper>
	);
};

export default Home;