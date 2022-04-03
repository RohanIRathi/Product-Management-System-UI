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

const ViewRetailers = () => {
	const navigate = useNavigate();
	const [user, setUser] = useContext(Context);
	const user_id = JSON.parse(sessionStorage.getItem('user'));

	if(!user_id || user.user.id !== user_id.id) {
		API.logout(setUser);
		navigate('/logout');
	}

	const { retailers, error, loading } = useRetailersFetch();
	if (error) {
		return <Error text="Something Went Wrong" />;
	}

	return (
		loading ?
		<Spinner />
		:
		<Wrapper>
			<SideNavbar viewRetailers />
			<List>
				{ retailers.map(retailer => (
					<ListItem retailer={ retailer } key={ retailer.id } />
				))}
			</List>
		</Wrapper>
	)
};

export default ViewRetailers;