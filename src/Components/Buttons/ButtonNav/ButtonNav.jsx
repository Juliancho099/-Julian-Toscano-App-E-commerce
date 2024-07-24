import PropTypes from 'prop-types';
import { ButtonLink } from './StyleButton';

export default function ButtonNav({ text, property}) {
	return (
		<ButtonLink onClick={property}>
			{text}
		</ButtonLink>
	);
}

ButtonNav.propTypes = {
	text: PropTypes.string.isRequired,
	property: PropTypes.func,
};
