import styled from "styled-components";

export const DropdownMenu = styled.ul`
	display: ${({ open }) => (open ? 'block' : 'none')};
	position: absolute;
	top: 17.5%;
	left: 44%;
	transform: translateX(-50%);
	width: 150px; /* Adjust the width as needed */
	background-color: #f0f0f0;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	list-style-type: none;
	padding: 0;
	margin: 0;
	z-index: 10; /* Ensure it's above other elements */

	@media (min-width: 990px) {
		position: absolute;
	}

	@media (min-width: 1150px) {
		transform: translateX(-44%);
	}
`;

export const DropdownItem = styled.li`
	padding: 0.5rem 1rem;
	cursor: pointer;

	&:hover {
		background-color: #fff;
	}
`;