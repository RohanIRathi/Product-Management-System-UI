import styled from 'styled-components';

export const Wrapper = styled.div`
	flex-grow: 1;
	padding: 10px;
`;

export const Content = styled.div`
	height: 100%;
	padding: 10px;
	display: flex;
	flex-direction: column;
`;

export const Details = styled.div`
	border: 1px solid var(--black);
	border-radius: 10px 10px 0 0;
	display: flex;

	.column {
		width: 50%;
	}

	.column:first-child {
		border-right: 1px solid var(--black);
	}
`;

export const Row = styled.div`
	height: 50px;
	display: flex;
	align-items: center;

	.title {
		padding: 0 10px;
		font-size: 1.2rem;
		width: 35%;
	}

	.data {
		font-size: 1.3rem;
		font-weight: 600;
	}
`;

export const Orders = styled.div`
	border: 1px solid var(--black);
	border-top: none;
	border-radius: 0 0 10px 10px;
	flex-grow: 1;

	h1 {
		color: var(--black);
		margin: 10px;
	}
`;