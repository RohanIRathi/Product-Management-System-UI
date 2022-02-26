import React, { useState } from "react";

// Components
import Button from "../Button";

// Styles
import { Wrapper } from "./Login.styles";

var error = {};

const Login = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [errorList, setErrorList] = useState(error);

	const checkErrors = () => {
		error = {};
		if(username === '')
		{
			error.username = "Username cannot be empty";
			document.getElementById("username").style.borderColor = "var(--danger)";
		}
		if(password === '')
		{
			error.password = "Password must be provided";
			document.getElementById("password").style.borderColor = "var(--danger)";
		}
		setErrorList(error);
		const isEmpty = Object.keys(error).length === 0;
		if(!isEmpty) return true;
		return false;
	}

	const handleLogin = () => {
		var inputCollection = document.getElementsByTagName("input");
		for (let i = 0; i < inputCollection.length; i++) {
			inputCollection[i].style.borderColor = "var(--primary)";
		}
		if(checkErrors()) return;

		console.log("API call");
		// API call
	};

	const onChange = (e) => {
		const value = e.target.value;
		const name = e.target.name;
		if(name === "username") setUsername(value);
		if(name === "password") setPassword(value);
	};

	return (
		<Wrapper>
			<label>Username:</label>
			<input
			id="username"
			type="text"
			value={ username }
			name="username"
			placeholder="Username"
			onChange={ onChange }
			title={ errorList.username }
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
			/>
			<Button theme="primary" text="Login" callback={ handleLogin } />
		</Wrapper>
	)
};

export default Login;