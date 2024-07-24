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
import CartButton from '../Buttons/CartButton';
import SearchMenu from '../Buttons/SearchMenu';
import { useState } from 'react';
import ButtonNav from '../Buttons/ButtonNav/ButtonNav';
import DropDown from '../Dropdown/DropDown';

export default function NavBar() {
	const [Menu, setMenu] = useState(false);
	const [Dropdown, setDropdown] = useState(false);

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
							/>
						</MenuItem>
						<MenuItem onClick={() => setDropdown(!Dropdown)}>
							<ButtonNav
								text="Productos"
							/>
							<DropDown property={Dropdown}/>
						</MenuItem>
						<MenuItem>
							<ButtonNav
								text="Servicios"
								property={() => setMenu(!Menu)}
							/>
						</MenuItem>
						<MenuItem>
							<ButtonNav
								text="Nosotros"
								property={() => setMenu(!Menu)}
							/>
						</MenuItem>
						<MenuItem>
							<ButtonNav
								text="Contacto"
								property={() => setMenu(!Menu)}
							/>
						</MenuItem>
					</MenuContainer>
				</NavContainer>
				<LogoContainer>
					<Logo />
				</LogoContainer>
					<SearchContainer>
						<SearchMenu />
					</SearchContainer>
					<CartContainer>
						<CartButton />
					</CartContainer>
				
			</NavSeccion>
		</Header>
	);
}
