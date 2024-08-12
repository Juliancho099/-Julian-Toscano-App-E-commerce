import styled from "styled-components";

export const DropdownMenu = styled.ul`
	display: ${({ open }) => (open ? 'block' : 'none')};
	position: absolute;
	top: -1%;
	left: 0;
	width: 100%;
	height: 100vh; /* Adjust the width as needed */
	background-color: #f1ede9;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	list-style-type: none;
	margin-top: 10px;
	z-index: 10; /* Ensure it's above other elements */
	transition: all 2s ease-in;

	div {
		display: ${({ open }) => (open ? 'flex' : 'none')};
		justify-content: start;
		gap: 10px;
		padding: 0.5rem 1rem;
		align-items: flex-start;
		width: 100%;
		cursor: pointer;
		transition: all 0.5s ease;

		&:hover svg {
			transform: scale(1.1);
		}

		svg {
			font-size: 1rem;
		}

		p {
			font-size: 1.2rem;
			transition: all 0.5s ease;

			&:hover {
				text-decoration: underline;
			}
		}
	}

	@media (min-width: 990px) {
		position: absolute;
		top: 100%;
		left: 45%;
		width: 180px;
		transform: translateX(-45%);
		height: 120%;
		padding: 0;
		margin-top: 0;

		div {
			display: none;
		}
	}

	@media (min-width: 1200px) {
		transform: translateX(-40%);
	}

	@media (min-width: 1700px) {
		transform: translateX(-30%);
	}
`;

export const DropdownItem = styled.li`
	padding: 0.5rem 1rem;
	cursor: pointer;
	width: 100%;

	&:hover {
		background-color: #fff;
	}
`;