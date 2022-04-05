import styled from 'styled-components';

export const Wrapper = styled.div`
	width: 100%;
	max-width: var(--maxWidth);
	margin: 0 auto;
	padding: 10px;
`;

export const Content = styled.ul`
	padding: 0 10px;

	.title {
		display: flex;
		justify-content: space-between;
		padding: 5px 20px;
		font-size: var(--fontMed);
	}

	.title-text:last-of-type {
		text-align: end;
	}
`;