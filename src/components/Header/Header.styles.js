import styled from "styled-components";

export const Wrapper = styled.div`
	background: var(--dark);
	padding: 0 20px;
`;

export const Content = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 5px 0;
	margin: 0 auto;
	color: var(--white);

	a {
		color: var(--white);
		text-decoration: none;
	}
`;

export const Auth = styled.div`
	display: flex;
	width: 50%;
	justify-content: end;
	Button {
		width: 100px;
		margin: 0 20px;
	}
`;

export const LogoImg = styled.img`
	width: 100px;
`;