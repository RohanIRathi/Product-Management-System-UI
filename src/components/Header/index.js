import React from "react";
import { Link } from "react-router-dom";

// Styles
import { Wrapper, Content, LogoImg, Auth } from "./Header.styles";
import Button from "../Button";

// Images
import YashLogo from './../../images/YashLogo.png';

const Header = () => {
	return (
		<Wrapper>
			<Content>
				<Link to="/">
					<LogoImg src={ YashLogo } alt="Yash Enterprises" />
				</Link>
				<Auth>
					<Link to="/login">
						<Button theme="light" text="Login" />
					</Link>
					<Link to="/register">
						<Button theme="light" text="Register" />
					</Link>
				</Auth>
			</Content>
		</Wrapper>
	);
};

export default Header;