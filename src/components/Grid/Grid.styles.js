import styled from 'styled-components';

export const Wrapper = styled.div`
	width: 100%;
	max-width: var(--maxWidth);
	margin: 0 auto;
	padding: 20px;
	/* display: flex;
	flex-direction: column; */

	h1 {
		color: var(--midGrey);

		@media screen and (max-width: 768px) {
			font-size: var(--fontBig);
		}
	}
`;

export const Content = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
	grid-gap: 2rem;
`;