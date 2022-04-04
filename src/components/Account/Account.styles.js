import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
	display: block;
	height: inherit;
	align-self: stretch;
`;

export const Content = styled.div`
	display: block;
	height: 100%;
	padding: 0 20px;
	position: relative;
	border-radius: 5px;

	.icon {
		margin: 0 10px;
	}

	:hover {
		background-color: var(--lightGrey);
		color: var(--dark);
	}

	${props => props.toggled && css`
		border-radius: 5px 5px 0 0;
		background-color: var(--lightGrey);
		color: var(--dark);
	`}
`;

export const Profile = styled.div`
	display: flex;
	height: 100%;
	cursor: pointer;
	border-radius: 5px;

	.dropdown-text {
		align-self: center;
	}
`;

export const ProfileOptions = styled.div`
	display: none;

	${props => props.toggled && css`
		display: block;
		color: var(--light);
		position: absolute;
		z-index: 1;
		background-color: var(--dark);
		align-self: stretch;
		width: 100%;
		left: 0;
		border-radius: 5px;

		.dropdown-item {
			min-height: 50px;
			display: flex;
			justify-content: flex-start;
			align-items: center;
			border-radius: 5px;
		}

		.dropdown-item:hover {
			background-color: var(--darkGrey);
		}
	`};
`;