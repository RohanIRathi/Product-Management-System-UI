import React from 'react';

// Styles
import { Wrapper, Content } from './List.styles';

const List = ({ children }) => {
	return (
		<Wrapper>
			<Content>
				<div className="title">
					<span>Retailer</span>
					<span>Pending Amount</span>
				</div>
				<div>{ children }</div>
			</Content>
		</Wrapper>
	)
}

export default List;