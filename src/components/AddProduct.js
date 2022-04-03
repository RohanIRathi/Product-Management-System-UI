import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Components
import SideNavbar from './SideNavbar';
import Spinner from './Spinner';
import Form from './Form';
import Button from './Button';
import Error from './Error';

// Styles
import { Wrapper } from './Wrapper/Wrapper.styles';

// API
import API from '../API';

const AddProduct = () => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const [errorText, setErrorText] = useState("Something Went Wrong");
	const [company, setCompany] = useState('');
	const [series, setSeries] = useState('');
	const [model, setModel] = useState('');
	const [price, setPrice] = useState(0);
	const [quantity, setQuantity] = useState(0);

	const navigate = useNavigate();

	const checkData = () => {
		if(isNaN(price) || isNaN(quantity)) {
			alert("Incorrect price or quantity entered");
			return false;
		}
		return true;
	}

	const handleChange = (event) => {
		event.preventDefault();
		const name = event.target.name;
		const value = event.target.value;

		if(name === "company") setCompany(value);
		if(name === "series") setSeries(value);
		if(name === "model") setModel(value);
		if(name === "price") setPrice(value);
		if(name === "quantity") setQuantity(value);
	}

	const handleSubmit = async (event) => {
		event.preventDefault();
		setLoading(true);
		setError(false);
		setErrorText("Something Went Wrong");

		if(!checkData()) {
			setLoading(false);
			return;
		}

		const data = {
			company,
			series,
			model,
			price,
			quantity
		}

		try {
			// API call
			const result = await API.addProduct(data);
			if(result.success) {
				alert("Product successfully added!");
				navigate('/addProduct');
			} else {
				setErrorText(result.error);
				setError(true);
			}
		} catch (err) {
			setError(true);
		} finally {
			setLoading(false);
		}
	}

	return (
		loading ?
		<Spinner />
		:
		<Wrapper>
			<SideNavbar addProduct />
			<Form callback={ handleSubmit }>
				{ error ?
					<Error className="error" text={ errorText } />
					: null }
				<div className="inputGroup">
					<label>Company: </label>
					<input
					id="company"
					type="text"
					placeholder="Company"
					onChange={ handleChange }
					name="company"
					value={ company }
					required
					title="Enter Product's Company"
					/>
				</div>
				<div className="inputGroup">
					<label>Series: </label>
					<input
					id="series"
					type="text"
					placeholder="Series"
					onChange={ handleChange }
					name="series"
					value={ series }
					required
					title="Enter Product's Series"
					/>
				</div>
				<div className="inputGroup">
					<label>Model: </label>
					<input
					id="model"
					type="text"
					placeholder="Model"
					onChange={ handleChange }
					name="model"
					value={ model }
					required
					title="Enter Product's Model"
					/>
				</div>
				<div className="inputGroup">
					<label>Price: </label>
					<input
					id="price"
					type="text"
					placeholder="Price"
					onChange={ handleChange }
					name="price"
					value={ price }
					required
					title="Enter Product Price"
					/>
				</div>
				<div className="inputGroup">
					<label>Available Quantity: </label>
					<input
					id="quantity"
					type="text"
					placeholder="Available Quantity"
					onChange={ handleChange }
					name="quantity"
					value={ quantity }
					required
					title="Enter Available Quantity"
					/>
				</div>
				<Button theme="primary" type="submit" text="Submit" />
			</Form>
		</Wrapper>
	);
};

export default AddProduct;