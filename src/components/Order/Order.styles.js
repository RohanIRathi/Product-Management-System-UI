import styled from 'styled-components';

export const Wrapper = styled.div`
	height: 100%;
	flex-grow: 1;
	padding: 1rem;
`;

export const Content = styled.div`
	display: flex;
	height: 100%;
	flex-direction: column;

	Button {
		align-self: flex-end;
		margin: 20px;
	}
`;

export const OrderDate = styled.div`
	display: flex;
	width: 100%;
	align-items: center;
	justify-content: flex-end;
	height: 50px;
	border: 1px solid var(--black);
	border-bottom: none;

	.date {
		display: flex;
		align-items: center;
		width: 50%;
		padding: 10px;
	}

	span {
		margin: 5px;
	}
`;

export const Users = styled.div`
	height: 25%;
	display: flex;
	border: 1px solid var(--black);
	border-bottom: none;
`;

export const User = styled.div`
	height: 100%;
	width: 50%;
	padding: 0.8rem;

	:first-of-type {
		border-right: 1px solid var(--black);
	}

	h3 {
		margin-bottom: 5px;
	}

	p {
		color: var(--black);
		word-wrap: break-word;
		margin-top: 5px;
	}
`;

export const Table = styled.table`
	flex-grow: 1;
	border: 1px solid black;
	border-collapse: collapse;
`;

export const TableHead = styled.thead`
	height: 50px;
	font-size: 25px;
`;

export const TableRow = styled.tr`
	height: 1rem;

	:hover {
		background-color: var(--primary);
	}

	:nth-of-type(even) {
		background-color: #e5e5e5;

		:hover {
			background-color: var(--primary);
		}
	}

	.number {
		text-align: end;
	}
`;

export const TableHeader = styled.th`
	height: 1rem;
	border: 1px solid var(--black);
	background-color: var(--dark);
	color: var(--light);

	:first-of-type {
		width: 50%;
	}

	:last-of-type {
		width: 25%;
	}
`;

export const TableBody = styled.tbody`
	height: 80%;
`;

export const TableData = styled.td`
	height: 50px;
	padding: 10px;
	border: 1px solid var(--black);
`;

export const TableFooter = styled.tfoot`
	height: 50px;
	font-weight: bold;

	tr {
		background-color: var(--secondary);
		color: var(--light);
	}
`;