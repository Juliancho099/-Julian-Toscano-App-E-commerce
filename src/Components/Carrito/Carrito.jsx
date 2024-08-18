import {  Contenedor } from './CarritoStyled';
import proptypes from 'prop-types';
import { useContext, useEffect } from 'react';
import { FaX } from 'react-icons/fa6';
import { CartContext } from '../../contexts/CartContext';
import { useNavigate } from 'react-router-dom';

export default function Carrito({ op, property }) {
	const { Carrito, precioTotal, vaciarCarrito } = useContext(CartContext);
	const navigate = useNavigate();

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

	const handleClick = (id) => {
		navigate(`/item/${id}`);
		window.location.reload();

	};

	const HandleVaciar = () => {
		vaciarCarrito();
	};

	return (
			<Contenedor open={op}>
				<div className="carrito-top">
					<h2>Carrito</h2>
					<FaX onClick={property} />
				</div>
				<section className="carrito-body">
					{Carrito.length === 0 ? (
						<p>No hay productos en tu carrito</p>
					) : (
						Carrito.map((item) => (
							<article
								className="carrito-item"
								key={item.id}
								onClick={() => handleClick(item.id)} // Evento de clic en el artículo completo
							>
								<div
									className="cont-img"
									onClick={() => handleClick(item.id)} // Evento de clic en la imagen
								>
									<img
										src={item.imagenes[0]}
										alt={item.titulo}
									/>
								</div>
								<section className="carrito-info">
									<div>
										<small>Titulo</small>
										<h3>{item.titulo}</h3>
									</div>
									<div>
										<small>Cantidad</small>
										<p>{item.cantidad}</p>
									</div>
									<div>
										<small>Subtotal</small>
										<p>${item.stock}</p>
									</div>
									<div>
										<small>Total</small>
										<p>${item.stock * item.cantidad}</p>
									</div>
								</section>
							</article>
						))
					)}
				</section>
				{Carrito.length > 0 && (
					<div className="carrito-acciones">
						<p className="carrito-total">Total: ${precioTotal()}</p>
						<button onClick={HandleVaciar} className="btn-carrito">
							Vaciar
						</button>
					</div>
				)}
			</Contenedor>
	);
}

Carrito.propTypes = {
	op: proptypes.bool,
	property: proptypes.func,
};
