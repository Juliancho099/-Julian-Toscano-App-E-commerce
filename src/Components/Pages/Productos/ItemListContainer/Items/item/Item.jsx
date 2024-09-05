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
import { CartContext } from '../../../../../../contexts/CartContext';
import { useContext } from 'react';

	export default function Item({ producto }) {
		const { imagenes, id, titulo, precio } = producto;
		const {AgregarAlCarrito} = useContext(CartContext);
		const navigate = useNavigate();
		
		const handleClick = () => {
			navigate(`/item/${id}`);
		};
		return (
			<ItemCard key={id}>
				<ContainImg>
					<ItemImg
						src={imagenes[0]}
						alt={titulo}
						onClick={handleClick}
					/>
				</ContainImg>
				<ItemDesc>
					<ItemTitle onClick={handleClick}>{titulo}</ItemTitle>
					<ItemPrice>${precio}</ItemPrice>

					<div className='botones'>
						<ButtonNav text="Comprar" property={() => AgregarAlCarrito(producto, 1, imagenes[0])} />
						<ButtonNav text="Ver más" href={`/item/${id}`} />
					</div>
				</ItemDesc>
			</ItemCard>
		);
	}

	Item.propTypes = {
		producto: PropTypes.shape({
			titulo: PropTypes.string.isRequired,
			precio: PropTypes.number.isRequired,
			imagenes:  PropTypes.arrayOf(PropTypes.string),
			id: PropTypes.string.isRequired,
		}).isRequired,
	};
