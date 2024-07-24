import { useEffect, useState } from 'react';
import { pedirDatos } from '../../Helpers/PedirProductos';
import ItemList from './Items/ItemList';
import { ItemListContainer, ItemTitulo } from './StyleList';

export default function ItemListoContainer() {
    const [productos, setProductos] = useState([]);
	useEffect(() => {
		pedirDatos().then((res) => {
			setProductos(res);
		});
	}, []);

    return (
		<ItemListContainer>
			<ItemTitulo>Productos</ItemTitulo>
			<ItemList productos={productos} />
		</ItemListContainer>
	);
}
