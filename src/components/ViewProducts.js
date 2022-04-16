import React from 'react';

// Components
import { Wrapper } from './Wrapper/Wrapper.styles';
import Spinner from './Spinner';
import Error from './Error';
import Products from './Products';
import SideNavbar from './SideNavbar';

// Hooks
import { useAllProductsFetch } from '../hooks/useAllProductsFetch';

const ViewProducts = () => {
	const { products, error, loading } = useAllProductsFetch();

	return ( loading ?
		<Spinner />
		:
		<Wrapper>
			{ error ? <Error text="Something Went Wrong" /> : null }
			<SideNavbar products />
			<Products products={ products } />
		</Wrapper>
	);
};

export default ViewProducts;