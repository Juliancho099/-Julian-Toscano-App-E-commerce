import styled from 'styled-components';

export const BgContainer = styled.div`
	display: ${({ open }) => (open ? 'block' : 'none')};
	position: absolute;
	top: -160%;
	width: 100vw;
	height: 100vh;
	background-color: rgb(0, 0, 0, 0.5);
	z-index: 5;
`;

export const Contenedor = styled.div`
	position: fixed;
	top: 0;
	right: ${({ open }) => (open ? '0' : '-100%')};
	height: 100vh;
	width: 100%;
	background-color: #f1ede9;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	transition: right 0.5s ease, box-shadow ease;
	box-shadow: ${({ open }) =>
		open ? '0 0 0 100vmax rgba(0, 0, 0, 0.5)' : 'none'};
	z-index: 7;
	cursor: pointer;

	@media (min-width: 768px) {
		width: 60%;
		right: ${({ open }) => (open ? '0' : '-60%')};
	}

	@media (min-width: 990px) {
		width: 55%;
		right: ${({ open }) => (open ? '0' : '-55%')};
	}

	@media (min-width: 1200px) {
		width: 40%;
		right: ${({ open }) => (open ? '0' : '-40%')};
	}
	@media (min-width: 1800px) {
		width: 30%;
		right: ${({ open }) => (open ? '0' : '-30%')};
	}

	.carrito-top {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 100px;
		width: 100%;
		padding: 1rem;
		gap: 1rem;
		border-bottom: 1px solid #ccc;

		h2 {
			font-size: 1.3rem;
			font-weight: bold;
		}

		svg {
			cursor: pointer;
			font-size: 1.5rem;
		}
	}

	.carrito-body {
		flex-grow: 1;
		overflow-y: scroll;
		overflow-x: hidden;
		width: 100%;
		padding: 1rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 10px;

		.carrito-vacio {
			width: 100%;
			height: 100vh;
			display: grid;
			place-items: center;
			justify-content: space-between;
			text-align: center;
			padding: 1rem;
			grid-template-rows: 40% 50%;

			.carrito-vacio-text {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				gap: 1rem;
			}

			.carrito-vacio-button {
				display: flex;
				justify-content: center;
				border: 1px solid #000;
				background: transparent;
				width: 100%;
				padding: 1rem;
				font-size: 1.3rem;
				background-color: #000;
				color: #fff;
				font-weight: 500;

				&:hover {
					box-shadow: 0 0 3px 0 #000;
					font-weight: bold;
				}
			}

			.destacado {
				width: 90%;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: flex-start;
				gap: 1rem;
			}

			.destacado-img {
				width: 100%;

				img {
					width: 100%;
					border: 1px solid #000;
				}
			}

			.destacado-button {
				width: 100%;
				align-self: flex-start;
				padding: 1rem;
				font-size: 1.3rem;
				background-color: #000;
				color: #fff;
				font-weight: 500;

				&:hover {
					box-shadow: 0 0 3px 0 #000;
					font-weight: bold;
				}
			}
		}
	}

	.carrito-item {
		display: grid;
		grid-template-columns: 30% 70%;
		width: 100%;
		justify-content: space-between;
		align-items: center;
		padding: 0.7rem;
		gap: 40px;
		border: 1px solid #444;
		border-radius: 5px;
		cursor: pointer;

		.cont-img {
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: flex-start;
			cursor: pointer;

			img {
				width: 100%;
				object-fit: contain;
				overflow: hidden;
				object-position: start;
			}
		}

		.carrito-info {
			position: relative;
			width: 45%;
			padding: 1.3rem;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			align-items: flex-end;
			gap: 20px;

			.info {
				width: 80%;
				display: grid;
				grid-template-columns: repeat(4, 50px);
				justify-content: center;
				align-items: flex-start;
				gap: 1rem;

				div {
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: flex-start;
					text-align: center;
					width: 90%;
					padding: 0.2rem;
				}

				small {
					align-self: center;
					text-align: center;
					min-width: 95px;
					width: 100%;
					font-size: 0.8rem;
				}
				h3 {
					width: 100%;
					font-size: 1rem;
				}

				p {
					width: 100%;
					align-self: center;
				}
			}

			.trash {
				position: absolute;
				font-size: 1.5rem;
				bottom: 0;
				left: 150%;
				display: flex;
				justify-content: flex-end;
				transition: all 0.5s ease;
				padding: 0.1rem;

				&:hover {
					cursor: pointer;
					color: #d30000;
					transition: all 0.5s ease;
				}
			}
		}
	}

	.carrito-acciones {
		position: sticky;
		bottom: 0;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
		width: 100%;
		padding: 1rem;
		z-index: 11;
		background-color: #f1ede9;
		border-top: 1px solid #ccc;
		gap: 20px;

		.carrito-total {
			width: 50%;
			font-size: 1.3rem;
			font-weight: bold;
		}

		.botones {
			width: 100%;
			display: flex;
			justify-content: space-between;
			align-items: center;
			gap: 1rem;

			button {
				display: flex;
				justify-content: center;
				align-items: center;
				padding: 10px;
				width: 100%;
				font-size: 1.2rem;
				border: 1px solid #000;
				border-radius: 10px;
				transition: all 0.2s ease;

				&:hover {
					cursor: pointer;
					box-shadow: 0 0 3px 0 #000;
					transition: all 0.2s ease;
					font-weight: bold;
				}
			}

			button:last-of-type {
				background-color: #000;
				color: #fff;

				&:hover {
					background-color: #037c17;
					color: #fff;
				}
			}

			.btn-carrito {

				&:hover {
					cursor: pointer;
					background-color: #d30000;
					color: #fff;
				}
			}
		}
	}
`;
