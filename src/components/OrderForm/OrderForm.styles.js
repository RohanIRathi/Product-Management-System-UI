import styled from 'styled-components';
import select from 'react-select';

export const Wrapper = styled.div`
	flex-grow: 1;
	padding: 10px;
	border-collapse: collapse;
`;

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
	padding: 10px 0;
	position: relative;

	.submitButton {
		align-self: flex-end;
		margin: 10px 20px 0 0;
	}
`;

export const Date = styled.div`
	height: 50px;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	padding: 20px;
	border: 1px solid var(--black);
	border-bottom: none;
`;

export const Users = styled.div`
	height: 25%;
	width: 100%;
	display: flex;
	flex-direction: row;
`;

export const User = styled.div`
	width: 50%;
	height: 100%;
	border: 1px solid var(--black);
	padding: 20px;

	:first-of-type {
		border-right: none;
	}

	h2 {
		margin: 5px 0;
	}

	h3 {
		margin: 5px 0;
	}

	p {
		margin: 5px 0;
		color: var(--black);
	}
`;

export const Title = styled.div`
	margin: 10px 0;
	height: 50px;
	width: 100%;
	background-color: var(--dark);
	color: var(--light);
	display: flex;
	flex-direction: row;
	align-items: center;

	div {
		font-size: var(--fontMed);
		text-align: center;
	}
`;

export const Product = styled.div`
	width: 50%;
	padding: 0 20px;
	align-self: center;

	.select-product {
		width: 100%;

		div:first-of-type {
			border-color: var(--secondary);
		}
	}
`;

export const Quantity = styled.div`
	width: 12.5%;
	padding: 0 5px;
	align-self: center;

	input {
		width: 100%;
		height: 38px;
		border: 1px solid var(--secondary);
		border-radius: 5px;
	}
`;

export const Discount = styled.div`
	width: 12.5%;
	padding: 0 5px;
	align-self: center;

	input {
		width: 100%;
		height: 38px;
		border: 1px solid var(--secondary);
		border-radius: 5px;
	}
`;

export const Amount = styled.div`
	width: 25%;
	padding: 0 20px;
	margin: auto 0;
`;

export const Delete = styled.div`
	width: 5%;
	display: flex;
	align-items: center;
	justify-content: center;

	.icon {
		width: 50%;
		height: auto;
	}

	:hover {
		cursor: pointer;
		color: var(--secondary);
	}
`;

export const ProductList = styled.div`
	width: 100%;
	height: fit-content;
	background-color: var(--light);
	display: flex;
	flex-direction: column;
	align-items: center;

	.number {
		text-align: end;
	}
`;

export const ListItem = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	height: 50px;
	border: 1px solid var(--black);
	border-bottom: none;

	:last-of-type {
		border-bottom: 1px solid var(--black);
		border-bottom-left-radius: 5px;
		border-bottom-right-radius: 5px;
	}

	:first-of-type {
		border-top-left-radius: 5px;
		border-top-right-radius: 5px;
	}

	:nth-of-type(even) {
		background-color: var(--lightGrey);
	}
`;

export const AddProduct = styled.div`
	margin: 10px 0;
	flex-grow: 1;
	height: fit-content;
`;

export const Footer = styled.div`
	display: flex;
	flex-direction: row;
	height: 50px;
	float: bottom;
	background-color: var(--secondary);
	padding: 0;
	align-items: center;
	width: 100%;

	.number {
		text-align: end;
	}
`;

export const Select = select;