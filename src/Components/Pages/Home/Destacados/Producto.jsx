import proptypes from 'prop-types';
import ButtonNav from '../../../Buttons/ButtonNav/ButtonNav';
import { CartContext } from '../../../../contexts/CartContext';
import { useContext } from 'react';
export default function Producto({ destacado }) {
	const { id, titulo, imagenes, precio } = destacado;
	const { AgregarAlCarrito } = useContext(CartContext);

	if (!destacado) {
		return null;
	}
	return (
		<div className="destacados">
			<div className="destacados__img">
				<img
					src={imagenes[0]}
					alt={titulo}
					className="w-full h-full object-cover rounded-lg"
				/>
			</div>
			<div className="informacion">
				<h3 className="informacion__titulo">
					{titulo}
				</h3>
				<p className='informacion__stock'>${precio}</p>
				<div className="informacion__btns">
					<ButtonNav text="Comprar" href={`/checkout`} property={() => AgregarAlCarrito(destacado, 1, imagenes[0])}/>
					<ButtonNav text="Ver más" href={`/item/${id}`} />
				</div>
			</div>
		</div>
	);
}

Producto.propTypes = {
	destacado: proptypes.shape({
		id: proptypes.string,
		name: proptypes.string,
		imagenes: proptypes.array,
		precio: proptypes.number,
		titulo: proptypes.string,
	}),
};
