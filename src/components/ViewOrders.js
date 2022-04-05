import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

// Components
import { Wrapper } from './Wrapper/Wrapper.styles';
import SideNavbar from './SideNavbar';
import Error from './Error';
import Spinner from './Spinner';
import List from './List';
import ListItem from './ListItem';

// API
import API from '../API';

// Hooks
import { useOrdersFetch } from '../hooks/useOrdersFetch';

// Context
import { Context } from '../context';

const titles = [
	"Order Date",
	"Retailer",
	"Order Amount"
]

const ViewOrders = () => {
	const navigate = useNavigate();
	const [user, setUser] = useContext(Context);
	const user_id = JSON.parse(sessionStorage.getItem('user'));

	if(!user_id || user.user.id !== user_id.id) {
		API.logout(setUser);
		navigate('/logout');
	}

	const { orders, error, loading } = useOrdersFetch();
	if (error) {
		return <Error text="Something Went Wrong" />;
	}

	return (
		loading ?
		<Spinner />
		:
		<Wrapper>
			<SideNavbar viewOrders />
			<List>
				{ titles.map((title, key) => (
					<div style={{ 'width': (100/titles.length).toString() + "%" }} className="title-text" key={ key }>{ title }</div>
				))}
				{ orders.length > 0 && orders.map(order => (
					<ListItem order={ order } key={ order.id } />
				))}
			</List>
		</Wrapper>
	);
};

export default ViewOrders;