import React, { useState } from 'react';

// Styles
import { Wrapper, LongInput, InputGroup, ShortInput, DropDown, Option } from './Register.styles';
import Button from '../Button';

// Helpers
import { validEmail, validMobile } from '../../helpers';

// Dummy Data
const dist_list = ['abc', 'def', 'ghi', 'jkl']
var error = {}

const Register = () => {
	const [username, setUsername] = useState('');
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [mobile, setMobile] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [address, setAddress] = useState('');
	const [distributor, setDistributor] = useState('null');
	const [errorList, setErrorList] = useState(error);

	const checkForErrors = () => {
		error = {};
		if(password !== confirmPassword)
		{
			error.confirmPassword = "Passwords do not match!";
			document.getElementById("confirmPassword").style.borderColor="var(--danger)";
		}
		if(username === '')
		{
			error.username = "Username is required";
			document.getElementById("username").style.borderColor="var(--danger)";
		}
		if(password === '')
		{
			error.password = "Password is required";
			document.getElementById("password").style.borderColor="var(--danger)";
		}
		if(firstName === '')
		{
			error.firstName = "First Name is required";
			document.getElementById("firstName").style.borderColor="var(--danger)";
		}
		if(lastName === '')
		{
			error.lastName = "Last Name is required";
			document.getElementById("lastName").style.borderColor="var(--danger)";
		}
		if(email === '')
		{
			error.email = "Email is required";
			document.getElementById("email").style.borderColor="var(--danger)";
		}
		if(mobile === '')
		{
			error.mobile = "Mobile No. is required";
			document.getElementById("mobile").style.borderColor="var(--danger)";
		}
		if(address === '')
		{
			error.address = "Address is required";
			document.getElementById("address").style.borderColor="var(--danger)";
		}
		if(distributor === 'null')
		{
			error.distributor = "Must select distributor";
			document.getElementById("distributor").style.borderColor="var(--danger)";
		}
		setErrorList(error);
		const isEmpty = Object.keys(error).length === 0;
		if(!isEmpty) return true;
		return false;
	}

	const checkEmail = () => {
		if(!validEmail.test(email))
		{
			error.email = "Email is invalid";
			document.getElementById("email").style.borderColor="var(--danger)";
			return true;
		}
		return false;
	}

	const checkMobile = () => {
		if(!validMobile.test(mobile))
		{
			error.mobile = "Please enter a 10-digit Mobile Number";
			document.getElementById("mobile").style.borderColor="var(--danger)";
			return true;
		}
		return false;
	}

	const handleSubmit = () => {
		var inputCollection = document.getElementsByTagName("input");
		for (let i = 0; i < inputCollection.length; i++) {
			inputCollection[i].style.borderColor = "var(--primary)";
		}
		if(checkForErrors()) return;
		if(checkEmail()) return;
		if(checkMobile()) return;

		console.log("API call");
		// API
	};

	const onChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;

		if(name === "username") setUsername(value);
		if(name === "first_name") setFirstName(value);
		if(name === "last_name") setLastName(value);
		if(name === "email") setEmail(value);
		if(name === "mobile") setMobile(value);
		if(name === "password") setPassword(value);
		if(name === "confirm_password") setConfirmPassword(value);
		if(name === "address") setAddress(value);
		if(name === "distributor") setDistributor(value);
	}

	return (
		<Wrapper>
			<label htmlFor="username">Username:</label>
			<LongInput
			id="username"
			type="text"
			name="username"
			value={ username }
			placeholder="Username"
			onChange={ onChange }
			error
			title={ errorList.username }
			/>

			<InputGroup>
				<div>
					<label htmlFor="firstName">First Name:</label>
					<ShortInput
					id="firstName"
					type="text"
					name="first_name"
					value={ firstName }
					placeholder="First Name"
					onChange={ onChange }
					title={ errorList.firstName }
					/>
				</div>

				<div>
					<label htmlFor="lastName">Last Name:</label>
					<ShortInput
					id="lastName"
					type="text"
					name="last_name"
					value={ lastName }
					placeholder="Last Name"
					onChange={ onChange }
					title={ errorList.lastName }
					/>
				</div>
			</InputGroup>


			<InputGroup>
				<div>
					<label htmlFor="email">Email:</label>
					<ShortInput
					id="email"
					type="email"
					name="email"
					value={ email }
					placeholder="Email"
					onChange={ onChange }
					title={ errorList.email }
					/>
				</div>

				<div>
					<label htmlFor="mobile">Mobile No.:</label>
					<ShortInput
					id="mobile"
					type="text"
					name="mobile"
					value={ mobile }
					placeholder="Mobile No."
					onChange={ onChange }
					title={ errorList.mobile }
					pattern="[0-9]{10}"
					/>
				</div>
			</InputGroup>

			<label htmlFor="address">Address:</label>
			<LongInput
			id="address"
			type="text"
			name="address"
			value={ address }
			placeholder="Address"
			onChange={ onChange }
			title={ errorList.address }
			/>

			<InputGroup>
				<div>
					<label htmlFor="password">Password:</label>
					<ShortInput
					id="password"
					type="password"
					name="password"
					value={ password }
					placeholder="Password"
					onChange={ onChange }
					title={ errorList.password }
					/>
				</div>

				<div>
					<label htmlFor="confirmPassword">Confirm Password:</label>
					<ShortInput
					id="confirmPassword"
					type="password"
					name="confirm_password"
					value={ confirmPassword }
					placeholder="Confirm Password"
					onChange={ onChange }
					title={ errorList.confirmPassword }
					/>
				</div>
			</InputGroup>

			<DropDown id="distributor" name="distributor" onChange={ onChange } title={ errorList.distributor }>
				<Option value="null">Select Distributor</Option>
				{ dist_list.map((distributor, i) => (
					<Option key={i} value={i}>{ distributor }</Option>
				)) }
			</DropDown>

			<Button theme="primary" text="Register" callback={ handleSubmit } />
		</Wrapper>
	);
};

export default Register;