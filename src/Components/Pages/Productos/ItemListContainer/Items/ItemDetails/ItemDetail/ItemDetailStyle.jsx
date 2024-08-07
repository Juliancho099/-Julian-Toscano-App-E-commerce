import styled from 'styled-components'

export const ItemDetailSection = styled.section`
	display: flex;
	flex-flow: column;
	align-items: center;
	justify-content: center;
	margin: auto;
	width: 90%;
	gap: 20px;
	padding: 20px;

	@media (width >= 768px) {
		display: grid;
        align-items: flex-start;
		grid-template-columns: 2fr 1fr;
	}

	@media (width >= 990px) {
        width: 70%;
		grid-template-columns: repeat(2, minmax(1fr, 4fr));
	}
`;
export const ImgContain = styled.article`
    flex: 1;
	display: flex;
	flex-flow: column;
	align-items: center;
    justify-content: center;
    width: 100%;

    .galeria{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
        margin-top: 10px;
        width: 90%;

        .imagen-chica{
            width: 15%;
            height: 15%;
            cursor: pointer;
            border: 2px solid transparent;
            transition: border-color .3s ease;
        }

        .seleccionada{
            border-color: #000;
        }
    }

	
`;
export const DetailsContain = styled.article`
	flex: 2;
	display: flex;
	flex-flow: column;
	align-items: flex-start;
	gap: 20px;
	width: 100%;

	.descripcion {
		h3 {
			margin: 0;
			font-size: 24px;
			font-weight: bold;
		}
		p {
			margin: 0;
			font-size: 20px;
			color: #888;
		}

		small {
			display: block;
			margin-top: 5px;
			font-size: 14px;
			color: #aaa;
		}
	}

	.botones {
		display: flex;
		flex-flow: row wrap;
		width: 100%;
		gap: 10px;

		button {
			padding: 10px 20px;
			font-size: 16px;
			cursor: pointer;
			border: none;
			border-radius: 5px;
			transition: background-color 0.3s ease;
			width: 100%;
		}

		button:first-of-type {
			background-color: #000;
			color: #fff;
			&:hover {
				opacity: 0.8;
			}
		}
	}

	.detalles {
		p {
			margin: 0;
			font-size: 16px;
			line-height: 1.5;
			color: #444;
		}
	}

	@media (width >= 990px) {
		width: 80%;
	}
`;

export const Img = styled.img`
    max-width: 100%;
    max-height: 100%;
	height: auto;
`;