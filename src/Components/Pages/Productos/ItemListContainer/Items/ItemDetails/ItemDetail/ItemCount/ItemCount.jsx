import { CantidadCont, Resta, Suma } from '../ItemDetailStyle';
import proptypes from 'prop-types';


export default function ItemCount({cantidad, setCantidad, stock}) {

    const HandleSumar = () => {
		if (cantidad < stock) {
			setCantidad(cantidad + 1);
		}
	};

	const HandleRestar = () => {
		if (cantidad > 1) {
			setCantidad(cantidad - 1);
		}
	};
  return (
		<div className="count">
			<div className="stock">
				<p><span> Stock:</span> {stock}</p>
			</div>
			<div className='count-btn'>
				<Resta onClick={HandleRestar}>-</Resta>
				<CantidadCont>{cantidad}</CantidadCont>
				<Suma onClick={HandleSumar}>+</Suma>
			</div>
		</div>
  );
}


ItemCount.propTypes = {
    cantidad: proptypes.number,
	setCantidad: proptypes.func,
	stock: proptypes.number
};
