import PropTypes from 'prop-types';
import ButtonNav from '../Buttons/ButtonNav/ButtonNav';
import { DropdownMenu, DropdownItem } from './StylleDropdown';

export default function DropDown({ property }) {
	return (
		<DropdownMenu open={property}>
			<DropdownItem>
				<ButtonNav text="Todos" />
			</DropdownItem>
			<DropdownItem>
				<ButtonNav text="Perfumes" />
			</DropdownItem>
			<DropdownItem>
				<ButtonNav text="Cremas" />
			</DropdownItem>
			<DropdownItem>
				<ButtonNav text="Hombre" />
			</DropdownItem>
			<DropdownItem>
				<ButtonNav text="Mujer" />
			</DropdownItem>
		</DropdownMenu>
	);
}

DropDown.propTypes = {
	property: PropTypes.bool,
};
