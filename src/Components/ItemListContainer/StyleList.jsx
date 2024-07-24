import styled from 'styled-components';

export const ItemListContainer = styled.main`
    width: 100%;
	padding: 1rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 1rem;
`;

export const ItemTitulo = styled.h2`
    width: 90%;
    margin: 0 auto;
    padding: 1rem;
	font-size: 1.5rem;
	font-weight: bold;
	align-self: flex-start;
	text-align: left;

    @media (min-width: 990px) {
        width: 75%;
    }
`;
