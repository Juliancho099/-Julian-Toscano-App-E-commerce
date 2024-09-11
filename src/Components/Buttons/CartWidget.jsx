import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import proptypes from 'prop-types';

const CartButton = ({property}) => {

	const {CantidadEnCarrito} = useContext(CartContext);
	return (
		<button className="cart-button" onClick={property}>
			<img src="https://firebasestorage.googleapis.com/v0/b/yanbal-con-stefany.appspot.com/o/Icons%2Fshopping-bag.png?alt=media&token=c3865b81-0a22-40b5-82b3-d5788af0f398" alt="Carrito" />
			<span>{ CantidadEnCarrito()}</span>
		</button>
	);
};

export default CartButton;

CartButton.propTypes = {
	property: proptypes.func
}