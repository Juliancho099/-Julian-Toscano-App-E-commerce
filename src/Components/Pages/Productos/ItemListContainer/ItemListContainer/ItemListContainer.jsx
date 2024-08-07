import { useEffect, useState } from 'react';
import { formatCategory, pedirDatos } from '../../../../../Helpers/PedirProductos';
import ItemList from '../Items/ItemList/ItemList';
import { ItemListContainer, ItemTitulo } from './StyleList';
import { useParams } from 'react-router-dom';

export default function ItemListoContainer() {
	const [productos, setProductos] = useState([]);
	const [titulo, setTitulo] = useState('Productos');
	const categoria = useParams().categoria;


	useEffect(() => {
		pedirDatos().then((res) => {
			if (categoria) {
				setProductos(
					res.filter((producto) => producto.categoria === categoria),
				);
				setTitulo(formatCategory(categoria));
			} else {
				setProductos(res);
				setTitulo('Todos los productos');
			}
		});
	}, [categoria]);

	return (
		<ItemListContainer>
			<ItemTitulo>{titulo}</ItemTitulo>
			<ItemList productos={productos} />
		</ItemListContainer>
	);
}
