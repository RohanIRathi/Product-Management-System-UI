import React, { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// Components
import Button from "../Button";
import Error from "../Error";
import Spinner from "../Spinner";

// Styles
import { Wrapper, Form } from "./Login.styles";

// API
import API from '../../API';

// Helpers
import { updateExpireDate } from "../../helpers";

// Context
import { Context } from "../../context";

var error = {};

const Login = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [errorList, setErrorList] = useState(error);
	const [loading, setLoading] = useState(false);
	const [_user, setUser] = useContext(Context);

	const navigate = useNavigate();
	const location = useLocation();

	const from = location.state?.from?.pathname || '/';
	const search = location.state?.from?.search || '';

	const handleLogin = async (event) => {
		event.preventDefault();
		setLoading(true);
		var inputCollection = _user;
		inputCollection = document.getElementsByTagName("input");
		for (let i = 0; i < inputCollection.length; i++) {
			inputCollection[i].style.borderColor = "var(--primary)";
		}

		try {
			// API call
			const data = await API.login(username, password);
			if(data.success)
			{
				sessionStorage.setItem('session_key', data.session_key);
				sessionStorage.setItem('session_data', data.session_data);
				sessionStorage.setItem('user', JSON.stringify(data.user));
				updateExpireDate();
				setUser({"session_key": data.session_key, "user": data.user, "expire_date": new Date(sessionStorage.getItem('expire_date'))});
				navigate(from+search, { replace: true });
			}
			else
			{
				setErrorList({invalidCredentials: data.error});
			}
		} catch (err) {
			setErrorList({invalidCredentials: "Something Went Wrong"});
		} finally {
			setLoading(false);
		}
	};

	const onChange = (e) => {
		const value = e.target.value;
		const name = e.target.name;
		if(name === "username") setUsername(value);
		if(name === "password") setPassword(value);
	};

	return (
		loading ?
			<Spinner />
			:
			<Wrapper>
				<Form onSubmit={ handleLogin } action='#' method="post">
					{ errorList.invalidCredentials && <Error text={ errorList.invalidCredentials } /> }
					<label>Username:</label>
					<input
						id="username"
						type="text"
						value={ username }
						name="username"
						placeholder="Username"
						onChange={ onChange }
						title={ errorList.username }
						required
					/>
					<label>Password:</label>
					<input
						id="password"
						type="password"
						value={ password }
						name="password"
						placeholder="Password"
						onChange={ onChange }
						title={ errorList.password }
						required
					/>
					<Button theme="primary" text="Login" type="submit" />
				</Form>
			</Wrapper>
	)
};

export default Login;