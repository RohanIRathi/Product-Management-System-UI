import React from 'react';

// Styles
import { Wrapper, Content } from './List.styles';

const List = ({ children }) => {
	return (
		<Wrapper>
			<Content>
				<div className="title">
					{ children[0] }
				</div>
				<div>{ children[1] }</div>
			</Content>
		</Wrapper>
	)
}

export default List;