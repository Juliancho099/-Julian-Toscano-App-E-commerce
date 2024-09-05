import {  BgContainer, Contenedor } from './CarritoStyled';
import proptypes from 'prop-types';
import { useContext, useEffect } from 'react';
import { FaX } from 'react-icons/fa6';
import { CartContext } from '../../contexts/CartContext';
import CarritoVacio from './CarritoVacio/CarritoVacio';
import CarritoList from './CarritoList.jsx/CarritoList';
import ButtonNav from '../Buttons/ButtonNav/ButtonNav';
export default function CarritoContainer({ op, property }) {
	const { Carrito, precioTotal, vaciarCarrito } = useContext(CartContext);
	
	useEffect(() => {
		const Overflow = (over) => {
			document.body.style.overflow = over;
		};
		if (op) {
			Overflow('hidden');
		} else {
			Overflow('auto');
		}
	}, [op]);



	return (
		<BgContainer open={op} onClick={property}>
			<Contenedor open={op} onClick={(e) => e.stopPropagation()}>
				<div className="carrito-top">
					<h2>Carrito</h2>
					<FaX onClick={property} />
				</div>
				<section className="carrito-body">
					{Carrito.length === 0 ? (
						<>
							<CarritoVacio
								Carrito={property}
							/>
						</>
					) : (
						<CarritoList Carrito={Carrito} RedireccionItem={property}/>
					)}
				</section>
				{Carrito.length > 0 && (
					<div className="carrito-acciones">
						<p className="carrito-total">Total: ${precioTotal()}</p>
						<div className="botones">
							<button
								onClick={() => (
									vaciarCarrito(), property()
								)}
								className="btn-carrito"
							>
								Vaciar
							</button>
							<button>
								<ButtonNav
									text="Comprar"
									property={property}
									href={'/checkout'}
								/>
							</button>
						</div>
					</div>
				)}
			</Contenedor>
		</BgContainer>
	);
}

CarritoContainer.propTypes = {
	op: proptypes.bool,
	property: proptypes.func,
};
