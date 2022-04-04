import React, { useContext } from "react";
import { Link } from "react-router-dom";

// Components
import Button from "../Button";

// Styles
import { Wrapper } from "./Logout.styles";

// Context
import { Context } from "../../context";

// API
import API from '../../API';

const Logout = () => {
	const [user, setUser] = useContext(Context);
	if(user) API.logout(setUser);

	return (
		<Wrapper>
			<h1>You have been logged out!</h1>
			<div className="links">
				<Link className="link" to="/login"><Button theme="primary" type="button" text="Login Again" /></Link>
				<Link className="link" to="/"><Button theme="dark" type="button" text="Back to Home"/></Link>
			</div>
		</Wrapper>
	);
};

export default Logout;