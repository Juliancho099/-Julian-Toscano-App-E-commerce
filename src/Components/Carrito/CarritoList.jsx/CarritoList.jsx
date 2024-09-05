import proptyoes from 'prop-types';
import CarritoItem from '../CarritoItem/CarritoItem';

export default function CarritoList({Carrito, RedireccionItem}) {
    return (
		<>
			{Carrito.map((item, index) => (
				<CarritoItem item={item} RedireccionItem={RedireccionItem} key={index} />
			))}
		</>
	);
}

CarritoList.propTypes = {
    Carrito: proptyoes.array,
    RedireccionItem: proptyoes.func
};
