import styled from "styled-components";

export const Wrapper = styled.div`
	margin: 10px auto;
	max-width: 500px;
	text-align: center;

	h1 {
		color: var(--black);
	}

	.link {
		text-decoration: none;
	}

	Button {
		margin: 10px;
	}

	.links {
		display: flex;
		flex-direction: row;
		justify-content: center;
		width: 100%;
	}
`;