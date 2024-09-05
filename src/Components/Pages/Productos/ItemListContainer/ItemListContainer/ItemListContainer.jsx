import { useEffect, useState } from 'react';
import ItemList from '../Items/ItemList/ItemList';
import { ItemListContainer, ItemTitulo } from './StyleList';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../../../../firebase/Config';

export default function ItemListoContainer() {
	const [productos, setProductos] = useState([]);
	const [titulo, setTitulo] = useState('Productos');
	const { categoria } = useParams();
	
	const formatCategory = (category) => {
		return category
			.split('-')
			.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
			.join(' ');
	};


	useEffect(() => {
		const productosCollection = collection(db, 'items');
		const q = categoria ?query(
			productosCollection,
			where('categoria', '==', categoria), 
			): query(productosCollection);	

		getDocs(q)
			.then((res) => {
				setProductos(
					res.docs.map((doc) => {
						return { ...doc.data(), id: doc.id };
					}),
				);

				categoria ? setTitulo(formatCategory(categoria)): setTitulo('Todos los productos');
			})
	}, [categoria, setProductos]);

	return (
		<main>
			<ItemListContainer>
				{productos.length > 0 ? (
					<>
						<ItemTitulo>{titulo}</ItemTitulo>
						<ItemList productos={productos} />
					</>
				) : (
					<p>Cargando...</p>
				)}
			</ItemListContainer>
		</main>
	);
}
