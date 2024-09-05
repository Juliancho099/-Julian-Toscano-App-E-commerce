import PropTypes from 'prop-types';
import { useContext, useEffect, useState } from 'react';
import { ContCantidad} from './ItemDetailStyle';
import { CartContext } from '../../../../../../../contexts/CartContext';
import ItemCount from './ItemCount/ItemCount';
import { useNavigate } from 'react-router-dom';
import ImageList from './ImageList';


export default function ItemDetail({ item }) {
	const { titulo, imagenes, precio, id, stock } = item;
	const [Imagen, setImagen] = useState(imagenes[0]);
	const [Seleccionada, setSeleccionada] = useState(null);
	const [cantidad, setCantidad] = useState(1);
	const { AgregarAlCarrito } = useContext(CartContext);

	const navigate = useNavigate();

	const checkOut = () => {
		navigate('/checkout');
	};

	const handleAddToBag = (item, cantidad, Imagen) => {
		AgregarAlCarrito(item, cantidad, Imagen);
		setCantidad(1);
	};


	const HandleClickImagen = (ImgIndex) => {
		setImagen(imagenes[ImgIndex]);
		setSeleccionada(ImgIndex);
	};

	useEffect(() => {
		setImagen(imagenes[0]);
		setSeleccionada(null);
	},	[id, imagenes]);


	return (
		<article className="sm:w-[90%] xl:w-[70%] flex flex-wrap sm:flex-nowrap justify-center items-center font-serif m-auto w-full min-h-[100vh]">
			<section className="w-auto sm:w-1/3 lg:w-[50%] xl:w-[40%] flex flex-wrap items-start justify-start m-auto">
				<div className="flex items-center justify-center m-auto w-full relative">
					<img
						src={Imagen}
						alt={titulo && titulo}
						className="w-full h-full object-cover rounded-lg"
					/>
				</div>
				{imagenes.length > 1 && (
					<div className="galeria flex w-full items-center justify-center gap-1">
						<ImageList
							imagenes={imagenes}
							HandleClickImagen={HandleClickImagen}
							Seleccionada={Seleccionada}
							titulo={titulo}
						/>
					</div>
				)}
			</section>
			<section className="flex-auto p-6 w-full sm:max-w-[40%] xl:mr-10">
				<div className="descripcion flex flex-wrap items-baseline">
					<h3 className="w-full flex-none mb-3 text-2xl leading-none text-slate-900">
						{titulo && titulo}
					</h3>
					<p className="flex-auto text-lg font-medium text-slate-500">
						${precio}
					</p>
					<small>Lorem ipsum dolor sit.</small>
				</div>

				<ContCantidad>
					<ItemCount stock={stock} cantidad={cantidad} setCantidad={setCantidad} />
				</ContCantidad>

				<div className="botones flex space-x-4 mb-5 text-sm font-medium">
					<div className="flex-auto flex space-x-4 pr-4">
						<button
							className="flex-none w-1/2 h-12 uppercase font-medium tracking-wider bg-slate-900 text-white"
							type="submit"
							onClick={() => {
								handleAddToBag(item, cantidad, Imagen);
									checkOut();
							}}
						>
							Comprar Ahora
						</button>
						<button
							className="flex-none w-1/2 h-12 uppercase font-medium tracking-wider border border-slate-200 text-slate-900"
							type="button"
							onClick={() => {
								handleAddToBag(item, cantidad, Imagen);
							}}
						>
							Add to bag
						</button>
					</div>
				</div>
			</section>
		</article>
	);
}

ItemDetail.propTypes = {
	item: PropTypes.shape({
		id: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
			.isRequired,
		titulo: PropTypes.string,
		imagenes: PropTypes.arrayOf(PropTypes.string),
		precio: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
			.isRequired,
		stock: PropTypes.number,
	}).isRequired,
};
