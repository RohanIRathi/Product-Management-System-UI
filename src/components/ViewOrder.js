import React from 'react';
import { useParams } from 'react-router-dom';

// Components
import { Wrapper } from './Wrapper/Wrapper.styles';
import SideNavbar from './SideNavbar';
import Error from './Error';
import Spinner from './Spinner';
import Order from './Order';

// Hooks
import { useOrderDetailsFetch } from '../hooks/useOrderDetailsFetch';

const ViewOrder = () => {
	const { order_id } = useParams();
	const { order, loading, error } = useOrderDetailsFetch(order_id);

	return (
		loading ?
		<Spinner />
		:
		<Wrapper>
			<SideNavbar viewOrder />
			{ error ?
				<Error text="Something Went Wrong" />
				: order.id ?
				<Order order={ order } order_id={ order_id } />
				: <Spinner />
			}
		</Wrapper>
	);
};

export default ViewOrder;