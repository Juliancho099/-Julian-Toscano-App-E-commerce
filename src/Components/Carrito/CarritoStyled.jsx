import styled from 'styled-components';

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
	transition: right .5s ease, box-shadow  ease;
	box-shadow: ${({ open }) => (open ? '0 0 0 100vmax rgba(0, 0, 0, 0.5)' : 'none')};
	z-index: 5;

	@media (min-width: 768px) {
		width: 50%;
		right: ${({ open }) => (open ? '0' : '-50%')};
	}

	@media (min-width: 990px) {
		width: 45%;
		right: ${({ open }) => (open ? '0' : '-45%')};
	}

	@media (min-width: 1200px) {
		width: 25%;
		right: ${({ open }) => (open ? '0' : '-25%')};
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
		width: 100%;
		padding: 2rem;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.carrito-item {
		display: grid;
		grid-template-columns: 40% 60%;
		grid-auto-rows: auto;
		gap: 1rem;
		width: 100%;
		justify-content: space-between;
		align-items: center;

		.cont-img {
			width: 50%;
			display: flex;
			align-items: center;
			cursor: pointer;

			img {
				width: 100%;
				border: 1px solid #000;
			}
		}

		.carrito-info {
			width: 50%;
			display: flex;
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

				small {
					align-self: center;
					text-align: center;
					width: 100%;
				}

				p {
					width: 100%;
					align-self: center;
				}
			}
		}
	}

	.carrito-acciones {
		position: sticky;
		bottom: 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		padding: 1rem;
		z-index: 11;
		background-color: #f1ede9;
		border-top: 1px solid #ccc;

		.carrito-total {
			width: 50%;
			font-size: 1.3rem;
			font-weight: bold;
			margin-top: 1rem;
		}

		.btn-carrito {
			padding: 1rem;
			font-size: 1.2rem;
			border: 1px solid #000;
			text-align: center;
			margin: auto 10px;
			transition: all 0.5s ease;
			border-radius: 10px;

			&:hover {
				cursor: pointer;
				color: #d30000;
				border: 1px solid #d30000;
				transition: all 0.5s ease;
			}
		}
	}
`;
