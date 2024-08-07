import PropTypes from 'prop-types';
import {
	DetailsContain,
	Img,
	ImgContain,
	ItemDetailSection,
} from './ItemDetailStyle';
import { useState } from 'react';

export default function ItemDetail({ item }) {
	const { titulo, imagenes, stock } = item;
	const [Imagen, setImagen] = useState(imagenes[0]);
	const [Seleccionada, setSeleccionada] = useState(null);

	const HandleClickImagen = (ImgIndex) => {
		setImagen(imagenes[ImgIndex]);
		setSeleccionada(ImgIndex);
	};

	return (
		<ItemDetailSection>
			<ImgContain>
				<div>
					<Img src={Imagen} alt={titulo} />
				</div>
				{imagenes.length > 1 && (
					<div className="galeria">
						{imagenes.map((img, index) => (
							<img
								key={img.id || index}
								src={img}
								alt={titulo}
								className={`imagen-chica ${
									Seleccionada === index ? 'seleccionada' : ''
								}`}
								onClick={() => HandleClickImagen(index)}
							/>
						))}
					</div>
				)}
			</ImgContain>
			<DetailsContain>
				<div className='descripcion'>
					<h3>{titulo}</h3>
					<p>${stock}</p>
					<small>Lorem ipsum dolor sit.</small>
				</div>
				<div className='botones'>
					<button>agotado</button>
					<button>Comprar</button>
				</div>
				<div className='detalles'>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Voluptatibus, voluptatum debitis? Provident, quod animi
						quibusdam saepe dicta autem magni magnam.
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Earum, dolores!
					</p>
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing
						elit. Odio laboriosam minus suscipit? Obcaecati
						excepturi, sapiente velit soluta doloremque, error
						officia quidem saepe quibusdam eaque perferendis
						debitis, amet ullam beatae a?
					</p>
				</div>
			</DetailsContain>
		</ItemDetailSection>
	);
}

ItemDetail.propTypes = {
	item: PropTypes.shape({
		id: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
			.isRequired,
		titulo: PropTypes.string.isRequired,
		imagenes: PropTypes.arrayOf(PropTypes.string),
		stock: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
			.isRequired,
	}).isRequired,
};
