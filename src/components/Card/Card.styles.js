import styled from 'styled-components';

export const Wrapper = styled.div`
	width: 100%;
	min-height: 100px;
	background: var(--light);
	max-width: 720px;
	transition: all 0.5s;
	border-radius: 20px;
	animation: animateCard 1s;
	padding: 20px;

	:hover {
		opacity: 0.7;
	}

	@keyframes animateCard {
		from {
			opacity: 0;
			width: 0%;
			height: 0%;
		}
		to {
			opacity: 1;
			width: 100%;
			height: 100%;
		}
	}

	p {
		color: var(--black);
		display: inline;
	}
`;