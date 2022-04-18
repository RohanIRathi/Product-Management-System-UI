import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// Styles
import {
	Wrapper,
	Content,
	Table,
	TableBody,
	TableRow,
	TableData,
	Input
} from './AccountVerification.styles';

// Components
import Spinner from '../Spinner';
import Error from '../Error';

// API
import API from '../../API';
import Button from '../Button';
import { CustomError } from '../../helpers';

const AccountVerification = ({ retailer, token }) => {
	const [creditLimit, setCreditLimit] = useState(0);
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(false);
	const [errorText, setErrorText] = useState("Something Went Wrong");
	const navigate = useNavigate();

	const handleChange = (e) => {
		e.preventDefault();
		const name = e.target.name;
		const value = Number(e.target.value);
		if(name === "creditLimit") setCreditLimit(value);
	}

	const handleSubmit = async(e) => {
		e.preventDefault();
		try {
			setError(false);
			setLoading(true);

			const bodyData = {
				'credit_limit': creditLimit,
				'accept': true
			};

			const data = await API.acceptRetailer(bodyData, token);

			if(!data.success) {
				setErrorText(data.error);
				throw CustomError(errorText);
			}

			alert("Retailer has been accepted");
			setLoading(false);
			navigate('/');
		} catch {
			setError(true);
			setLoading(false);
		}

	};

	const handleReject = async(e) => {
		e.preventDefault();
		if(!window.confirm(`Are you sure you want to reject ${retailer.first_name} ${retailer.last_name}?`))
			return;
		try {
			setError(false);
			setLoading(true);

			const bodyData = {
				'credit_limit': creditLimit,
				'accept': false
			};

			const data = await API.acceptRetailer(bodyData, token);

			if(!data.success) {
				setErrorText(data.error);
				throw CustomError(errorText);
			}

			alert(data.message);
			setLoading(false);
			navigate('/');
		} catch {
			setError(true);
			setLoading(false);
		}
	};

	return ( loading ?
		<Spinner />
		:
		<Wrapper>
			<Content>
				{ error ? <Error text={ errorText } /> : null }
				<Table>
					<TableBody>
						<TableRow>
							<TableData className="title">Retailer:</TableData>
							<TableData className="data">{ retailer.first_name } { retailer.last_name }</TableData>
						</TableRow>
						<TableRow>
							<TableData className="title">Email:</TableData>
							<TableData className="data">{ retailer.email }</TableData>
						</TableRow>
						<TableRow>
							<TableData className="title">Mobile No.:</TableData>
							<TableData className="data">{ retailer.contact }</TableData>
						</TableRow>
						<TableRow>
							<TableData className="title">Address:</TableData>
							<TableData className="data">{ retailer.address }</TableData>
						</TableRow>
						<TableRow>
							<TableData className="title">Enter Credit Limit:</TableData>
							<TableData className="data form">
								<Input
								type="text"
								name="creditLimit"
								pattern="^[1-9][0-9]*$"
								value={ creditLimit }
								title="Only Numbers are Allowed"
								form="myform"
								onChange={ handleChange }
								autoFocus
								required
								/>
							</TableData>
						</TableRow>
					</TableBody>
				</Table>
				<form id="myform" onSubmit={ handleSubmit }>
					<Button text="Accept" theme="primary" type="submit" />
					<Button text="Reject" theme="secondary" type="button" callback={ handleReject } />
				</form>
			</Content>
		</Wrapper>
	);
};

export default AccountVerification;

// {
// 	"id": 21,
// 	"model": "User",
// 	"username": "NewUser",
// 	"first_name": "New",
// 	"last_name": "User",
// 	"email": "rathi_rohan@ymail.com",
// 	"is_superuser": false,
// 	"is_staff": true,
// 	"is_active": false,
// 	"credit_score": 0,
// 	"credit_limit": null,
// 	"contact": 1234567890,
// 	"address": "Pune",
// 	"pendingAmount": 0,
// 	"distributor": {
// 	  "id": 1,
// 	  "model": "User",
// 	  "username": "rohan",
// 	  "first_name": "Rohan",
// 	  "last_name": "Rathi",
// 	  "email": "rathirohan8@gmail.com",
// 	  "is_superuser": true,
// 	  "is_staff": true,
// 	  "is_active": true,
// 	  "credit_score": 0,
// 	  "credit_limit": null,
// 	  "contact": 1234567890,
// 	  "address": "Pune",
// 	  "pendingAmount": 0,
// 	  "distributor": null
// 	}
//   }