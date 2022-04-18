import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

// Components
import SideNavbar from './SideNavbar';
import { Wrapper } from './Wrapper/Wrapper.styles';
import OrderForm from './OrderForm';
import Error from './Error';
import Spinner from './Spinner';

// API
import API from '../API';

// Context
import { Context } from '../context';

// Hooks
import { useAllProductsFetch } from '../hooks/useAllProductsFetch';

const CreateOrder = () => {
	const [user, setUser] = useContext(Context);
	const navigate = useNavigate();

	const { products, error, loading } = useAllProductsFetch();

	if(user.user.id !== JSON.parse(sessionStorage.getItem('user')).id) {
		API.logout(setUser);
		navigate('/logout');
	}

	return ( loading ?
		<Spinner />
		:
		<Wrapper>
			<SideNavbar createOrder />
			{ error ?
			<Error text="Something Went Wrong" />
			:
			<OrderForm user = { user.user } products={ products } />
			}
		</Wrapper>
	);
};

export default CreateOrder;