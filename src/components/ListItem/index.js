import React from "react";

// Styles
import { Item } from "./ListItem.styles";

const ListItem = (props) => {
	const data = props.retailer ?
	<a href={ "/viewRetailer/" + props.retailer.id }>
		<Item>
			<span style={{ 'width': '50%' }}>{ props.retailer.first_name } { props.retailer.last_name }</span>
			<span style={{ 'width': '50%' }}>{ props.retailer.pendingAmount }</span>
		</Item>
	</a>
	: props.order ?
	<a style={{ 'textDecoration': 'none' }} href={ "/viewOrder/" + props.order.id }>
		<Item>
			<span style={{ 'width': '33%' }}>{ new Date(props.order.order_date).toLocaleString() }</span>
			<span style={{ 'width': '33%' }}>{ props.order.retailer.first_name } { props.order.retailer.last_name }</span>
			<span style={{ 'width': '33%' }}>{ props.order.total_amount }</span>
		</Item>
	</a>
	: null;

	return data;
};

export default ListItem;