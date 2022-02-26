import styled from "styled-components";

export const Wrapper = styled.div`
	display: flex;
	align-items: flex-start;
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
		margin: 10px 36% 0 auto;
	}
`;

export const LongInput = styled.input`
	width: 95%;
`;

export const InputGroup = styled.div`
	width: 100%;
	display: flex;
	align-items: flex-start;
	justify-content: space-between;

	div {
		width: 50%;
	}
`;

export const ShortInput = styled.input`
	width: 90%;
`;

export const DropDown = styled.select`
	width: 95%;
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