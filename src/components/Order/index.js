import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

// Styles
import {
	Wrapper,
	Content,
	OrderDate,
	Users,
	User,
	Table,
	TableHeader,
	TableRow,
	TableHead,
	TableBody,
	TableData,
	TableFooter
} from './Order.styles';

// Components
import Spinner from '../Spinner';
import Error from '../Error';

// API
import API from '../../API';

// Helpers
import { calculateProductTotal, CustomError } from '../../helpers';
import Button from '../Button';

// Context
import { Context } from '../../context';

const Order = ({ order, order_id }) => {
	const user = useContext(Context)[0];
	const navigate = useNavigate();
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const order_date = new Date(order.order_date);
	let payment_date = "Payment Not Done";
	if(order.order_paid) {
		payment_date = <span>{ new Date(order.order_paid).toLocaleString() }</span>;
	}

	const markPaid = async() => {
		try {
			setLoading(true);
			setError(false);
			// API call
			const data = await API.orderPaid(order_id);
			console.log(data);

			if(!data.success) throw CustomError();
			setLoading(false);
			window.location.reload();
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
				{ error ? <Error text="Something Went Wrong" /> : null }
				<OrderDate>
					<div className="date">Order Date: <span>{ order_date.toLocaleString() }</span></div>
					<div className="date">Payment Date: <span>{ payment_date }</span></div>
				</OrderDate>
				<Users>
					<User>
						<h2>Buyer:</h2>
						<h3>{ order.retailer.first_name } { order.retailer.last_name }</h3>
						<p>{ order.retailer.address }</p>
					</User>
					<User>
						<h2>Seller:</h2>
						<h3>{ order.distributor.first_name } { order.distributor.last_name }</h3>
						<p>{ order.distributor.address }</p>
					</User>
				</Users>
				<Table>
					<TableHead>
						<TableRow>
							<TableHeader>Product</TableHeader>
							<TableHeader>Quantity</TableHeader>
							<TableHeader>Discount</TableHeader>
							<TableHeader>Amount</TableHeader>
						</TableRow>
					</TableHead>
					<TableBody>
						{ order.products.map(product => (
							<TableRow key={ product.product.id }>
								<TableData>{ product.product.company } { product.product.series } { product.product.model }</TableData>
								<TableData className="number">{ product.quantity }</TableData>
								<TableData className="number">{ product.discount }</TableData>
								<TableData className="number">{ calculateProductTotal(product).toFixed(2) }</TableData>
							</TableRow>
						))}
					</TableBody>
					<TableFooter>
						<TableRow>
							<TableData>Total</TableData>
							<TableData className="number">{ order.total_quantity }</TableData>
							<TableData></TableData>
							<TableData className="number">{ order.total_amount }</TableData>
						</TableRow>
					</TableFooter>
				</Table>
				{ !user || !user.user || !user.user.is_superuser || !user.user.is_staff || order.order_paid ? null :
					<Button text="Order Paid" type="button" theme="success" callback={ markPaid } />
				}
			</Content>
		</Wrapper>
	);
};

export default Order;