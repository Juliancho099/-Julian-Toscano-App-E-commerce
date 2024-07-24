import PropTypes from 'prop-types';
import {
	ItemButton,
	ItemCard,
	ItemDesc,
	ItemImg,
	ItemPrice,
	ItemTitle,
} from './StyleItemList';

export default function Item({ producto }) {
	return (
		<ItemCard>
			<ItemImg src={producto.img} alt={producto.titulo} />
			<ItemDesc>
				<ItemTitle>{producto.titulo}</ItemTitle>
				<ItemPrice>${producto.stock}</ItemPrice>
				<ItemButton>Comprar</ItemButton>
			</ItemDesc>
		</ItemCard>
	);
}

Item.propTypes = {
	producto: PropTypes.shape({
		titulo: PropTypes.string.isRequired,
    stock: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
	}).isRequired,
};
