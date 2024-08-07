import styled from 'styled-components';

export const VideoSection = styled.section`
	position: relative;
	height: 40vh;
	width: 100%;
	background-size: cover;

	video {
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 100%;
        object-position: center;

		object-fit: cover;
	}

	@media (width >= 768px) {
		height: 60vh;
		aspect-ratio: 16/9;
	}

	@media (width >= 1024px) {
		height: 70vh;
		
	}
`;

