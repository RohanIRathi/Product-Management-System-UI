import React, { useContext } from 'react';
import { Navigate, useLocation, useSearchParams } from "react-router-dom";

// Components
import SideNavbar from './SideNavbar';
import Spinner from './Spinner';
import Error from './Error';
import { Wrapper } from './Wrapper/Wrapper.styles';
import AccountVerification from './AccountVerification';

// Hooks
import { useVerificationDetailsFetch } from '../hooks/useVerificationDetailsFetch';

// Context
import { Context } from '../context';

const VerifyAccount = () => {
	const user = useContext(Context)[0];
	const searchParams = useSearchParams()[0];
	const token = searchParams.get('token');
	const user_id = JSON.parse(sessionStorage.getItem('user'));
	const location = useLocation();
	const userAuthorized = user && user.user && user_id && user.user.id === user_id.id && user.user.is_superuser && user.user.is_staff;
	const { retailer, error, loading, errorText } = useVerificationDetailsFetch(userAuthorized, token);

	return (
		loading ?
		<Spinner />
		: !userAuthorized ?
		<Navigate to='/login' state={{from: location}} replace />
		:
		<Wrapper>
			<SideNavbar />
			{ error ?
				<Error text={ errorText } />
				:
				<AccountVerification retailer={ retailer } token={ token } />
			}
		</Wrapper>
	);
};

export default VerifyAccount;