import styled from 'styled-components';

export const Header = styled.header`
	display: flex;
	position: sticky;
	top: 0;
	justify-content: center;
	align-items: center;
	padding: 1rem;
	background-color: #ffffffc1;
	backdrop-filter: blur(10px);
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	width: 100%;
	margin: 0 auto;
	height: 90px;
	z-index: 3;

	@media (min-width: 990px) {
		height: 170px;
	}
`;

export const NavSeccion = styled.div`
	display: grid;
	grid-template-columns: repeat(4, minmax(auto, 1fr));
	grid-template-rows: 70%;
	grid-template-areas: 'nav logo search cart';
	justify-content: center;
	align-items: center;
	padding: 1rem;
	width: 100%;
	gap: 1rem;
	height: 100%;

	@media (min-width: 990px) {
		display: grid;
		justify-content: space-between;
		height: 190px;
		grid-template-columns: 20px 1fr 20px;
		grid-template-rows: 60% 40%;
		grid-template-areas:
			'search logo cart'
			'nav nav nav';
		width: 75%;
	}
`;

export const SearchContainer = styled.div`
	grid-area: search;
	display: flex;
	align-items: center;
	justify-content: right;
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
	align-items: center;
	justify-content: center;
	min-width: clamp(100px, 30vw, 150px);
	max-height: 160px;
	width: 100%;
	overflow: hidden;
	cursor: pointer;

	img {
		max-height: fit-content;
		overflow: hidden;
		align-self: center;
	}

	@media (min-width: 990px) {
		img {
			max-width: 36%;
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

		span {
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
	grid-row: span 2;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	width: 100%;
	z-index: 2;
`;

export const MenuContainer = styled.ul`
	position: absolute;
	top: 102.5%;
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
	background-color: #f1ede9;

	@media (min-width: 768px) {
		width: 50%;
		left: ${({ open }) => (open ? '0' : '-50%')};
	}

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
