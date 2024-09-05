import {
    Container,
	DescriptionSect,
	FooterContainer,
	MenuSect,
	RedesSect,
} from './FooterStyle';
import { FaFacebookF, FaInstagram, FaSquareTwitter } from 'react-icons/fa6';
import Logo from '../Logo/Logo';
import ButtonNav from '../Buttons/ButtonNav/ButtonNav';

export default function Footer() {
	return (
		<FooterContainer>
			<Container>
				<DescriptionSect>
					<div>
						<Logo />
					</div>
					<p>Productos para cosmeticos para todo el mundo</p>
					<p>
						Tienda N.1 en ventas de maquillaje, accesorios y cuidado
						personal al mejor precio en el mercado, con las mejores
						marcas y los mejores productos
					</p>
				</DescriptionSect>
				<MenuSect>
					<div>
						<h3>Menu</h3>
					</div>
					<aside className="aside">
						<ul className="principal">
							<li>
								<ButtonNav text="Home" href={'/'} />
							</li>
							<li>
								<ButtonNav text="Nosotros" href={'/nosotros'} />
							</li>
							<li>
								<ButtonNav text="Contacto" href={'/contacto'} />
							</li>
						</ul>
						<ul className="productos">
							<li>
								<ButtonNav
									text="Todos Los productos"
									href={'/productos'}
								/>
							</li>
							<li>
								<ButtonNav
									text="Accesorios"
									href={'/productos/Accesorios'}
								/>
							</li>
							<li>
								<ButtonNav
									text="Cuidado Personal"
									href={'/productos/Cuidado-Personal'}
								/>
							</li>
							<li>
								<ButtonNav
									text="Bloqueadores"
									href={'/productos/Bloqueador'}
								/>
							</li>
							<li>
								<ButtonNav
									text="Maquillaje"
									href={'/productos/Maquillaje'}
								/>
							</li>
						</ul>
					</aside>
				</MenuSect>
				<RedesSect>
					<FaFacebookF />
					<FaInstagram />
					<FaSquareTwitter />
				</RedesSect>
			</Container>
		</FooterContainer>
	);
}
