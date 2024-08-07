import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function ButtonNav({ href, text, property}) {
	return (
		<Link to={href} className='button_link' onClick={property}>
			{text}
		</Link>
	);
}

ButtonNav.propTypes = {
	text: PropTypes.string.isRequired,
	property: PropTypes.func,
	href: PropTypes.string,
};
