import PropTypes from 'prop-types';
import { ItemListSection } from './StyleItemList';
import Item from '../item/Item';
export default function ItemList({ productos }) {
	const columns = productos.length >= 4 ? 4 : productos.length;
	return (
		<ItemListSection $columns={columns}>
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
	),
};
