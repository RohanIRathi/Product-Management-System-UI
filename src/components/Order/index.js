import React from 'react';

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

// Helpers
import { calculateProductTotal } from '../../helpers';

const Order = ({ order }) => {
	const order_date = new Date(order.order_date);
	let payment_date = "Payment Not Done";
	if(order.order_paid) {
		payment_date = <span>{ new Date(order.order_paid).toLocaleString() }</span>;
	}

	return (
		<Wrapper>
			<Content>
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
								<TableData className="number">{ calculateProductTotal(product) }</TableData>
							</TableRow>
						))}
						{/* <TableRow>
							<TableData>Lava Z 6</TableData>
						</TableRow> */}
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
			</Content>
		</Wrapper>
	);
};

export default Order;