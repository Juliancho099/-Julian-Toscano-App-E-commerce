import {     useEffect, useState } from'react';
import ItemDetail from'../ItemDetails/ItemDetail/ItemDetail';
import { useParams } from'react-router-dom';
//import { pedirItemPorId } from'../../../../../../Helpers/PedirProductos';
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../../../../../../firebase/Config';


export default function ItemDetailsContainer() {
	const [item, setItem] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const ProductoRef = doc(db, 'items', id);

        getDoc(ProductoRef)
            .then((res) => {
                setItem({ ...res.data(), id: res.id });
            })  
    }, [id]);

    return (
        <>
            {item ? <ItemDetail item={item}/> : <p>Loading...</p>}
        </>
    );
}
