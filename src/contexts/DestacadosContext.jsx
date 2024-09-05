import { createContext, useEffect, useState } from "react";
import proptypes from 'prop-types';
import { db } from "../firebase/Config";
import { collection, getDocs, query, where } from "firebase/firestore";


export const DestacadosContext = createContext()

export const DestacadosProvider = ({ children }) => {
    const [destacados, setDestacados] = useState([]);

    useEffect(() => {
		const DestacadosCollection = collection(db, 'items');
        const q = query(DestacadosCollection, where('destacado', '==', true));
        getDocs(q)
            .then((res) => {
                setDestacados(
					res.docs
						.map((doc) => {
							const data = doc.data();
							return data.destacado
								? { ...data, id: doc.id }
								: null;
						})
						.filter((item) => item !== null),
				);
            })
	}, []);

    return (
		<DestacadosContext.Provider value={{ destacados }}>
			{destacados.length > 0 ? (
				children
			) : (
				<p>Loading...</p> // O cualquier indicador de carga
			)}
		</DestacadosContext.Provider>
	);
}

DestacadosProvider.propTypes = {
    children: proptypes.node
}