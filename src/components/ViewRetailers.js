import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

// Hooks
import { useRetailersFetch } from '../hooks/useRetailersFetch';

// Context
import { Context } from '../context';

// API
import API from '../API';

// Components
import Error from './Error';
import Spinner from './Spinner';
import SideNavbar from './SideNavbar';
import List from './List';
import ListItem from './ListItem';

// Styles
import { Wrapper } from './Wrapper/Wrapper.styles';

const titles = [
	"Retailer",
	"Pending Amount"
];

const ViewRetailers = () => {
	const navigate = useNavigate();
	const [user, setUser] = useContext(Context);
	const user_id = JSON.parse(sessionStorage.getItem('user'));

	if(!user_id || user.user.id !== user_id.id) {
		API.logout(setUser);
		navigate('/logout');
	}

	const { retailers, error, loading } = useRetailersFetch();
	return (
		loading ?
		<Spinner />
		:
		<Wrapper>
			<SideNavbar viewRetailers />
			{ error ? <Error text="Something Went Wrong" /> :
			<List>
				{ titles.map((title, key) => (
					<div style={{ 'width': (100/titles.length).toString() + "%" }} className="title-text" key={ key }>{ title }</div>
				))}
				{ retailers.map(retailer => (
					<ListItem retailer={ retailer } key={ retailer.id } />
				))}
			</List>
			}
		</Wrapper>
	)
};

export default ViewRetailers;