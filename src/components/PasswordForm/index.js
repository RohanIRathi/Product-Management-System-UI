import React, { useState } from 'react';

// Styles
import {
	Wrapper,
	Content,
	Form,
	Input
} from './PasswordForm.styles';

// Components
import Button from '../Button';
import Spinner from '../Spinner';
import Error from '../Error';

// API
import API from '../../API';

// Helpers
import { CustomError } from '../../helpers';

const PasswordForm = () => {
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(false);
	const [errorText, setErrorText] = useState("Something Went Wrong");
	const [oldPassword, setOldPassword] = useState("");
	const [newPassword, setNewPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const handleChange = (e) => {
		e.preventDefault();

		const name = e.target.name;
		const value = e.target.value;
		if(name === "oldpassword") setOldPassword(value);
		if(name === "newpassword") setNewPassword(value);
		if(name === "confirmpassword") {
			e.target.style.borderColor = "var(--primary)";
			e.target.title = "Re-enter New Account Password";
			setConfirmPassword(value);
		}
	};

	const handleSubmit = async(e) => {
		e.preventDefault();
		console.log(newPassword, oldPassword)
		if(newPassword !== confirmPassword) {
			const confpasselement = document.getElementById("confirmpassword");
			confpasselement.focus();
			confpasselement.style.borderColor = 'var(--danger)';
			confpasselement.title = 'Passwords do not match';
			return;
		}

		try {
			setError(false);
			setLoading(true);

			if(newPassword === oldPassword) {
				setErrorText("New Password cannot be the same as Current Password");
				throw CustomError();
			}
			const bodyData = {
				oldPassword,
				newPassword,
				confirmPassword
			}
			// API call
			const data = await API.changePassword(bodyData);

			if(!data.success) {
				console.log(data);
				setErrorText(data.error);
				throw CustomError();
			}
			alert(data.message);
		} catch {
			setError(true);
		} finally {
			setLoading(false);
		}
	};

	return (loading ?
		<Spinner />
		:
		<Wrapper>
			<Content>
				<>
					{ error ? 
					<Error className="error" text={ errorText } />
					: null }
					<h1>Change Password Form</h1>
					<Form onSubmit={ handleSubmit } autoComplete="off">
						<div className="form-group">
							<label htmlFor="oldpassword" className="input-label">Current Password:</label>
							<Input
							id="oldpassword"
							name="oldpassword"
							type="password"
							title="Enter Current Account Password"
							value={ oldPassword }
							onChange={ handleChange }
							required
							/>
						</div>
						<div className="form-group">
							<label htmlFor="newpassword" className="input-label">New Password:</label>
							<Input
							id="newpassword"
							name="newpassword"
							type="password"
							title="Enter New Account Password"
							value={ newPassword }
							onChange={ handleChange }
							required
							auto
							/>
						</div>
						<div className="form-group">
							<label htmlFor="confirmpassword" className="input-label">Confirm New Password:</label>
							<Input
							id="confirmpassword"
							name="confirmpassword"
							type="password"
							title="Re-enter New Account Password"
							value={ confirmPassword }
							onChange={ handleChange }
							required
							/>
						</div>
						<Button type="submit" theme="primary" text="Submit" />
					</Form>
				</>
			</Content>
		</Wrapper>
	);
};

export default PasswordForm;