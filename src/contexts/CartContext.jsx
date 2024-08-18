import { createContext, useEffect, useState } from "react";
import proptypes from 'prop-types';


export const CartContext = createContext();

const carritoIniial = JSON.parse(localStorage.getItem("carrito")) || [];

export const CartProvider = ({children}) => {
	const [Carrito, setCarrito] = useState(carritoIniial);
	
	
	


	const AgregarAlCarrito = (item, cantidad) => {
		const ItemAgregado = { ...item, cantidad: cantidad };

		const nuevoCarrito = [...Carrito];

		const estaEnCarrito = nuevoCarrito.find(
			(prod) => prod.id === ItemAgregado.id,
		);

		if (estaEnCarrito) {
			estaEnCarrito.cantidad = estaEnCarrito.cantidad + cantidad;
		} else {
			nuevoCarrito.push(ItemAgregado);
		}
		setCarrito(nuevoCarrito);
	};

	const CantidadEnCarrito = () => {
		return Carrito.reduce((acc, prod) => acc + prod.cantidad, 0);
	};

	const precioTotal = () => {
		return Carrito.reduce(
			(acc, prod) => acc + prod.cantidad * prod.stock,
			0,
		);
	};

	const vaciarCarrito = () => {
		setCarrito([]);
    };

    useEffect(() => {
        localStorage.setItem("carrito", JSON.stringify(Carrito));
    }, [Carrito]);
    
    return (
		<CartContext.Provider
			value={{
				Carrito,
				AgregarAlCarrito,
				CantidadEnCarrito,
				precioTotal,
				vaciarCarrito,
			}}
        >
            {children}
        </CartContext.Provider>
	);
}


CartProvider.propTypes = {
    children: proptypes.node,
}