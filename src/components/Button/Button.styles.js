import styled, { css } from "styled-components";

export const Wrapper = styled.button`
	display: block;
	background: transparent;
	color: var(--black);
	border-radius: .25rem;
	border: 1px solid var(--black);
	width: 150px;
	height: 50px;
	font-size: 20px;

	:hover {
		background: var(--black);
		cursor: pointer;
		color: var(--white);
	}

	${props => props.theme === "primary" && css`
		color: var(--primary);
		border: 1px solid var(--primary);

		:hover {
			background: var(--primary);
		}
	`};

	${props => props.theme === "secondary" && css`
		color: var(--secondary);
		border: 1px solid var(--secondary);

		:hover {
			background: var(--secondary);
		}
	`};

	${props => props.theme === "success" && css`
		color: var(--success);
		border: 1px solid var(--success);

		:hover {
			background: var(--success);
		}
	`};

	${props => props.theme === "danger" && css`
		color: var(--danger);
		border: 1px solid var(--danger);

		:hover {
			background: var(--danger);
		}
	`};

	${props => props.theme === "warning" && css`
		color: var(--warning);
		border: 1px solid var(--warning);

		:hover {
			background: var(--warning);
		}
	`};

	${props => props.theme === "info" && css`
		color: var(--info);
		border: 1px solid var(--info);

		:hover {
			background: var(--info);
		}
	`};

	${props => props.theme === "light" && css`
		color: var(--light);
		border: 1px solid var(--light);

		:hover {
			color: var(--dark);
			background: var(--light);
		}
	`};

	${props => props.theme === "dark" && css`
		color: var(--dark);
		border: 1px solid var(--dark);

		:hover {
			background: var(--dark);
		}
	`};
`;