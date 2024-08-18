import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import proptypes from 'prop-types';

const CartButton = ({property}) => {

	const {CantidadEnCarrito} = useContext(CartContext);
	return (
		<button className="cart-button" onClick={property}>
			<img src="/src/assets/icons/shopping-bag.png" alt="Carrito" />
			<span>{ CantidadEnCarrito()}</span>
		</button>
	);
};

export default CartButton;

CartButton.propTypes = {
	property: proptypes.func
}