import styled from 'styled-components';

export const ItemListSection = styled.section`
	display: flex;
	flex-flow: row wrap;
	justify-content: start;
	align-items: center;
	gap: 1rem;
	width: 90           %;
	margin: 0 auto;

    @media (min-width: 990px) {
        width: 75%;
    }
`;

export const ItemCard = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	gap: 1rem;
    max-height: 700px;
    height: 100%;
	width: 100%;
	border: 1px solid #faf;

	@media (min-width: 768px) {
		width: 45%;
	}

	@media (min-width: 990px) {
		width: 23%;
	}
`;

export const ItemDesc = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    width: 100%;
    height: 100%;
`

export const ItemImg = styled.img`
    width: 100%;
`

export const ItemTitle = styled.h3`
    width: 100%;
    font-size: 1.2rem;
    text-align: center;
`

export const ItemPrice = styled.p`
    font-size: 1.2rem;
    text-align: center;
`

export const ItemButton = styled.button`
    width: 100%;
    padding: 1rem;
`