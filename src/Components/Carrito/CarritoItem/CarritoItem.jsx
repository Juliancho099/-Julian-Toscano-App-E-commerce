import ButtonNav from "../../Buttons/ButtonNav/ButtonNav";
import proptypes from "prop-types";
import { useContext } from "react";
import { FaTrashCan } from 'react-icons/fa6';
import { CartContext } from "../../../contexts/CartContext";


export default function CarritoItem({ item, RedireccionItem }) {
	const { eliminarCarrito } = useContext(CartContext);

  return (
		<article className="carrito-item">
			<div className="cont-img">
				<ButtonNav
					text={
						<img
							src={`${item.imagenes}?${new Date().getTime()}`}
							alt={item.titulo}
						/>
					}
					href={`/item/${item.id}`}
					property={RedireccionItem}
				/>
			</div>
			<section className="carrito-info">
				<div className="info">
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
						<p>${item.precio}</p>
					</div>
					<div>
						<small>Total</small>
						<p>${item.precio * item.cantidad}</p>
					</div>
				</div>
				<FaTrashCan
					onClick={() => eliminarCarrito(item.id, item.imagenes)}
					className="trash"
				/>
			</section>
		</article>
  );
}

CarritoItem.propTypes = {
    item: proptypes.object,
    RedireccionItem: proptypes.func,
};
