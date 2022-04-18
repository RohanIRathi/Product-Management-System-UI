import React, { useState, useContext } from "react";

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
	faSquarePlus,
	faBarcode
} from '@fortawesome/free-solid-svg-icons'

// Styles
import { Wrapper, Option } from "./SideNavbar.styles";

// Context
import { Context } from "../../context";

const SideNavbar = (props) => {
	const user = useContext(Context)[0];
	const [ expanded, setExpanded ] = useState(false);

	const toggleSideNavbar = () => {
		setExpanded(!expanded);
	}

	return (
		expanded ?
			<Wrapper className="sidenav">
				<FontAwesomeIcon className="fontAwesomeIcon" icon={ faTimes } onClick={ toggleSideNavbar } fixedWidth />
				<Option href="/" active={ props.home }>Home</Option>
				{ user && user.user && user.user.is_superuser && user.user.is_staff ?
				<>
					<Option href="/viewRetailers" active={ props.viewRetailers }>View Retailers</Option>
					{/* <Option href="/addRetailer" active={ props.addRetailer }>Add Retailer</Option> */}
				</>
				: null }
				<Option href="/viewOrders" active={ props.viewOrders }>View Orders</Option>
				<Option href="/addOrder" active = { props.createOrder }>Create Order</Option>
				<Option href="/products" active={ props.products }>Products</Option>
				{ user && user.user && user.user.is_superuser && user.user.is_staff ?
				<Option href="/addProduct" active={ props.addProduct }>Add Product</Option>
				: null }
			</Wrapper>
			:
			<Wrapper className="sidenav" style={{ "width": '5%' }}>
				<FontAwesomeIcon className="fontAwesomeIcon closedNavbarIcon" icon={ faBars } onClick={ toggleSideNavbar } fixedWidth />
				<Option title="Home" href="/" active={ props.home }><FontAwesomeIcon icon={ faHome } /></Option>
				{ user && user.user && user.user.is_superuser && user.user.is_staff ?
				<>
					<Option title="View Retailers" href="/viewRetailers" active={ props.viewRetailers }><FontAwesomeIcon icon={ faUsers } /></Option>
					{ /* <Option title="Add Retailer" href="/addRetailer" active={ props.addRetailer }><FontAwesomeIcon icon={ faUserPlus } /></Option> **/ }
				</>
				: null }
				<Option title="View Orders" href="/viewOrders" active={ props.viewOrders }><FontAwesomeIcon icon={ faReceipt } /></Option>
				<Option title="Add Order" href="/addOrder" active={ props.createOrder }><FontAwesomeIcon icon={ faBarcode } /></Option>
				<Option title="View Products" href="/products" active={ props.products }><FontAwesomeIcon icon={ faMobileAlt } /></Option>
				{ user && user.user && user.user.is_superuser && user.user.is_staff ?
				<Option title="Add Product" href="/addProduct" active={ props.addProduct }><FontAwesomeIcon icon={ faSquarePlus } /></Option>
				: null }
			</Wrapper>
	);
};

export default SideNavbar;