import styled from 'styled-components'

export const Suma = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 25px;
	height: 25px;
	padding: 0.5rem;
	background-color: #000;
	color: #fff;
	font-size: 1.3rem;
	cursor: pointer;
`;

export const Resta = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 25px;
	height: 25px;
	padding: .5rem;
	background-color: #000;
	color: #fff;
	font-size: 1.3rem;
	cursor: pointer;
`;


export const CantidadCont = styled.p`
	font-size: 20px;
	font-weight: bold;
	margin: 0;
`

export const ContCantidad = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	height: auto;

	.count {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: .6rem;
		width: 100%;
		gap: 1rem;
	}

	.stock {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 2px;
		font-size: 1.1rem;

		span {
			font-weight: bold;
			font-size: 1.3rem;
		}
	}

	.count-btn {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 5px;
	}

	.eliminar {
		display: flex;
		width: 100%;
		justify-content: flex-end;
		padding: 1.2rem;
		gap: 1rem;

		svg {
			cursor: pointer;
			font-size: 1.3rem;
			transition: all 0.1s ease-out;

			&:hover {
				color: #900;
				transition: all 0.1s ease-out;
			}
		}
	}
`;