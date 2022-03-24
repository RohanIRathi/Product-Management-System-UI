import styled from "styled-components";

export const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: inline;
	flex-direction: column;
	margin: 0 auto;
	max-width: 500px;
	padding: 20px;
	color: var(--white);

	input {
		height: 40px;
		border: 1px solid var(--primary);
		border-radius: 10px;
		margin: 10px 0;
		padding: 10px;
	}

	Button {
		margin: 10px auto;
	}

	.error-div {
		width: 50%;
	}
`;

export const RegistrationForm = styled.form``;

export const LongInput = styled.input`
	width: 100%;
`;

export const InputGroup = styled.div`
	width: 100%;
	display: flex;
	align-items: flex-start;
	justify-content: space-between;

	div {
		width: 49%;
	}
`;

export const ShortInput = styled.input`
	width: 100%;
`;

export const DropDown = styled.select`
	width: 100%;
	height: 40px;
	background-color: transparent;
	border: 1px solid var(--primary);
	border-radius: 10px;
	margin: 10px 0;
	padding: 10px;
	cursor: pointer;
`;

export const Option = styled.option`
	width: 100%;
`;