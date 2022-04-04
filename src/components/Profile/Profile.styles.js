import styled from 'styled-components';

export const Wrapper = styled.div`
	margin: 0;
	padding: 10px 20px;
	flex-grow: 1;
	height: 90%
`;

export const Content = styled.div`
	margin: 10px;
`;

export const Details = styled.div`
	margin: 20px 0;
`;

export const Data = styled.div`
	display: flex;
`;

export const DataTitle = styled.div`
	margin: 5px;
	font-size: 1.2rem;
	width: 30%;
`;

export const DataItem = styled.div`
	margin: 5px;
	font-size: 1.2rem;

	a {
		color: blue;
	}

	a:hover a:active {
		color: purple;
	}

	a:visited {
		color: red;
	}
`;

export const Info = styled.div`
	border: 1px solid transparent;
	border-bottom: 1px solid var(--dark);
	display: flex;
	justify-content: space-between;

	.edit-button {
		align-self: flex-start;
		margin-top: 10px;
		margin-right: 10px;
		border-radius: 5px;
		background-color: var(--lightGrey);
		color: var(--darkGrey);
		padding: 7px;
		cursor: pointer;

		:hover {
			background-color: var(--dark);
			color: var(--light);
		}
	}
`;

export const Title = styled.h1`
	color: var(--black);
	margin: 10px 0;
`;

export const Address = styled.p`
	color: var(--dark);
	margin: 10px 0;
	font-size: 1.1rem;
	max-width: 65%;
	word-break: normal;
`;