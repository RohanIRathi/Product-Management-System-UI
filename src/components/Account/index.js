import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Styles
import { Content, Wrapper, Profile, ProfileOptions } from './Account.styles';

// Components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faIdCard,
	faCaretDown,
	faRightFromBracket,
	faIdBadge
} from '@fortawesome/free-solid-svg-icons';

const Account = ({ user }) => {
	const [toggled, setToggled] = useState(false);

	const toggleDropdown = () => {
		setToggled(!toggled);
	}

	return (
		<Wrapper>
			<Content className="content" toggled={ toggled }>
				<Profile id="dropdown" className="dropdown" onClick={ toggleDropdown }>
					<span className="dropdown-text">
						<FontAwesomeIcon className="icon" icon={ faIdCard } />
						{ user.user.first_name } { user.user.last_name }
						<FontAwesomeIcon className="icon" icon={ faCaretDown } />
					</span>
				</Profile>
				<ProfileOptions toggled={ toggled }>
					<Link to="/" className="dropdown-item">
						<FontAwesomeIcon className="icon" icon={ faIdBadge } />
						View Profile
					</Link>
					<Link to="/logout" className="dropdown-item">
						<FontAwesomeIcon className="icon" icon={ faRightFromBracket } />
						Logout
					</Link>
				</ProfileOptions>
			</Content>
		</Wrapper>
	);
};

export default Account;