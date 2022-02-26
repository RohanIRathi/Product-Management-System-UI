import styled, { css } from "styled-components";

export const Wrapper = styled.div`
	height: 100%;
	width: 15%;
	position: fixed;
	z-index: 1;
	background-color: var(--dark);
	transition: 0.5s ease;
	overflow-x: hidden;
	padding-top: 20px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const Option = styled.a`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 100%;
	text-align: start;
	padding: 5px 20px;
	height: 50px;
	text-decoration: none;
	color: var(--light);
	border-radius: 0 40px 40px 0;

	:hover {
		color: var(--dark);
		background-color: var(--light);
	}

	${props => props.active && css`
		color: var(--light);
		background-color: var(--secondary);
	`
	};
`;