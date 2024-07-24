import styled from 'styled-components';

export const Header = styled.header`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 1rem;
	background-color: #fff;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	width: 100%;
	max-width: 1980px;
	margin: 0 auto;
	height: 100px;

	@media (min-width: 990px) {
		height: 160px;
	}
`;

export const NavSeccion = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	max-height: 180px;
	width: 100%;

	@media (min-width: 990px) {
		display: grid;
		justify-content: space-between;
		gap: 1rem;
		grid-template-rows: 60% 40%;
		grid-template-areas:
			'search logo cart'
			'nav nav nav';
		width: 90%;
	}
`;

export const SearchContainer = styled.div`
	grid-area: search;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	width: 100%;
	transition: transform 0.2s ease;

	img {
		width: 26px;
		cursor: pointer;
	}

	&:hover {
		transform: scale(1.05);
		transition: all 0.3s ease;
	}
`;

export const LogoContainer = styled.div`
	grid-area: logo;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 1;

	img {
		width: 100%;
	}

	@media (min-width: 990px) {
		img {
			width: 36%;
		}
	}
`;

export const CartContainer = styled.div`
	grid-area: cart;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	width: 100%;

	button {
		border: none;
		background-color: transparent;
		cursor: pointer;
		display: flex;
		align-items: end;

		span{
			font-size: 1rem;
			color: #fff;
			border: 2px solid #000;
			background-color: #000;
			border-radius: 2rem;
			width: 20px;

			
		}
	}
	img {
		width: 26px;
	}
`;

export const NavContainer = styled.nav`
	grid-area: nav;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	width: 100%;
	z-index: 2;
`;

export const MenuContainer = styled.ul`
	position: absolute;
	top: 102px;
	left: ${({ open }) => (open ? '0' : '-100%')};
	width: 100%;
	height: 100vh;
	display: flex;
	flex-flow: column;
	justify-content: start;
	align-items: flex-start;
	padding: 1rem;
	list-style-type: none;
	gap: 20px;
	transition: left 0.1s ease-in-out;
	background-color: #fff;

	@media (min-width: 990px) {
		position: initial;
		flex-direction: row;
		align-items: end;
		justify-content: center;
		padding: 1.5rem;
		height: auto;
		background-color: transparent;
	}
`;

export const MenuItem = styled.li`
	width: 100%;
	display: flex;
	justify-content: start;
	align-items: flex-start;

	@media (min-width: 990px) {
		width: auto;
		justify-content: center;
		align-items: center;
	}
`;

export const MobileIcon = styled.div`
	display: flex;
	align-items: center;
	cursor: pointer;

	svg {
		font-size: 2em;
	}

	@media (min-width: 990px) {
		display: none;
	}
`;


