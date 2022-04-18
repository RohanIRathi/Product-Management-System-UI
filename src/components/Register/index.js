import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Styles
import { Wrapper, LongInput, InputGroup, ShortInput, DropDown, Option, RegistrationForm } from './Register.styles';
import Button from '../Button';

// Hooks
import { useDistributorsFetch } from '../../hooks/useDistributorsFetch';

// Components
import Error from '../Error';
import Spinner from '../Spinner';

// API
import API from '../../API';

const Register = () => {
	const { state, loading, setLoading, error } = useDistributorsFetch();
	const dist_list = state;

	const [username, setUsername] = useState('');
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [mobile, setMobile] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [address, setAddress] = useState('');
	const [distributor, setDistributor] = useState('null');
	const [errorList, setErrorList] = useState({});

	const navigate = useNavigate();

	if(error) setErrorList({'error': 'Something Went Wrong'});

	const handleSubmit = async (event) => {
		event.preventDefault();
		setLoading(true);
		var inputCollection = document.getElementsByTagName("input");
		for (let i = 0; i < inputCollection.length; i++) {
			inputCollection[i].style.borderColor = "var(--primary)";
		}

		if(distributor === 'null') {
			document.getElementById("distributor").style.borderColor = 'var(--danger)';
			setErrorList({'distributor': 'Please select a valid distributor'});
			setLoading(false);
			return;
		}

		if(password !== confirmPassword) {
			var passwords = document.getElementsByClassName("password-input");
			for(let i = 0; i < passwords.length; i++) {
				console.log(passwords[0]);
				passwords[i].title = "Passwords do not match!";
				passwords[i].style.borderColor = "var(--danger)";
			}
			setLoading(false);
			return;
		}

		// API call
		try {
			const bodyData = {
				username,
				email,
				'password1': password,
				'password2': confirmPassword,
				firstName,
				lastName,
				address,
				mobile,
				'distributorId': distributor,
			}
			const result = await API.signup(bodyData);
			if(!result.success) {
				setErrorList({'error': result.error});
				setLoading(false);
				return;
			}
			alert(result.message);
			navigate('/login/');
		} catch (error) {
			setErrorList({'error': error});
		}
		setLoading(false);
	};

	const onChange = (e) => {
		e.preventDefault();
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
			{ loading ?
				<Spinner /> :
				<RegistrationForm onSubmit={ handleSubmit }>
					{ errorList.error ?
						<Error text={ errorList.error } /> :
						null
					}
					<label htmlFor="username">Username:</label>
					<LongInput
					id="username"
					type="text"
					name="username"
					value={ username }
					placeholder="Username"
					onChange={ onChange }
					required
					title="Enter a unique username"
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
							title="Enter your first name"
							required
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
							title="Enter your last name"
							required
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
							pattern="^[a-zA-Z0-9._$!%-]+@[a-zA-Z0-9.-]+.[a-zA-z]$"
							required
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
							title="Enter a 10-digit phone number"
							pattern="[0-9]{10}"
							required
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
					title="Enter your shop address"
					required
					/>

					<InputGroup>
						<div>
							<label htmlFor="password">Password:</label>
							<ShortInput
							id="password"
							className="password-input"
							type="password"
							name="password"
							value={ password }
							placeholder="Password"
							onChange={ onChange }
							title="Enter your account password"
							required
							/>
						</div>

						<div>
							<label htmlFor="confirmPassword">Confirm Password:</label>
							<ShortInput
							id="confirmPassword"
							className="password-input"
							type="password"
							name="confirm_password"
							value={ confirmPassword }
							placeholder="Confirm Password"
							onChange={ onChange }
							title="Re-enter your password"
							required
							/>
						</div>
					</InputGroup>

					<DropDown id="distributor" defaultValue={distributor} name="distributor" onChange={ onChange } title={ errorList.distributor }>
						<Option value="null">Select Distributor</Option>
						{ dist_list.map((distributor, i) => (
							<Option key={distributor.id} value={distributor.id}>{ distributor.first_name } { distributor.last_name }</Option>
						)) }
					</DropDown>

					<Button theme="primary" text="Register" type="submit" />
				</RegistrationForm>
			}
		</Wrapper>
	);
};

export default Register;