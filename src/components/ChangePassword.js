import React from 'react';

// Components
import { Wrapper } from './Wrapper/Wrapper.styles';
import SideNavbar from './SideNavbar';
import PasswordForm from './PasswordForm';

const ChangePassword = () => {

	return (
		<Wrapper>
			<SideNavbar />
			<PasswordForm />
		</Wrapper>
	);
};

export default ChangePassword;