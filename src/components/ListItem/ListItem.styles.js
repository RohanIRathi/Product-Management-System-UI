import styled from 'styled-components';

export const Item = styled.li`
	text-decoration: none;
	font-size: var(--fontSmall);
	padding: 10px 20px;
	list-style-type: none;
	border: solid 1px var(--dark);
	background: var(--light);
	display: flex;
	justify-content: space-between;

	:hover {
		background: linear-gradient(90deg, var(--lightGrey), var(--light));
	}

	:first-of-type {
		border-top-left-radius: 5px;
		border-top-right-radius: 5px;
	}
	:last-of-type {
		border-bottom-left-radius: 5px;
		border-bottom-right-radius: 5px;
	}
`;