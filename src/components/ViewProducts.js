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
			<SideNavbar products />
			{ error ? <Error text="Something Went Wrong" /> :
			<Products products={ products } />
			}
		</Wrapper>
	);
};

export default ViewProducts;