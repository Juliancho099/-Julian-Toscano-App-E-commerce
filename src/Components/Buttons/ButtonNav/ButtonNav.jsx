import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

export default function ButtonNav({ href, text, img, property}) {
	return (
		<Link as={NavLink} to={href} className="button_link" onClick={property}>
			{img ? <img src={img} alt={text} /> : text}
		</Link>
	);
}

ButtonNav.propTypes = {
	text: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
	property: PropTypes.func,
	href: PropTypes.string,
	img: PropTypes.element,
};
