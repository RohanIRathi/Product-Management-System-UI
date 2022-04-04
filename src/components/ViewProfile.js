import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

// Components
import SideNavbar from './SideNavbar';
import { Wrapper } from './Wrapper/Wrapper.styles';
import Profile from './Profile';

// Context
import { Context } from '../context';

// API
import API from '../API';

const ViewProfile = () => {
	const [user, setUser] = useContext(Context);
	const user_id = JSON.parse(sessionStorage.getItem('user'));
	const now = new Date();
	const navigate = useNavigate();

	if(user && user_id && user.user.id === user_id.id)
		if(sessionStorage.getItem('expire_date') < now) {
			API.logout(setUser);
			navigate('/logout');
		}

	return (
		<Wrapper>
			<SideNavbar />
			<Profile user={ user.user }/>
		</Wrapper>
	);
};

export default ViewProfile;