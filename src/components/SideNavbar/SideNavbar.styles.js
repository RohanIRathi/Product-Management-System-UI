import styled, { css } from "styled-components";

export const Wrapper = styled.div`
	width: 15%;
	background-color: var(--dark);
	transition: 0.2s ease;
	overflow-x: hidden;
	padding-top: 5px;
	display: flex;
	flex-direction: column;
	align-items: center;

	.fontAwesomeIcon {
		color: var(--white);
		margin: 10px 25px;
		align-self: flex-start;
		cursor: pointer;

		:hover {
			opacity: 0.8;
		}
	}

	.closedNavbarIcon {
		align-self: center;
		margin: 10px auto;
	}
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