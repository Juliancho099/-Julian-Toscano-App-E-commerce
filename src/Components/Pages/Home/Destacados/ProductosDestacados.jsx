import { useEffect } from 'react';
import { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { pedirDatos } from '../../../../Helpers/PedirProductos';
import Producto from './Producto';

export default function ProductosDestacados() {
	const [destacados, setDestacados] = useState([]);

	const responsive = {
		superLargeDesktop: {
			// the naming can be any, depends on you.
			breakpoint: { max: 4000, min: 1024 },
			items: 5,
			slidesToSlide: 3,
		},
		desktop: {
			breakpoint: { max: 1920, min: 1024 },
			items: 5,
			slidesToSlide: 3,
		},
		tablet: {
			breakpoint: { max: 1024, min: 800 },
			items: 3,
			slidesToSlide: 2,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
		},
	};

	useEffect(() => {
		pedirDatos().then((res) => {
			setDestacados(
				res.filter((destacado) => destacado.destacado === true),
			);
		});
	}, []);
	return (
		<div className="w-3/4 m-auto lg:w-[90%] ">
			<h2 className='w-full pt-3 font-serif text-2xl'>Productos Destacados</h2>
			<Carousel
				infinite={true}
				responsive={responsive}
				className='relative z-0 m-auto w-full'
			>
				{destacados.map((destacado) => (
					<Producto destacado={destacado} key={destacado.id} />
				))}
			</Carousel>
		</div>
	);
}
