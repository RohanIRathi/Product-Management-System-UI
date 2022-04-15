import styled from 'styled-components';

export const Wrapper = styled.div`
	flex-grow: 1;
	padding: 20px;
`;

export const Content = styled.div`
	height: 100%;
	margin: 10px 0;

	form {
		display: flex;
		justify-content: flex-end;

		Button {
			margin: 10px;
		}
	}
`;

export const Table = styled.table`
	width: 100%;
	border-collapse: collapse;
`;

export const TableBody = styled.tbody`
	border: 1px solid var(--black);
`;

export const TableRow = styled.tr`
	.title {
		width: 25%;
	}

	.data {
		font-weight: 600;
	}

	.form {
		padding: 0 10px;
	}
`;

export const TableData = styled.td`
	padding: 10px; 
	font-size: 1.2rem;
`;

export const Input = styled.input`
	width: 500px;
	height: 100%;
	border-radius: 5px;
	border: 1px solid var(--primary);
	font-size: 1.2rem;
`;