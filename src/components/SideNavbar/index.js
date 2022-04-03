import React, { useState } from "react";

// Font Awesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faBars,
	faTimes,
	faHome,
	faUsers,
	faUserPlus,
	faReceipt,
	faMobileAlt,
	faSquarePlus
} from '@fortawesome/free-solid-svg-icons'

// Styles
import { Wrapper, Option } from "./SideNavbar.styles";

const SideNavbar = (props) => {
	const [ expanded, setExpanded ] = useState(true);

	const toggleSideNavbar = () => {
		setExpanded(!expanded);
	}

	return (
		expanded ?
			<Wrapper className="sidenav">
				<FontAwesomeIcon className="fontAwesomeIcon" icon={ faTimes } onClick={ toggleSideNavbar } fixedWidth />
				<Option href="/" active={ props.home }>Home</Option>
				<Option href="/viewRetailers" active={ props.viewRetailers }>View Retailers</Option>
				<Option href="/addRetailer" active={ props.addRetailer }>Add Retailer</Option>
				<Option href="/manageOrders" active={ props.manageOrders }>Manage Orders</Option>
				<Option href="/products" active={ props.products }>Products</Option>
				<Option href="/addProduct" active={ props.addProduct }>Add Product</Option>
			</Wrapper>
			:
			<Wrapper className="sidenav" style={{ "width": '5%' }}>
				<FontAwesomeIcon className="fontAwesomeIcon closedNavbarIcon" icon={ faBars } onClick={ toggleSideNavbar } fixedWidth />
				<Option href="/" active={ props.home }><FontAwesomeIcon icon={ faHome } /></Option>
				<Option href="/viewRetailers" active={ props.viewRetailers }><FontAwesomeIcon icon={ faUsers } /></Option>
				<Option href="/addRetailer" active={ props.addRetailer }><FontAwesomeIcon icon={ faUserPlus } /></Option>
				<Option href="/manageOrders" active={ props.manageOrders }><FontAwesomeIcon icon={ faReceipt } /></Option>
				<Option href="/products" active={ props.products }><FontAwesomeIcon icon={ faMobileAlt } /></Option>
				<Option href="/addProduct" active={ props.addProduct }><FontAwesomeIcon icon={ faSquarePlus } /></Option>
			</Wrapper>
	);
};

export default SideNavbar;