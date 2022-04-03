import styled from 'styled-components';

export const Wrapper = styled.div`
	margin: 5px 10px;
	width: 100%;
`;

export const Content = styled.form`
	margin: 10px auto;
	padding-top: 10px;
	background: var(--light);
	width: 50%;
	border: 1px solid transparent;
	box-shadow: 10px 10px 10px var(--secondary);

	.error {
		margin: 10px;
	}

	input {
		width: calc(100% - 200px);
		height: 50px;
		border: 1px solid var(--primary);
		border-radius: 25px;
		padding: 20px;
		margin-right: 10px;
	}

	.inputGroup {
		display: flex;
		justify-content: space-between;
		margin: 10px auto;

		label {
			align-self: center;
			text-align: start;
			margin-left: 10px;
		}
	}

	button {
		margin: 30px 30px 10px auto;
	}
`;