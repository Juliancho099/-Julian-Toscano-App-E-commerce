import PropTypes from 'prop-types';
import ButtonNav from '../Buttons/ButtonNav/ButtonNav';
import { DropdownMenu, DropdownItem } from './StylleDropdown';
import { FaArrowLeft } from 'react-icons/fa6';

export default function DropDown({ property, onClose }) {
	return (
		<DropdownMenu open={property}>
			<div>
				<FaArrowLeft  open={property}/>
				<p>Productos</p>
			</div>
			<DropdownItem>
				<ButtonNav text="Todos" property={onClose} href={"/productos"}/>
			</DropdownItem>
			<DropdownItem>
				<ButtonNav text="Accesorios" property={onClose} href={"/productos/Accesorios"} />
			</DropdownItem>
			<DropdownItem>
				<ButtonNav text="Cuidado Personal" property={onClose} href={"/productos/Cuidado-Personal"}/>
			</DropdownItem>
			<DropdownItem>
				<ButtonNav text="Bloqueadores" property={onClose} href={"/productos/Bloqueador"}/>
			</DropdownItem>
			<DropdownItem>
				<ButtonNav text="Maquillaje" property={onClose} href={"/productos/Maquillaje"}/>
			</DropdownItem>
		</DropdownMenu>
	);
}

DropDown.propTypes = {
	property: PropTypes.bool,
	onClose: PropTypes.func,
};
