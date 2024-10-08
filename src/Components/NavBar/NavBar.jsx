import {
	CartContainer,
	Header,
	LogoContainer,
	MenuContainer,
	MenuItem,
	MobileIcon,
	NavContainer,
	NavSeccion,
	SearchContainer,
} from './StyledNav';
import { FaAlignLeft, FaX } from 'react-icons/fa6';
import Logo from '../Logo/Logo';
import CartWidget from '../Buttons/CartWidget';
import SearchMenu from '../Buttons/SearchMenu';
import { useContext, useState } from 'react';
import ButtonNav from '../Buttons/ButtonNav/ButtonNav';
import DropDown from '../Dropdown/DropDown';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext';
import CarritoContainer from '../Carrito/CarritoContainer';

export default function NavBar() {
	const [Menu, setMenu] = useState(false);
	const [Dropdown, setDropdown] = useState(false);
	const navigate = useNavigate();
	const { openCart, handleCloseCart } = useContext(CartContext);

	const handleCloseMenus = () => {
		setMenu(false);
		setDropdown(false);
	};

	

	const handleClick = () => {
		navigate('/');
	};

	return (
		<Header>
			<NavSeccion>
				<MobileIcon onClick={() => setMenu(!Menu)}>
					{Menu ? <FaX /> : <FaAlignLeft />}
				</MobileIcon>
				<NavContainer>
					<MenuContainer open={Menu}>
						<MenuItem>
							<ButtonNav
								text="Inicio"
								property={() => setMenu(!Menu)}
								href={'/'}
							/>
						</MenuItem>
						<MenuItem onClick={() => setDropdown(!Dropdown)}>
							<ButtonNav text="Productos" />
							<DropDown
								property={Dropdown}
								onClose={handleCloseMenus}
							/>
						</MenuItem>
						<MenuItem>
							<ButtonNav
								text="Servicios"
								property={handleCloseMenus}
								href={'/servicios'}
							/>
						</MenuItem>
						<MenuItem>
							<ButtonNav
								text="Nosotros"
								property={handleCloseMenus}
								href={'/nosotros'}
							/>
						</MenuItem>
						<MenuItem>
							<ButtonNav
								text="Contacto"
								property={handleCloseMenus}
								href={'/contacto'}
							/>
						</MenuItem>
					</MenuContainer>
				</NavContainer>
				<LogoContainer onClick={handleClick}>
					<Logo />
				</LogoContainer>
				<SearchContainer>
					<SearchMenu />
				</SearchContainer>
				<CartContainer>
					<CartWidget property={handleCloseCart} />
					<CarritoContainer op={openCart} property={handleCloseCart} />
				</CartContainer>
			</NavSeccion>
		</Header>
	);
}
