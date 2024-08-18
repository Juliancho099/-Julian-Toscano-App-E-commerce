import { useEffect, useState } from'react';
import ItemDetail from'../ItemDetails/ItemDetail/ItemDetail';
import { useParams } from'react-router-dom';
import { pedirItemPorId } from'../../../../../../Helpers/PedirProductos';

export default function ItemDetailsContainer() {
	const [item, setItem] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const fetchItem = async () => {
            try {
                const res = await pedirItemPorId(id);
                setItem(res);
            } catch (error) {
                console.error("Error fetching item:", error);
            }
        };

        if (id) {
            fetchItem();
        }
    }, [id, setItem]);

    return (
        <>
            {item ? <ItemDetail item={item} /> : <p>Loading...</p>}
        </>
    );
}
