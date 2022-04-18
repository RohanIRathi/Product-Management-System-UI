import React from "react";

// Styles
import {
	Wrapper,
	Content,
	Details,
	Row,
	Orders
} from "./Retailer.styles";

// Components
import List from "../List";
import ListItem from "../ListItem";

const titles = [
	"Order Date",
	"Retailer",
	"Order Amount"
]

const Retailer = ({ retailer, orders }) => {

	return (
		<Wrapper>
			<Content>
				<Details>
					<div className="column">
						<Row>
							<div className="title">Name:</div>
							<div className="data">{ retailer.first_name } { retailer.last_name }</div>
						</Row>
						<Row>
							<div className="title">Email:</div>
							<div className="data">{ retailer.email }</div>
						</Row>
						<Row>
							<div className="title">Mobile no.:</div>
							<div className="data">{ retailer.contact }</div>
						</Row>
						<Row>
							<div className="title">Address:</div>
							<div className="data">{ retailer.address }</div>
						</Row>
					</div>
					<div className="column">
						<Row>
							<div className="title">Credit Limit:</div>
							<div className="data">{ retailer.credit_limit }</div>
						</Row>
						<Row>
							<div className="title">Pending Amount:</div>
							<div className="data">{ retailer.pendingAmount }</div>
						</Row>
					</div>
				</Details>
				<Orders>
					<h1>Orders ({ orders.length })</h1>
					<List>
						{ titles.map((title, key) => (
							<div style={{ 'width': (100/titles.length).toString() + "%" }} className="title-text" key={ key }>{ title }</div>
						))}
						{ orders.length > 0 && orders.map(order => (
							<ListItem order={ order } key={ order.id } />
						))}
					</List>
				</Orders>
			</Content>
		</Wrapper>
	);
};

export default Retailer;