import proptypes from 'prop-types';
import ButtonNav from '../../../Buttons/ButtonNav/ButtonNav';
export default function Producto({ destacado }) {
	const { id, titulo, imagenes, stock } = destacado;
	return (
		<div className="w-full flex flex-col justify-center items-center gap-4 bg-gray-600 h-full p-3">
			<div className="w-full flex justify-center items-center h-auto object-cover ">
				<img
					src={imagenes[0]}
					alt={titulo}
					className="w-full h-full object-cover rounded-lg"
				/>
			</div>
			<div className="flex flex-col justify-center items-center gap-4 p-4 h-2/5">
				<h3 className="text-sm md:text-[1.2rem] font-semibold text-center">{titulo}</h3>
				<p>${stock}</p>
				<ButtonNav text="Comprar" href={`/item/${id}`} />
			</div>
		</div>
	);
}

Producto.propTypes = {
	destacado: proptypes.shape({
		id: proptypes.string,
		name: proptypes.string,
		imagenes: proptypes.array,
		stock: proptypes.number,
		titulo: proptypes.string,
	}),
};
