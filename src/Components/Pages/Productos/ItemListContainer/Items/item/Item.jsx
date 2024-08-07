	import PropTypes from 'prop-types';
	import {
		ContainImg,
		ItemCard,
		ItemDesc,
		ItemImg,
		ItemPrice,
		ItemTitle,
	} from '../ItemList/StyleItemList';
	import ButtonNav from '../../../../../Buttons/ButtonNav/ButtonNav';
import { useNavigate } from 'react-router-dom';

	export default function Item({ producto }) {
		const { imagenes, id, titulo, stock } = producto;
		const navigate = useNavigate();
		
		const handleClick = () => {
			navigate(`/item/${id}`);
		};
		return (
			<ItemCard key={id}>
				<ContainImg>
					<ItemImg src={imagenes[0]} alt={titulo} onClick={handleClick} />
				</ContainImg>
				<ItemDesc>
					<ItemTitle onClick={handleClick}>{titulo}</ItemTitle>
					<ItemPrice>${stock}</ItemPrice>

					<ButtonNav text="Comprar" href={`/item/${id}`} />
				</ItemDesc>
			</ItemCard>
		);
	}

	Item.propTypes = {
		producto: PropTypes.shape({
			titulo: PropTypes.string.isRequired,
			stock: PropTypes.number.isRequired,
			imagenes:  PropTypes.arrayOf(PropTypes.string),
			id: PropTypes.string.isRequired,
		}).isRequired,
	};
