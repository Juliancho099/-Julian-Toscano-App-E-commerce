
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Producto from './Producto';
import { useContext } from 'react';
import { DestacadosContext } from '../../../../contexts/DestacadosContext';
import './styleDestacados.css';

export default function ProductosDestacados() {
	const { destacados } = useContext(DestacadosContext);

	const responsive = {
		superLargeDesktop: {
			// the naming can be any, depends on you.
			breakpoint: { max: 4000, min: 1024 },
			items: 5,
			slidesToSlide: 3,
		},
		desktop: {
			breakpoint: { max: 1920, min: 1024 },
			items: 4,
			slidesToSlide: 4,
		},
		tablet: {
			breakpoint: { max: 1024, min: 800 },
			items: 2,
			slidesToSlide: 2,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
		},
	};

	
	return (
		<div className="cardContainer">
			<h2 className="cardContainer__titulo">Productos Destacados</h2>
			<Carousel
				infinite={true}
				responsive={responsive}
				className="cardContainer__carousel"
			>
				{destacados.map((destacado) =>
					destacado ? (
						<Producto destacado={destacado} key={destacado.id} />
					) : null,
				)}
			</Carousel>
		</div>
	);
}
