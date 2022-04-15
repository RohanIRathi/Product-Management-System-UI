import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Components
import Error from '../Error';
import Spinner from '../Spinner';
import Button from '../Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmarkCircle } from '@fortawesome/free-solid-svg-icons';

// Styles
import {
	Wrapper,
	Content,
	Users,
	User,
	Title,
	Product,
	Quantity,
	Discount,
	Amount,
	ProductList,
	Footer,
	AddProduct,
	Select,
	ListItem,
	Delete,
	Date as OrderDate
} from './OrderForm.styles';

// API
import API from '../../API';

// Hooks
import { useRetailersFetch } from '../../hooks/useRetailersFetch';

// Helpers
import { calculateProductTotal } from '../../helpers';
import { CustomError } from '../../helpers';

const productsList = [];
const initialState = {
	'retailer': 0,
	'distributor': 0,
	'totalAmount': 0,
	'totalQuantity': 0,
	'products': productsList
};

const OrderForm = ({ user, products }) => {
	const [err, setError] = useState(false);
	const [load, setLoading] = useState(false);
	const [errorText, setErrorText] = useState("Something Went Wrong");
	const navigate = useNavigate();

	const { retailers, error, loading } = useRetailersFetch();
	let retailerOptions = [];
	let productOptions = [];

	if(retailers.length > 0) {
		retailerOptions = retailers.map(retailer => (
			{
				'value': retailer.id,
				'label': `${retailer.first_name} ${retailer.last_name} (${retailer.username})`
			}
		));
	}
	if(products.length > 0) {
		productOptions = products.map(product => (
			{
				'value': product.id,
				'label': `${ product.company } ${ product.series } ${ product.model }`
			}
		));
	}

	const [inputList, setInputList] = useState([]);

	const [retailerAddress, setRetailerAddress] = useState("");
	const [retailer, setRetailer] = useState(null);
	const [distributor, setDistributor] = useState(0);
	const [totalAmount, setTotalAmount] = useState(0);
	const [totalQuantity, setTotalQuantity] = useState(0);
	const [orderProducts, setProducts] = useState(productsList);
	const [order, setOrder] = useState(initialState);

	window.onload = () => {
	};

	const checkErrors = () => {
		if(isNaN(parseInt(retailer)) || retailer === 0)
			throw new CustomError("Please Select a Retailer");
		if(inputList.length < 1)
			throw new CustomError("Please Add Atleast 1 product");
		inputList.forEach(input => {
			if(isNaN(parseInt(input.product)))
				throw new CustomError("Please Select a Product");
			if(isNaN(parseInt(input.quantity)) || input.quantity === 0)
				throw new CustomError("Enter Quantity of the Selected Product");
		})
	};

	const handleSubmit = async() => {
		setError(false);
		setLoading(true);

		try {
			checkErrors();
			setProducts(inputList);
			console.log(order);

			// API
			const data = await API.addOrder(order);
			if(!data.success) {
				setError(true);
				setErrorText(data.error || "Something Went Wrong");
			} else {
				alert("Order placed successfully");
				navigate('/');
			}
		} catch (e) {
			setError(true);
			setErrorText(e.message);
			setLoading(false);
		} finally {
			setLoading(false);
		}
	};

	const selectRetailer = (event) => {
		setRetailer(event.value);
		setRetailerAddress(retailers.find(obj => (obj.id === event.value)).address);
	};

	const selectProduct = (event, index) => {
		let newFormValues = [...inputList];
		newFormValues[index]['product'] = event.value;
		updateInputProducts(newFormValues, index);
		setInputList(newFormValues);
	};

	const handleChange = (e, index) => {
		let newFormValues = [...inputList];
		newFormValues[index][e.target.name] = Number(e.target.value);
		updateInputProducts(newFormValues, index);
	};

	const updateInputProducts = (newFormValues, index) => {
		if(!isNaN(parseInt(newFormValues[index]['product'])) && !isNaN(parseInt(newFormValues[index]['quantity'])) && !isNaN(newFormValues[index]['discount'])) {
			const selectedProduct = products.find(obj => (obj.id === newFormValues[index].product));
			const calcProduct = {
				'product': selectedProduct,
				'quantity': newFormValues[index]['quantity'],
				'discount': newFormValues[index]['discount']
			}
			newFormValues[index]['amount'] = calculateProductTotal(calcProduct);
		}
		setInputList(newFormValues);
		setProducts(newFormValues);
		let tempTotalQuantity = 0;
		let tempTotalAmount = 0;
		newFormValues.forEach(value => {
			console.log(value);
			tempTotalQuantity += value.quantity;
			tempTotalAmount += value.amount;
		});
		setTotalQuantity(tempTotalQuantity);
		setTotalAmount(tempTotalAmount);
	}

	const addListItem = () => {
		const input = {'product': "", 'quantity': null, 'discount': 0, 'amount': 0};
		setInputList([...inputList, input]);
	};

	const deleteItem = (index) => {
		let newFormValues = [...inputList];
		newFormValues.splice(index, 1);
		setInputList(newFormValues);
	};

	useEffect(() => {
		if(user && user.is_superuser && user.is_staff) {
			setDistributor(user.id);
		}
		if(user && !user.is_superuser && user.is_staff) {
			setDistributor(user.distributor.id);
			setRetailer(user.id);
		}
	}, [user]);

	useEffect(() => {
		const inputOrder = {
			'retailer': retailer,
			'distributor': distributor,
			'totalAmount': totalAmount,
			'totalQuantity': totalQuantity,
			'products': orderProducts
		}
		setOrder(inputOrder);
	}, [retailer, distributor, totalAmount, totalQuantity, orderProducts]);

	// if(user && !user.is_superuser && user.is_staff) {
	// 	setRetailer(user.id);
	// }
	// if(user && user.is_superuser && user.is_staff) {
	// 	setDistributor(user.id);
	// }

	return ( load || loading ?
		<Spinner />
		:
		<Wrapper>
			<Content>
				{ error || err ?
				<Error text={ errorText } />
				: null
				}
				<OrderDate>Date: { new Date().toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) }</OrderDate>
				<Users>
					<User>
						<h2>Buyer:</h2>
						{ user && !user.is_superuser && user.is_staff ?
						<>
							<h3>{ user.first_name } { user.last_name }</h3>
							<p>{ user.address }</p>
						</>
						:
						<>
							<Select
							options={ retailerOptions }
							value={ retailerOptions.find(obj => (obj.value === retailer)) }
							onChange={ selectRetailer }/>
							<p>{ retailerAddress }</p>
						</>
						}
					</User>
					<User>
						<h2>Seller:</h2>
						{ user && user.is_superuser && user.is_staff ?
						<>
							<h3>{ user.first_name } { user.last_name }</h3>
							<p>{ user.address }</p>
						</>
						:
						<>
							<h3>{ user.distributor.first_name } { user.distributor.last_name }</h3>
							<p>{ user.distributor.address }</p>
						</>
						}
					</User>
				</Users>
				<Title>
					<Product>Product</Product>
					<Quantity>Quantity</Quantity>
					<Discount>Discount</Discount>
					<Amount>Amount</Amount>
					<Delete></Delete>
				</Title>
				<ProductList>
					{ inputList.map((input, index) => (
						<ListItem key={index}>
							<Product>
								<Select
								className="select-product"
								name="product"
								options={ productOptions }
								onChange={ e => selectProduct(e, index) } 
								value={ productOptions.find(obj => (obj.value === inputList[index]['product'])) }/>
							</Product>
							<Quantity>
								<input
								className="number"
								type="number"
								name="quantity"
								min={ 0 }
								value={ inputList[index]['quantity'] || "" }
								onChange={ e => handleChange(e, index) }
								/>
							</Quantity>
							<Discount>
								<input
								className="number"
								type="number"
								name="discount"
								step={ 0.01 }
								min={ 0 }
								value={ inputList[index]['discount'] }
								onChange={ e => handleChange(e, index) }
								/>
							</Discount>
							<Amount className="number">{ inputList[index]['amount'] }</Amount>
							<Delete onClick={ e => deleteItem(index) }>
								<FontAwesomeIcon className="icon" icon={ faXmarkCircle } />
							</Delete>
						</ListItem>
					))}
				</ProductList>
				<AddProduct>
					<Button theme="secondary" text="+ Add Product" callback={ addListItem } />
				</AddProduct>
				<Footer>
					<Product>Total</Product>
					<Quantity className="number">{ totalQuantity }</Quantity>
					<Discount></Discount>
					<Amount className="number">{ totalAmount }</Amount>
					<Delete></Delete>
				</Footer>
				<Button className="submitButton" text="Create Order" theme="primary" callback={ handleSubmit } />
			</Content>
		</Wrapper>
	);
};

export default OrderForm;