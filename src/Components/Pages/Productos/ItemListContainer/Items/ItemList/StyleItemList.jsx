import styled from 'styled-components';

export const ItemListSection = styled.section`
	display: grid;
	grid-template-columns: minmax(50%, 1fr);
	justify-content: center;
	align-items: center;
	gap: 1rem;
	width: 100%;
	margin: 0 auto;
	padding: 0.5rem;

	@media (min-width: 500px) {
		grid-template-columns: repeat(2,minmax(50%, 1fr));
		width: 80%;
	}

	@media (min-width: 990px) {
		width: 75%;
		grid-template-columns: repeat(${(props) => props.$columns || 1}, 1fr);
		margin: auto;
		margin-bottom: 50px;
	}
`;

export const ItemCard = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	gap: 1rem;
	max-height: 800px;
	height: 100%;
	max-width: 700px;
	margin: 0 auto;
	width: 100%;
	cursor: pointer;

	&:hover img {
		transform: translateY(-10px);
		border: 2px solid;
		transition: all 0.1s ease-out;
	}

	@media (min-width: 768px) {
		
	}

	@media (min-width: 990px) {
	}
`;

export const ContainImg = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
`;

export const ItemDesc = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: space-between;
	gap: 1rem;
	width: 100%;
	height: 100%;

	.botones {
		width: 100%;
		display: flex;
		gap: 10px;

		a:first-of-type {
			background-color: #000;
			color: #fff;
		}

		a {
			width: 100%;
			text-decoration: none;
			color: inherit;
			cursor: pointer;
			padding: 1rem 0.5rem;
			border: 1px solid #000;
			text-align: center;
			transition: all 0.1s ease-out;

			&:hover {
				box-shadow: 0 0 3px 0 #000;
				transition: all 0.1s ease-out;
				font-weight: bold;

			}
		}
	}
`;

export const ItemImg = styled.img`
	width: 100%;
	overflow: hidden;
	border: 1px solid #000;
	cursor: pointer;
	transition: all 0.1s ease-out;
	filter: drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.3));
	background-color: #f6f6f6;
`;

export const ItemTitle = styled.h3`
	width: 100%;
	font-size: 1.2rem;
`;

export const ItemPrice = styled.p`
	font-size: 1.2rem;
	text-align: center;
	line-height: 1rem;
	letter-spacing: 3px;
`;

export const ItemButton = styled.button`
	width: 100%;
	padding: 1rem;
	background-color: transparent;
	border: 1px solid #000;
	cursor: pointer;
`;
