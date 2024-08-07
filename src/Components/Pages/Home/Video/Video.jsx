import proptypes from 'prop-types';
import { VideoSection } from './StyleVideo';

import ReactPlayer from 'react-player';

export default function Video({ video }) {
    return (
		<VideoSection>
            <ReactPlayer
                url={video}
                muted
                loop
                playing
                width="100%"
                height="100%"
            />  
		</VideoSection>
	);
}

Video.propTypes = {
	video: proptypes.string,
};
