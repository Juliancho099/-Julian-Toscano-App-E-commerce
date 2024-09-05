import { useContext } from 'react';
import ButtonNav from '../../Buttons/ButtonNav/ButtonNav';
import proptypes from 'prop-types';
import { DestacadosContext } from '../../../contexts/DestacadosContext';

export default function CarritoVacio({ Carrito }) {
	const { destacados } = useContext(DestacadosContext);

	const primerDestacado = destacados?.[0]; // Previene errores si destacados es undefined

	return (
		<section className="carrito-vacio">
			<div className="carrito-vacio-text">
				<h3 className="text-3xl">Tu carrito de compras está vacío</h3>

				<button className="carrito-vacio-button">
					<ButtonNav
						text="Ir a la tienda"
						href={'/productos'}
						property={Carrito}
					/>
				</button>
			</div>
			{primerDestacado && ( // Solo renderiza esto si primerDestacado no es undefined
				<div className="destacado">
					<div className="destacado-img">
						<img
							src={primerDestacado.imagenes[0]}
							alt={primerDestacado.titulo}
						/>
					</div>
					<div className="destacado-button">
						<ButtonNav
							text="Ver Más"
							href={`/productos/${primerDestacado.categoria}`}
							property={Carrito}
						/>
					</div>
				</div>
			)}
		</section>
	);
}

CarritoVacio.propTypes = {
	Carrito: proptypes.func,
};
