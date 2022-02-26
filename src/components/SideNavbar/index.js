import React from "react";

// Styles
import { Wrapper, Option } from "./SideNavbar.styles";

const SideNavbar = (props) => {
	return (
			<Wrapper className="sidenav">
				<Option href="/" active={ props.home }>Home</Option>
				<Option href="/viewRetailers" active={ props.viewRetailers }>View Retailers</Option>
				<Option href="/addRetailer" active={ props.addRetailer }>Add Retailer</Option>
				<Option href="/manageOrders" active={ props.manageOrders }>Manage Orders</Option>
				<Option href="/products" active={ props.products }>Products</Option>
			</Wrapper>
	);
};

export default SideNavbar;