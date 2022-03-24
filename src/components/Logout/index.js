import React from "react";
import { Link } from "react-router-dom";

// Components
import Button from "../Button";

// Styles
import { Wrapper } from "./Logout.styles";

const Logout = () => {
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