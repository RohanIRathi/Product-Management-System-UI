import styled from 'styled-components';

export const Item = styled.li`
	width: 100%;
	text-decoration: none;
	font-size: var(--fontSmall);
	padding: 10px 20px;
	list-style-type: none;
	background: var(--light);
	color: var(--black);
	border-radius: 5px;

	span {
		display: inline-block;
	}

	span:last-of-type {
		text-align: end;
	}

	:hover {
		color: var(--dark);
		background: linear-gradient(90deg, var(--lightGrey), var(--light));
	}
`;