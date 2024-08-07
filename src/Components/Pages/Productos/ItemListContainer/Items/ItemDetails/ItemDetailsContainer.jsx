import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { pedirItemPorId } from '../../../../../../Helpers/PedirProductos';
import ItemDetail from '../ItemDetails/ItemDetail/ItemDetail';

export default function ItemDetailsContainer() {
	// Extraer 'id' directamente
	const [item, setItem] = useState(null);
	const id = useParams().id;

	useEffect(() => {
		pedirItemPorId(id).then((res) => {
			setItem(res);
		});
	}, [id]);

	return (
		<>
			{item && <ItemDetail item={item} />}
		</>
	);
}
