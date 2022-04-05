import styled from 'styled-components';

export const Item = styled.li`
	width: 100%;
	text-decoration: none;
	font-size: var(--fontSmall);
	padding: 10px 20px;
	list-style-type: none;
	border: solid 1px var(--dark);
	border-bottom: none;
	background: var(--light);
	color: var(--black);

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

	:first-of-type {
		border-top-left-radius: 5px;
		border-top-right-radius: 5px;
	}
	:last-of-type {
		border-bottom-left-radius: 5px;
		border-bottom-right-radius: 5px;
		border-bottom: solid 1px var(--dark);
	}
`;