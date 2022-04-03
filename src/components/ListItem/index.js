import React from "react";

// Styles
import { Item } from "./ListItem.styles";

const ListItem = ({ retailer }) => (
	<Item>
		<span>{ retailer.first_name } { retailer.last_name }</span>
		<span>{ retailer.pendingAmount }</span>
	</Item>
);

export default ListItem;