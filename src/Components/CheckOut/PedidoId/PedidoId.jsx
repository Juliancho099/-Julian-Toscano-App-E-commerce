import { useContext } from 'react';
import { CartContext } from '../../../contexts/CartContext';
import ButtonNav from '../../Buttons/ButtonNav/ButtonNav';

export default function PedidoId() {
	const { pedidoId } = useContext(CartContext);
	return (
		<div>
			<h1>Muachass gracias por tu compra</h1>
			<p>Tu pedido es: {pedidoId}</p>
			<p>En un momento nos comunicaremos contigo</p>
			<ButtonNav text="Volver" href={'/'} />
		</div>
	);
}
