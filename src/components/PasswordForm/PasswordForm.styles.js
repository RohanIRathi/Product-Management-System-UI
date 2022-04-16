import styled from 'styled-components';

export const Wrapper = styled.div`
	padding: 20px;
	flex-grow: 1;
`;

export const Content = styled.div`
	margin: 10px auto;
	max-width: var(--maxWidth);
	min-width: 500px;
	width: fit-content;

	h1 {
		color: var(--black);
		text-align: center;
		padding: 20px;
		margin: 5px 0;
		border-bottom: 1px solid var(--lightGrey);
	}

	.error {
		text-align: center;
	}
`;

export const Form = styled.form`
	padding: 20px;
	border: 1px solid transparent;
	box-shadow: 10px 10px 10px var(--secondary);

	.form-group {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-direction: column;

		.input-label {
			margin-top: 5px;
		}
	}

	Button {
		margin: 10px 5% 10px auto;
	}
`;

export const Input = styled.input`
	margin: 10px;
	padding: 10px;
	border-radius: 10px;
	border: 1px solid var(--primary);
	width: 100%;
`;