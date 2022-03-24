import React from "react";
import { Navigate, useLocation } from "react-router-dom";

// Compoenents
import SideNavbar from "./SideNavbar";

const Home = () => {
	const location = useLocation();

	return (
		localStorage.getItem('session_key') === null ?
		<Navigate to='/login' state={{from: location}} replace />
		:
		<SideNavbar home />
	);
};

export default Home;