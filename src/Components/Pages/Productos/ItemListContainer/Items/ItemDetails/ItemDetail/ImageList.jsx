import proptypes from 'prop-types';

export default function ImageList({ imagenes, titulo, HandleClickImagen, Seleccionada }) {
	return (
		<>
			{imagenes.map((img, index) => (
				<div key={index}>
					<img
						src={`${img}?${Date.now()}`}
						alt={titulo && titulo}
						className={`imagen-chica w-28 object-cover rounded-lg ${
							Seleccionada === index ? 'border border-black' : ''
						}`}
						onClick={() => HandleClickImagen(index)}
					/>
				</div>
			))}
		</>
	);
}

ImageList.propTypes = {
    imagenes: proptypes.arrayOf(proptypes.string),
    titulo: proptypes.string,
    HandleClickImagen: proptypes.func,
    Seleccionada: proptypes.number,
};
