import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
	:root {
		--maxWidth: 1280px;
		--primary: #007bff;
		--secondary: #6c757d;
		--success: #28a745;
		--danger: #dc3545;
		--warning: #ffc107;
		--info: #17a2b8;
		--light: #f8f9fa;
		--dark: #343a40;
		--white: #fff;
		--lightGrey: #eee;
		--medGrey: #353535;
		--darkGrey: #1c1c1c;
		--black: #000;
		--fontSuperBig: 2.5rem;
		--fontBig: 2rem;
		--fontMed: 1.5rem;
		--fontSmall: 1rem;
	}

	* {
		box-sizing: border-box;
		font-family: 'Trebuchet MS', sans-serif;
	}

	body {
		margin: 0;
		padding: 0;

		h1 {
			font-size: var(--fontBig);
			font-weight: 600;
			color: var(--white);
		}

		h3 {
			font-size: 1.2rem;
			font-weight: 600;
		}

		p {
			font-size: var(--fontSmall);
			color: var(--white);
		}

		label {
			font-size: var(--fontSmall);
			color: var(--black);
			align-self: start;
			margin-left: 5px;
		}
	}
`;