import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

// Styles
import { Wrapper, Content, LogoImg, Auth } from "./Header.styles";
import Button from "../Button";

// Images
import YashLogo from './../../images/YashLogo.png';

// Context
import { Context } from "../../context";

// API
import API from "../../API";

const Header = () => {
	const [user, setUser] = useContext(Context);
	const navigate = useNavigate();
	const expire_date = user ? user.expire_date : sessionStorage.getItem('expire_date');

	const handleLogout = () => {
		API.logout(setUser);
		navigate('/logout');
	}

	if(expire_date && new Date() > expire_date)
	{
		// Logout
		handleLogout();
	}

	return (
		<Wrapper>
			<Content>
				<Link to="/">
					<LogoImg src={ YashLogo } alt="Yash Enterprises" />
				</Link>
				{ user ?
					<Auth>
						<Button theme="danger" text="Logout" callback={ handleLogout } />
					</Auth>
					:
					<Auth>
						<Link to="/login">
							<Button theme="light" text="Login" />
						</Link>
						<Link to="/register">
							<Button theme="light" text="Register" />
						</Link>
					</Auth>
				}
			</Content>
		</Wrapper>
	);
};

export default Header;