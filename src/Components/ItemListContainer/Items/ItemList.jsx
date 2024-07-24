import PropTypes from 'prop-types';
import { ItemListSection } from './StyleItemList';
import Item from './Item';
export default function ItemList({ productos }) {
	return (
		<ItemListSection>
			{productos.map((prod) => (
				<Item producto={prod} key={prod.id} />
			))}
		</ItemListSection>
	);
}

ItemList.propTypes = {
	productos: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string,
			name: PropTypes.string,
			description: PropTypes.string,
		}),
	).isRequired,
};
