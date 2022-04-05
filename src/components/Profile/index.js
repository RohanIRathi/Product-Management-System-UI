import React from 'react';

// Styles
import {
	Address,
	Content,
	Data,
	DataItem,
	DataTitle,
	Details,
	Info,
	Title,
	Wrapper
} from './Profile.styles';

// Components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil } from '@fortawesome/free-solid-svg-icons';

// Hooks
import { useRetailersFetch } from '../../hooks/useRetailersFetch';

// {"id":1,"model":"User","username":"rohan",
// "first_name":"Rohan","last_name":"Rathi",
// "is_superuser":true,"is_staff":true,"is_active":true,
// "credit_score":0,"credit_limit":null,"contact":1234567890,
// "address":"Pune","pendingAmount":0,"distributor":null}

const Profile = ({ user }) => {
	const { retailers, error, loading } = useRetailersFetch();

	return (
		<Wrapper>
			<Content>
				<Info>
					<div>
						<Title>{ user.first_name } { user.last_name }</Title>
						<Address>{ user.address }</Address>
					</div>
					<a href="/editProfile"><FontAwesomeIcon className="edit-button" icon={ faPencil } /></a>
				</Info>
				<Details>
					<Data>
						<DataTitle>Role:</DataTitle>
						<DataItem>
							{ user.is_superuser && user.is_staff ? "Distributor": "Retailer" }
						</DataItem>
					</Data>
					<Data>
						<DataTitle>Username:</DataTitle>
						<DataItem>
							{ user.username }
						</DataItem>
					</Data>
					<Data>
						<DataTitle>Mobile No.:</DataTitle>
						<DataItem>
							{ user.contact }
						</DataItem>
					</Data>
					<Data>
						<DataTitle>Email:</DataTitle>
						<DataItem>
							{ user.email }
						</DataItem>
					</Data>
					<Data>
						<DataTitle>Password:</DataTitle>
						<DataItem>
							<a href="#">Change Password</a>
						</DataItem>
					</Data>
					{ user.is_superuser && user.is_staff && retailers && !error ? 
					<Data>
						<DataTitle>Retailers:</DataTitle>
						<DataItem>
							{ retailers.length } <a href='/viewRetailer'>(View All)</a>
						</DataItem>
					</Data>
					:
					<>
						<Data>
							<DataTitle>Distributor:</DataTitle>
							<DataItem>{ user.distributor.first_name } { user.distributor.last_name }</DataItem>
						</Data>
						<Data>
							<DataTitle>Credit Limit:</DataTitle>
							<DataItem>{ user.credit_limit }</DataItem>
						</Data>
						<Data>
							<DataTitle>Payment Pending:</DataTitle>
							<DataItem>{ user.pendingAmount }</DataItem>
						</Data>
					</>}
				</Details>
			</Content>
		</Wrapper>
	);
};

export default Profile;