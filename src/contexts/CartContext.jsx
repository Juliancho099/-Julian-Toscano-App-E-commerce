import { createContext, useEffect, useState } from "react";
import proptypes from 'prop-types';
import { collection, addDoc } from 'firebase/firestore';
import { db } from "../firebase/Config";


export const CartContext = createContext();

const carritoIniial = JSON.parse(localStorage.getItem("carrito")) || [];

export const CartProvider = ({children}) => {
	const [Carrito, setCarrito] = useState(carritoIniial);
	const [pedidoId, setPedidoId] = useState('');
	const [openCart, setOpenCart] = useState(false);
	
	
	
	const Comprar = (data) => {
		const pedido = {

			cliente: data,
			productos: Carrito,
			Total: precioTotal()
		}

		console.log(pedido)

		const pedidosRef = collection(db, 'pedidos');

		addDoc(pedidosRef, pedido)
			.then((doc) => {
				setPedidoId(doc.id)
				vaciarCarrito();
			})
		
	}


	const AgregarAlCarrito = (item, cantidad, img) => {
		const ItemAgregado = { ...item, cantidad: cantidad, imagenes: img };

		const nuevoCarrito = [...Carrito];

		const estaEnCarrito = nuevoCarrito.find(
			(prod) => prod.id === ItemAgregado.id && prod.imagenes === img,
		);

		if (estaEnCarrito ) {
			estaEnCarrito.cantidad = estaEnCarrito.cantidad + cantidad;
		} else {
			nuevoCarrito.push(ItemAgregado);
		}

		setCarrito(nuevoCarrito);
	};

	const eliminarCarrito = (id, img) => {
		const nuevoCarrito = Carrito.filter((prod) => !(prod.id === id && prod.imagenes === img));
		setCarrito(nuevoCarrito);
	};

	const CantidadEnCarrito = () => {
		return Carrito.reduce((acc, prod) => acc + prod.cantidad, 0);
	};

	const precioTotal = () => {
		return Carrito.reduce(
			(acc, prod) => acc + prod.cantidad * prod.precio,
			0,
		);
	};

	const vaciarCarrito = () => {
		setCarrito([]);
	};
	
	const handleCloseCart = () => {
		setOpenCart(!openCart);
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
				openCart,
				handleCloseCart,
				eliminarCarrito,
				Comprar,
				pedidoId
			}}
        >
            {children}
        </CartContext.Provider>
	);
}


CartProvider.propTypes = {
    children: proptypes.node,
}