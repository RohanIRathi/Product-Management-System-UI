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
		width: 75%;
		height: 40px;
		border: 1px solid var(--primary);
		border-radius: 10px;
		margin: 10px 0;
		padding: 10px;
	}

	Button {
		margin: 10px 26% 0 auto;
	}

	.error {
		color: var(--danger);
		font-size: var(--fontSmall);
	}
`;